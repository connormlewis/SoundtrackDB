"""ORM for Media items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Integer, String, Boolean, Float
from sqlalchemy.orm import relationship

from app.models.associations import media_artist, album_media
from app.shared.db import Base
from app.shared.json_encoder import Json


class Media(Base):
    """
    Implementation of the Movie_TV class
    """
    __tablename__ = 'media'

    id = Column(Integer, primary_key=True)
    type = Column(Integer)
    name = Column(String)
    cast = Column(Json)
    genres = Column(Json)
    seasons = Column(Integer)
    release_date = Column(String)
    last_aired = Column(String)
    image = Column(String)
    running = Column(Boolean)
    overview = Column(String)
    other_images = Column(Json)
    videos = Column(Json)
    imdb_id = Column(String)
    tmdb_id = Column(Integer, unique=True)
    runtime = Column(Integer)
    tagline = Column(String)
    popularity = Column(Float)
    average_rating = Column(Float)

    artists = relationship('Artist', secondary=media_artist)
    albums = relationship('Album', secondary=album_media)


class MediaSchema(Schema):
    """
    Movie_TV_Schema Implementation
    """
    id = fields.Int()
    type = fields.Int()
    name = fields.Str()
    cast = fields.List(fields.Dict())
    genres = fields.List(fields.Dict())
    seasons = fields.Int()
    release_date = fields.Str()
    last_aired = fields.Str()
    image = fields.Str()
    running = fields.Bool()
    overview = fields.Str()
    other_images = fields.List(fields.Dict())
    videos = fields.List(fields.Dict())
    imdb_id = fields.Str()
    tmdb_id = fields.Int()
    runtime = fields.Int()
    tagline = fields.Str()
    popularity = fields.Float()
    average_rating = fields.Float()
    artists = fields.Nested('ArtistSchema', many=True, exclude=('media', 'albums'))
    albums = fields.Nested('AlbumSchema', many=True, exclude=('media', 'artist'))
