"""
    Module Doc String
"""

from marshmallow import Schema, fields
import Album_Schema
import Artist_Schema

class Media_Schema(Schema):
    """
    Movie_TV_Schema Implementation
    """
    id = fields.Int()
    type = fields.Int()
    name = fields.Str()
    cast = fields.Str()
    genres = fields.Str()
    seasons = fields.Int()
    release_date = fields.Str()
    image = fields.Str()
    running = fields.Bool()
    overview = fields.Str()
    other_images = fields.Str()
    imdb_id = fields.Str()
    tmdb_id = fields.Int()
    runtime = fields.Int()
    tagline = fields.Str()
    popularity = fields.Float()
    average_rating = fields.Float()
    artists = fields.Nested(Artist_Schema)
    albums = fields.Nested(Album_Schema)
