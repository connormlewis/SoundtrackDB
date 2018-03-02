import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './src/components/App';
import Navigation from './src/components/Navigation';
import { AlbumHome, AlbumItem } from './src/components/home-pages/AlbumsHome'
import { ArtistHome, ArtistItem } from './src/components/home-pages/ArtistsHome'
import { MediaHome, MediaItem } from './src/components/home-pages/MediaHome'
import { UIRouter } from '@uirouter/react';
import Splash from './src/components/Splash';

const ALBUMS_JSON = [{
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/3dRfiJ2650SZu6GbydcHNb"
    },
    "href": "https://api.spotify.com/v1/artists/3dRfiJ2650SZu6GbydcHNb",
    "id": "3dRfiJ2650SZu6GbydcHNb",
    "name": "John Williams",
    "type": "artist",
    "uri": "spotify:artist:3dRfiJ2650SZu6GbydcHNb"
  }],
  "href": "https://api.spotify.com/v1/albums/5hdpBZRfkVI9Orjq9cVJ9x",
  "id": "5hdpBZRfkVI9Orjq9cVJ9x",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/399212ef4aa3612b92e1efe7602bcf8888a676f1",
    "width": 640
  }],
  "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)",
  "release_date": "1982-01-01",
  "type": "album",
  "uri": "spotify:album:5hdpBZRfkVI9Orjq9cVJ9x"
}, {
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"
    },
    "href": "https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ",
    "id": "0YC192cP3KPCRWx8zr8MfZ",
    "name": "Hans Zimmer",
    "type": "artist",
    "uri": "spotify:artist:0YC192cP3KPCRWx8zr8MfZ"
  }],
  "id": "5OVGwMCexoHavOar6v4al5",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/eed15df0d0849836293b9f787fabf077ce9e9f2e",
    "width": 640
  }],
  "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)",
  "release_date": "2014-11-21",
  "type": "album",
  "uri": "spotify:album:5OVGwMCexoHavOar6v4al5"
}, {
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/4UOzqO0jZUrTiTunfBw4tp"
    },
    "href": "https://api.spotify.com/v1/artists/4UOzqO0jZUrTiTunfBw4tp",
    "id": "4UOzqO0jZUrTiTunfBw4tp",
    "name": "Blake Neely",
    "type": "artist",
    "uri": "spotify:artist:4UOzqO0jZUrTiTunfBw4tp"
  }],
  "id": "4BYS4x13edZ1f3H1j1nyv0",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/6d6058dda979cc24276aaab650befd5dd963e390",
    "width": 640
  }],
  "name": "Riverdale: Original Television Score (Season 1)",
  "release_date": "2017-07-18",
  "type": "album",
  "uri": "spotify:album:4BYS4x13edZ1f3H1j1nyv0"
}]

const ARTISTS_JSON = [{
  "followers": {
    "total": 10677
  },
  "id": "4UOzqO0jZUrTiTunfBw4tp",
  "images": [{
    "height": 1000,
    "url": "https://i.scdn.co/image/86193f7ba3136d145915a9afb477626ed1c9f40a",
    "width": 1000
  }],
  "name": "Blake Neely",
  "uri": "spotify:artist:4UOzqO0jZUrTiTunfBw4tp"
}, {
  "followers": {
    "total": 1068930
  },
  "id": "0YC192cP3KPCRWx8zr8MfZ",
  "images": [{
    "height": 563,
    "url": "https://i.scdn.co/image/14657235e8724181f8b32c6bfa54cdbf86d70852",
    "width": 1000
  }],
  "name": "Hans Zimmer",
  "uri": "spotify:artist:0YC192cP3KPCRWx8zr8MfZ"
}, {
  "followers": {
    "total": 550855
  },
  "id": "3dRfiJ2650SZu6GbydcHNb",
  "images": [{
    "height": 1500,
    "url": "https://i.scdn.co/image/bde64350466df4aa41efb9b8b766deef6c46fd08",
    "width": 1000
  }],
  "name": "John Williams",
  "uri": "spotify:artist:3dRfiJ2650SZu6GbydcHNb"
}]

const MEDIA_JSON = [{
  "id": 601,
  "imdb_id": "tt0083866",
  "original_title": "E.T. the Extra-Terrestrial",
  "overview": "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
  "poster_path": "/8htLKK03TJjKZOXJgihZCu8v0P.jpg",
  "release_date": "1982-04-03",
  "tagline": "He is afraid. He is alone. He is three million light years from home.",
  "title": "E.T. the Extra-Terrestrial",
  "yearText": 1982
}, {
  "id": 157336,
  "imdb_id": "tt0816692",
  "original_title": "Interstellar",
  "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
  "release_date": "2014-11-05",
  "status": "Released",
  "tagline": "Mankind was born on Earth. It was never meant to die here.",
  "title": "Interstellar",
  "yearText": 2014  
}, {
  "first_air_date": "2017-01-26",
  "id": 69050,
  "in_production": true,
  "last_air_date": "2018-02-07",
  "name": "Riverdale",
  "number_of_episodes": 26,
  "number_of_seasons": 2,
  "original_language": "en",
  "original_name": "Riverdale",
  "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
  "poster_path": "/1TsbOTztAJtzTRXAhoLsX9a83XX.jpg",
  "seasons": [
    {
      "air_date": "2017-01-26",
      "episode_count": 13,
      "id": 82752,
      "poster_path": "/iyLxqUGwOUurAKMOR8hSXmxMISU.jpg",
      "season_number": 1
    },
    {
      "air_date": "2017-10-12",
      "episode_count": 13,
      "id": 91793,
      "poster_path": "/yrsTz3PAUyKmLaNxvNOGX9alubu.jpg",
      "season_number": 2
    }
  ],
  "yearText": 2017  
}]

