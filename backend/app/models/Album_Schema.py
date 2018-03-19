"""
    Module Doc String
"""

from marshmallow import Schema, fields
import Media_Schema
import Artist_Schema

class Album_Schema(Schema):
    """
    Albuma_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    release_date = fields.Int()
    image = fields.Str()
    label = fields.Str()
    media = fields.Nested(Media_Schema)
    artists = fields.Nested(Artist_Schema)
