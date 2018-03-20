"""ORM for Artist items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Integer, Text
from sqlalchemy.orm import relationship

from app.models.associations import media_artist, artist_album
from app.shared.db import Base


class Artist(Base):
    """
    Implementation of the Artist class
    """
    __tablename__ = 'artist'

    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    bio = Column(Text)
    image = Column(Text)
    followers = Column(Integer)
    spotify_uri = Column(Text, nullable=False)

    media = relationship('Media', secondary=media_artist)
    albums = relationship('Album', secondary=artist_album)


class ArtistSchema(Schema):
    """
    Artist_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    bio = fields.Str()
    image = fields.URL()
    followers = fields.Int()
    spotify_uri = fields.Str()
    media = fields.Nested('MediaSchema', many=True, exclude=('artists', 'albums'))
    albums = fields.Nested('AlbumSchema', many=True, exclude=('artists', 'media'))
