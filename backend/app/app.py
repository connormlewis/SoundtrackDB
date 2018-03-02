"""Functions relating to top level application operations"""
from flask import Flask

from app.blueprints import routes


def create_app() -> Flask:
    """Creates the Flask application"""
    return Flask('SoundtrackDB')


def register_routes(app):
    """Registers the application routes"""
    app.register_blueprint(routes.BP)
