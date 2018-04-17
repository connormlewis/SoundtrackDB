"""ORM for Genre items"""
from marshmallow import Schema, fields
from sqlalchemy import Column, Integer, Text
from app.shared.db import Base


class Genre(Base):
    """
    Implementation of the Genre class
    """
    __tablename__ = 'genre'

    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)


class GenreSchema(Schema):
    """
    GenreSchema Implementation
    """
    id = fields.Int()
    name = fields.Str()
