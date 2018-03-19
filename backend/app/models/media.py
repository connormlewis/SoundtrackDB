"""ORM for Media items"""
from sqlalchemy import Column, Integer, String, Date, Boolean, Float, Table, ForeignKey
from sqlalchemy.orm import relationship

from app.shared.db import Base

album_association = Table('album_media', Base.metadata,
                          Column('media_id', Integer, ForeignKey('media.id')),
                          Column('album_id', Integer, ForeignKey('album.id')))

artist_association = Table('media_artist', Base.metadata,
                           Column('artist_id', Integer, ForeignKey('artist.id')),
                           Column('media_id', Integer, ForeignKey('media.id')))


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

    artists = relationship('Artist', secondary=artist_association)
    albums = relationship('Album', secondary=album_association)
