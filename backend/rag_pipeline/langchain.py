from operator import itemgetter

from langchain_openai import ChatOpenAI

class Advisor:
    def __init__(self) -> None:
        self.model = ChatOpenAI()
    

    def answer_question(self, question, context):
        pass