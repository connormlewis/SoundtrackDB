import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import * as sinon from 'sinon'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import App from './src/components/App';
import Navigation from './src/components/Navigation';
import { AlbumHome, AlbumItem } from './src/components/home-pages/AlbumsHome'
import { ArtistHome, ArtistItem } from './src/components/home-pages/ArtistsHome'
import { MediaHome, MediaItem } from './src/components/home-pages/MediaHome'
import { UIRouter } from '@uirouter/react';
import Splash from './src/components/Splash';
import About from './src/components/About';
import { Desc, Bio, Statistics, Data, Tools } from './src/components/About'
import { MediaInstance } from './src/components/instance-pages/MediaInstance';
import { MediaCarousel } from './src/components/instance-pages/MediaCarousel'; 
import { ArtistInstance } from './src/components/instance-pages/ArtistInstance';
import { AlbumInstance } from './src/components/instance-pages/AlbumInstance';
import {ALBUMS_JSON, ARTISTS_JSON, MEDIAS_JSON, RIVERDALE_JSON, INTERSTELLAR_JSON, ARTIST_JSON, ALBUM_JSON} from './testsData'; 

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

let fakeTransition = { params: function () { return { offset: 0, limit: 12 } } };

describe('<AlbumHome/>', function () {
  it('should render without crashing', function () {
    shallow(<AlbumHome albums={ALBUMS_JSON} transition={fakeTransition} />).render();
  })

  it('should contain 3 album instances', function () {
    const wrapper = shallow(<AlbumHome albums={ALBUMS_JSON} transition={fakeTransition}/>);
    const albumItems = wrapper.find('.row').children()
    expect(albumItems).to.have.length(3);
  })

  describe('<AlbumItem/>', function () {
    let album = ALBUMS_JSON.items[0]

    it('should render without crasing', function () {
      const wrapper = shallow(<AlbumItem album={album} />).render()
    })

    it('should contain correct data', function () {
      const wrapper = shallow(<AlbumItem album={album} />)
      expect(wrapper.find('CardImg').prop('src')).to.be.equal(album.image)
      expect(wrapper.find('CardTitle').render().text()).to.be.equal(album.name)
      expect(wrapper.find('CardSubtitle').render().text()).to.be.equal(album.release_date.substring(0,4))
    })

    it('should pass a click to its parent', function () {
      let spy = sinon.spy();
      let wrapper = shallow(<AlbumItem album={album} navigateToInstance={spy} />)
      let clickItem = wrapper.find('Card')
      clickItem.simulate('click', {
        preventDefault: () => { }
      });
      sinon.assert.calledOnce(spy);
    })
  })
})

describe('<ArtistHome/>', function () {
    it('should render without crashing', function () {
        shallow(<ArtistHome artists={ARTISTS_JSON} transition={fakeTransition}/>).render();
    })

    it('should contain 3 artist instances', function () {
        const wrapper = shallow(<ArtistHome artists={ARTISTS_JSON} transition={fakeTransition}/>);
        const artistsItems = wrapper.find('.row').children()
        expect(artistsItems).to.have.length(3);
    })

    describe('<ArtistItem/>', function () {
        let artist = ARTISTS_JSON.items[0]
        it('should render without crashing', function () {
            const wrapper = shallow(<ArtistItem artist={artist} />).render()
        })

        it('should contain correct data', function () {
            const wrapper = shallow(<ArtistItem artist={artist} />)
            expect(wrapper.find('CardTitle').render().text()).to.be.equal(artist.name)
            expect(wrapper.find('CardText').render().text()).to.be.equal("Spotify Followers: " + artist.followers.toLocaleString())
        })

        it('should pass a click to its parent', function () {
            let spy = sinon.spy();
            let wrapper = shallow(<ArtistItem artist={artist} navigateToInstance={spy} />)
            let clickItem = wrapper.find('Card')
            clickItem.simulate('click', {
              preventDefault: () => { }
            });
            sinon.assert.calledOnce(spy);
        })
    })
})

describe('<MediaHome/>', function () {
    it('should render without crashing', function () {
        shallow(<MediaHome media={MEDIAS_JSON} transition={fakeTransition}/>).render();
    })

    it('should contain 3 artist instances', function () {
        const wrapper = shallow(<MediaHome media={MEDIAS_JSON} transition={fakeTransition}/>);
        const mediaItems = wrapper.find('.row').children()
        expect(mediaItems).to.have.length(3);
    })

    describe('<MediaItem/>', function () {
        let media = MEDIAS_JSON.items[0]
        it('should render without crashing', function () {
            const wrapper = shallow(<MediaItem media={media} />).render()
        })

        it('should contain correct data', function () {
            const wrapper = shallow(<MediaItem media={media} />)
            expect(wrapper.find('CardImg').prop('src')).to.be.equal(media.img)
            expect(wrapper.find('CardTitle').render().text()).to.be.equal(media.name ? media.name : media.title)
            expect(wrapper.find('CardSubtitle').render().text()).to.be.equal('TV Series • 2017 • 2 Seasons')
        })
    });
});

