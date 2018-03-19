"""ORM for Album items"""
from sqlalchemy import Column, Text, Integer, Date, Table, ForeignKey
from sqlalchemy.orm import relationship

from app.shared.db import Base

artist_association = Table('artist_album', Base.metadata,
                           Column('artist_id', Integer, ForeignKey('artist.id')),
                           Column('album_id', Integer, ForeignKey('album.id')))

media_association = Table('album_media', Base.metadata,
                          Column('album_id', Integer, ForeignKey('album.id')),
                          Column('media_id', Integer, ForeignKey('media.id')))


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

    media = relationship('Media', secondary=media_association)
    artists = relationship('Artist', secondary=artist_association)
