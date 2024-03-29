from config import app

@app.route("/home")
def home():
    return "<h1>Hello</h1>"

@app.route("/answer_question")
def answer_question():
    pass