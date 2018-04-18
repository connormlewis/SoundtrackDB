import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.expected_conditions import staleness_of
from selenium.webdriver.firefox.options import Options

def setup_driver() :
    options = Options()
    options.set_headless(headless=True)
    driver = webdriver.Firefox(options=options)
    return driver

def test_navbar(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tabs = list(driver.find_elements_by_tag_name("li"))
    tester.assertIn("Albums", tabs[0].get_attribute("outerHTML"))
    tester.assertIn("Artists", tabs[1].get_attribute("outerHTML"))
    tester.assertIn("Media", tabs[2].get_attribute("outerHTML"))
    tester.assertIn("About", tabs[3].get_attribute("outerHTML"))


def test_title(tester, title):
    driver = tester.driver
    driver.get(tester.url)

    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tester.assertIn(title, list(driver.find_elements_by_tag_name("h2"))[0].text)

def test_instance_title(tester, title):
    driver = tester.driver
    driver.get(tester.url)

    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tester.assertIn(title, list(driver.find_elements_by_id("name"))[0].text)

def test_card_items(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tabs = list(driver.find_elements_by_class_name("card-body"))
    tester.assertEqual(tabs.__len__(), 12)

def test_bio(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tester.assertNotEqual("", list(driver.find_elements_by_id("bio"))[0].text)

def test_tracklist(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tracks = list(driver.find_elements_by_id("track"))
    tester.assertNotEqual(tracks.__len__(), 0)

def test_about(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    tester.assertNotEqual("", list(driver.find_elements_by_id("about"))[0].text)

def test_cast(tester):
    driver = tester.driver
    driver.get(tester.url)
    html = list(driver.find_elements_by_tag_name("body"))[0].get_attribute('outerHTML')
    cast = list(driver.find_elements_by_id("cast"))
    tester.assertNotEqual(cast.__len__(), 0) 

def test_global_search(tester, phrase):
    driver = tester.driver
    driver.get(tester.url)

    driver.find_element_by_xpath("//input[@type='search']").click()
    driver.find_element_by_xpath("//input[@type='search']").clear()
    driver.find_element_by_xpath("//input[@type='search']").send_keys(phrase)
    driver.find_element_by_xpath("//button[@type='submit']").click()

def test_model_search(tester, phrase):
    driver = tester.driver
    driver.get(tester.url)

    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[1]/form/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[1]/form/input").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[1]/form/input").send_keys(phrase);
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[1]/form/button").click()

class HomePage(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000"

    def test_welcome_message(self):
        test_title(self, "Welcome to SoundtrackDB")

    def test_navigation(self):
        test_navbar(self)

    def test_global_search(self):
        test_global_search(self, "Hello")

    def tearDown(self):
        self.driver.close()

class AlbumPage(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/album"

    def test_title(self):
        test_title(self, "Albums")

    def test_navigation(self):
        test_navbar(self)

    def test_cards(self):
        test_card_items(self)

    def test_global_search(self):
        test_global_search(self, "Arrow")

    def test_album_search(self):
        test_model_search(self, "sparrow")

    def tearDown(self):
        self.driver.close()

class ArtistPage(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/artist"

    def test_title(self):
        test_title(self, "Artists");

    def test_navigation(self):
        test_navbar(self)

    def test_cards(self):
        test_card_items(self)

    def test_global_search(self):
        test_global_search(self, "Hans Zimmer")

    def test_artist_search(self):
        test_model_search(self, "Hans Zimmer")

    def tearDown(self):
        self.driver.close()

class MediaPage(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/media"

    def test_title(self):
        test_title(self, "Media")

    def test_navigation(self):
        test_navbar(self)

    def test_cards(self):
        test_card_items(self)

    def test_global_search(self):
        test_global_search(self, "Interstellar")

    # def test_media_search(self):
    #     test_model_search(self, "Doctor Who")

    def tearDown(self):
        self.driver.close()

class AboutPage(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/about"

    def test_navigation(self):
        test_navbar(self)

    def tearDown(self):
        self.driver.close()

class AlbumInstance(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/album/1"

    def test_navigation(self):
        test_navbar(self)

    def test_title(self):
        test_instance_title(self, "Arrow: Season 5 (Original Television Soundtrack)")

    def test_tracks(self):
        test_tracklist(self)

class ArtistInstance(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/artist/1"

    def test_navigation(self):
        test_navbar(self)

    def test_title(self):
        test_instance_title(self, "Blake Neely")

    def test_biography(self):
        test_bio(self);

class MediaInstance(unittest.TestCase):
    def setUp(self):
        self.driver = setup_driver()
        self.url = "http://localhost:3000/media/66"

    def test_navigation(self):
        test_navbar(self)

    def test_title(self):
        test_instance_title(self, "African Safari")

    def test_about(self):
        test_about(self);

    def test_cast(self):
        test_cast(self)

if __name__ == "__main__":
    unittest.main()