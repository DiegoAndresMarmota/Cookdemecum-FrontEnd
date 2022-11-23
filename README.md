1. FrontEnd: https://github.com/DiegoAndresMarmota/Proyecto-Final-Cookdemecum-FrontEnd
2. BackEnd: https://github.com/DiegoAndresMarmota/Test-Flask-Blog

3. Wireframes: https://www.figma.com/file/YpLr43n4EjWX8N3LS0X4DR/COOK-DEMECUM?node-id=0%3A1&t=ppASWezQCzELYBWR-1

4. Models: 
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False, unique=False)
    blog = db.relationship("Blog")

    def __repr__(self) -> str:
        return "<User %r>" % self.name

    def serialize(self):
        return {
            "id": self.id,
            "username": self.name,
            "email": self.email,
            "password": self.password,
        }


class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    post = db.Column(db.String(300), nullable=False)
    date = db.Column(db.Date(20), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #blog_id = db.Column(db.Interger, db.ForeignKey("blogs.id"), nullable=False)

    def _repr_(self):
        return "<Product %r>" % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "comentary": self.post,
            "date": self.date,
            "user_id": self.user_id
        }



5. Paleta de Colores: {
      white: "#ffffff",
      silver: "#ecebff",
      black: "#18181b",
    },

6. Fuentes: Sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
