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
import { ArtistInstance } from './src/components/instance-pages/ArtistInstance'

const ALBUMS_JSON = [
  {
    "artists": [
      "Blake Neely"
    ],
    "id": "riverdale",
    "img": "https://i.scdn.co/image/6d6058dda979cc24276aaab650befd5dd963e390",
    "label": "WaterTower Music",
    "movies-tv_show": [
      "Riverdale"
    ],
    "name": "Riverdale: Original Television Score (Season 1)",
    "track_list": [
      "Riverdale",
      "If You Love Me",
      "Viral Gossip in Town",
      "Everyone a Suspect",
      "Receiving the Jersey",
      "Doubts and Accusations",
      "All is OK With Milkshakes",
      "Long Reach",
      "Ended Up Drowning",
      "Irreconcilable",
      "So Many Questions",
      "A Gift / Forced to Leave",
      "Not Making the Play",
      "Overwhelming Evidence",
      "Realizations",
      "Do You Feel Guilty?",
      "Into the Woods",
      "Name of the Game",
      "Angry and Vulnerable Girls",
      "Results of the Father",
      "Your Father Was Arrested",
      "The Recording",
      "Oh, Mommy!",
      "What Floats Beneath",
      "Never Safe"
    ],
    "year": "2017-07-18"
  },
  {
    "artists": [
      "Hans Zimmer"
    ],
    "id": "interstellar",
    "img": "https://i.scdn.co/image/eed15df0d0849836293b9f787fabf077ce9e9f2e",
    "label": "WaterTower Music",
    "movies-tv_show": [
      "Interstellar"
    ],
    "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)",
    "track_list": [
      "Dreaming of the Crash",
      "Cornfield Chase",
      "Dust",
      "Day One",
      "Stay",
      "Message from Home",
      "The Wormhole",
      "Mountains",
      "Afraid of Time",
      "A Place Among the Stars",
      "Running Out",
      "I'm Going Home",
      "Coward",
      "Detach",
      "S.T.A.Y.",
      "Where We're Going",
      "First Step",
      "Flying Drone",
      "Atmospheric Entry",
      "No Need to Come Back",
      "Imperfect Lock",
      "No Time for Caution",
      "What Happens Now?",
      "Do Not Go Gentle into That Good Night"
    ],
    "year": "2014-11-21"
  },
  {
    "artists": [
      "John Williams"
    ],
    "id": "e_t",
    "img": "https://i.scdn.co/image/399212ef4aa3612b92e1efe7602bcf8888a676f1",
    "label": "Geffen",
    "movies-tv_show": [
      "E.T. the Extra-Terrestrial"
    ],
    "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)",
    "track_list": [
      "Three Million Light Years From Home - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "Abandoned And Pursued - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "E.T. And Me - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "E.T.'s Halloween - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "Flying - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "E.T. Phone Home - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "Over The Moon - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "Adventure On Earth - From \"E.T. The Extra-Terrestrial\" Soundtrack"
    ],
    "year": "1982-01-01"
  }
]

