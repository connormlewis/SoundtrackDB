"""ORM for Album items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Text, Integer, Date
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
    release_date = Column(Date)
    image = Column(Text)
    label = Column(Text)
    tracks = Column(Json)
    spotify_uri = Column(Text, unique=True)
    num_tracks = Column(Integer)

    media = relationship('Media', secondary=album_media)
    artists = relationship('Artist', secondary=artist_album)


class AlbumSchema(Schema):
    """
    Albuma_Schema Implementation
    """
    id = fields.Int()
    name = fields.Str()
    release_date = fields.Date()
    image = fields.Str()
    label = fields.Str()
    tracks = fields.List(fields.Dict())
    track_count = fields.Method('track_counter')
    spotify_uri = fields.Str()
    num_tracks = fields.Int()

    media = fields.Nested('MediaSchema', many=True, exclude=('artists', 'albums'))
    artists = fields.Nested('ArtistSchema', many=True, exclude=('media', 'albums'))

    @classmethod
    def track_counter(cls, obj):
        """Returns the number of tracks in the album"""
        if obj.tracks is None:
            return 0
        return len(obj.tracks)
