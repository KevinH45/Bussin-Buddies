import uuid
from extensions import db, rec_engine
from firebase_admin import firestore
from passlib.hash import pbkdf2_sha256


def create_user(data):
    id = str(uuid.uuid4())

    data["id"] = id
    userRef = db.collection("user").document(id)
    userRef.set(data)

    embedRef = db.collection("user-embedding").document(id)
    embedRef.set({"embedding": rec_engine.m.embed_bio(data["bio"]).tolist()})

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

def update_user(user_id, data):
    doc = db.collection("user").document(user_id)
    doc.update(data)

    embedRef = db.collection("user-embedding").document(id)
    embedRef.update({"embedding": rec_engine.m.embed_bio(data["bio"]).tolist()})

    return doc.get().to_dict(), doc

def get_embed_map():
    documents = db.collection("user-embedding").stream()
    collection_dict = {}

    # Iterate through the documents and add them to the dictionary
    for doc in documents:
        collection_dict[doc.id] = doc.to_dict()["embedding"]

    return collection_dict

def get_posts(post_ids):
    #print(post_ids)
    posts = []
    for id in post_ids:
        doc = db.collection("listing").document(id)
        #print(doc.get())
        if not doc:
            #print("Doc recc not found?")
            continue
        posts.append(doc.get().to_dict())
    #print(posts)
    return posts

def get_post_map():
    documents = db.collection("listing").stream()
    collection_dict = {}

    # Iterate through the documents and add them to the dictionary
    for doc in documents:
        #print(doc.to_dict())
        collection_dict[doc.id] = doc.to_dict()["people"]
    return collection_dict

def hash_password(password):
    return pbkdf2_sha256.hash(password)

def verify_password(p1, p2):
    return pbkdf2_sha256.verify(p1, p2)

