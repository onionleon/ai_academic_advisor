import os
from operator import itemgetter
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate


class Advisor:
    """
    Advisor class to provide academic guidance based on a student's academic history,
    their major, and future goals using AI-driven chat and embeddings for course recommendations.
    """

    def __init__(self) -> None:
        load_dotenv()
        self.model = ChatOpenAI(openai_api_key=os.getenv("OPENAI_API_KEY"))
        self.embeddings = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))

    def _ensure_vector_store_exists(self, major: str) -> bool:
        """
        Checks if the vector index exists for the given major.

        Parameters:
            major (str): The academic major for which to check the vector store.

        Returns:
            bool: True if the vector index exists, False otherwise.
        """
        path = f"../data/vector_index/{major}"
        return os.path.exists(path) and len(os.listdir(path)) > 0

    def answer_question(self, data: dict, major: str) -> str:
        """
        Provides an answer to the student's question using AI-driven academic advice,
        based on the specified major and additional context provided in data.

        Parameters:
            data (dict): A dictionary containing the 'question' and additional context for generating the response.
            major (str): The student's major, used to tailor the advice.

        Returns:
            str: The AI-generated advice or an error message if the vector index does not exist.
        """

        if not self._ensure_vector_store_exists(major):
            return "No vector index found for the specified major. Please create one to use the chatbot."

        vector_store_path = f"../data/vector_index/{major}"
        vectorstore = FAISS.load_local(vector_store_path, self.embeddings)
        retriever = vectorstore.as_retriever()

        chat_template = """
        As an academic advisor, provide concise and polite guidance on courses aligning with
        the student's past coursework, desired major, and future goals. Offer insights on required
        and elective courses that support their career aspirations. Ensure responses are in English
        and pertain only to course-related inquiries.

        Question: {question}
        Context: {context}
        """

        prompt = ChatPromptTemplate.from_template(chat_template)

        chain = (
            {
                "context": itemgetter("question") | retriever,
                "question": itemgetter("question"),
            }
            | prompt
            | self.model
            | StrOutputParser()
        )

        answer = chain.invoke(data)

        return answer
