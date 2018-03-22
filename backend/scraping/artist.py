import sys
sys.path += './..'

import json
import os
import requests

from sqlalchemy.orm.exc import NoResultFound

from app.models.album import Album
from app.models.artist import Artist
from app.models.media import Media
from app.shared.db import init_db, get_session


def process_line(line):
    session = get_session()
    artist_json = json.loads(line)

    artist = Artist()

    artist.genres = json.dumps(artist_json['genres'])

    artist.image = artist_json['images'][0]['url']
    artist.spotify_uri = artist_json['uri']
    artist.name = artist_json['name']
    artist.followers = artist_json['followers']['total']
    session.add(artist)
    session.commit()
    session.close()

def get_bio(name: str):
    url = "http://ws.audioscrobbler.com/2.0/"
    params = {"method": "artist.getinfo", "api_key": os.getenv('LASTFM_KEY'), "format": "json", "artist": name}
    session = get_session()
    try:
        artist = session.query(Artist).filter(Artist.name == name).one()
        res = requests.get(url, params=params)
        data = res.json()
        bio = data['artist']['bio']['content'][:-179]
        artist.bio = bio
        session.commit()
    except NoResultFound as e:
        print(name + " not found")
    finally:
        session.close()


if __name__ == '__main__':
    uri = 'postgresql://' + \
         os.getenv('POSTGRES_USER') + ':' + \
         os.getenv('POSTGRES_PASSWORD') + '@' + \
         os.getenv('POSTGRES_URL') + '/' + \
         os.getenv('POSTGRES_DB')

    init_db(uri)

    # with open('scraping/spotify_artist_data.json', 'r') as f:
    #     for x in f:
    #         x = x.rstrip()
    #         process_line(x)

    get_bio("BBC National Orchestra of Wales")
    # with open('scraping/artist_list.txt', 'r') as f: 
    #     for x in f: 
    #         x = x.rstrip()
    #         get_bio(x)
