from flask_cors import CORS
from flask import Flask
from flask_restful import Api
from extensions import jwt
import firebase_admin
from config import Config
from resources.auth import *
from resources.listings import *
from resources.user import *

# BUSSIN BUDDIES!
def register_extensions(app):
    CORS(app)
    jwt.init_app(app)

    @jwt.token_in_blocklist_loader
    def check_if_token_in_blacklist(header, token):
        jti = token['jti']
        return jti in jwt_blacklist


def create_app():
    app = Flask("lasdfa")
    app.config.from_object(Config)

    register_extensions(app)
    register_resources(app)

    return app


def register_resources(app):
    api = Api(app)

    # Auth
    api.add_resource(LoginResource, "/api/users/login")  # Works
    api.add_resource(LogoutResource, "/api/users/logout")  # Works
    api.add_resource(RefreshResource, "/api/users/refresh")  # Works

    # User Resources
    api.add_resource(UserViewResource, "/api/users/<id>")  # Works
    api.add_resource(UserListingsResource, "/api/users/<id>/listings")  # Works
    api.add_resource(UserCreationResource, "/api/users")  # Works

    # Listing Resources
    api.add_resource(ListingSingleResource, "/api/listings/<id>")
    api.add_resource(ListingMultipleResource, "/api/listings")

if __name__ == '__main__':
    app = create_app()
    app.run()
