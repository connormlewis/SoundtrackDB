"""Application routes"""
import json

from flask import Blueprint

BP = Blueprint('category_routes', 'SoundtrackDB')


@BP.route('/')
def get_home():
    """Get the home page"""
    return json.dumps({'response': 'success'})
