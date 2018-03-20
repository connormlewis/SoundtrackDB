"""This module provides the database"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

session_cls = None  # type: sessionmaker
Base = declarative_base()
engine = None


def init_tables():
    """Create the tables from the schema"""
    Base.metadata.create_all(engine)


def clear_tables():
    """Drop all tables in the database"""
    Base.metadata.drop_all(engine)


def init_db(db_uri):
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    global session_cls, engine
    engine = create_engine(db_uri, echo=False)
    session_cls = sessionmaker(bind=engine)


def get_session() -> Session:
    """Get the database sessionmaker class."""
    return session_cls()
