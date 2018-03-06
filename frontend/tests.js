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
import { MediaInstance } from './src/components/instance-pages/MediaInstance'; 

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

const RIVERDALE_JSON = {
    "cast_data": {
        "cast": [
            {
                "character": "Hermione Lodge",
                "credit_id": "589645bc9251415a5b00a82d",
                "gender": 1,
                "id": 84457,
                "name": "Marisol Nichols",
                "order": 500,
                "profile_path": "/qdnvLJghwN0NZPY3UDv4Zf6q9Un.jpg"
            },
            {
                "character": "Alice Cooper",
                "credit_id": "586e8e759251412963009b73",
                "gender": 1,
                "id": 6714,
                "name": "Mädchen Amick",
                "order": 7,
                "profile_path": "/WEUyhEwheG5kUZLwKKW8sNY0NP.jpg"
            },
            {
                "character": "Archie Andrews",
                "credit_id": "584e4a9892514118e400a193",
                "gender": 2,
                "id": 1680339,
                "name": "K.J. Apa",
                "order": 0,
                "profile_path": "/pm0exKBsLrwRD4V1DxJ9HPJxOp.jpg"
            },
            {
                "character": "Jughead Jones",
                "credit_id": "584e4ab892514118e0009e09",
                "gender": 2,
                "id": 56730,
                "name": "Cole Sprouse",
                "order": 3,
                "profile_path": "/aJxTvZjse8hAljcvljqTaH45eaB.jpg"
            },
            {
                "character": "Veronica Lodge",
                "credit_id": "584e4aebc3a368322400a5c9",
                "gender": 1,
                "id": 1721740,
                "name": "Camila Mendes",
                "order": 1,
                "profile_path": "/iqafgjARjK3eZ7ZG4gI5THXyTdc.jpg"
            },
            {
                "character": "Betty Cooper",
                "credit_id": "584e4b0d92514118e400a1e1",
                "gender": 1,
                "id": 1136940,
                "name": "Lili Reinhart",
                "order": 2,
                "profile_path": "/iyG660kcBeQImBF4XvieZ9X5GD1.jpg"
            },
            {
                "character": "Cheryl Blossom",
                "credit_id": "5857f7709251416f1005e967",
                "gender": 1,
                "id": 1592855,
                "name": "Madelaine Petsch",
                "order": 4,
                "profile_path": "/lK3zusgeNnQeMVSz6ikd6rBa1jJ.jpg"
            },
            {
                "character": "Josie McCoy",
                "credit_id": "5857f78a925141594100a2db",
                "gender": 1,
                "id": 1717473,
                "name": "Ashleigh Murray",
                "order": 6,
                "profile_path": "/3Rx1lGj3ZMBu1qQ6TJPvQ3xrSfY.jpg"
            },
            {
                "character": "Fred Andrews",
                "credit_id": "5857f7bec3a368258f057ee8",
                "gender": 2,
                "id": 8395,
                "name": "Luke Perry",
                "order": 5,
                "profile_path": "/78TAr0wLoRHyubnYxjyHNCt70V2.jpg"
            },
            {
                "character": "Kevin Keller",
                "credit_id": "5857f8029251416f1005e9d5",
                "gender": 2,
                "id": 1724690,
                "name": "Casey Cott",
                "order": 8,
                "profile_path": "/bMWn0qPfgYjl7zJoMI7asvychRw.jpg"
            },
            {
                "character": "Reggie Mantle",
                "credit_id": "59e57893925141024e001a7f",
                "gender": 0,
                "id": 1907002,
                "name": "Charles Melton",
                "order": 500,
                "profile_path": "/s3vP8xqKneDnCk5rS6eL8rWxM3t.jpg"
            }
        ],
        "crew": [
            {
                "credit_id": "5a4a812e9251415c9b014e4c",
                "department": "Production",
                "gender": 0,
                "id": 1326540,
                "job": "Supervising Producer",
                "name": "Shepard Boucher",
                "profile_path": null
            }
        ],
        "id": 69050
    },
    "image_data": {
        "backdrops": [
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
                "height": 1125,
                "iso_639_1": null,
                "vote_average": 5.454,
                "vote_count": 3,
                "width": 2000
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/a3G7FsQNfo9mrnZtXN3yaDQhAgz.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.39,
                "vote_count": 6,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/2BdeV1gjkWMTFEldekbqFI5qU5n.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/h26n2RPVeoTIEdv96jbxCQKSqaW.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778385772913817,
                "file_path": "/gS91Amt1arLnP21Pi3nm4ObFF4Y.jpg",
                "height": 731,
                "iso_639_1": "en",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1300
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/4IeZIgxxeRJdgAYMd0Frc7alKcJ.jpg",
                "height": 1395,
                "iso_639_1": null,
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 2480
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/aNKIbzLftZ14NnZJVZTQHL332Ho.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/sEqHXTDUr3W6oNFFIgR5re8UQxZ.jpg",
                "height": 720,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1280
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/biY4RGFlVQXnHlfrX7DfC6ekJvE.jpg",
                "height": 720,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1280
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/tOOjl0thkVYfcwVLz2up602NQo8.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/dmwqioFelVSmLrZ894ONBX9iaxz.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            }
        ],
        "id": 69050,
        "posters": [
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/xFpB05JnCPrIQ32ahGxxNRRSNPO.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.456,
                "vote_count": 5,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/6zBWSuYW3Ps1nTfeMS8siS4KUaA.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.384,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/pHcNHYPg0c2vg7qay6wjJoApUgS.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.384,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/1TsbOTztAJtzTRXAhoLsX9a83XX.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6472491909385113,
                "file_path": "/mdVC2XeReFIs9DCUxqyI7SYyl0I.jpg",
                "height": 1236,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 800
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/kE5bq2njiFhMTIRG4358ZZJ3Y59.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 2000
            },
            {
                "aspect_ratio": 0.7012622720897616,
                "file_path": "/kmE1dsLZy4LTv8kunKlzsYcvGoT.jpg",
                "height": 1426,
                "iso_639_1": "en",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1000
            },
            {
                "aspect_ratio": 0.68,
                "file_path": "/9YUg8YptB2UkTpDwFOuuC7GR2VB.jpg",
                "height": 1000,
                "iso_639_1": "en",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 680
            },
            {
                "aspect_ratio": 0.68,
                "file_path": "/npIBGqQIDPNzJ05pXIpy7HDKn4i.jpg",
                "height": 1000,
                "iso_639_1": "en",
                "vote_average": 5.044,
                "vote_count": 3,
                "width": 680
            },
            {
                "aspect_ratio": 0.68,
                "file_path": "/qiZ8j28i9y0Je0D78khR5yaEX5Y.jpg",
                "height": 1000,
                "iso_639_1": "he",
                "vote_average": 0,
                "vote_count": 0,
                "width": 680
            },
            {
                "aspect_ratio": 0.6501950585175552,
                "file_path": "/78EsEG8Bizd5WMmYiG4UZD1JVim.jpg",
                "height": 1538,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1000
            }
        ]
    },
    "model_data": {
        "backdrop_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
        "created_by": [
            {
                "gender": 0,
                "id": 1098032,
                "name": "Roberto Aguirre-Sacasa",
                "profile_path": "/PtJSrAk7LDqaV5jExCYl10lcsN.jpg"
            }
        ],
        "episode_run_time": [
            45
        ],
        "first_air_date": "2017-01-26",
        "genres": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 9648,
                "name": "Mystery"
            }
        ],
        "homepage": "http://www.cwtv.com/shows/riverdale/",
        "id": 69050,
        "in_production": true,
        "languages": [
            "en",
            "pl"
        ],
        "last_air_date": "2018-02-07",
        "name": "Riverdale",
        "networks": [
            {
                "id": 71,
                "name": "The CW"
            }
        ],
        "number_of_episodes": 26,
        "number_of_seasons": 2,
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Riverdale",
        "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
        "popularity": 46.244484,
        "poster_path": "/1TsbOTztAJtzTRXAhoLsX9a83XX.jpg",
        "production_companies": [
            {
                "id": 1957,
                "name": "Warner Bros. Television"
            },
            {
                "id": 27711,
                "name": "Berlanti Productions"
            }
        ],
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
        "status": "Returning Series",
        "type": "Scripted",
        "vote_average": 7.2,
        "vote_count": 191
    },
    "related_data": {
        "albums": {
            "e_t": {
                "artist": {
                    "link": "/artist/john_williams",
                    "name": "John Williams"
                },
                "media": {
                    "link": "/tv-movie/e_t",
                    "name": "E.T. the Extra-Terrestrial"
                }
            },
            "interstellar": {
                "artist": {
                    "link": "/artist/hans_zimmer",
                    "name": "Hans Zimmer"
                },
                "media": {
                    "link": "/tv-movie/interstellar",
                    "name": "Interstellar"
                }
            },
            "riverdale": {
                "artist": {
                    "link": "/artist/blake_neely",
                    "name": "Blake Neely"
                },
                "media": {
                    "link": "/tv-movie/riverdale",
                    "name": "Riverdale"
                }
            }
        },
        "artists": {
            "blake_neely": {
                "album": {
                    "link": "/album/riverdale",
                    "name": "Riverdale: Original Television Score (Season 1)"
                },
                "media": {
                    "link": "/tv-movie/riverdale",
                    "name": "Riverdale"
                }
            },
            "hans_zimmer": {
                "album": {
                    "link": "/album/interstellar",
                    "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
                },
                "media": {
                    "link": "/tv-movie/interstellar",
                    "name": "Interstellar"
                }
            },
            "john_williams": {
                "album": {
                    "link": "/album/e_t",
                    "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
                },
                "media": {
                    "link": "/tv-movie/e_t",
                    "name": "E.T the Extra-Terrestrial"
                }
            }
        },
        "media": {
            "e_t": {
                "album": {
                    "link": "/album/e_t",
                    "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
                },
                "artist": {
                    "link": "/artist/john_williams",
                    "name": "John Williams"
                }
            },
            "interstellar": {
                "album": {
                    "link": "/album/interstellar",
                    "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
                },
                "artist": {
                    "link": "/artist/hans_zimmer",
                    "name": "Hans Zimmer"
                }
            },
            "riverdale": {
                "album": {
                    "link": "/album/riverdale",
                    "name": "Riverdale: Original Television Score (Season 1)"
                },
                "artist": {
                    "link": "/artist/blake_neely",
                    "name": "Blake Neely"
                }
            }
        }
    },
    "video_data": {
        "id": 69050,
        "results": [
            {
                "id": "5892ead89251416ee300269d",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "9XmFTADupMc",
                "name": "Riverdale (The CW) Trailer HD",
                "site": "YouTube",
                "size": 720,
                "type": "Trailer"
            }
        ]
    }
};

