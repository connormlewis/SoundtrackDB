"""Creates the association tables in the database"""
from sqlalchemy import Table, Column, Integer, ForeignKey, Text

from app.shared.db import Base, engine

album_media = Table('album_media', Base.metadata,
                    Column('album_id', Integer, ForeignKey('album.id')),
                    Column('media_id', Integer, ForeignKey('media.id')))

artist_album = Table('artist_album', Base.metadata,
                     Column('artist_id', Integer, ForeignKey('artist.id')),
                     Column('album_id', Integer, ForeignKey('album.id')))

media_artist = Table('media_artist', Base.metadata,
                     Column('artist_id', Integer, ForeignKey('artist.id')),
                     Column('media_id', Integer, ForeignKey('media.id')))

search = Table('search', Base.metadata,
               Column('id', Integer),
               Column('kind', Text),
               Column('name', Text),
               Column('image', Text),
               Column('release_date', Text),
               Column('about', Text))