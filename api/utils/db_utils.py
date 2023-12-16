import uuid
from extensions import db
from firebase_admin import firestore
from ml import get_embedding
from passlib.hash import pbkdf2_sha256


def create_user(data):
    id = str(uuid.uuid4())

    data["id"] = id
    userRef = db.collection("user").document(id)
    userRef.set(data)

    embedRef = db.collection("user-embedding").document(id)
    embedRef.set({"embedding": get_embedding(data["bio"])})

    return id

def email_exists(email):
    doc = db.collection("user").where("email", "==", email).get()
    return bool(doc)

def get_user_from_id(id):
    doc = db.collection("user").document(id)
    if not doc:
        return None, None
    return doc.get().to_dict(), doc

def get_user_from_email(email):
    doc = db.collection("user").where("email", "==", email).get()
    if not doc:
        return None, None
    return doc[0].to_dict(), doc[0]

def get_listings_by_user(id):
    doc = db.collection("listing").where("author", "==", id).get()
    if not doc:
        return None, None
    return doc[0].to_dict(), doc[0]

def add_user_to_listing(user_id, listing_id):
    doc = db.collection("listing").document(listing_id)

    data = doc.get().to_dict()

    if len(data["people"]) >= data["cap"]:
        return False

    doc.update({
        "people": firestore.ArrayUnion([user_id,])
    })

    return True

def get_listing_by_id(listing_id):
    doc = db.collection("listing").document(listing_id)
    return doc.get().to_dict(), doc

def create_listing(data):
    id = str(uuid.uuid4())
    data["id"] = id
    listing = db.collection("listing").document(id)
    listing.set(data)
    return listing.get().to_dict()

def hash_password(password):
    return pbkdf2_sha256.hash(password)

def verify_password(p1, p2):
    return pbkdf2_sha256.verify(p1, p2)

