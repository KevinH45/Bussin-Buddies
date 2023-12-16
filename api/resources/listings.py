from http import HTTPStatus

from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource

from extensions import rec_engine
from utils.db_utils import add_user_to_listing, get_listing_by_id, create_listing, get_embed_map
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
        uid = get_jwt_identity()
        embed_map = get_embed_map()
        user_embedding = embed_map[uid]
        post_ids = rec_engine.recommend(user_embedding, embed_map)

        return get_posts(post_ids)

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        data = request.get_json()
        data["author"] = user_id
        data["people"] = [data["author"], ]
        return create_listing(data), HTTPStatus.CREATED
