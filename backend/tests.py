import unittest

from app import app


class SoundtrackDBTests(unittest.TestCase):

    def setUp(self):
        self.app = app.create_app()
        app.register_routes(self.app)
        app.connect_db('sqlite:///:memory:', create=True)

        self.app.testing = True
        self.client = self.app.test_client()

    def test_get_about(self):
        response = self.client.get('/about')
        self.assertEqual(response.status_code, 200)

    def test_get_artist_all(self):
        response = self.client.get('/artist')
        self.assertEqual(response.status_code, 200)

    def test_get_artist_all_page_2(self):
        response = self.client.get('/artist', query_string={'offset': '10', 'limit': '10'})
        self.assertEqual(response.status_code, 200)

    def test_get_artist_individual(self):
        response  = self.client.get('/artist/hans_zimmer')
        self.assertEqual(response.status_code, 200)

    def test_get_album_all(self):
        response = self.client.get('/album')
        self.assertEqual(response.status_code, 200)

    def test_get_album_all_page_2(self):
        response = self.client.get('/album', query_string={'offset': '10', 'limit': '10'})
        self.assertEqual(response.status_code, 200)

    def test_get_album_individual(self):
        response = self.client.get('/album/riverdale')
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_all(self):
        response = self.client.get('/tv-movie')
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_all_page_2(self):
        response = self.client.get('/tv-movie', query_string={'offset': '10', 'limit': '10'})
        self.assertEqual(response.status_code, 200)

    def test_get_tv_movie_individual_s(self):
        response = self.client.get('/tv-movie/riverdale')
        self.assertEqual(response.status_code, 200)
    
    def test_get_tv_movie_individual_m(self):
        response = self.client.get('/tv-movie/interstellar')
        self.assertEqual(response.status_code, 200)
