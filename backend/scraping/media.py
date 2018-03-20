import sys
sys.path += './..'

import requests
import os
import json
import time

from app.shared.db import init_db, get_session
from app.models.media import Media

def get_movie(id: int):
    session = get_session()

    try:
        res = requests.get('https://api.themoviedb.org/3/movie/' + str(id), {
            'api_key': os.getenv('TMDB_KEY')
        })
        movie_json = json.loads(res.text)
        if res.status_code != 200:
            return

        movie = Media()
        movie.name = movie_json['title']
        movie.average_rating = movie_json['vote_average']
        movie.genres = json.dumps(movie_json['genres'])
        movie.image = movie_json['title']
        if len(movie_json['imdb_id']) == 0:
            movie.imdb_id = movie_json['imdb_id']
        movie.tmdb_id = movie_json['id']
        movie.popularity = movie_json['popularity']
        movie.overview = movie_json['overview']
        movie.release_date = movie_json['release_date']
        movie.runtime = movie_json['runtime']
        movie.tagline = movie_json['tagline']

        session.add(movie)
        session.commit()
        print(movie_json['title'])
    except Exception as e:
        print(e)

    finally:
        session.close()


def get_tv(id: int):
    pass


if __name__ == '__main__':
    uri = 'postgresql://' + \
         os.getenv('POSTGRES_USER') + ':' + \
         os.getenv('POSTGRES_PASSWORD') + '@' + \
         os.getenv('POSTGRES_URL') + '/' + \
         os.getenv('POSTGRES_DB')

    init_db(uri)
    for i in range(71, 600000):
        get_movie(i)
        time.sleep(.3)
