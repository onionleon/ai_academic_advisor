from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///descriptions.db"

db = SQLAlchemy(app)