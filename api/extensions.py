from flask_jwt_extended import JWTManager
import firebase_admin
from firebase_admin import firestore
from flask_mail import Mail
from ml import KNN

jwt = JWTManager()

# hacky solution but it works
try:
    cred = firebase_admin.credentials.Certificate("firebase_admin.json")
    firebaseApp = firebase_admin.initialize_app(cred)
except ValueError:
    pass

db = firestore.client()
mail = Mail()
rec_engine = KNN()