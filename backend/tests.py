import json
import unittest

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