const ARTISTS_JSON = [
  {
    "albums": [
      "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
    ],
    "biography": "Hans Florian Zimmer (born September 12, 1957) is a German film composer and music producer, born in Frankfurt am Main, Germany and active since 1977. Having won a wide variety of honors and commendations, he has composed music for over 100 films, including award-winning films and box-office hits such as Rain Man (1988), Driving Miss Daisy (1989), Thelma & Louise (1991), The Lion King (1994), Crimson Tide (1995), Gladiator (2000), The Last Samurai (2003), The Dark Knight (2008), Inception (2010), 12 Years a Slave (2013), Interstellar (2014), and Blade Runner 2049 (2017). A recipient of a star on the Hollywood Walk of Fame, Zimmer spent the early part of his career in the United Kingdom before moving to the United States. He's also the head of the film music division at DreamWorks studios and additionally works with other composers through the company that he founded: Remote Control Productions.\n\nZimmer's works are notable for integrating electronic music sounds with traditional orchestral arrangements. He has received four Grammy Awards, two Golden Globes, a Classical BRIT Award, and an Academy Award. He was also named on the list of Top 100 Living Geniuses published by The Daily Telegraph.\n\nZimmer was born in Frankfurt am Main, Germany on 12th September 1957, and moved to London as a teenager. While he lived in London, Zimmer wrote advertising jingles for Air-Edel Associates. Zimmer began his musical career playing keyboards and synthesisers. In 1980 he worked with The Buggles, a New Wave band formed in 1977 with Trevor Horn, Geoff Downs, and Bruce Woolley. Zimmer can be briefly seen in The Buggles music video for \"Video Killed the Radio Star\" (1979). \n\nIn the 1980s, Zimmer worked with film composer Stanley Myers, a prolific film composer who composed scores for over sixty films. Zimmer and Myers co-founded the London-based Lillie Yard recording studio. Together, Myers and Zimmer worked on fusing the traditional orchestral sound with state-of-the-art electronics. Some of their first movies with this new sound include \"Moonlighting\" (1982), \"Success is the Best Revenge\" (1984), \"Insignificance\" (1985), and \"My Beautiful Launderette\" (1985). In 1986, Zimmer joined David Byrne and Ryuichi Sakamoto on their Oscar-winning score for \"The Last Emperor\" (1988).\n\nSoon afterwards, Zimmer began working on his own solo projects. During his solo career years, Zimmer experimented and combined the use of old and new musical technologies. His first solo score was for Chris Menges\u2019s film \"A World Apart\" (1988). However, the turning point in his career came later that year when he was asked to compose a score for Barry Levinson\u2019s film \"Rain Man\" (1988). In the score, Zimmer uses synthesizers mixed with steel drums. The score was nominated for an Academy Award in 1989. A year later Zimmer was asked to compose a score for Bruce Beresford's \"Driving Miss Daisy\" (1989), which won a Grammy Award 1991.\n\nIn 1994, Zimmer won his biggest commercial hit for Disney\u2019s \"The Lion King\" (1994). He wanted to go to South Africa himself to record the soundtrack, but couldn't because he had a police record there for making subversive films. \"The Lion King\" soundtrack won numerous awards, including an Oscar, a Golden Globe, and two Grammys. It was then adapted for the Broadway musical version, which won the Tony for Best Musical in 1998.\n\nSince the success of \"The Lion King\", Zimmer has written numerous film scores. His hundredth composition was for \"The Last Samurai\" (2003), for which he won both a Golden Globe and a Broadcast Film Critics nomination in 2004. After composing over a hundred film scores, Zimmer finally performed live for the first time in concert with a hundred-piece orchestra and a hundred-person choir at the twenty-seventh Annual Flanders International Film Festival. \n\nHe has received numerous honours and awards, including: Prestigious Lifetime Achievement Award in Film Composition from the National Board of Review, Frederick Loewe Award in 2003 at the Palm Springs International Film Festival, ASCAP\u2019s Henry Mancini Award for Lifetime Achievement, and BMI's prestigious Richard Kirk Award for lifetime achievement in 1996. Today, Zimmer is considered to be the father of integrating the electronic musical world with traditional orchestral arrangements.\n\nZimmer lives in Los Angeles with his wife Suzanne, and has four children. <a href=\"https://www.last.fm/music/Hans+Zimmer\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.",
    "followers": 1068930,
    "id": "hans_zimmer",
    "img": "https://i.scdn.co/image/14657235e8724181f8b32c6bfa54cdbf86d70852",
    "movies-tv_shows": [
      "Interstellar"
    ],
    "name": "Hans Zimmer"
  },
  {
    "albums": [
      "Riverdale: Original Television Score (Season 1)"
    ],
    "biography": "Blake Neely (born 1969 in Paris, Texas) is a composer, arranger, orchestrator, conductor, and author. His father was a rancher and his brother Tom Neely is an artist in Los Angeles.\n\nNeely has contributed to and been credited on dozens of film and TV projects over the years such as: Everwood (which earned him a 2003 Emmy Award nomination for the theme), all three Pirates of the Caribbean films, King Kong, The Last Samurai and many more. Other film projects in which he is the sole composer are Elvis and Anabelle, Starter for 10, and The Wedding Date.\n\nIn addition, Neely has composed the music for over twenty television series. He has frequently collaborated with writer/director/producer Greg Berlanti, including Everwood, Jack & Bobby, Brothers & Sisters, Eli Stone, Dirty Sexy Money. He has also been credited alongside several well known composers such as Michael Kamen, James Newton Howard, Vangelis, and Hans Zimmer.\n\nAs an author, he has written over 25 instrumental method books such as the best-selling piano method Piano For Dummies.\n\nHe recorded his score for the HBO documentary on David McCullough at the Conway Studios in Hollywood on February 23, 2008. <a href=\"https://www.last.fm/music/Blake+Neely\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.",
    "followers": 10677,
    "id": "blake_neely",
    "img": "https://i.scdn.co/image/86193f7ba3136d145915a9afb477626ed1c9f40a",
    "movies-tv_shows": [
      "Riverdale"
    ],
    "name": "Blake Neely"
  },
  {
    "albums": [
      "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
    ],
    "biography": "There are at least five artists with this name: \n\n(1) John Towner Williams (film score composer)\n(2) John Christopher Williams (classical guitarist)\n(3) John Williams (Irish musician)\n(4) John Williams (blues/jazz guitarist)\n(5) John Knowles Williams (experimental/indie)\n---------------------------------------------\n\n(1) John Towner Williams (born February 8, 1932) is one of the most widely recognized composers of film scores. As of 2017, he has received 50 music-related Academy Award nominations, an accomplishment surpassed by none.\n\nEarly scores and compositions are credited as Johnny Williams.\n\nWilliams is best known for heroic, rousing themes in adventure and fantasy films. This includes some of the highest grossing films of all time, such as the Star Wars movies, the Superman movies, Jaws, E.T. the Extra-Terrestrial, Raiders of the Lost Ark, Jurassic Park, and the first three Harry Potter movies. His richly thematic and highly popular 1977 score to the first Star Wars film was selected by the American Film Institute as the greatest American movie score of all time. Five of his film scores won Oscars.\n\nHis long career has also included many sensitive dramatic scores (such as Schindler's List, Saving Private Ryan, and Munich) and quirky character studies (like Catch Me If You Can, the theme for which makes extensive use of jazz, perhaps in homage to Mancini's famous music for The Pink Panther). Also noteworthy are his recent collaborations with Yo-Yo Ma and Itzhak Perlman on the score for Memoirs of a Geisha, as well as Williams' other more experimental concert works.\n\nWilliams has composed the scores for every Steven Spielberg movie, with the exception of The Color Purple (scored by co-producer Quincy Jones) and Duel (Spielberg's first feature film).\n\nWhile skilled in a variety of twentieth-century compositional idioms, his most familiar style may be described as a form of neo-romanticism, influenced by his predecessors and their use of large-scale orchestral music. Korngold (and other Hollywood Golden Age composers), is clearly evident in many of Williams' most famous works.\n\nAnyone who has watched the Olympics on television has heard Williams' \"Olympic Fanfare and Theme,\" parts of which (especially the last fifteen seconds of the fanfare) receive extensive playtime every four years.\n\nWilliams also composed \"The Mission,\" the worldwide-known theme from NBC News.\n\n---------------------------------------------\n(2) John Christopher Williams is a classical guitar player.\n\nBorn in Melbourne, Australia, on 24 April 1941, to an English father (Len Williams) and an Australian-Chinese mother, Williams was taught initially by his father. At the age of twelve he went to Italy to study under \"The Maestro,\" Andr\u00e9s Segovia. Later, he attended the Royal College of Music in London, studying piano because the school did not have a guitar department at the time. Upon graduation, he was offered the opportunity to create such a department. He seized the opportunity and ran it for the first two years. Williams has maintained links with the College (and with the Northern College in Manchester) ever since.\n\nWilliams is best known as a classical guitarist, but has explored many different musical traditions. He has collaborated with Julian Bream and Paco Pe\u00f1a and was a member of the fusion group Sky. He is also a composer and arranger.\n\nWilliams has commissioned guitar concertos from composers such as Stephen Dodgson, Andr\u00e9 Previn, Patrick Gowers, Richard Harvey, and Steve Gray. He has also worked with composers from his native Australia, including Phillip Houghton, Peter Sculthorpe, Ross Edwards (composer), and Nigel Westlake, to produce guitar works that capture the spirit of his homeland.\n\nHe enjoyed a worldwide hit single with his recording of Cavatina by Stanley Myers, used as the theme tune to the Oscar-winning film The Deer Hunter (1979). The piece had originally been written for piano, for another film ten years earlier, The Walking Stick (1970) but re-written for guitar and expanded by Myers at Williams' invitation. In 1973, Cleo Laine wrote lyrics and recorded the song \"He Was Beautiful\" accompanied by John Williams. A year later, it was a top-five UK hit single for Iris Williams (no relation).\n\nAt the invitation of producer Martin Lewis he created a highly acclaimed classical-rock fusion duet with celebrated rock guitarist Pete Townshend of Townshend's anthemic \"Won't Get Fooled Again\" for the 1979 Amnesty International benefit show The Secret Policeman's Ball. The duet was featured on the resulting album and the film version of the show \u2013 bringing Williams to the broader attention of the rock audience.\n\nThe relationship with Lewis led to Williams' classical-rock fusion band Sky being invited to give the first-ever rock concert to be held at Westminster Abbey \u2013 a benefit concert for Amnesty that Lewis produced in February 1981.\n\nHe is visiting professor at the Royal Academy of Music, London.\n\nWilliams and his artist wife Kathy Panama reside in London and Australia.\n\n---------------------------------------------\n(3) John Williams\n\nJohn Williams is internationally regarded as one of the foremost players of Irish music today. With five All-Ireland titles to his credit, John is the only American-born competitor ever to win first place in the \"senior concertina\" category. His additional talents on flute, button accordion, bodhran, and piano distinguish him as a much sought after multi-instrumentalist in the acoustic scene around the world.\n\nBorn and raised on the Southwest Side of Chicago, John spent his summers during college on the Southwest coast of Ireland in his father\u2019s village of Doolin, Co. Clare. Like Chicago, Doolin became a major musical crossroads for John and countless other local and international musicians to meet and exchange music. Gigging every night in the pubs of Doolin and Lisdoonvarna soon led to performances in Galway, Cork, Dublin, Belfast, Paris, Britanny, Zurich, and New York City (bio http://www.johnwilliamsmusic.com/bio.htm).\n\n---------------------------------------------\n(4) John Williams\n\nA blues/jazz guitarist in Seattle, Washington, whose music is available at Magnatune.com (bio http://magnatune.com/artists/john_williams).\n\n---------------------------------------------\n(5) John Knowles Williams\n\nAn experimental/indie musician. Music is available at sweetnuthin.letsneverdie.net/Music/My_Recordings/ or www.myspace.com/JohnKWilliams. <a href=\"https://www.last.fm/music/John+Williams\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.",
    "followers": 550855,
    "id": "john_williams",
    "img": "https://i.scdn.co/image/bde64350466df4aa41efb9b8b766deef6c46fd08",
    "movies-tv_shows": [
      "E.T the Extra-Terrestrial"
    ],
    "name": "John Williams"
  }
]

