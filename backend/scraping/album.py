import sys
sys.path += './..'

import json
import os
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import IntegrityError

from app.models.album import Album
from app.models.artist import Artist
from app.models.media import Media
from app.shared.db import init_db, get_session


def process_line(line):
    album_json = json.loads(line)
    # add_album(album_json)
    # associate_existing_album(album_json)

def add_album(album_json):
    session = get_session()
    try:
        album = Album()

        album.genres = json.dumps(album_json['genres'])
        track_data = album_json['tracks']['items']
        for track in track_data:
            track.pop('available_markets', None)
        album.tracks = json.dumps(track_data)

        album.image = album_json['images'][0]['url']
        album.spotify_uri = album_json['uri']
        album.name = album_json['name']
        album.release_date = album_json['release_date']
        album.label = album_json['label']
        session.add(album)
        session.commit()
    except IntegrityError as e:
        print("album already in database")
    finally:
        session.close()

def get_album(id: int):
    client_credentials_manager = SpotifyClientCredentials(client_id=os.getenv('SPOTIFY_ID'), client_secret=os.getenv('SPOTIFY_SECRET'))
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
    seen = set() # to avoid dups
    with open ("spotify_album_ids.txt", "r") as album_ids:
        for album in album_ids: 
            album = album.strip('\n')
            info = sp.album(album)
            name = info['name']
            if name not in seen: 
                seen.add(name)
                territories = info['available_markets']
                next = info['tracks']['next']

                offset = 50
                while next is not None: 
                    tracks = sp.album_tracks(album, offset=offset)
                    for track in tracks['items']:
                        info['tracks']['items'].append(track)
                    next = tracks['next']
                    offset += 50

                add_album(info)

                with open("album_list.txt", "a") as album_names:
                    album_names.write(name + '\n')

def remove_available_markets():
    session = get_session()
    for album in session.query(Album).all():
        track_data = album.tracks['items']
        for track in track_data:
            track.pop('available_markets', None)
        album.tracks = track_data
    session.commit()


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

    remove_available_markets()

    # with open('scraping/spotify_album_data.json', 'r') as f:
    #     for x in f:
    #         x = x.rstrip()
    #         process_line(x)
