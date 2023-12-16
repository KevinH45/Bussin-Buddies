from flask_restful import Resource
from http import HTTPStatus
from flask import request
from utils.db_utils import (email_exists, get_user_from_id, create_user, get_listings_by_user, hash_password)

class UserViewResource(Resource):

    def get(self, id):
        return get_user_from_id(id)[0], HTTPStatus.OK

class UserCreationResource(Resource):
    def post(self):
        data = request.get_json()

        if email_exists(data["email"]):
            return {"msg": "email already exists"}, HTTPStatus.BAD_REQUEST

        data["password"] = hash_password(data["password"])
        uid = create_user(data)
        return {"user-id": uid}, HTTPStatus.CREATED

class UserListingsResource(Resource):
    def get(self, id):
        return get_listings_by_user(id)