// App
describe('<App/>', function () {
  it('should render without crashing', function () {
    shallow(<App />);
  });
});

// Navigation
describe('<Navigation/>', function () {
  it('should have a brand named SoundtrackDB', function () {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('.navbar-brand').render().text()).to.equal('SoundtrackDB');
  });

  it('should have 4 items: Albums, Artists, TV/Movies, and About', function () {
    const wrapper = shallow(<Navigation />);
    const navItems = wrapper.find('Nav').children();
    expect(navItems).to.have.length(4);
    expect(navItems.at(0).find('.nav-link').render().text()).to.equal('Albums');
    expect(navItems.at(1).find('.nav-link').render().text()).to.equal('Artists');
    expect(navItems.at(2).find('.nav-link').render().text()).to.equal('TV/Movies');
    expect(navItems.at(3).find('.nav-link').render().text()).to.equal('About');
  });
});

describe('<AlbumHome/>', function () {
  it('should render without crashing', function () {
    shallow(<AlbumHome albums={ALBUMS_JSON} />).render();
  })

  it('should contain 3 album instances', function () {
    const wrapper = shallow(<AlbumHome albums={ALBUMS_JSON} />);
    const albumItems = wrapper.find('.row').children()
    expect(albumItems).to.have.length(3);
  })

  describe('<AlbumItem/>', function () {
    it('should render without crasing', function () {
      let album = ALBUMS_JSON[0]
      const wrapper = shallow(<AlbumItem album={album} />).render()
    })

    it('should contain correct data', function () {
      let album = ALBUMS_JSON[0]
      const wrapper = shallow(<AlbumItem album={album} />)
      expect(wrapper.find('CardImg').prop('src')).to.be.equal(album.images[0].url)
      expect(wrapper.find('CardTitle').render().text()).to.be.equal(album.name)
      expect(wrapper.find('CardSubtitle').render().text()).to.be.equal(album.release_date)
    })
  })
})

describe('<ArtistHome/>', function () {
  it('should render without crashing', function () {
    shallow(<ArtistHome artists={ARTISTS_JSON} />).render();
  })

  it('should contain 3 artist instances', function () {
    const wrapper = shallow(<ArtistHome artists={ARTISTS_JSON} />);
    const artistsItems = wrapper.find('.row').children()
    expect(artistsItems).to.have.length(3);
  })

  describe('<ArtistItem/>', function () {
    let artist = ARTISTS_JSON[0]
    it('should render without crasing', function () {
      const wrapper = shallow(<ArtistItem artist={artist} />).render()
    })

    it('should contain correct data', function () {
      const wrapper = shallow(<ArtistItem artist={artist} />)
      expect(wrapper.find('CardTitle').render().text()).to.be.equal(artist.name)
      expect(wrapper.find('CardText').render().text()).to.be.equal("Spotify Followers: " + artist.followers.total.toLocaleString())
    })
  })
})

describe('<MediaHome/>', function () {
  it('should render without crashing', function () {
    shallow(<MediaHome media={MEDIA_JSON} />).render();
  })

  it('should contain 3 artist instances', function () {
    const wrapper = shallow(<MediaHome media={MEDIA_JSON} />);
    const mediaItems = wrapper.find('.row').children()
    expect(mediaItems).to.have.length(3);
  })

  describe('<MediaItem/>', function () {
    let media = MEDIA_JSON[0]
    it('should render without crasing', function () {
      const wrapper = shallow(<MediaItem media={media} />).render()
    })

    it('should contain correct data', function () {
      const wrapper = shallow(<MediaItem media={media} />)
      expect(wrapper.find('CardImg').prop('src')).to.be.equal("http://image.tmdb.org/t/p/w500/" + media.poster_path)
      expect(wrapper.find('CardTitle').render().text()).to.be.equal(media.name ? media.name : media.title)
      expect(wrapper.find('CardSubtitle').render().text()).to.be.equal(media.name ? 'TV Series' : 'Movie' + ' • ' + media.yearText)
    })
  });
});

// Splash
describe('<Splash/>', function () {
  it('should render without crashing', function() {
    shallow(<Splash/>);
  })

  it('should have 4 items: Albums, Artists, Movies and TV, and Making Connections', function() {
    const wrapper = shallow(<Splash/>);
    const carouselItems = wrapper.find('CarouselCaption');
    expect(carouselItems).to.have.length(4);
    expect(carouselItems.at(0).render().text()).to.equal('Albums');
    expect(carouselItems.at(1).render().text()).to.equal('Artists');
    expect(carouselItems.at(2).render().text()).to.equal('TV and Movies');
    expect(carouselItems.at(3).render().text()).to.equal('Making Connections');
  })
});