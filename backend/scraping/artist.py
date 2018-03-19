import sys
sys.path += './..'

import json
import os

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


if __name__ == '__main__':
    uri = 'postgresql://' + \
         os.getenv('POSTGRES_USER') + ':' + \
         os.getenv('POSTGRES_PASSWORD') + '@' + \
         os.getenv('POSTGRES_URL') + '/' + \
         os.getenv('POSTGRES_DB')

    init_db(uri)

    with open('scraping/spotify_artist_data.json', 'r') as f:
        for x in f:
            x = x.rstrip()
            process_line(x)