const INTERSTELLAR_JSON = {
    "cast_data": {
        "cast": [
            {
                "cast_id": 9,
                "character": "Joseph Cooper",
                "credit_id": "52fe4bbf9251416c910e47cb",
                "gender": 2,
                "id": 10297,
                "name": "Matthew McConaughey",
                "order": 0,
                "profile_path": "/jdRmHrG0TWXGhs4tO6TJNSoL25T.jpg"
            },
            {
                "cast_id": 17,
                "character": "Murph Cooper",
                "credit_id": "52fe4bbf9251416c910e47f1",
                "gender": 1,
                "id": 83002,
                "name": "Jessica Chastain",
                "order": 1,
                "profile_path": "/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg"
            },
            {
                "cast_id": 169,
                "character": "Dr. Amelia Brand",
                "credit_id": "57fe146fc3a368504a00261e",
                "gender": 1,
                "id": 1813,
                "name": "Anne Hathaway",
                "order": 2,
                "profile_path": "/xENM3XJAtdpolwELYDy9iaCtU4m.jpg"
            },
            {
                "cast_id": 18,
                "character": "Professor John Brand",
                "credit_id": "52fe4bbf9251416c910e47f5",
                "gender": 2,
                "id": 3895,
                "name": "Michael Caine",
                "order": 3,
                "profile_path": "/vvj0JMSFpOajXCE46Hy4dyqSP2U.jpg"
            },
            {
                "cast_id": 21,
                "character": "Tom Cooper",
                "credit_id": "52fe4bbf9251416c910e4805",
                "gender": 2,
                "id": 1893,
                "name": "Casey Affleck",
                "order": 4,
                "profile_path": "/kPNMpiZHsAzeQar4DiNsrekwHBU.jpg"
            },
            {
                "cast_id": 24,
                "character": "Young Murph Cooper",
                "credit_id": "52fe4bbf9251416c910e4811",
                "gender": 1,
                "id": 851784,
                "name": "Mackenzie Foy",
                "order": 5,
                "profile_path": "/7vbvMcjwpNL0KWwHMmJzXzLkZTK.jpg"
            },
            {
                "cast_id": 23,
                "character": "Young Tom Cooper",
                "credit_id": "52fe4bbf9251416c910e480d",
                "gender": 2,
                "id": 1190668,
                "name": "Timothée Chalamet",
                "order": 6,
                "profile_path": "/eNZRAbArxck5PGxKp6zzCeaTKwH.jpg"
            },
            {
                "cast_id": 26,
                "character": "TARS (voice)",
                "credit_id": "52fe4bbf9251416c910e4819",
                "gender": 2,
                "id": 58549,
                "name": "Bill Irwin",
                "order": 7,
                "profile_path": "/zjvhlCC1LA5JUwfScQTwS1xLciP.jpg"
            },
            {
                "cast_id": 31,
                "character": "Dr. Mann",
                "credit_id": "52fe4bbf9251416c910e482d",
                "gender": 2,
                "id": 1892,
                "name": "Matt Damon",
                "order": 8,
                "profile_path": "/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg"
            },
            {
                "cast_id": 22,
                "character": "Old Murph Cooper",
                "credit_id": "52fe4bbf9251416c910e4809",
                "gender": 1,
                "id": 9560,
                "name": "Ellen Burstyn",
                "order": 9,
                "profile_path": "/kxWFljG3JjJMbOMCLm0SkrPQjhf.jpg"
            },
            {
                "cast_id": 25,
                "character": "Donald",
                "credit_id": "52fe4bbf9251416c910e4815",
                "gender": 2,
                "id": 12074,
                "name": "John Lithgow",
                "order": 10,
                "profile_path": "/uquz3dZ0fs0lAK57lCXwxaslVkb.jpg"
            },
            {
                "cast_id": 28,
                "character": "Dr. Doyle",
                "credit_id": "52fe4bbf9251416c910e4821",
                "gender": 2,
                "id": 8210,
                "name": "Wes Bentley",
                "order": 11,
                "profile_path": "/fbHHalL9CS52zvJp015G31vwX23.jpg"
            },
            {
                "cast_id": 27,
                "character": "Getty",
                "credit_id": "52fe4bbf9251416c910e481d",
                "gender": 2,
                "id": 17052,
                "name": "Topher Grace",
                "order": 12,
                "profile_path": "/nM4H9Uqn2V4shWCxxnDqT6ZaJOu.jpg"
            },
            {
                "cast_id": 29,
                "character": "Principal",
                "credit_id": "52fe4bbf9251416c910e4825",
                "gender": 2,
                "id": 35013,
                "name": "David Oyelowo",
                "order": 13,
                "profile_path": "/uhFLGQqNmhLgcqgITkoGoHy9FTl.jpg"
            },
            {
                "cast_id": 30,
                "character": "Dr. Romilly",
                "credit_id": "52fe4bbf9251416c910e4829",
                "gender": 2,
                "id": 55411,
                "name": "David Gyasi",
                "order": 14,
                "profile_path": "/jkqSPSGNaWZuGLDBUrL9grAXLkM.jpg"
            },
            {
                "cast_id": 37,
                "character": "NASA Board Member",
                "credit_id": "54259750c3a3680876005f94",
                "gender": 2,
                "id": 21416,
                "name": "William Devane",
                "order": 15,
                "profile_path": "/SYI4fML7EmZDghuieWf6SpiyRF.jpg"
            },
            {
                "cast_id": 38,
                "character": "CASE (voice)",
                "credit_id": "545db7ab0e0a261fb6005d65",
                "gender": 2,
                "id": 40039,
                "name": "Josh Stewart",
                "order": 16,
                "profile_path": "/x9ZQibxASPwVWGeQn4Y5dcU2ZJG.jpg"
            },
            {
                "cast_id": 39,
                "character": "Ms. Kelly",
                "credit_id": "545db7d70e0a261fb6005d6f",
                "gender": 1,
                "id": 86624,
                "name": "Collette Wolfe",
                "order": 17,
                "profile_path": "/aSD4h5379b2eEw3bLou9ByLimmq.jpg"
            },
            {
                "cast_id": 40,
                "character": "Lois Cooper",
                "credit_id": "545db7f5c3a3686cbb000db6",
                "gender": 1,
                "id": 32202,
                "name": "Leah Cairns",
                "order": 18,
                "profile_path": "/Asuotouxe6Se3stoMP7vrLE1EaD.jpg"
            },
            {
                "cast_id": 141,
                "character": "Crew Chief",
                "credit_id": "55191d18c3a3684b6b002414",
                "gender": 2,
                "id": 535,
                "name": "Russ Fega",
                "order": 19,
                "profile_path": "/7JFQueMbXqGIz16wKBlok7WfNNz.jpg"
            },
            {
                "cast_id": 142,
                "character": "Nurse Practitioner",
                "credit_id": "55191d5b9251416f0000706f",
                "gender": 0,
                "id": 171901,
                "name": "Lena Georgas",
                "order": 20,
                "profile_path": "/a16eFCpLMJ6n2RoOPej372XzWX.jpg"
            },
            {
                "cast_id": 143,
                "character": "Doctor",
                "credit_id": "55191d8bc3a3682aa8000cb4",
                "gender": 2,
                "id": 212689,
                "name": "Jeff Hephner",
                "order": 21,
                "profile_path": "/bNnvbOCBS0LZAqdT1cW2UcrnRw2.jpg"
            },
            {
                "cast_id": 144,
                "character": "Administrator",
                "credit_id": "55191db092514115000044c3",
                "gender": 2,
                "id": 78050,
                "name": "Elyes Gabel",
                "order": 22,
                "profile_path": "/tNAexPOefzEJEpnOVBWs34BNLsh.jpg"
            },
            {
                "cast_id": 145,
                "character": "Nurse",
                "credit_id": "55191dd7c3a3684bd80022dc",
                "gender": 1,
                "id": 31649,
                "name": "Brooke Smith",
                "order": 23,
                "profile_path": "/fiR32HbDUWCZuRjdlknQMIyIsrw.jpg"
            },
            {
                "cast_id": 146,
                "character": "Coop",
                "credit_id": "55287dde92514111d600086d",
                "gender": 2,
                "id": 1452481,
                "name": "Liam Dickinson",
                "order": 24,
                "profile_path": "/ih6hto8rsKZg71Qk4vniU8Xj8cj.jpg"
            },
            {
                "cast_id": 147,
                "character": "Boots",
                "credit_id": "55ea8067c3a3682c62008d3d",
                "gender": 2,
                "id": 100650,
                "name": "Francis X. McCarthy",
                "order": 25,
                "profile_path": "/kJe5FQXtccOzAzhO9RZaPKhWht2.jpg"
            },
            {
                "cast_id": 148,
                "character": "Smith",
                "credit_id": "55ea8068c3a3682c5d009739",
                "gender": 2,
                "id": 167720,
                "name": "Andrew Borba",
                "order": 26,
                "profile_path": "/knHlGxYCOO3tqFTiSoYWusjzdm1.jpg"
            },
            {
                "cast_id": 149,
                "character": "Girl on Truck",
                "credit_id": "55ea80689251413e3a008ab7",
                "gender": 1,
                "id": 1505363,
                "name": "Flora Nolan",
                "order": 27,
                "profile_path": "/f4NdIEvsknD6fMH9GGN2yRciwpN.jpg"
            },
            {
                "cast_id": 150,
                "character": "NASA Employee (uncredited)",
                "credit_id": "56b63be09251413ca1002d04",
                "gender": 2,
                "id": 1452865,
                "name": "William Patrick Brown",
                "order": 28,
                "profile_path": "/7ap8ZBoGn20W6DwFKRUdzycMBTa.jpg"
            },
            {
                "cast_id": 151,
                "character": "NASA Scientist (uncredited)",
                "credit_id": "56b63c06c3a36806f100962f",
                "gender": 1,
                "id": 1503849,
                "name": "Cici Leah Campbell",
                "order": 29,
                "profile_path": "/eV5g6RZ5OVVg2kEYkYu8MndanD6.jpg"
            },
            {
                "cast_id": 152,
                "character": "Scientist (uncredited)",
                "credit_id": "56b63c949251414a3a004185",
                "gender": 2,
                "id": 1573547,
                "name": "Kristian Van der Heyden",
                "order": 30,
                "profile_path": "/m3p1V8rit1kcab2arukZRPoddiM.jpg"
            },
            {
                "cast_id": 153,
                "character": "NASA Inspector (uncredited)",
                "credit_id": "56b63ce792514112b9008b59",
                "gender": 2,
                "id": 97447,
                "name": "Mark Casimir Dyniewicz",
                "order": 31,
                "profile_path": "/k50HeN23G34LixmL3sHGTyJU93p.jpg"
            },
            {
                "cast_id": 154,
                "character": "Astronaut (uncredited)",
                "credit_id": "56b63d5d9251413ca1002d32",
                "gender": 2,
                "id": 1360008,
                "name": "Joseph Oliveira",
                "order": 32,
                "profile_path": "/nFJX5qWKlHyew7AHKUFE3EQnMO5.jpg"
            },
            {
                "cast_id": 170,
                "character": "Popcorn Seller (uncredited)",
                "credit_id": "580e5fc09251416e0a002b6d",
                "gender": 2,
                "id": 1699056,
                "name": "Ryan Irving",
                "order": 33,
                "profile_path": "/2GoGL9jsg6bfmhfGfChkqDuRe1N.jpg"
            },
            {
                "cast_id": 171,
                "character": "Construction Boss (uncredited)",
                "credit_id": "580e5fe3c3a3683867000507",
                "gender": 2,
                "id": 1663832,
                "name": "Alexander Michael Helisek",
                "order": 34,
                "profile_path": "/gR6ykV3iQVZlA3KnuOk5hmFKDi7.jpg"
            },
            {
                "cast_id": 172,
                "character": "NASA Scientist (uncredited)",
                "credit_id": "580e5ff5c3a36859aa002f2e",
                "gender": 2,
                "id": 1699057,
                "name": "Benjamin Hardy",
                "order": 35,
                "profile_path": "/o08lN3cGLguomAozF1uuDQTIl7r.jpg"
            }
        ],
        "crew": [
            {
                "credit_id": "54cba75b925141678e014d1a",
                "department": "Art",
                "gender": 0,
                "id": 1328137,
                "job": "Art Direction",
                "name": "Kendelle Elliott",
                "profile_path": null
            },
            {
                "credit_id": "54cba770c3a3680924010431",
                "department": "Art",
                "gender": 0,
                "id": 991724,
                "job": "Art Direction",
                "name": "Eggert Ketilsson",
                "profile_path": null
            },
            {
                "credit_id": "54cba799925141678e014d20",
                "department": "Art",
                "gender": 2,
                "id": 14349,
                "job": "Art Direction",
                "name": "David F. Klassen",
                "profile_path": null
            },
            {
                "credit_id": "54cba7acc3a36854a9003043",
                "department": "Art",
                "gender": 0,
                "id": 21718,
                "job": "Art Direction",
                "name": "Gary Kosko",
                "profile_path": null
            },
            {
                "credit_id": "54cba7c392514157cc01098b",
                "department": "Art",
                "gender": 0,
                "id": 1334782,
                "job": "Art Direction",
                "name": "Josh Lusby",
                "profile_path": null
            },
            {
                "credit_id": "54cba7d4925141678c014f6b",
                "department": "Art",
                "gender": 2,
                "id": 988882,
                "job": "Art Direction",
                "name": "Eric Sundahl",
                "profile_path": null
            },
            {
                "credit_id": "5319bc1a92514177b4002655",
                "department": "Editing",
                "gender": 0,
                "id": 3904,
                "job": "Editor",
                "name": "Lee Smith",
                "profile_path": "/5XNVKGYwQraa4LYk0pjRhvdC3c1.jpg"
            },
            {
                "credit_id": "52fe4bbf9251416c910e47c1",
                "department": "Directing",
                "gender": 2,
                "id": 525,
                "job": "Director",
                "name": "Christopher Nolan",
                "profile_path": "/7OGmfDF4VHLLgbjxuEwTj3ga0uQ.jpg"
            },
            {
                "credit_id": "52fe4bbf9251416c910e47e7",
                "department": "Production",
                "gender": 1,
                "id": 2162,
                "job": "Producer",
                "name": "Lynda Obst",
                "profile_path": null
            },
            {
                "credit_id": "52fe4bbf9251416c910e47ed",
                "department": "Production",
                "gender": 2,
                "id": 525,
                "job": "Producer",
                "name": "Christopher Nolan",
                "profile_path": "/7OGmfDF4VHLLgbjxuEwTj3ga0uQ.jpg"
            },
            {
                "credit_id": "52fe4bbf9251416c910e47fb",
                "department": "Camera",
                "gender": 0,
                "id": 74401,
                "job": "Director of Photography",
                "name": "Hoyte van Hoytema",
                "profile_path": "/dT5fWu3M9qJQlE5rItpSGUUOMC0.jpg"
            },
            {
                "credit_id": "52fe4bbf9251416c910e4801",
                "department": "Sound",
                "gender": 2,
                "id": 947,
                "job": "Original Music Composer",
                "name": "Hans Zimmer",
                "profile_path": "/7IjJpvGtCfY0DsritmfCh2iX9I4.jpg"
            },
            {
                "credit_id": "5505e4cb92514179fb000a9a",
                "department": "Writing",
                "gender": 2,
                "id": 527,
                "job": "Writer",
                "name": "Jonathan Nolan",
                "profile_path": "/rYBQ8M3hDDY0eThVIvWHmrf4i0Y.jpg"
            },
            {
                "credit_id": "5505e4dac3a36862e900346c",
                "department": "Writing",
                "gender": 2,
                "id": 525,
                "job": "Writer",
                "name": "Christopher Nolan",
                "profile_path": "/7OGmfDF4VHLLgbjxuEwTj3ga0uQ.jpg"
            },
            {
                "credit_id": "5319bc2f92514177bf0025ac",
                "department": "Art",
                "gender": 2,
                "id": 15327,
                "job": "Production Design",
                "name": "Nathan Crowley",
                "profile_path": "/lI5Q6oEf1nj3AAHuTltwpckQW3n.jpg"
            },
            {
                "credit_id": "5319bc4792514177c200259d",
                "department": "Costume & Make-Up",
                "gender": 1,
                "id": 7418,
                "job": "Costume Design",
                "name": "Mary Zophres",
                "profile_path": null
            },
            {
                "credit_id": "5319bc8592514177c20025a7",
                "department": "Production",
                "gender": 1,
                "id": 556,
                "job": "Producer",
                "name": "Emma Thomas",
                "profile_path": "/f12TsNlAEomPdwxueS7ImMoJtsP.jpg"
            },
            {
                "credit_id": "5319bc9892514177b7002639",
                "department": "Production",
                "gender": 0,
                "id": 561,
                "job": "Casting",
                "name": "John Papsidera",
                "profile_path": "/quM89TMS6BncoIh4NdlWugXVhuF.jpg"
            },
            {
                "credit_id": "54cba805c3a36874b70162ec",
                "department": "Art",
                "gender": 2,
                "id": 65711,
                "job": "Set Decoration",
                "name": "Gary Fettis",
                "profile_path": null
            },
            {
                "credit_id": "54cba8239251416789014aa2",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1417399,
                "job": "Hairstylist",
                "name": "Patricia DeHaney",
                "profile_path": null
            },
            {
                "credit_id": "54cba838c3a368044800f36f",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1420642,
                "job": "Hairstylist",
                "name": "Jose Zamora",
                "profile_path": null
            },
            {
                "credit_id": "54cba84e92514157cc01098f",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1322015,
                "job": "Makeup Department Head",
                "name": "Luisa Abel",
                "profile_path": null
            },
            {
                "credit_id": "54cba865925141635e00cd96",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1412185,
                "job": "Makeup Artist",
                "name": "Jay Wejebe",
                "profile_path": null
            },
            {
                "credit_id": "54cba898c3a3687a6501048f",
                "department": "Production",
                "gender": 0,
                "id": 18926,
                "job": "Production Manager",
                "name": "Casey Grant",
                "profile_path": null
            },
            {
                "credit_id": "54cba8c3c3a3687a65010494",
                "department": "Production",
                "gender": 0,
                "id": 1400007,
                "job": "Production Supervisor",
                "name": "Michelle Brattson",
                "profile_path": null
            },
            {
                "credit_id": "54cba8e6925141678e014d32",
                "department": "Art",
                "gender": 0,
                "id": 1395430,
                "job": "Art Department Coordinator",
                "name": "Jenne Lee",
                "profile_path": null
            },
            {
                "credit_id": "54cba9529251416789014ab6",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1329113,
                "job": "Costume Supervisor",
                "name": "Lynda Foote",
                "profile_path": null
            },
            {
                "credit_id": "54cba97dc3a368044800f38c",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1420643,
                "job": "Costume Supervisor",
                "name": "Heather Moore",
                "profile_path": null
            },
            {
                "credit_id": "54cbacbfc3a36879df0108df",
                "department": "Camera",
                "gender": 0,
                "id": 1357066,
                "job": "Camera Operator",
                "name": "P. Scott Sakamoto",
                "profile_path": null
            },
            {
                "credit_id": "54cbacf2925141635e00cdf5",
                "department": "Camera",
                "gender": 0,
                "id": 1399071,
                "job": "Helicopter Camera",
                "name": "Hans Bjerno",
                "profile_path": "/tzeE3ATzHWyEQH32GYeGuSgr1xz.jpg"
            },
            {
                "credit_id": "54cbad19c3a36874b701635b",
                "department": "Camera",
                "gender": 1,
                "id": 1324652,
                "job": "Still Photographer",
                "name": "Melinda Sue Gordon",
                "profile_path": null
            },
            {
                "credit_id": "54cbad3fc3a36879df0108eb",
                "department": "Camera",
                "gender": 0,
                "id": 1417834,
                "job": "Camera Technician",
                "name": "Dane Bjerno",
                "profile_path": null
            },
            {
                "credit_id": "5505e47ac3a3686b75000a29",
                "department": "Production",
                "gender": 0,
                "id": 113913,
                "job": "Executive Producer",
                "name": "Jordan Goldberg",
                "profile_path": null
            },
            {
                "credit_id": "5505e487c3a368262e003054",
                "department": "Production",
                "gender": 0,
                "id": 29608,
                "job": "Executive Producer",
                "name": "Jake Myers",
                "profile_path": null
            },
            {
                "credit_id": "5505e495c3a36862dd0030ef",
                "department": "Production",
                "gender": 0,
                "id": 1157625,
                "job": "Executive Producer",
                "name": "Kip Thorne",
                "profile_path": null
            },
            {
                "credit_id": "5505e4a292514179fb000a96",
                "department": "Production",
                "gender": 0,
                "id": 54211,
                "job": "Executive Producer",
                "name": "Thomas Tull",
                "profile_path": "/5UG4FK7rsmhzJDYxpU28acqfxtu.jpg"
            },
            {
                "credit_id": "55190d6e92514115000041a6",
                "department": "Art",
                "gender": 0,
                "id": 1447570,
                "job": "Art Department Coordinator",
                "name": "Joel Tobman",
                "profile_path": null
            },
            {
                "credit_id": "55190d8bc3a3682aa80009ca",
                "department": "Art",
                "gender": 0,
                "id": 1424897,
                "job": "Assistant Art Director",
                "name": "Lauren Abiouness",
                "profile_path": null
            },
            {
                "credit_id": "55190dc09251416f0a007037",
                "department": "Art",
                "gender": 0,
                "id": 1447571,
                "job": "Assistant Art Director",
                "name": "Travis Witkowski",
                "profile_path": null
            },
            {
                "credit_id": "55190e0dc3a36862ef00714f",
                "department": "Art",
                "gender": 0,
                "id": 1421695,
                "job": "Construction Coordinator",
                "name": "Craig Henderson",
                "profile_path": null
            },
            {
                "credit_id": "55190e50c3a3681f84002908",
                "department": "Art",
                "gender": 0,
                "id": 1424898,
                "job": "Construction Coordinator",
                "name": "Brian Walker",
                "profile_path": null
            },
            {
                "credit_id": "55190ec6c3a3684bd8002005",
                "department": "Art",
                "gender": 0,
                "id": 1447574,
                "job": "Greensman",
                "name": "Nathan Davey",
                "profile_path": null
            },
            {
                "credit_id": "55190edbc3a3681f84002926",
                "department": "Art",
                "gender": 0,
                "id": 1447575,
                "job": "Greensman",
                "name": "Steven Hanks",
                "profile_path": null
            },
            {
                "credit_id": "55190f13c3a36862ef007197",
                "department": "Art",
                "gender": 0,
                "id": 1415611,
                "job": "Greensman",
                "name": "Christopher Morente",
                "profile_path": null
            },
            {
                "credit_id": "55190f2d9251416f0a00709b",
                "department": "Art",
                "gender": 0,
                "id": 1447578,
                "job": "Greensman",
                "name": "Darryl Stogre",
                "profile_path": null
            },
            {
                "credit_id": "55190f519251412c1e00596a",
                "department": "Art",
                "gender": 0,
                "id": 1447582,
                "job": "Leadman",
                "name": "Mark Weissenfluh",
                "profile_path": null
            },
            {
                "credit_id": "55190f8b9251415aab001e5c",
                "department": "Crew",
                "gender": 0,
                "id": 1447583,
                "job": "Property Master",
                "name": "Ritchie Kremer",
                "profile_path": null
            },
            {
                "credit_id": "55190fe2c3a3685cfa005191",
                "department": "Art",
                "gender": 0,
                "id": 1399290,
                "job": "Set Designer",
                "name": "Ernie Avila",
                "profile_path": null
            },
            {
                "credit_id": "55190ff99251416f00006e37",
                "department": "Art",
                "gender": 0,
                "id": 1399291,
                "job": "Set Designer",
                "name": "Andrew Birdzell",
                "profile_path": null
            },
            {
                "credit_id": "55191016925141731c0028b8",
                "department": "Art",
                "gender": 0,
                "id": 1392896,
                "job": "Set Designer",
                "name": "Martha Johnston",
                "profile_path": null
            },
            {
                "credit_id": "5519102b9251415918001c8a",
                "department": "Art",
                "gender": 1,
                "id": 1360094,
                "job": "Set Designer",
                "name": "Noelle King",
                "profile_path": null
            },
            {
                "credit_id": "5519104bc3a3685cfa0051ac",
                "department": "Art",
                "gender": 0,
                "id": 81731,
                "job": "Set Designer",
                "name": "Paul Sonski",
                "profile_path": null
            },
            {
                "credit_id": "551910609251412c1e0059a9",
                "department": "Art",
                "gender": 2,
                "id": 988882,
                "job": "Set Designer",
                "name": "Eric Sundahl",
                "profile_path": null
            },
            {
                "credit_id": "551910749251411500004260",
                "department": "Art",
                "gender": 0,
                "id": 21796,
                "job": "Set Designer",
                "name": "Sally Thornton",
                "profile_path": null
            },
            {
                "credit_id": "5519108bc3a3685cfa0051b8",
                "department": "Art",
                "gender": 2,
                "id": 14762,
                "job": "Set Designer",
                "name": "Robert Woodruff",
                "profile_path": null
            },
            {
                "credit_id": "551910f5c3a3684b6b0021c7",
                "department": "Art",
                "gender": 0,
                "id": 1400019,
                "job": "Sculptor",
                "name": "Dan Engle",
                "profile_path": null
            },
            {
                "credit_id": "5519110fc3a3681f840029a7",
                "department": "Art",
                "gender": 2,
                "id": 98681,
                "job": "Sculptor",
                "name": "Todd Rex",
                "profile_path": null
            },
            {
                "credit_id": "551911289251415918001ccb",
                "department": "Art",
                "gender": 0,
                "id": 1355530,
                "job": "Sculptor",
                "name": "Cuitlahuac Morales Velazquez",
                "profile_path": null
            },
            {
                "credit_id": "551911799251412b6d005415",
                "department": "Sound",
                "gender": 2,
                "id": 52193,
                "job": "ADR & Dubbing",
                "name": "R.J. Kizer",
                "profile_path": null
            },
            {
                "credit_id": "551911e59251415918001cf4",
                "department": "Sound",
                "gender": 0,
                "id": 1397823,
                "job": "Foley",
                "name": "Alyson Dee Moore",
                "profile_path": null
            },
            {
                "credit_id": "551911fc9251416f00006ea1",
                "department": "Sound",
                "gender": 2,
                "id": 1116937,
                "job": "Foley",
                "name": "John Roesch",
                "profile_path": null
            },
            {
                "credit_id": "55191222c3a36862ef007237",
                "department": "Editing",
                "gender": 0,
                "id": 1050930,
                "job": "Dialogue Editor",
                "name": "Hugo Weng",
                "profile_path": null
            },
            {
                "credit_id": "5519123cc3a3681f84002a00",
                "department": "Editing",
                "gender": 2,
                "id": 52193,
                "job": "Dialogue Editor",
                "name": "R.J. Kizer",
                "profile_path": null
            },
            {
                "credit_id": "551912809251412c1e005a22",
                "department": "Sound",
                "gender": 0,
                "id": 1378231,
                "job": "Sound Effects Editor",
                "name": "Ken J. Johnson",
                "profile_path": null
            },
            {
                "credit_id": "551912a5c3a3681f84002a12",
                "department": "Sound",
                "gender": 0,
                "id": 1377222,
                "job": "Sound Effects Editor",
                "name": "Michael W. Mitchell",
                "profile_path": null
            },
            {
                "credit_id": "551912c9c3a36862ef007255",
                "department": "Sound",
                "gender": 0,
                "id": 1417516,
                "job": "Sound Effects Editor",
                "name": "Jeff Sawyer",
                "profile_path": null
            },
            {
                "credit_id": "5519131d9251412b6d005463",
                "department": "Sound",
                "gender": 0,
                "id": 1341781,
                "job": "Sound Re-Recording Mixer",
                "name": "Gregg Landaker",
                "profile_path": null
            },
            {
                "credit_id": "551913c39251415aab001f37",
                "department": "Sound",
                "gender": 0,
                "id": 138618,
                "job": "Sound Re-Recording Mixer",
                "name": "Gary Rizzo",
                "profile_path": null
            },
            {
                "credit_id": "551913fbc3a3681f84002a57",
                "department": "Sound",
                "gender": 0,
                "id": 1447601,
                "job": "First Assistant Sound Editor",
                "name": "Andrew Bock",
                "profile_path": null
            },
            {
                "credit_id": "55191411c3a3685cfa005280",
                "department": "Sound",
                "gender": 0,
                "id": 1447602,
                "job": "First Assistant Sound Editor",
                "name": "Linda Yeaney",
                "profile_path": null
            },
            {
                "credit_id": "5519142d9251412c1e005a72",
                "department": "Sound",
                "gender": 2,
                "id": 1341403,
                "job": "Supervising Sound Editor",
                "name": "Richard King",
                "profile_path": null
            },
            {
                "credit_id": "551914859251416f00006f22",
                "department": "Crew",
                "gender": 0,
                "id": 1357062,
                "job": "Special Effects Coordinator",
                "name": "Scott R. Fisher",
                "profile_path": null
            },
            {
                "credit_id": "5519149fc3a3684b6b002297",
                "department": "Crew",
                "gender": 0,
                "id": 1378699,
                "job": "Special Effects Coordinator",
                "name": "James Paradis",
                "profile_path": null
            },
            {
                "credit_id": "551915099251411500004345",
                "department": "Crew",
                "gender": 0,
                "id": 1447603,
                "job": "CG Supervisor",
                "name": "Dan Neal",
                "profile_path": null
            },
            {
                "credit_id": "55191540c3a3681f84002a94",
                "department": "Crew",
                "gender": 0,
                "id": 1447604,
                "job": "CG Supervisor",
                "name": "Eugénie von Tunzelmann",
                "profile_path": null
            },
            {
                "credit_id": "5519157f9251412b6d0054c2",
                "department": "Crew",
                "gender": 0,
                "id": 1447605,
                "job": "Sequence Supervisor",
                "name": "Fabio Zangla",
                "profile_path": null
            },
            {
                "credit_id": "551915dcc3a3682aa8000b6c",
                "department": "Crew",
                "gender": 0,
                "id": 1447609,
                "job": "Sequence Supervisor",
                "name": "Seth Dubieniec",
                "profile_path": null
            },
            {
                "credit_id": "5519160f9251415aab001f92",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447610,
                "job": "Animation",
                "name": "Evan Clover",
                "profile_path": null
            },
            {
                "credit_id": "55191623c3a3685cfa0052e8",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447611,
                "job": "Animation",
                "name": "Trystan James",
                "profile_path": null
            },
            {
                "credit_id": "5519164b9251411500004384",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1417836,
                "job": "Animation",
                "name": "Andrew McEvoy",
                "profile_path": null
            },
            {
                "credit_id": "5519167ec3a3684bd8002190",
                "department": "Crew",
                "gender": 0,
                "id": 1447612,
                "job": "Visual Effects Editor",
                "name": "Tom Barrett",
                "profile_path": null
            },
            {
                "credit_id": "551916aac3a36862f9007448",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447613,
                "job": "Animation",
                "name": "Lai Lok Chau",
                "profile_path": null
            },
            {
                "credit_id": "551916cbc3a3681f84002ad2",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447614,
                "job": "Animation",
                "name": "Dorian Knapp",
                "profile_path": null
            },
            {
                "credit_id": "5519170fc3a3681f84002ae2",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447615,
                "job": "Animation",
                "name": "Gábor Kiss",
                "profile_path": null
            },
            {
                "credit_id": "551917a192514115000043b7",
                "department": "Crew",
                "gender": 0,
                "id": 1447617,
                "job": "Visual Effects Editor",
                "name": "Crystal Hadcroft",
                "profile_path": null
            },
            {
                "credit_id": "551917dfc3a36862ef00733b",
                "department": "Crew",
                "gender": 0,
                "id": 1417823,
                "job": "Visual Effects Editor",
                "name": "Steve Miller",
                "profile_path": null
            },
            {
                "credit_id": "551918069251412b6d00551b",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1413116,
                "job": "Visual Effects Producer",
                "name": "Ann Podlozny",
                "profile_path": null
            },
            {
                "credit_id": "5519187ac3a3681f84002b12",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447621,
                "job": "Visual Effects Producer",
                "name": "Graeme Puttock",
                "profile_path": null
            },
            {
                "credit_id": "551918c0925141731c002a50",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447622,
                "job": "Visual Effects Producer",
                "name": "Jenny Basen",
                "profile_path": null
            },
            {
                "credit_id": "551918fb92514115000043e1",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1447624,
                "job": "Visual Effects Producer",
                "name": "Harrison Goldstein",
                "profile_path": null
            },
            {
                "credit_id": "5519193fc3a36862f90074a1",
                "department": "Visual Effects",
                "gender": 0,
                "id": 1417828,
                "job": "Visual Effects Supervisor",
                "name": "Andrew Lockley",
                "profile_path": null
            },
            {
                "credit_id": "551919b09251415aab002014",
                "department": "Crew",
                "gender": 0,
                "id": 1081074,
                "job": "Stunt Coordinator",
                "name": "George Cottle",
                "profile_path": null
            },
            {
                "credit_id": "55191a12c3a36862f6006cef",
                "department": "Lighting",
                "gender": 0,
                "id": 1447626,
                "job": "Gaffer",
                "name": "Harold Skinner",
                "profile_path": null
            },
            {
                "credit_id": "55191a339251415aab002021",
                "department": "Lighting",
                "gender": 0,
                "id": 1447627,
                "job": "Gaffer",
                "name": "Martin Keough",
                "profile_path": null
            },
            {
                "credit_id": "55191a5dc3a36862f6006cfc",
                "department": "Lighting",
                "gender": 0,
                "id": 1431089,
                "job": "Rigging Gaffer",
                "name": "Sean Oxenbury",
                "profile_path": null
            },
            {
                "credit_id": "55191ae5c3a3684b6b002384",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1447628,
                "job": "Set Costumer",
                "name": "Mark Avery",
                "profile_path": null
            },
            {
                "credit_id": "55191afdc3a3684bd8002242",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1447632,
                "job": "Set Costumer",
                "name": "Leigh Bell",
                "profile_path": null
            },
            {
                "credit_id": "55191b1ac3a3682aa8000c36",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1428227,
                "job": "Set Costumer",
                "name": "Tom Cummins",
                "profile_path": null
            },
            {
                "credit_id": "55191b309251415aab00205d",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1402494,
                "job": "Set Costumer",
                "name": "Sahar Halabi",
                "profile_path": null
            },
            {
                "credit_id": "55191b4d925141731c002ab7",
                "department": "Costume & Make-Up",
                "gender": 0,
                "id": 1447633,
                "job": "Set Costumer",
                "name": "Kelly Porter",
                "profile_path": null
            },
            {
                "credit_id": "55191b78c3a3684b6b0023ac",
                "department": "Editing",
                "gender": 0,
                "id": 1417840,
                "job": "First Assistant Editor",
                "name": "Eric A. Lewy",
                "profile_path": null
            },
            {
                "credit_id": "55191ba39251416f0000700e",
                "department": "Sound",
                "gender": 0,
                "id": 1403490,
                "job": "Music Editor",
                "name": "Alex Gibson",
                "profile_path": null
            },
            {
                "credit_id": "55191bc29251412b6d0055b9",
                "department": "Sound",
                "gender": 0,
                "id": 1417841,
                "job": "Music Editor",
                "name": "Ryan Rubin",
                "profile_path": null
            },
            {
                "credit_id": "55191bde9251416f0000701e",
                "department": "Crew",
                "gender": 0,
                "id": 1357070,
                "job": "Transportation Coordinator",
                "name": "Denny Caira",
                "profile_path": null
            },
            {
                "credit_id": "55191bff9251412b6d0055c5",
                "department": "Production",
                "gender": 0,
                "id": 1447636,
                "job": "Location Manager",
                "name": "Bruce L. Brownstein",
                "profile_path": null
            },
            {
                "credit_id": "55191c23c3a36862ef007413",
                "department": "Production",
                "gender": 0,
                "id": 1345627,
                "job": "Location Manager",
                "name": "Mandi Dillin",
                "profile_path": null
            },
            {
                "credit_id": "55191c839251412c1e005bed",
                "department": "Crew",
                "gender": 0,
                "id": 1442173,
                "job": "Dialect Coach",
                "name": "Rick Lipton",
                "profile_path": null
            },
            {
                "credit_id": "56b7820fc3a3684816007221",
                "department": "Production",
                "gender": 0,
                "id": 1564997,
                "job": "Executive In Charge Of Production",
                "name": "Mark Scoon",
                "profile_path": null
            },
            {
                "credit_id": "56b782cf9251416615007154",
                "department": "Production",
                "gender": 1,
                "id": 989750,
                "job": "Casting Associate",
                "name": "Deanna Brigidi",
                "profile_path": null
            },
            {
                "credit_id": "56bd046c9251417353000b2f",
                "department": "Crew",
                "gender": 0,
                "id": 1576050,
                "job": "Production Office Assistant",
                "name": "Frank Reina",
                "profile_path": null
            },
            {
                "credit_id": "56d4e8d1c3a3681e4a0151f6",
                "department": "Editing",
                "gender": 0,
                "id": 1440853,
                "job": "Assistant Editor",
                "name": "Donald Likovich",
                "profile_path": null
            },
            {
                "credit_id": "56d871f2c3a3681e4a01edad",
                "department": "Production",
                "gender": 0,
                "id": 1463954,
                "job": "Casting",
                "name": "Dixie Webster",
                "profile_path": null
            },
            {
                "credit_id": "56f81a4c9251412fdd003166",
                "department": "Art",
                "gender": 0,
                "id": 1426735,
                "job": "Set Decoration",
                "name": "Paul Healy",
                "profile_path": null
            },
            {
                "credit_id": "570bd2f5c3a36802a9000277",
                "department": "Art",
                "gender": 2,
                "id": 969743,
                "job": "Supervising Art Director",
                "name": "Dean Wolcott",
                "profile_path": null
            },
            {
                "credit_id": "572cd0a5c3a3680ff900052e",
                "department": "Sound",
                "gender": 2,
                "id": 1616082,
                "job": "Orchestrator",
                "name": "Andrew Kinney",
                "profile_path": null
            },
            {
                "credit_id": "572f6ce19251413c2700139c",
                "department": "Sound",
                "gender": 0,
                "id": 1463824,
                "job": "Music",
                "name": "Frank Macchia",
                "profile_path": null
            },
            {
                "credit_id": "575310969251411f5a0000e6",
                "department": "Sound",
                "gender": 2,
                "id": 932186,
                "job": "Orchestrator",
                "name": "Bruce Fowler",
                "profile_path": null
            },
            {
                "credit_id": "5766ccabc3a36863cc000701",
                "department": "Crew",
                "gender": 0,
                "id": 1571601,
                "job": "Post Production Supervisor",
                "name": "David E. Hall",
                "profile_path": null
            },
            {
                "credit_id": "579bf956c3a36855d20025b4",
                "department": "Editing",
                "gender": 2,
                "id": 1428834,
                "job": "Color Timer",
                "name": "Mato",
                "profile_path": null
            },
            {
                "credit_id": "579cff4f9251411217002c8a",
                "department": "Sound",
                "gender": 0,
                "id": 68016,
                "job": "Orchestrator",
                "name": "Kevin Kaska",
                "profile_path": "/azlSu8Sz9QGeK3xgQS9p3ZvR9q9.jpg"
            }
        ],
        "id": 157336
    },
    "image_data": {
        "backdrops": [
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.498,
                "vote_count": 16,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/gq4Z1pfOWHn3FKFNutlDCySps9C.jpg",
                "height": 1080,
                "iso_639_1": "xx",
                "vote_average": 5.464,
                "vote_count": 11,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/y4ODodoKWWm7KODB6WgPDHv6Bzd.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.454,
                "vote_count": 3,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/o4BjoraqJLfuRZBhiFXSgRZDUyu.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.444,
                "vote_count": 4,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/xW3MLq7t8gynEiFj3E4YP7KQoqw.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.438,
                "vote_count": 4,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/vFJ31Mp68hwtlB4opsAP29gFqhr.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.401174168297455,
                "vote_count": 10,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/sn8LEtCXquQJYEVygbW8YUfumwW.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.384615384615385,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/walWq52PP2IGRc98VkPG7Wp77lK.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.384,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/6MDzVm9h6wEGAbvjihdFU83Q5Wo.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.34065934065934,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/3mPXGfKcsYIEhl4et2WTSX0llVh.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 5.320910973084887,
                "vote_count": 6,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/tAkBC4X2Rp3QtV7rzqTv8DU3fTA.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/tn9JffYteR9LSGWx2FC8T1uO403.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.305059523809524,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/5cgKuGbnGPzh5YRZcqK8kZGnjl7.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.297619047619047,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/nYtBxRwoQTfzSDmAB3l7TIdPLpY.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.290178571428571,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/bbyI73zXfC8cxkT8xCimyttZrRA.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.282738095238095,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/rN9Vjna7lnS9jcrSMNvYQEWCRlK.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.282738095238095,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/s4fd4EfqBFYMbZmIdhNdCLwFrhO.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.282051282051282,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/aivK6Z2naJsHz5EJFweLP2G7hS.jpg",
                "height": 1080,
                "iso_639_1": "xx",
                "vote_average": 5.238095238095238,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/oAmkQmTUZ8bkyVbch56TrKHzmuu.jpg",
                "height": 1152,
                "iso_639_1": null,
                "vote_average": 5.238095238095238,
                "vote_count": 4,
                "width": 2048
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/8CQeAuMbR7pFlvZlgV7Oac3ZbDH.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.230654761904762,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/cwcibDD8VeZ34SNWTJazEeBho1s.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 5.178571428571429,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/9Bnh8RkPpPoo3ftLyDrDPDTMK8p.jpg",
                "height": 1152,
                "iso_639_1": null,
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 2048
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/gvldej73NLKaC4j7sCldj1sTjjD.jpg",
                "height": 1080,
                "iso_639_1": "en",
                "vote_average": 5.142857142857143,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/5EV88Qt5oDRbnj9F9osFrg3Yd55.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 5.134,
                "vote_count": 5,
                "width": 1920
            },
            {
                "aspect_ratio": 1.775280898876404,
                "file_path": "/bUSsMnf8K9wug5aJ8P6jpZT25MV.jpg",
                "height": 801,
                "iso_639_1": null,
                "vote_average": 5.105042016806722,
                "vote_count": 5,
                "width": 1422
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/fAAwITtgyzwEy6YstNPxnQ00d6z.jpg",
                "height": 1152,
                "iso_639_1": null,
                "vote_average": 5.079365079365079,
                "vote_count": 3,
                "width": 2048
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/zX1SB9uuQaJJw2kjZszNHx5PqwI.jpg",
                "height": 2160,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/zWyDer0uZdwFnOfthdJvy4qykZm.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/pwRzDssAENT121YkSvfR2uSEfh7.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.777777777777778,
                "file_path": "/b3htE2IM0XvupfVg8IKfb2KcKzw.jpg",
                "height": 1080,
                "iso_639_1": null,
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            }
        ],
        "id": 157336,
        "posters": [
            {
                "aspect_ratio": 0.6668,
                "file_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
                "height": 2500,
                "iso_639_1": "en",
                "vote_average": 6.026,
                "vote_count": 58,
                "width": 1667
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/m0UDkSPoVkmNfXFR9FN13yewy4B.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.536,
                "vote_count": 44,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/87oMFHZmSDkVm8P2i33yy3AJcsv.jpg",
                "height": 1080,
                "iso_639_1": "ro",
                "vote_average": 5.522,
                "vote_count": 4,
                "width": 720
            },
            {
                "aspect_ratio": 0.6748046875,
                "file_path": "/cUKn61e7bUUglIGNGBEtzyuCDR4.jpg",
                "height": 2048,
                "iso_639_1": "it",
                "vote_average": 5.447330447330447,
                "vote_count": 3,
                "width": 1382
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qAr3kvQeKu1UMOOrt50kUqEkdlr.jpg",
                "height": 1500,
                "iso_639_1": "fr",
                "vote_average": 5.446,
                "vote_count": 15,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6997084548104956,
                "file_path": "/7C0oiPn46OvaMxET9iq1f5BsyMS.jpg",
                "height": 1715,
                "iso_639_1": "es",
                "vote_average": 5.418,
                "vote_count": 3,
                "width": 1200
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/1pnigkWWy8W032o9TKDneBa3eVK.jpg",
                "height": 3000,
                "iso_639_1": "fr",
                "vote_average": 5.384,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/8lQXRsFthb8lUUw0LJNgLcSLdlD.jpg",
                "height": 1500,
                "iso_639_1": "hu",
                "vote_average": 5.384,
                "vote_count": 2,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6749156355455568,
                "file_path": "/x0Y4lhF2eTOVfhStOlpBEKU49RS.jpg",
                "height": 1778,
                "iso_639_1": "es",
                "vote_average": 5.382,
                "vote_count": 3,
                "width": 1200
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/5FAPDK7EAB7fx1Yj45jvWoQzHBr.jpg",
                "height": 1500,
                "iso_639_1": "en",
                "vote_average": 5.362,
                "vote_count": 10,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6668,
                "file_path": "/gthKURgD9wBq0NDniY8TI5wtKE1.jpg",
                "height": 2500,
                "iso_639_1": "en",
                "vote_average": 5.346,
                "vote_count": 25,
                "width": 1667
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/7CBRDBy1SvKFUIRarHQTIUmD4cM.jpg",
                "height": 2100,
                "iso_639_1": "fr",
                "vote_average": 5.33,
                "vote_count": 9,
                "width": 1400
            },
            {
                "aspect_ratio": 0.7009857612267251,
                "file_path": "/hxGAYQDrvOH1kTlCGKlP0NE4Gar.jpg",
                "height": 1826,
                "iso_639_1": "zh",
                "vote_average": 5.318,
                "vote_count": 3,
                "width": 1280
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/5SyskAKbinj9SGuo9bPq4sH4tbl.jpg",
                "height": 1500,
                "iso_639_1": "hu",
                "vote_average": 5.318,
                "vote_count": 3,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/bNwCcAvCRguxXqSjPgSr6mgrX0A.jpg",
                "height": 3000,
                "iso_639_1": "zu",
                "vote_average": 5.318,
                "vote_count": 3,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/o2eH7rg6XlWLkyjNVAIxQcWkQzi.jpg",
                "height": 1500,
                "iso_639_1": "pt",
                "vote_average": 5.317460317460317,
                "vote_count": 3,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/ceObcMuQxtX9HJ4VaJvLg6WuhIf.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.317460317460317,
                "vote_count": 3,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6931407942238267,
                "file_path": "/cZjfsOFVCu2aKBPdjoAUqebVdoo.jpg",
                "height": 1108,
                "iso_639_1": "el",
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 768
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/99bOV4iEoltarXMtgM5FBQcSapG.jpg",
                "height": 3000,
                "iso_639_1": null,
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 2000
            },
            {
                "aspect_ratio": 0.7001763668430335,
                "file_path": "/aDyHU4eKruHVxqo2PKI0AhXIysD.jpg",
                "height": 2835,
                "iso_639_1": "ro",
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 1985
            },
            {
                "aspect_ratio": 0.7004809794490598,
                "file_path": "/zephyR9sWnscPjadlDhWXPWosmV.jpg",
                "height": 2287,
                "iso_639_1": "ko",
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 1602
            },
            {
                "aspect_ratio": 0.6999125109361329,
                "file_path": "/t9HT1HX2YTHeZ62IgyGQwxBv5VW.jpg",
                "height": 1143,
                "iso_639_1": "uk",
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 800
            },
            {
                "aspect_ratio": 0.685546875,
                "file_path": "/jUnawJbbuKmQtJD1o3B7Bh44b0h.jpg",
                "height": 2048,
                "iso_639_1": "it",
                "vote_average": 5.3125,
                "vote_count": 1,
                "width": 1404
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/e1pkIN4dPjug8rk75BRVukyIXAn.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/p6wYy2mUsOwi4TalNAk46ft4sVJ.jpg",
                "height": 3000,
                "iso_639_1": "pt",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/rPrqBqZLl8m6sUQmZCchqW7IEYo.jpg",
                "height": 1500,
                "iso_639_1": "ru",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/2ohX5apxgqUw8lTdCEc21zozQI9.jpg",
                "height": 2250,
                "iso_639_1": "es",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 1500
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/21rKrhLAy2G0QVmI5r7my40V6wp.jpg",
                "height": 1125,
                "iso_639_1": "fr",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 750
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/vJ0vKTdVMr3a6u0PlOTjwk74WnG.jpg",
                "height": 2100,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 8,
                "width": 1400
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/mJduNZNy9asMKoQBn0MbBmdpwvN.jpg",
                "height": 2100,
                "iso_639_1": "en",
                "vote_average": 5.312,
                "vote_count": 14,
                "width": 1400
            },
            {
                "aspect_ratio": 0.7011173184357542,
                "file_path": "/h54I7hdRtB1a3370t0gd4nwPBGO.jpg",
                "height": 1074,
                "iso_639_1": "pt",
                "vote_average": 5.297619047619047,
                "vote_count": 1,
                "width": 753
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/wjjQEyP7ECzhWNSIlwJc2ibMFeS.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.288,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/lbGGuk9K1kNQqDabaMyFz1L9iTg.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.284679089026914,
                "vote_count": 29,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/smbZEQIpWRA3zLxWg4Q9HiAXq4s.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.280112044817927,
                "vote_count": 5,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6751054852320675,
                "file_path": "/trnlYCazvHA5ig6BtUTksX40MYb.jpg",
                "height": 1185,
                "iso_639_1": "hu",
                "vote_average": 5.260416666666666,
                "vote_count": 1,
                "width": 800
            },
            {
                "aspect_ratio": 0.700218818380744,
                "file_path": "/un9rcF1SaU1FyMcNwMheSEGEhXA.jpg",
                "height": 914,
                "iso_639_1": "zh",
                "vote_average": 5.252,
                "vote_count": 4,
                "width": 640
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/fMlSFgIB4Kr7YmuqNLHEWN2dkBG.jpg",
                "height": 3000,
                "iso_639_1": "zh",
                "vote_average": 5.252,
                "vote_count": 4,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6668,
                "file_path": "/aBONu8Boj7t5sdPR4ul69tfKs2q.jpg",
                "height": 2500,
                "iso_639_1": "ru",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1667
            },
            {
                "aspect_ratio": 0.6668,
                "file_path": "/5IGqQ86P8dfpNShocqz8rx38mv0.jpg",
                "height": 2500,
                "iso_639_1": "ru",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1667
            },
            {
                "aspect_ratio": 0.7071428571428572,
                "file_path": "/9yVkGkopgE2Ja0GBhbKsYpPn6Z9.jpg",
                "height": 1400,
                "iso_639_1": "de",
                "vote_average": 5.245421245421245,
                "vote_count": 2,
                "width": 990
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/nq2X2VIFoBEaEirTAsbVqI5oJhU.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.245421245421245,
                "vote_count": 2,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/yUPgXs3X0R97GPcCokAUBUlAAcF.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.245421245421245,
                "vote_count": 2,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/ddp5TCWAhu0jc14iqid3jqN5vXq.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.245421245421245,
                "vote_count": 2,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6935123042505593,
                "file_path": "/8hzAPcLHM246bPSBirgagYoKAPs.jpg",
                "height": 894,
                "iso_639_1": "hu",
                "vote_average": 5.238095238095238,
                "vote_count": 1,
                "width": 620
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/giOHpscElE74zONUsWvSjjkGA8E.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.216450216450217,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/oJ4NCfmVXTMOkCUt5TA8V3HvOt3.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.216450216450217,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/wiqjcGodHbZEUGbeCPCYgOdZBSz.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.216450216450217,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qyYejCBslbqMEFRzxsRASRc5Qx6.jpg",
                "height": 2100,
                "iso_639_1": "en",
                "vote_average": 5.216450216450217,
                "vote_count": 3,
                "width": 1400
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/k3wi2UjET0V3GSwuQuAsmapbThT.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.209235209235209,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/6ftoOE4J1icc54ojCvCcvcdCQ6e.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.209235209235209,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/zJUz3rRChbMvISPpzjK13ovQIEr.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.202020202020202,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/33kQqVUB2TcI7HoMhaQ4qNjLquL.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.202020202020202,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/gbwfT3lguOWZRLft3gEwWR6M9ke.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.202020202020202,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/Aik3rm4drM9ePSxAVejYVLAmoDX.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.202020202020202,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/7dLE2CUnpBPCMo632uYQRAmrXUr.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.202020202020202,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/sI0JVp3918D9RMm6XFRBAd7qkJy.jpg",
                "height": 3000,
                "iso_639_1": null,
                "vote_average": 5.201465201465202,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.75,
                "file_path": "/d5sWu7rkZBadUabqnfey2LDhqn7.jpg",
                "height": 1600,
                "iso_639_1": "fr",
                "vote_average": 5.197278911564625,
                "vote_count": 7,
                "width": 1200
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/i9Vf5kccuC7ugrHNQbJCYrRfuff.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.194805194805195,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/kyR7aKIXa0jjeacAMSeizAzMQ06.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.194805194805195,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/n8K3ErdQNXVmaaVX6oEU7y1Qbi2.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.194805194805195,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/6n1BJ66UYNHhk3kA8lSIRjSRFLu.jpg",
                "height": 2700,
                "iso_639_1": "en",
                "vote_average": 5.188,
                "vote_count": 3,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/k5PApdAswEbUX6ZA6arSy5d97bn.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.187590187590187,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/m8XK4N3oWczjaeVw5Q9h8aQYnrn.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.187590187590187,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qk2y2o8LltLE5IfMqBMzKlWXjX9.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.187590187590187,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6751054852320675,
                "file_path": "/dTL7B5JQgkgXd2cZTaUQgrL4f1q.jpg",
                "height": 2370,
                "iso_639_1": "en",
                "vote_average": 5.187301587301587,
                "vote_count": 12,
                "width": 1600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/icYFvVVvStxR8ZM0ekeWHFloEAB.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.181236673773987,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/hLg3fhDny3k2IJyV7sjBPrML3f7.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.180375180375181,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/xG8xcns3LuXZbipfRxzdSsBMzqf.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.180375180375181,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/xT3EkyLG3ORvXcldLq4y1cirh6F.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.180375180375181,
                "vote_count": 3,
                "width": 1800
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/h9g0VzJzi7xqQXjXzmY4ZcKNC2M.jpg",
                "height": 2700,
                "iso_639_1": "de",
                "vote_average": 5.180375180375181,
                "vote_count": 3,
                "width": 1800
            },
            {
                "aspect_ratio": 0.683,
                "file_path": "/Ac2BkXArHtoZtyTUK1Ss7lKY0On.jpg",
                "height": 1000,
                "iso_639_1": "ru",
                "vote_average": 5.18,
                "vote_count": 3,
                "width": 683
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/mPRSdQXqg5hC3RGsyJUv8DGtl6a.jpg",
                "height": 3000,
                "iso_639_1": null,
                "vote_average": 5.17948717948718,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/42yAYissryXg63liRM3tRtw5lJj.jpg",
                "height": 2100,
                "iso_639_1": "fr",
                "vote_average": 5.176,
                "vote_count": 6,
                "width": 1400
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/5xGVqIUuT62Mn7KG3tB8TUw2dJV.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.176,
                "vote_count": 21,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/mfAEs1RerVX3yAwOPJQGt4V2CGH.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/6cHRn5pV8xJ9Z5oaq4N8iyAtgKL.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/dnMaeDrUdGnYC2mcdSnnlUJrsC4.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/vBRwC2nl5ikdOHcg3KFw5BayW1K.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/Ah7WLTmjqJ3ZMLYzrwmi2x6DAUo.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qhmTUgpzPJOFNe5jXBIxy2xmbqI.jpg",
                "height": 2400,
                "iso_639_1": "en",
                "vote_average": 5.173160173160173,
                "vote_count": 3,
                "width": 1600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/A5Y3sptCzxWS16ViyKjb3sahlbs.jpg",
                "height": 3000,
                "iso_639_1": null,
                "vote_average": 5.172161172161172,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.702576112412178,
                "file_path": "/pMMXJh6trNYE9Xejf7guzRV6ZhP.jpg",
                "height": 854,
                "iso_639_1": "es",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/hclHtzLwJYWCvpJpcfNB4geUkJl.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.169082125603865,
                "vote_count": 6,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/zyfEGaZXWX6I3Zwccy09zWW8RGL.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/aaXziItQKEQ4p5AF0N0TCSkcCaM.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/zVW7i4XPw7igc0IzFwC7OCsDhN7.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/2zqD8d9gMIegmMTSOZ3AVWdsEz7.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/zR4SvO2Nx61Yuoxt5JJUEg8XVOf.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/8EA3isezthVMGiYJ5Fs3VyRtgEn.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.165945165945166,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/7ZgF4E0rGz9S25nsgOqlR4q5rUh.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.158730158730159,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/lMosVVdg1o5voKALa6c2T98eYY.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.152,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/ixcQaGli7AiIHdMsIaTkNHNtp1.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.152,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/iRWiqrt6aw8lcs2PqjIoekvOULE.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.152,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qQ02znOZYNqzCwyg3gKd9Uq1jUB.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.151515151515151,
                "vote_count": 3,
                "width": 600
            },
            {
                "aspect_ratio": 0.7358611825192802,
                "file_path": "/imvW7LZc4vxeQBHLWgNbrlcNY3M.jpg",
                "height": 1556,
                "iso_639_1": "fr",
                "vote_average": 5.137491616364857,
                "vote_count": 8,
                "width": 1145
            },
            {
                "aspect_ratio": 0.6747496046389035,
                "file_path": "/w1dJ9BhRDMizcGFfATkMbdpOtv9.jpg",
                "height": 1897,
                "iso_639_1": "en",
                "vote_average": 5.126050420168068,
                "vote_count": 5,
                "width": 1280
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/30NKpAX7Y3n64u5funrynxe5z6Z.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.118,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/vfc8KP6bhJt9USHMyoZ8BnDRRqo.jpg",
                "height": 3000,
                "iso_639_1": "zh",
                "vote_average": 5.118,
                "vote_count": 4,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/qFx2gtadhddh1YDuKO0hsUbk29d.jpg",
                "height": 2100,
                "iso_639_1": "fr",
                "vote_average": 5.11727078891258,
                "vote_count": 4,
                "width": 1400
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/8hHdtEVqy5r849JzV21vj8bkhRu.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.11,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/zZt8MZHVvI3KgyHG5XhtkKThfMy.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.11,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.694375,
                "file_path": "/otoibWOTaDn1iofyLAECNb1ZYxJ.jpg",
                "height": 1600,
                "iso_639_1": "es",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 1111
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/e1JozgstLfPnhKJ6y72S3QxeJmy.jpg",
                "height": 3000,
                "iso_639_1": "zh",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/fptFahOwB4vrP0e4AsMPgw8ICo3.jpg",
                "height": 3000,
                "iso_639_1": "zh",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/3EWgOYwalktAinA3wdiH1MaT8eH.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.104,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/QXt1iyNG8ALFs6xOIOh1HVtMJC.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.104,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/33MhreHmi3CXBVg38OUYaO975aF.jpg",
                "height": 900,
                "iso_639_1": "en",
                "vote_average": 5.104,
                "vote_count": 4,
                "width": 600
            },
            {
                "aspect_ratio": 0.6400301545420279,
                "file_path": "/2ZRnVnXHZ3gEeNlZqQO1jsogxhY.jpg",
                "height": 2653,
                "iso_639_1": "en",
                "vote_average": 5.092915214866435,
                "vote_count": 19,
                "width": 1698
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/kOvq6XEWE3jET3wWohJnTQvvm0b.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 5.088,
                "vote_count": 7,
                "width": 2000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/cgQQDY6xbiWUXjXXAJDOA5Xkfyr.jpg",
                "height": 1500,
                "iso_639_1": "en",
                "vote_average": 5.021645021645021,
                "vote_count": 14,
                "width": 1000
            },
            {
                "aspect_ratio": 0.666429587482219,
                "file_path": "/5cePxRqJ3LUBnYcXEMQhBmx2Wpj.jpg",
                "height": 1406,
                "iso_639_1": "en",
                "vote_average": 5.016767270288397,
                "vote_count": 8,
                "width": 937
            },
            {
                "aspect_ratio": 0.6750241080038573,
                "file_path": "/cT9h8G4j06TZ7RYkK3sS9jRxOpv.jpg",
                "height": 1037,
                "iso_639_1": "en",
                "vote_average": 4.987129987129987,
                "vote_count": 11,
                "width": 700
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/62ghIyRLyS89r7nGlwbXfuZUJio.jpg",
                "height": 1050,
                "iso_639_1": "en",
                "vote_average": 4.857142857142857,
                "vote_count": 7,
                "width": 700
            },
            {
                "aspect_ratio": 0.6802721088435374,
                "file_path": "/vV2rDBhnrEpmNGcsP6uwCfZv8oY.jpg",
                "height": 1764,
                "iso_639_1": "en",
                "vote_average": 4.735449735449736,
                "vote_count": 9,
                "width": 1200
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/y1TKElkgWOl90iFik3GHlgJdphm.jpg",
                "height": 750,
                "iso_639_1": "tr",
                "vote_average": 0,
                "vote_count": 0,
                "width": 500
            },
            {
                "aspect_ratio": 0.66650390625,
                "file_path": "/bMKiLh0mES4Uiococ240lbbTGXQ.jpg",
                "height": 2048,
                "iso_639_1": "it",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1365
            },
            {
                "aspect_ratio": 0.7,
                "file_path": "/sEgN6vtJTw1CW7hjQp4dMUCxUSh.jpg",
                "height": 1500,
                "iso_639_1": "uk",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1050
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                "height": 3000,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 2000
            },
            {
                "aspect_ratio": 0.7067137809187279,
                "file_path": "/vA133yh9mW7Kt82x3f6dnirLd73.jpg",
                "height": 1698,
                "iso_639_1": "ja",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1200
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/aLt4ABd2ehGFggK16ZSHmNgaKQx.jpg",
                "height": 1500,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1000
            },
            {
                "aspect_ratio": 0.6666666666666666,
                "file_path": "/lWfvYb5dF7TBc6GNx6ucooeeKy2.jpg",
                "height": 960,
                "iso_639_1": "en",
                "vote_average": 0,
                "vote_count": 0,
                "width": 640
            },
            {
                "aspect_ratio": 0.700381679389313,
                "file_path": "/tHDMY2FvJRnDfAo7aDd953TByYj.jpg",
                "height": 1048,
                "iso_639_1": "ko",
                "vote_average": 0,
                "vote_count": 0,
                "width": 734
            },
            {
                "aspect_ratio": 0.700381679389313,
                "file_path": "/gGTICmnUBTSuaGuiue2zt5Zl4Bj.jpg",
                "height": 1048,
                "iso_639_1": "ko",
                "vote_average": 0,
                "vote_count": 0,
                "width": 734
            },
            {
                "aspect_ratio": 0.700381679389313,
                "file_path": "/xQ9iYQMd9UmbPFaTHrM3SHEAQ9A.jpg",
                "height": 1048,
                "iso_639_1": "ko",
                "vote_average": 0,
                "vote_count": 0,
                "width": 734
            },
            {
                "aspect_ratio": 0.7051460361613352,
                "file_path": "/cAlsFsxtQhZmERoxYmsMKxntEkt.jpg",
                "height": 2157,
                "iso_639_1": "hu",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1521
            },
            {
                "aspect_ratio": 0.6787082649151615,
                "file_path": "/tC0SpMCyy5TKQjXSY6PDkGVcPlo.jpg",
                "height": 1827,
                "iso_639_1": "ar",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1240
            },
            {
                "aspect_ratio": 0.6870491240123668,
                "file_path": "/8JWBqdo8BEft1b1Y6K0pAr6Xmx5.jpg",
                "height": 2911,
                "iso_639_1": "it",
                "vote_average": 0,
                "vote_count": 0,
                "width": 2000
            },
            {
                "aspect_ratio": 0.700381679389313,
                "file_path": "/7a4uxYpYLCw0s0mbkt3IIv0PZho.jpg",
                "height": 1048,
                "iso_639_1": "ko",
                "vote_average": 0,
                "vote_count": 0,
                "width": 734
            },
            {
                "aspect_ratio": 0.6995768688293371,
                "file_path": "/lR07w5b4nDHQeVX6WAMNfUbUmvt.jpg",
                "height": 1418,
                "iso_639_1": "tr",
                "vote_average": 0,
                "vote_count": 0,
                "width": 992
            },
            {
                "aspect_ratio": 0.6921824104234527,
                "file_path": "/54AseTG5iudeXvJGND6cxmtNUkz.jpg",
                "height": 1228,
                "iso_639_1": "bg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 850
            },
            {
                "aspect_ratio": 0.6940639269406392,
                "file_path": "/rH3D3Kwg8R5woZj1YnJwU6WHYdo.jpg",
                "height": 1095,
                "iso_639_1": "he",
                "vote_average": 0,
                "vote_count": 0,
                "width": 760
            },
            {
                "aspect_ratio": 0.685546875,
                "file_path": "/ufNy2biWKMflOoMZEllfPEewYcv.jpg",
                "height": 2048,
                "iso_639_1": "it",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1404
            },
            {
                "aspect_ratio": 0.7,
                "file_path": "/zZeD25PtS0zHPgUWMLuUnuxk4W6.jpg",
                "height": 1200,
                "iso_639_1": "it",
                "vote_average": 0,
                "vote_count": 0,
                "width": 840
            },
            {
                "aspect_ratio": 0.7000350017500875,
                "file_path": "/fI8Q1ImGYbd5cdeOoXBV9Xcy6ud.jpg",
                "height": 2857,
                "iso_639_1": "it",
                "vote_average": 0,
                "vote_count": 0,
                "width": 2000
            }
        ]
    },
    "model_data": {
        "adult": false,
        "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
        "belongs_to_collection": null,
        "budget": 165000000,
        "genres": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ],
        "homepage": "http://www.interstellarmovie.net/",
        "id": 157336,
        "imdb_id": "tt0816692",
        "original_language": "en",
        "original_title": "Interstellar",
        "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "popularity": 56.689064,
        "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        "production_companies": [
            {
                "id": 4,
                "name": "Paramount Pictures"
            },
            {
                "id": 923,
                "name": "Legendary Pictures"
            },
            {
                "id": 6194,
                "name": "Warner Bros."
            },
            {
                "id": 9996,
                "name": "Syncopy"
            },
            {
                "id": 13769,
                "name": "Lynda Obst Productions"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "CA",
                "name": "Canada"
            },
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            },
            {
                "iso_3166_1": "GB",
                "name": "United Kingdom"
            }
        ],
        "release_date": "2014-11-05",
        "revenue": 675120017,
        "runtime": 169,
        "spoken_languages": [
            {
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Mankind was born on Earth. It was never meant to die here.",
        "title": "Interstellar",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 12936
    },
    "related_data": {
        "albums": {
            "e_t": {
                "artist": {
                    "link": "/artist/john_williams",
                    "name": "John Williams"
                },
                "media": {
                    "link": "/tv-movie/e_t",
                    "name": "E.T. the Extra-Terrestrial"
                }
            },
            "interstellar": {
                "artist": {
                    "link": "/artist/hans_zimmer",
                    "name": "Hans Zimmer"
                },
                "media": {
                    "link": "/tv-movie/interstellar",
                    "name": "Interstellar"
                }
            },
            "riverdale": {
                "artist": {
                    "link": "/artist/blake_neely",
                    "name": "Blake Neely"
                },
                "media": {
                    "link": "/tv-movie/riverdale",
                    "name": "Riverdale"
                }
            }
        },
        "artists": {
            "blake_neely": {
                "album": {
                    "link": "/album/riverdale",
                    "name": "Riverdale: Original Television Score (Season 1)"
                },
                "media": {
                    "link": "/tv-movie/riverdale",
                    "name": "Riverdale"
                }
            },
            "hans_zimmer": {
                "album": {
                    "link": "/album/interstellar",
                    "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
                },
                "media": {
                    "link": "/tv-movie/interstellar",
                    "name": "Interstellar"
                }
            },
            "john_williams": {
                "album": {
                    "link": "/album/e_t",
                    "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
                },
                "media": {
                    "link": "/tv-movie/e_t",
                    "name": "E.T the Extra-Terrestrial"
                }
            }
        },
        "media": {
            "e_t": {
                "album": {
                    "link": "/album/e_t",
                    "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)"
                },
                "artist": {
                    "link": "/artist/john_williams",
                    "name": "John Williams"
                }
            },
            "interstellar": {
                "album": {
                    "link": "/album/interstellar",
                    "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)"
                },
                "artist": {
                    "link": "/artist/hans_zimmer",
                    "name": "Hans Zimmer"
                }
            },
            "riverdale": {
                "album": {
                    "link": "/album/riverdale",
                    "name": "Riverdale: Original Television Score (Season 1)"
                },
                "artist": {
                    "link": "/artist/blake_neely",
                    "name": "Blake Neely"
                }
            }
        }
    },
    "video_data": {
        "id": 157336,
        "results": [
            {
                "id": "57817b1a9251417b8e000a8c",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "ePbKGoIGAXY",
                "name": "Official UK Trailer #3",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "5794fffbc3a36829ab00056f",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "2LqzF5WauAw",
                "name": "Official Trailer",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "57817a91c3a36873ea000adf",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "nyc6RJEEe0U",
                "name": "Official Teaser",
                "site": "YouTube",
                "size": 1080,
                "type": "Teaser"
            },
            {
                "id": "57817aa69251417bfc000a58",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "zSWdZVtXT7E",
                "name": "Official UK Trailer",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "57817ab4c3a36813870024b7",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "KlyknsTJk0w",
                "name": "Own it today",
                "site": "YouTube",
                "size": 1080,
                "type": "Teaser"
            },
            {
                "id": "57817accc3a368592500392e",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "0vxOhd4qlnA",
                "name": "Official Trailer #3",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "57817ada9251417c28000b02",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "827FNDpQWrQ",
                "name": "Official UK Teaser Trailer",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "57817b0fc3a368592500394d",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "LY19rHKAaAg",
                "name": "Official UK Trailer 4",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            },
            {
                "id": "5795006f92514142390035ae",
                "iso_3166_1": "US",
                "iso_639_1": "en",
                "key": "Rt2LHkSwdPQ",
                "name": "Official Trailer #2",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer"
            }
        ]
    }
}; 

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
    it('should render without crashing', function () {
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
    it('should render without crashing', function () {
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
});

describe('<MediaInstance/>', function () {
  let riverdale = RIVERDALE_JSON; 
  let interstellar = INTERSTELLAR_JSON; 

  it('should render without crashing', function() {
    const wrapper = shallow(<MediaInstance media={riverdale}/>); 
  });

  it('should have the correct data for name and about', function() {
    const wrapper = shallow(<MediaInstance media={riverdale}/>);
    expect(wrapper.find({ id : 'name'}).render().text()).to.be.equal(riverdale.model_data.name);
    expect(wrapper.find({ id : 'about'}).render().text()).to.be.equal(riverdale.model_data.overview); 
  });

  it('should have a subtitle with type, release year and genres if it is a movie', function() {
    const wrapper = shallow(<MediaInstance media={interstellar}/>);
    const expected = 'Movie | 2014 | Adventure, Drama, Science Fiction'; 
    expect(wrapper.find({ id : 'subtitle'}).render().text()).to.be.equal(expected); 
  });

  it('should have a subtitle with type, years, number of seasons and genres if it is a TV show', function() {
    const wrapper = shallow(<MediaInstance media={riverdale}/>);
    const expected = 'TV Show | 2017 - Present | 2 seasons | Drama, Mystery'; 
    expect(wrapper.find({ id : 'subtitle'}).render().text()).to.be.equal(expected); 
  });

  it('should have the correct cast listing', function() {
    const wrapper = shallow(<MediaInstance media={riverdale}/>); 
    const expected_cast = riverdale.cast_data.cast; 
    const result_cast = wrapper.find({id : 'cast'}).children(); 
    let index = 0; 
    for (let member of expected_cast) {
      expect(result_cast.at(index).render().text()).to.equal(member.name);
      index++; 
    }
  });

  it('should have the correct poster image and video', function() {
    const wrapper = shallow(<MediaInstance media={riverdale} />);
    const expected_img = "http://image.tmdb.org/t/p/w500//1TsbOTztAJtzTRXAhoLsX9a83XX.jpg"; 
    const expected_video = "//www.youtube.com/embed/9XmFTADupMc"; 
    expect(wrapper.find({ alt : "Poster"}).prop('src')).to.be.equal(expected_img);
    expect(wrapper.find('iframe').prop('src')).to.be.equal(expected_video); 
  });
});