"""ORM for Album items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Text, Integer
from sqlalchemy.orm import relationship

from app.models.associations import album_media, artist_album
from app.shared.db import Base


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
    genres = Column(Text)
    tracks = Column(Text)
    spotify_uri = Column(Text, unique=True)

    media = relationship('Media', secondary=album_media)
    artists = relationship('Artist', secondary=artist_album)


class AlbumSchema(Schema):
    """
    Albuma_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    release_date = fields.Int()
    image = fields.Str()
    label = fields.Str()
    media = fields.Nested('MediaSchema', exclude=('artists', 'albums'))
    artists = fields.Nested('ArtistSchema', exclude=('media', 'albums'))