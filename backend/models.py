from config import db

class Major(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    major_name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(500), nullable=False)
    initials = db.Column(db.String(10))

    def to_json(self):
        return {
            "id": self.id,
            "major": self.major_name,
            "description": self.description,
            "initials": self.initials
        }