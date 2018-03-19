"""
    Module Doc String
"""

from marshmallow import Schema, fields
import Album_Schema
import Media_Schema

class Artist_Schema(Schema):
    """
    Artist_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    bio = fields.Str()
    image = fields.URL()
    followers = fields.Int()
    spotify_id = fields.Int()
    media = fields.Nested(Media_Schema)
    albums = fields.Nested(Album_Schema)