// Splash
describe('<Splash/>', function () {
    it('should render without crashing', function () {
        shallow(<Splash />);
    })

    it('should have 4 items: Albums, Artists, Movies and TV, and Making Connections', function () {
        const wrapper = shallow(<Splash />);
        const carouselItems = wrapper.find('CarouselCaption');
        expect(carouselItems).to.have.length(4);
        expect(carouselItems.at(0).render().text()).to.equal('Albums');
        expect(carouselItems.at(1).render().text()).to.equal('Artists');
        expect(carouselItems.at(2).render().text()).to.equal('TV and Movies');
        expect(carouselItems.at(3).render().text()).to.equal('Making Connections');
    })

  describe('<Carousel/>', () => {
    const items = [
      { src: '', altText: 'item A', caption: 'caption A' },
      { src: '', altText: 'item B', caption: 'caption B' },
      { src: '', altText: 'item C', caption: 'caption C' }
    ];

    it('should render a header and a caption', () => {
      const wrapper = mount(<CarouselCaption captionHeader="headerText" captionText="bodyText" />);
      expect(wrapper.find('h3').length).to.equal(1);
      expect(wrapper.find('p').length).to.equal(1);
    });

    it('should render a list with the right number of items', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />);
      expect(wrapper.find('ol').length).to.equal(1);
      expect(wrapper.find('li').length).to.equal(3);
    });

    it('should append the correct active class', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />);
      expect(wrapper.find('.active').hostNodes().length).to.equal(1);
    });

    it('should render an anchor tag', () => {
      const wrapper = mount(<CarouselControl direction="next" onClickHandler={() => { }} />);
      expect(wrapper.find('a').length).to.equal(1);
    });

    it('should call the onClickHandler', () => {
      const onClick = sinon.spy();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem onExiting={() => { }} onExited={() => { }} key={idx}>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />
          {slides}
          <CarouselControl direction="next" directionText="Next" onClickHandler={onClick} />
        </Carousel>
      );
      wrapper.find('a').first().simulate('click');
      sinon.assert.called(onClick);
    });
  });
});

describe('<MediaInstance/>', function () {
  let riverdale = RIVERDALE_JSON;
  let interstellar = INTERSTELLAR_JSON;

  it('should render without crashing', function () {
      const wrapper = shallow(<MediaInstance media={riverdale} />);
  });

  it('should have the correct data for name and about', function () {
      const wrapper = shallow(<MediaInstance media={riverdale} />);
      expect(wrapper.find({ id: 'name' }).render().text()).to.be.equal(riverdale.name);
      expect(wrapper.find({ id: 'about' }).render().text()).to.be.equal(riverdale.overview);
  });

  it('should have a subtitle with type, release year and genres if it is a movie', function () {
      const wrapper = shallow(<MediaInstance media={interstellar} />);
      const expected = 'Movie | 2014 | Adventure, Drama, Science Fiction';
      expect(wrapper.find({ id: 'subtitle' }).render().text()).to.be.equal(expected);
  });

  it('should have a subtitle with type, years, number of seasons and genres if it is a TV show', function () {
      const wrapper = shallow(<MediaInstance media={riverdale} />);
      const expected = 'TV Show | 2017 - Present | 2 seasons | Drama, Mystery';
      expect(wrapper.find({ id: 'subtitle' }).render().text()).to.be.equal(expected);
  });

  it('should have the correct cast listing', function () {
      const wrapper = shallow(<MediaInstance media={riverdale} />);
      const expected_cast = riverdale.cast;
      const result_cast = wrapper.find({ id: 'cast' }).children();
      let index = 0;
      for (let member of expected_cast) {
          expect(result_cast.at(index).render().text()).to.equal(member);
          index++;
      }
  });

  it('should have the correct poster image and video', function () {
      const wrapper = shallow(<MediaInstance media={riverdale} />);
      const expected_img = "http://image.tmdb.org/t/p/w500//1TsbOTztAJtzTRXAhoLsX9a83XX.jpg";
      const expected_video = "//www.youtube.com/embed/9XmFTADupMc";
      expect(wrapper.find({ alt: "Poster" }).prop('src')).to.be.equal(expected_img);
      expect(wrapper.find('iframe').prop('src')).to.be.equal(expected_video);
  });

  // it('should list associated albums and artists', function () {
  //     const wrapper = shallow(<MediaInstance media={riverdale} />);
  //     const expected_album = "Riverdale: Original Television Score (Season 1)";
  //     const expected_artist = "Blake Neely";
  //     expect(wrapper.find({ id: 'albums' }).find('a').render().text()).to.be.equal(expected_album);
  //     expect(wrapper.find({ id: 'albums' }).find('a').render().text()).to.be.equal(expected_album);
  // });

  describe('<MediaCarousel/>', function() {
    it('should render without crashing', function () {
      shallow(<MediaCarousel photos={RIVERDALE_JSON.backdrops}/>); 
    }); 
  });
});