const MEDIA_JSON = [
  {
    "albums": [
      "Riverdale: Original Television Score (Season 1)"
    ],
    "artists": [
      "Blake Neely"
    ],
    "cast": [
      "Marisol Nichols",
      "M\u00e4dchen Amick",
      "K.J. Apa",
      "Cole Sprouse",
      "Camila Mendes",
      "Lili Reinhart",
      "Madelaine Petsch",
      "Ashleigh Murray",
      "Luke Perry",
      "Casey Cott",
      "Charles Melton"
    ],
    "description": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale\u2019s wholesome facade.",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "id": "riverdale",
    "img": "http://image.tmdb.org/t/p/w500//1TsbOTztAJtzTRXAhoLsX9a83XX.jpg",
    "name": "Riverdale",
    "seasons": 2,
    "type": 0,
    "years": "2017"
  },
  {
    "albums": [
      "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
    ],
    "artists": [
      "Hans Zimmer"
    ],
    "cast": [
      "Matthew McConaughey",
      "Jessica Chastain",
      "Anne Hathaway",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "Timoth\u00e9e Chalamet",
      "Bill Irwin",
      "Matt Damon",
      "Ellen Burstyn",
      "John Lithgow",
      "Wes Bentley",
      "Topher Grace",
      "David Oyelowo",
      "David Gyasi",
      "William Devane",
      "Josh Stewart",
      "Collette Wolfe",
      "Leah Cairns",
      "Russ Fega",
      "Lena Georgas",
      "Jeff Hephner",
      "Elyes Gabel",
      "Brooke Smith",
      "Liam Dickinson",
      "Francis X. McCarthy",
      "Andrew Borba",
      "Flora Nolan",
      "William Patrick Brown",
      "Cici Leah Campbell",
      "Kristian Van der Heyden",
      "Mark Casimir Dyniewicz",
      "Joseph Oliveira",
      "Ryan Irving",
      "Alexander Michael Helisek",
      "Benjamin Hardy"
    ],
    "description": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "genres": [
      "Adventure",
      "Drama",
      "Science Fiction"
    ],
    "id": "interstellar",
    "img": "http://image.tmdb.org/t/p/w500//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
    "name": "Interstellar",
    "seasons": 0,
    "type": 1,
    "years": "2014"
  },
  {
    "albums": [
      "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
    ],
    "artists": [
      "John Williams"
    ],
    "cast": [
      "Henry Thomas",
      "Drew Barrymore",
      "Robert MacNaughton",
      "Dee Wallace",
      "Peter Coyote",
      "Erika Eleniak",
      "Sean Frye",
      "C. Thomas Howell",
      "K. C. Martel",
      "David M. O'Dell",
      "Richard Swingler",
      "Frank Toth",
      "Pat Welsh"
    ],
    "description": "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
    "genres": [
      "Science Fiction",
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "id": "e_t",
    "img": "http://image.tmdb.org/t/p/w500//8htLKK03TJjKZOXJgihZCu8v0P.jpg",
    "name": "E.T. the Extra-Terrestrial",
    "seasons": 0,
    "type": 1,
    "years": "1982"
  }
]



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
      expect(wrapper.find('CardImg').prop('src')).to.be.equal(album.img)
      expect(wrapper.find('CardTitle').render().text()).to.be.equal(album.name)
      expect(wrapper.find('CardSubtitle').render().text()).to.be.equal(album.year)
      expect(wrapper.find('CardText').render().text()).to.be.equal('25 Tracks')
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
      expect(wrapper.find('CardText').render().text()).to.be.equal("Spotify Followers: " + artist.followers.toLocaleString())
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
});

describe('<ArtistInstance/>', function () {
  it('should render without crashing', function () {
    shallow(<ArtistInstance artist={ARTISTS_JSON[0]} />).render();
  })

  it('should have correct data for name and bio', function () {
    let artist = ARTISTS_JSON[0]
    const wrapper = shallow(<ArtistInstance artist={artist} />);
    expect(wrapper.find({ id : 'name'}).render().text()).to.be.equal(artist.name);
    expect(wrapper.find({ id : 'bio'}).render().text()).to.be.equal(artist.biography); 
    
  })

  it('should have the correct media', function () {
    const wrapper = shallow(<ArtistInstance artist={ARTISTS_JSON[0]} />);
    const expected_image = "https://i.scdn.co/image/14657235e8724181f8b32c6bfa54cdbf86d70852";
    const expected_spotify = "https://open.spotify.com/embed?uri=spotify:artist:0YC192cP3KPCRWx8zr8MfZ";
    expect(wrapper.find({ alt : "Artist"}).prop('src')).to.be.equal(expected_image);
    expect(wrapper.find('iframe').prop('src')).to.be.equal(expected_spotify); 
    
  })
});