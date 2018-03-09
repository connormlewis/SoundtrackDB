"""
Set up DB
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()
engine = create_engine('sqlite:///:memory', echo = True)

def Create_DB():
    Base.metadata.creat_all(engine)