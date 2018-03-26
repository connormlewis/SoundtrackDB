import sys
sys.path += './..'

import json
import os
import requests

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import IntegrityError

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

def add_artist(sp, info):
    session = get_session()
    try:
        artist = Artist()

        artist.genres = json.dumps(info['genres'])

        artist.image = info['images'][0]['url']
        artist.spotify_uri = info['uri']
        artist.name = info['name']
        artist.followers = info['followers']['total']

        albums = []
        album_results = sp.artist_albums(artist, album_type='album', limit=50, country='US')
        albums.extend(album_results['items'])
        while album_results['next']:
            album_results = sp.next(album_results)
            albums.extend(album_results['items'])

        for album in albums: 
            with open("spotify_album_ids.txt", "a") as album_ids:
                album_ids.write(album['id'] + '\n')

        session.add(artist)
        session.commit()
    except IntegrityError as e:
        print("artist already in database")
    finally:
        session.close()

def get_artist(id: int):
    client_credentials_manager = SpotifyClientCredentials(client_id=os.getenv('SPOTIFY_ID'), client_secret=os.getenv('SPOTIFY_SECRET'))
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
    info = sp.artist(id)
    add_artist(sp, info)


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
