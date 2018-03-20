"""ORM for Album items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Text, Integer
from sqlalchemy.orm import relationship

from app.models.associations import album_media, artist_album
from app.shared.db import Base
from app.shared.json_encoder import Json


class Album(Base):
    """
    Implementation of the Album class
    """
    __tablename__ = 'album'

    id = Column(Integer, primary_key=True)
    name = Column(Text)
    release_date = Column(Text)
    image = Column(Text)
    label = Column(Text)
    genres = Column(Json)
    tracks = Column(Json)
    spotify_uri = Column(Text, unique=True)

    media = relationship('Media', secondary=album_media)
    artists = relationship('Artist', secondary=artist_album)


class AlbumSchema(Schema):
    """
    Albuma_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    release_date = fields.Str()
    image = fields.Str()
    label = fields.Str()
    genres = fields.List(fields.Str())
    tracks = fields.Dict()
    media = fields.Nested('MediaSchema', exclude=('artists', 'albums'))
    artists = fields.Nested('ArtistSchema', exclude=('media', 'albums'))