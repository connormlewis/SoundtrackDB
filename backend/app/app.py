"""Functions relating to top level application operations"""
from flask import Flask
from flask_cors import CORS

from app.blueprints import routes
from app.shared.db import init_db


def create_app() -> Flask:
    """Creates the Flask application"""
    return Flask('SoundtrackDB')


def register_routes(app):
    """Registers the application routes"""
    CORS(app)
    app.register_blueprint(routes.BP)


def connect_db(uri):
    """Starts the database connection"""
    init_db(uri)
