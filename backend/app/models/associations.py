"""Creates the association tables in the database"""
from sqlalchemy import Table, Column, Integer, ForeignKey

from app.shared.db import Base

album_media = Table('album_media', Base.metadata,
                    Column('album_id', Integer, ForeignKey('album.id')),
                    Column('media_id', Integer, ForeignKey('media.id')))

artist_album = Table('artist_album', Base.metadata,
                     Column('artist_id', Integer, ForeignKey('artist.id')),
                     Column('album_id', Integer, ForeignKey('album.id')))

media_artist = Table('media_artist', Base.metadata,
                     Column('artist_id', Integer, ForeignKey('artist.id')),
                     Column('media_id', Integer, ForeignKey('media.id')))

media_genre = Table('media_genre', Base.metadata,
                    Column('genre_id', Integer, ForeignKey('genre.id')),
                    Column('media_id', Integer, ForeignKey('media.id')))
