import sys
sys.path += './..'

import requests
import os
import json
import time

from sqlalchemy.orm.exc import NoResultFound

from app.shared.db import init_db, get_session
from app.models.media import Media

def get_movie(id: int):
    session = get_session()
    url = 'https://api.themoviedb.org/3/movie/' + str(id)

    try:
        if not check_for_duplicates(id):
            res = requests.get(url, {'api_key': os.getenv('TMDB_KEY')})
            movie_json = res.json()
            if res.status_code != 200:
                return

            movie = Media()
            movie.type = 1
            movie.name = movie_json['title']
            movie.genres = movie_json['genres']
            movie.seasons = 0
            movie.release_date = movie_json['release_date'][:4]
            movie.last_aired = movie_json['release_date'][:4]
            movie.image = 'http://image.tmdb.org/t/p/w500' + movie_json['poster_path']
            movie.running = False
            movie.overview = movie_json['overview']
            movie.imdb_id = movie_json['imdb_id']
            movie.tmdb_id = movie_json['id']
            movie.runtime = movie_json['runtime']
            movie.tagline = movie_json['tagline']
            movie.popularity = movie_json['popularity']
            movie.average_rating = movie_json['vote_average']

            cast_res = requests.get(url + '/credits', {'api_key': os.getenv('TMDB_KEY')})
            if cast_res.status_code != 200:
                return
            cast_json = cast_res.json()
            movie.cast = cast_json['cast']

            images_res = requests.get(url + '/images', {'api_key': os.getenv('TMDB_KEY')})
            if images_res.status_code != 200:
                return
            image_json = images_res.json()
            movie.other_images = image_json['backdrops']

            videos_res = requests.get(url + '/videos', {'api_key': os.getenv('TMDB_KEY')})
            if videos_res.status_code != 200:
                return
            videos_json = videos_res.json()
            movie.videos = videos_json['results']

            session.add(movie)
            session.commit()
            print(movie_json['title'])
        else:
            print('already in database')

    except Exception as e:
        print(e)

    finally:
        session.close()


def get_tv(id: int):
    session = get_session()
    url = 'https://api.themoviedb.org/3/tv/' + str(id)

    try:
        if not check_for_duplicates(id):
            res = requests.get(url, {'api_key': os.getenv('TMDB_KEY')})
            tv_json = res.json()
            if res.status_code != 200:
                return

            tv = Media()
            tv.type = 0
            tv.name = tv_json['name']
            tv.genres = tv_json['genres']
            tv.seasons = tv_json['number_of_seasons']
            tv.release_date = tv_json['first_air_date'][:4]
            tv.last_aired = tv_json['last_air_date'][:4]
            tv.image = 'http://image.tmdb.org/t/p/w500' + tv_json['poster_path']
            tv.running = tv_json['in_production']
            tv.overview = tv_json['overview']
            tv.imdb_id = None
            tv.tmdb_id = tv_json['id']
            tv.runtime = tv_json['episode_run_time'][0]
            tv.tagline = None
            tv.popularity = tv_json['popularity']
            tv.average_rating = tv_json['vote_average']

            cast_res = requests.get(url + '/credits', {'api_key': os.getenv('TMDB_KEY')})
            if cast_res.status_code != 200:
                return
            cast_json = cast_res.json()
            tv.cast = cast_json['cast']

            images_res = requests.get(url + '/images', {'api_key': os.getenv('TMDB_KEY')})
            if images_res.status_code != 200:
                return
            image_json = images_res.json()
            tv.other_images = image_json['backdrops']

            videos_res = requests.get(url + '/videos', {'api_key': os.getenv('TMDB_KEY')})
            if videos_res.status_code != 200:
                return
            videos_json = videos_res.json()
            tv.videos = videos_json['results']

            session.add(tv)
            session.commit()
            print(tv_json['name'])
        else:
            print('already in database')
    except Exception as e:
        print(e)

    finally:
        session.close()

def check_for_duplicates(id: int):
    session = get_session()
    try:
        media = session.query(Media).filter(Media.tmdb_id == id).one()
        return True
    except NoResultFound as e:
        return False
    finally:
        session.close()


def parse_file(input: str):
    with open(input, 'r') as file:
        for line in file: 
            line = line.split()
            id = line[0]
            type = line[1]
            if type == 'M' or type == 'TV': 
                duplicate = check_for_duplicates(id)
                if not duplicate:
                    if type == 'M':
                        get_movie(id)
                    elif type == 'TV':
                        get_tv(id)
                    time.sleep(1)

if __name__ == '__main__':
    uri = 'postgresql://' + \
         os.getenv('POSTGRES_USER') + ':' + \
         os.getenv('POSTGRES_PASSWORD') + '@' + \
         os.getenv('POSTGRES_URL') + '/' + \
         os.getenv('POSTGRES_DB')

    init_db(uri)
    parse_file('scraping/shows.txt')
