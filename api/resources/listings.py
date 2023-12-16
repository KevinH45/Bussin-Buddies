from http import HTTPStatus

from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from utils.db_utils import add_user_to_listing, get_listing_by_id, create_listing
from flask import request

class ListingSingleResource(Resource):

    def get(self, id):
        return get_listing_by_id(id)[0]

    @jwt_required()
    def post(self, id):
        user_id = get_jwt_identity()
        status = add_user_to_listing(user_id, id)

        if not status:
            return {"msg": "Listing is full :("}, HTTPStatus.BAD_REQUEST
        return {"msg": "Successfully added!"}, HTTPStatus.NO_CONTENT

class ListingMultipleResource(Resource):

    @jwt_required()
    def get(self):
        pass

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        data = request.get_json()
        data["author"] = user_id
        data["people"] = [data["author"], ]

        return create_listing(data), HTTPStatus.CREATED