describe('<ArtistInstance/>', function () {
    it('should render without crashing', function () {
        shallow(<ArtistInstance artist={ARTIST_JSON} />);
    })

    it('should have correct data for name and bio', function () {
        const wrapper = shallow(<ArtistInstance artist={ARTIST_JSON} />);
        expect(wrapper.find({ id: 'name' }).render().text()).to.be.equal(ARTIST_JSON.name);
        // expect(wrapper.find({ id: 'bio' }).render().text()).to.be.equal(artist.lastfm_data.artist.bio.content);

    })

    it('should have the correct media', function () {
        const wrapper = shallow(<ArtistInstance artist={ARTIST_JSON} />);
        expect(wrapper.find({ alt: "Artist" }).prop('src')).to.be.equal(ARTIST_JSON.image);
        expect(wrapper.find('iframe').prop('src')).to.contain(ARTIST_JSON.spotify_uri)
    })

    // it('should have the correct related data', function () {
    //     const artist = HANS_ZIMMER_JSON;
    //     const wrapper = shallow(<ArtistInstance artist={artist} />);
    //     expect(wrapper.find({ id: 'albums' }).find('a').render().text()).to.be.equal(artist.albums[1]);
    //     expect(wrapper.find({ id: 'media' }).find('a').render().text()).to.be.equal(artist.media[1]);
    // })
});

// Album Instance
describe('<AlbumInstance/>', function () {
    it('should render without crashing', function () {
        shallow(<AlbumInstance album={ALBUM_JSON} />);
    })

    it('should have correct data for name, label, release year, and artists ', function () {
        const wrapper = shallow(<AlbumInstance album={ALBUM_JSON} />)
        expect(wrapper.find({ id: 'name' }).render().text()).to.be.equal(ALBUM_JSON.name);
        expect(wrapper.find({ id: 'label' }).render().text()).to.be.equal("Label: " + ALBUM_JSON.label);
        expect(wrapper.find({ id: 'year' }).render().text()).to.be.equal("Release year: " + ALBUM_JSON.release_date.substring(0, 4));
        // expect(wrapper.find({ id: 'artistlist' }).render().text()).to.be.equal("Artists: " + ALBUM_JSON.artists[1]);
    })

    it('should have the correct track', function () {
        const wrapper = shallow(<AlbumInstance album={ALBUM_JSON} />);
        const expected_track_list = ALBUM_JSON.tracks;
        const result_track_list = wrapper.find({ id: 'tracks' }).childAt(0);
        for (let i = 0; i < expected_track_list.length; i++) {
            expect(result_track_list.childAt(i).render().text()).to.equal(expected_track_list[i].name);
        }
    })

    // it('should list associated media and artists', function () {
    //     const wrapper = shallow(<AlbumInstance album={ALBUM_JSON} />);
    //     const related_data = ALBUM_JSON.related_data.albums.riverdale;
    //     expect(wrapper.find({ id: 'media' }).find('a').render().text()).to.be.equal(ALBUM_JSON.media[0].name);
    //     expect(wrapper.find({ id: 'artists' }).find('a').render().text()).to.be.equal(ALBUM_JSON.artists[0].name);
    // })

});

//About
describe('<About/>', function () {
    it('should About render without crashing', function () {
        shallow(<About />);
    })
    it('should Desc render without crashing', function () {
        shallow(<Desc />);
    })
    it('should render Bio without crashing', function () {
        shallow(<Bio />);
    });
    it('should render Statistics without crashing', function () {
        shallow(<Statistics />);
    });
    it('should render Data without crashing', function () {
        shallow(<Data />);
    })
    it('should render Tools without crashing', function () {
        shallow(<Tools />);
    })
});