import json
import unittest
from unittest.mock import patch

from app import app
from app.models import Media, Album, Artist
from app.shared.db import get_session


class SoundtrackDBTests(unittest.TestCase):

    def setUp(self):
        self.app = app.create_app()
        app.register_routes(self.app)
        app.connect_db('sqlite:///:memory:', create=True)

        self.app.testing = True
        self.client = self.app.test_client()

        with self.app.app_context():
            session = get_session()
            self.populate_database(session)
            session.close()

        self.commit_patch = patch('app.blueprints.routes.get_commits', return_value=({}, 0))
        self.issue_patch = patch('app.blueprints.routes.get_issues', return_value=({}, 0))
        self.commit_patch.start()
        self.issue_patch.start()


    def test_get_about(self):
        response = self.client.get('/about')
        self.assertEqual(response.status_code, 200)

    def test_get_artist_all(self):
        response = self.client.get('/artist')
        json_response = json.loads(response.data)
        self.assertEqual(json_response['count'], 1)
        print(json_response)
        self.assertEqual(len(json_response['items']), 1)
        self.assertEqual(response.status_code, 200)

    def test_get_artist_all_page_2(self):
        response = self.client.get('/artist', query_string={'offset': '10', 'limit': '10'})
        json_response = json.loads(response.data)
        self.assertEqual(len(json_response['items']), 0)
        self.assertEqual(response.status_code, 200)

    def test_get_artist_individual(self):
        response = self.client.get('/artist/1')
        self.assertEqual(response.status_code, 200)

    def test_get_artist_missing(self):
        response = self.client.get('/artist/2')
        self.assertEqual(response.status_code, 404)

    def test_get_album_all(self):
        response = self.client.get('/album')
        json_response = json.loads(response.data)
        self.assertEqual(json_response['count'], 1)
        self.assertEqual(len(json_response['items']), 1)
        self.assertEqual(response.status_code, 200)

    def test_get_album_all_page_2(self):
        response = self.client.get('/album', query_string={'offset': '10', 'limit': '10'})
        json_response = json.loads(response.data)
        self.assertEqual(len(json_response['items']), 0)
        self.assertEqual(response.status_code, 200)

    def test_get_album_individual(self):
        response = self.client.get('/album/1')
        self.assertEqual(response.status_code, 200)

    def test_get_album_missing(self):
        response = self.client.get('/album/2')
        self.assertEqual(response.status_code, 404)

    def test_get_tv_movie_all(self):
        response = self.client.get('/media')
        json_response = json.loads(response.data)
        self.assertEqual(json_response['count'], 1)
        self.assertEqual(len(json_response['items']), 1)
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_all_page_2(self):
        response = self.client.get('/media', query_string={'offset': '10', 'limit': '10'})
        json_response = json.loads(response.data)
        self.assertEqual(len(json_response['items']), 0)
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_individual(self):
        response = self.client.get('/media/1')
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_missing(self):
        response = self.client.get('/media/2')
        self.assertEqual(response.status_code, 404)
    
    def test_query(self):
        response = self.client.get('/search/param')
        self.assertEqual(response.status_code, 200)
    
    def test_search_media(self):
        response = self.client.get('/media?search=param')
        self.assertEqual(response.status_code, 200)

    def test_search_artist(self):
        response = self.client.get('/artist?search=param')
        self.assertEqual(response.status_code, 200)
    
    def test_search_album(self):
        response = self.client.get('/album?search=param')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media(self):
        response = self.client.get('/media?start_year=1950&end_year=2016&running=true&order_by=name&asc')
        self.assertEqual(response.status_code, 200)

    def test_filter_artist(self):
        response = self.client.get('/artist?min_followers=9000&max_followers=10000')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_album(self):
        response = self.client.get('/album?start_year=1950&end_year=2012&running=true&order_by=name&asc')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media2(self):
        response = self.client.get('/media?start_year=1950&running=true&order_by=name&asc')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media3(self):
        response = self.client.get('/media?start_year=1950&running=true&order_by=name&asc&seasons=3&genre=Comedy')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media4(self):
        response = self.client.get('/media?start_year=1950&running=true&order_by=name&asc&popularity=9')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media5(self):
        response = self.client.get('/media?start_year=1950&running=true&order_by=name&asc')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_media6(self):
        response = self.client.get('/media?type=movie&popularity=2&run_time=3&average_rating=2&last_aired')
        self.assertEqual(response.status_code, 200)

    def test_filter_artist2(self):
        response = self.client.get('/artist?min_followers=9000&desc&order_by=followers')
        self.assertEqual(response.status_code, 200)
    
    def test_filter_album2(self):
        response = self.client.get('/album?start_year=1950&running=true&order_by=name&asc&label')
        self.assertEqual(response.status_code, 200)
    
    def test_genres(self):
        response = self.client.get('/genres')
        self.assertEqual(response.status_code, 200)

    def test_labels(self):
        response = self.client.get('/labels')
        self.assertEqual(response.status_code, 200)
    
    @staticmethod
    def populate_database(session):
        artist = Artist()
        artist.name = "Test Artist"
        artist.spotify_uri = "spotify:artist:arn"
        session.add(artist)

        album = Album()
        album.name = "Test Album"
        album.artists.append(artist)
        album.spotify_uri = "spotify:album:arn"
        session.add(album)

        media = Media()
        media.tmdb_id = "TMDB_ID"
        media.name = "Test media"
        media.type = 1
        session.add(media)

        session.commit()
