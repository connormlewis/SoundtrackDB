"""
File with all of the Model_Classes
"""
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()
engine = create_engine('sqlite:///:memory', echo = True)

class Artist(Base):
    """
    Implementation of the Artist class
    """
    __tablename__ = 'artists'

    db_id = Column(Integer, primary_key = True)
    name = Column(String)
    albums = Column(List)
    biography = Column(String)
    movies_tv_shows = Column(List)
    img = Column(String)
    followers = Column(Integer)

class Album(Base):
    """
    Implementation of the Album class
    """
    __tablename__ = 'albums'

    id = Column(Integer, primary_key = True)
    name = Column(Text)
    release_date = Column(Date)
    image = Column(Text)
    label = Column(Text)

class Movie_TV(Base):
    """
    Implementation of the Movie_TV class
    """
    __tablename__ = 'movies/tv_shows'

    db_id = Column(Integer, primary_key = True)
    name = Column(String)
    description = Column(String)
    years = Column(List)
    cast = Column(List)
    albums = Column(List)
    artists = Column(List)
    genres = Column(List)
    media_type = Column(Integer)
    seasons = Column(Integer)

engine = create_engine('sqlite:///sqlalchemy_example')

Base.metadata.creat_all(engine)
