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

def test_media_sort(tester):
    driver = tester.driver
    driver.get(tester.url)

    #test order by name
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='name']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("10,000 BC", tabs[0].text)   

    #test order by year
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='release_date']").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("1947", tabs[0].text) 

    #test order by popularity
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='popularity']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Fools of Fortune", tabs[0].text) 

    #test order by runtime
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='runtime']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Amazing Stories", tabs[0].text) 

    #test order by seasons
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='seasons']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Doctor Who", tabs[0].text) 

    #test order by average rating
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='average_rating']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("David Lev", tabs[0].text) 

    #test descending (and if asc/dsc will not cancel other sort options)
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/div/button[2]").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Paul", tabs[0].text) 

def test_album_sort(tester):
    driver = tester.driver
    driver.get(tester.url)

    #test order by name
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='name']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("10,000 BC", tabs[0].text)   

    #test order by year
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='release_date']").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("1957", tabs[0].text) 

    #test order by track count
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='num_tracks']").click()
    tabs = list(driver.find_elements_by_tag_name("p"))
    tester.assertIn("2", tabs[0].text) 

    #test descending (and if asc/dsc will not cancel other sort options)
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/div/button[2]").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Doctor Who", tabs[0].text) 

def test_artist_sort(tester):
    driver = tester.driver
    driver.get(tester.url)

    #test order by name
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='name']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Alan Silvestri", tabs[0].text)   

    #test order by followers
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='followers']").click()
    tabs = list(driver.find_elements_by_tag_name("p"))
    tester.assertIn("72", tabs[0].text) 

    #test order by album count
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='num_albums']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Jesse L. Martin", tabs[0].text)

    #test order by media count
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/select/option[@value='num_media']").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Victor Garber", tabs[0].text)

    #test descending (and if asc/dsc will not cancel other sort options)
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/div/button[2]").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Hans Zimmer", tabs[0].text) 

def test_album_filters(tester):
    driver = tester.driver
    driver.get(tester.url)
    
    # test start year filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/button").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/select[@id='start']/option[@value='2016']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("2016", tabs[0].text) 
    tester.assertIn("2017", tabs[1].text) 
    
    # add on end year filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/select[@id='end']/option[@value='2016']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("2016", tabs[0].text) 
    tester.assertIn("2016", tabs[1].text) 

    # add on track number filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input").send_keys("13")
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("p"))
    tester.assertIn("13", tabs[0].text) 
    tester.assertIn("13", tabs[1].text) 

def test_artist_filters(tester):
    driver = tester.driver
    driver.get(tester.url)

    # test min followers filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/button").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='min']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='min']").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='min']").send_keys("90000")
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("p"))
    tester.assertIn("137,976", tabs[0].text)
    tester.assertIn("162,370", tabs[1].text)
    
    # test max followers filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='max']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='max']").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/input[@id='max']").send_keys("160000")
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("p"))
    tester.assertIn("137,976", tabs[0].text)
    tester.assertIn("137,688", tabs[1].text)

    # reset filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button[2]").click()

    # test number of albums filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input[@id='album']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input[@id='album']").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/input[@id='album']").send_keys("10")
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Murray Gold", tabs[0].text)

    # reset filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button[2]").click()

    # test number of media filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[3]/input[@id='media']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[3]/input[@id='media']").clear()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[3]/input[@id='media']").send_keys("10")
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("Blake Neely", tabs[0].text)

def test_media_filters(tester):
    driver = tester.driver
    driver.get(tester.url)
    
    #test movie filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[1]/div[2]/button").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/label[2]/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("Movie", tabs[0].text)
    tester.assertIn("Movie", tabs[2].text)
    
    #test tv filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/label[3]/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("TV", tabs[0].text)
    tester.assertIn("TV", tabs[2].text)

    #test both filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[1]/label[4]/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("Movie", tabs[0].text)
    tester.assertIn("TV", tabs[2].text)

    #test genre filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/select/option[@value='Drama']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("A.I.", tabs[0].text)

    #test start release year filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[2]/select/option[@value='""']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[3]/select[@id='start']/option[@value='2010']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("2016", tabs[0].text)

    #test end release year filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[3]/select[@id='end']/option[@value='2013']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("2013", tabs[0].text)

    #reset form
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button[2]").click()

    #test average rating filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[1]/div[4]/select[@id='avg_rate']/option[@value='7']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("A Beautiful Mind", tabs[0].text)

    #reset form
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button[2]").click()

    #test currently running series filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/div[1]/label/input").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h5"))
    tester.assertIn("12 Monkeys", tabs[0].text)

    #reset form
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button[2]").click()

    #test seasons filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/div[2]/select/option[@value='6']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("6", tabs[0].text)

    #reset form
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button[2]").click()

    #test last aired filter
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[2]/div[3]/select/option[@value='2018']").click()
    driver.find_element_by_xpath("//div[@id='root']/div/div/div[2]/div/div/form/div[3]/button").click()
    tabs = list(driver.find_elements_by_tag_name("h6"))
    tester.assertIn("2018", tabs[0].text)



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

    def test_sort(self):
        test_album_sort(self)

    def test_filter(self):
        test_album_filters(self)

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

    def test_sort(self):
        test_artist_sort(self)

    def test_filter(self):
        test_artist_filters(self);
        

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

    def test_media_search(self):
        test_model_search(self, "Doctor Who")

    def test_sort(self):
        test_media_sort(self);

    def test_filter(self):
        test_media_filters(self)

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