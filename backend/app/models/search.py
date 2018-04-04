"""Creates the searc table in the database"""
from marshmallow import Schema, fields
from sqlalchemy import Table, Column, Integer, Text

from app.shared.db import Base

search = Table('search', Base.metadata,
               Column('id', Integer),
               Column('kind', Text),
               Column('name', Text),
               Column('image', Text),
               Column('release_date', Text),
               Column('about', Text))


class SearchSchema(Schema):
    """
    Artist_Schema Implementation
    """
    id = fields.Int()
    kind = fields.Str()
    name = fields.Str()
    image = fields.URL()
    release_date = fields.Str()
    about = fields.Str()
