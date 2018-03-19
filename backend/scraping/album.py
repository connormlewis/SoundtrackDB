import sys
sys.path += './..'

import json
import os
from sqlalchemy.orm.exc import NoResultFound

from app.models.album import Album
from app.models.artist import Artist
from app.models.media import Media
from app.shared.db import init_db, get_session


def process_line(line):
    album_json = json.loads(line)
    # add_album(album_json)
    associate_existing_album(album_json)


def add_album(album_json):
    session = get_session()

    album = Album()

    album.genres = json.dumps(album_json['genres'])
    album.tracks = json.dumps(album_json['tracks'])

    album.image = album_json['images'][0]['url']
    album.spotify_uri = album_json['uri']
    album.name = album_json['name']
    album.release_date = album_json['release_date']
    album.label = album_json['label']
    session.add(album)
    session.commit()
    session.close()


def associate_existing_album(album_json):
    session = get_session()

    album = session.query(Album).filter(Album.spotify_uri == album_json['uri']).one()

    if not album:
        return

    for artist_json in album_json['artists']:
        try:
            artist = session.query(Artist).filter(Artist.spotify_uri == artist_json['uri']).one()
            album.artists.append(artist)
        except NoResultFound as e:
            print("Couldnt find artist: " + artist_json['name'])

    session.commit()
    session.close()


if __name__ == '__main__':
    uri = 'postgresql://' + \
         os.getenv('POSTGRES_USER') + ':' + \
         os.getenv('POSTGRES_PASSWORD') + '@' + \
         os.getenv('POSTGRES_URL') + '/' + \
         os.getenv('POSTGRES_DB')

    init_db(uri)

    with open('scraping/spotify_album_data.json', 'r') as f:
        for x in f:
            x = x.rstrip()
            process_line(x)
