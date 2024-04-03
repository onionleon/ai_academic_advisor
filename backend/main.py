from config import app
from flask import request, jsonify
from rag_pipeline import Advisor

@app.route("/home")
def home():
    return "<h1>Hello</h1>"

@app.route("/answer_question")
def answer_question():
    question_content = request.json.get("questionContent")

    if not question_content:
        return (
            jsonify({
                "message": "You can't submit an empty field."
            })
        )
    
    advisor = Advisor()

    answer = advisor.answer_question()

    return (
        jsonify({
            "message": answer
        })
    )

    