import os
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_openai import OpenAIEmbeddings

class IndexingModel:
    """
    A model for indexing documents using embeddings and storing them in a vector store.
    
    Attributes:
        delimiter (str): The delimiter used in the CSV file.
        key (str): The API key for OpenAIEmbeddings.
    """

    def __init__(self, delimiter: str, key: str) -> None:
        """
        Initializes the IndexingModel with the specified delimiter and API key.

        Parameters:
            delimiter (str): The delimiter to use for parsing the CSV file.
            key (str): The API key for accessing OpenAI embeddings.
        """
        self.delimiter = delimiter
        self.key = key

    def create_vector_store(self, path: str) -> None:
        """
        Creates a vector store from a CSV file at the specified path.

        Parameters:
            path (str): The file path to the CSV file containing the documents to index.
        """
        # Configure the CSV loader with the appropriate settings.
        loader = CSVLoader(file_path=path, csv_args={
            'delimiter': self.delimiter,
            'quotechar': '"',
            'fieldnames': ['major', 'type', 'name', 'description']
        })

        # Load data from the CSV file.
        data = loader.load()
        embeddings = OpenAIEmbeddings(openai_api_key=self.key)

        # Generate a FAISS vector store from the loaded documents.
        db = FAISS.from_documents(embeddings, documents=data)

        # Check if the "../vector_index" directory is empty before saving the index.
        vector_index_path = "../vector_index"
        if not os.path.exists(vector_index_path) or not os.listdir(vector_index_path):
            # Ensure the directory exists.
            os.makedirs(vector_index_path, exist_ok=True)
            # Save the index locally.
            db.save_local(os.path.join(vector_index_path, "index"))


