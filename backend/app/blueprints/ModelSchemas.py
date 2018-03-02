from marshmallow import Schema, fields, post_load
from app.blueprints.ModelClasses import Album, Artist, Movie_TV

class AlbumSchema(Schema):
    name = fields.Str()
    track_list = fields.List(fields.Str())
    year = fields.Int()
    label = fields.Str()
    img = fields.URL()
    artists = fields.List(fields.Str())
    movies_tv_shows = fields.List(fields.Str())
    db_id = fields.Int()

    @post_load
    def make_album(self, data):
        return Album(**data)

class ArtistSchema(Schema):
    name = fields.Str()
    albums = fields.List(fields.Str())
    biography = fields.Str()
    db_id = fields.Int()
    movies_tv_shows = fields.List(fields.Str())
    img = fields.URL()
    followers = fields.Int()

    @post_load
    def make_artist(self, data):
        return Artist(**data)

class Movie_TVSchema(Schema):
    name = fields.Str()
    description = fields.Str()
    years = fields.List(fields.Int())
    cast = fields.List(fields.Str())
    albums = fields.List(fields.Str())
    artists = fields.List(fields.Str())
    genres = fields.List(fields.Str())
    media_type = fields.Int()
    seasons = fields.Int()
    db_id = fields.Int()

    @post_load
    def make_movie_TV(self, data):
        return Movie_TV(**data)