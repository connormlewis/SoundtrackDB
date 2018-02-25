import unittest

from app import app


class SoundtrackDBTests(unittest.TestCase):

    def setUp(self):
        self.app = app.create_app()
        app.register_routes(self.app)
        self.app.testing = True
        self.client = self.app.test_client()

    def test_true(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)