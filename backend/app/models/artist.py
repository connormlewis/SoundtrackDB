"""ORM for Artist items"""
from sqlalchemy import Column, Integer, Text, Table, ForeignKey
from sqlalchemy.orm import relationship
from app.shared.db import Base

album_association = Table('artist_album', Base.metadata,
                          Column('artist_id', Integer, ForeignKey('artist.id')),
                          Column('album_id', Integer, ForeignKey('album.id')))

media_association = Table('media_artist', Base.metadata,
                          Column('artist_id', Integer, ForeignKey('artist.id')),
                          Column('media_id', Integer, ForeignKey('media.id')))


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
    spotify_id = Column(Text, nullable=False)

    media = relationship('Media', secondary=media_association)
    albums = relationship('Album', secondary=album_association)
