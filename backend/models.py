from config import db

class Major(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    major = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "major": self.major,
            "description": self.description
        }