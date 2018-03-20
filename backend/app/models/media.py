"""ORM for Media items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Integer, String, Date, Boolean, Float
from sqlalchemy.orm import relationship

from app.models.associations import media_artist, album_media
from app.shared.db import Base


class Media(Base):
    """
    Implementation of the Movie_TV class
    """
    __tablename__ = 'media'

    id = Column(Integer, primary_key=True)
    type = Column(Integer)
    name = Column(String)
    cast = Column(String)
    genres = Column(String)
    seasons = Column(Integer)
    release_date = Column(Date)
    image = Column(String)
    running = Column(Boolean)
    overview = Column(String)
    other_images = Column(String)
    imdb_id = Column(String, unique=True)
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
    artists = fields.Nested('ArtistSchema', many=True, exclude=('media', 'albums'))
    albums = fields.Nested('AlbumSchema', many=True, exclude=('media', 'artist'))
