import * as $ from "jquery";

var API_URL = 'http://localhost'
if (process.env.NODE_ENV === "production") {
  API_URL = 'http://api.soundtrackdb.me'
}

export default class ApiService {

  static getArtists(offset = 0, limit = 12) {
    return $.ajax({
      url: API_URL + '/artist',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getAlbums(offset = 0, limit = 12) {
    return $.ajax({
      url: API_URL + '/album',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getAllMedia(offset = 0, limit = 12) {
    return $.ajax({
      url: API_URL + '/media',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getArtist(id) {
    return $.get(API_URL + '/artist/' + id)
  }

  static getAlbum(id) {
    return $.get(API_URL + '/album/' + id)
  }

  static getMedia(id) {
    return $.get(API_URL + '/media/' + id)
  }

  static getAbout() {
    return $.get(API_URL + '/about')
  }

  static getSearchPredictions(query) {

  }

  static getSearchResults(query) {
    return new Promise(function (resolve, reject) {
      resolve({
        items: [
          {
            "id": 393,
            "kind": "Album",
            "name": "Peter Pan (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/ee5e495159294dc8ebd49c34ffa08fa5d2d10f01",
            "release_date": "2003-12-16",
            "about": ""
          },
          {
            "id": 262,
            "kind": "Album",
            "name": "Land Of The Lost (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/bf28ef40d94a031555ca06dee216d76a01a62cd0",
            "release_date": "2009-01-01",
            "about": ""
          },
          {
            "id": 234,
            "kind": "Album",
            "name": "The Cowboys (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b9a6ad6ba1a3444fb8a17ede39070df942583080",
            "release_date": "1972-01-01",
            "about": ""
          },
          {
            "id": 137,
            "kind": "Album",
            "name": "The Book Thief (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/5f037d4c8eccbfaf433043e5f2942ec680f67b10",
            "release_date": "2013-11-08",
            "about": ""
          },
          {
            "id": 412,
            "kind": "Album",
            "name": "Intersection (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/459518ab82b0b33d0c037874dfddfe9f62777535",
            "release_date": "1993",
            "about": ""
          },
          {
            "id": 101,
            "kind": "Album",
            "name": "Fright Night (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e8fd9252e5730711c8696ea89bbe0be0901eeea3",
            "release_date": "2011",
            "about": ""
          },
          {
            "id": 388,
            "kind": "Album",
            "name": "The Postman - Music From The Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/4face2fe452de0bf97df9d18bcf0e5671d0fc72a",
            "release_date": "2005-12-06",
            "about": ""
          },
          {
            "id": 365,
            "kind": "Album",
            "name": "Maleficent (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e1d243494d47f1236e3ec306b1330b8ca7aa9050",
            "release_date": "2014-01-01",
            "about": ""
          },
          {
            "id": 318,
            "kind": "Album",
            "name": "The Holiday (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/5176714581920b047af87d18c4f30007f0ecf0c7",
            "release_date": "2006",
            "about": ""
          },
          {
            "id": 349,
            "kind": "Album",
            "name": "Backdraft (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b3c508e1b4486149eeaf789acfd016634e4e5b08",
            "release_date": "1991-03-01",
            "about": ""
          },
          {
            "id": 374,
            "kind": "Album",
            "name": "The Last Airbender (Music from the Motion Picture)",
            "image": "https://i.scdn.co/image/e60b71d220af62a3073d5eb04d967bca99f36260",
            "release_date": "2010",
            "about": ""
          },
          {
            "id": 233,
            "kind": "Album",
            "name": "Jaws (Music From The Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/471f28baac1ca8162f2dfac6a50224a2f1481775",
            "release_date": "1975-01-01",
            "about": ""
          },
          {
            "id": 323,
            "kind": "Album",
            "name": "Beyond Rangoon (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/efb7902722ff0004c515b57a67c4174806b3f2dc",
            "release_date": "2004-03-13",
            "about": ""
          },
          {
            "id": 248,
            "kind": "Album",
            "name": "Dawn of the Planet of the Apes (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9a5b22fc0ab9f86ad422319ecafcb54ff1d78cb5",
            "release_date": "2014-07-04",
            "about": ""
          },
          {
            "id": 343,
            "kind": "Album",
            "name": "Something To Talk About (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/e536d2ba03bbc2f8c72ded3a42b624fa66eea4e8",
            "release_date": "1995-01-01",
            "about": ""
          },
          {
            "id": 241,
            "kind": "Album",
            "name": "Doctor Strange (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/675edb03f8485b73025506f68272d1cb03383c43",
            "release_date": "2016-10-21",
            "about": ""
          },
          {
            "id": 80,
            "kind": "Album",
            "name": "The Mountain Between Us (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/1378adb3c504eb83ef3dd9fc72d88f7fe7d923f9",
            "release_date": "2017-10-06",
            "about": ""
          },
          {
            "id": 243,
            "kind": "Album",
            "name": "Star Trek Beyond (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/927818a89e0f2a044b5f4fc7ad648a59724d4292",
            "release_date": "2016-01-01",
            "about": ""
          },
          {
            "id": 291,
            "kind": "Album",
            "name": "Batman v Superman: Dawn Of Justice (Original Motion Picture Soundtrack) [Standard Edition]",
            "image": "https://i.scdn.co/image/3a239a65a8f21722b9281934d023d0a9686f499f",
            "release_date": "2016-03-18",
            "about": ""
          },
          {
            "id": 246,
            "kind": "Album",
            "name": "Inside Out (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/d7e1fa4510f62c5195c65505e16b8ae5ca2f3e8a",
            "release_date": "2015-01-01",
            "about": ""
          },
          {
            "id": 173,
            "kind": "Album",
            "name": "Rosewood Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/cff4f3a1cb7ca68f545cd5827e654ace8e64d372",
            "release_date": "1997-03-01",
            "about": ""
          },
          {
            "id": 346,
            "kind": "Album",
            "name": "Renaissance Man (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/7ce683b20d81fae1d78a77b9e8b3246cc22a2fd9",
            "release_date": "1994-01-01",
            "about": ""
          },
          {
            "id": 120,
            "kind": "Album",
            "name": "Enough (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/052fc33feadce26dc9b7c5a18045bdbc1cd61cd8",
            "release_date": "2002-06-03",
            "about": ""
          },
          {
            "id": 279,
            "kind": "Album",
            "name": "The House of the Spirits (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/d65012cbcae2aca760b5f99068c763d00c836d5d",
            "release_date": "2017-12-15",
            "about": ""
          },
          {
            "id": 411,
            "kind": "Album",
            "name": "The Saint Of Fort Washington (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/3862e3933a2157dab64ecbb331a3acb39e4d70df",
            "release_date": "1993-01-01",
            "about": ""
          },
          {
            "id": 403,
            "kind": "Album",
            "name": "A Perfect Murder (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/1df0aea985ccd9dbe092128b384186c0623c7aac",
            "release_date": "1998-01-01",
            "about": ""
          },
          {
            "id": 305,
            "kind": "Album",
            "name": "Inception (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/6072343320a01ddb0a605a687be95ae4d7b73c9c",
            "release_date": "2010-07-09",
            "about": ""
          },
          {
            "id": 12,
            "kind": "Artist",
            "name": "Michael Giacchino",
            "image": "https://i.scdn.co/image/1812581eb241c95a81d5e571675e9d8f9aedf458",
            "release_date": "",
            "about": "Michael Giacchino (pronounced juh-kee-no) (born 1967, Riverside, New Jersey) is an American soundtrack composer who has composed several multi-award winning scores for many popular movies, television series and video games. He attended the Evening Division at the Juilliard School, as well as the School of Visual Arts in New York City, where he acquired a degree in film production and a minor degree in History.  Giacchino's first major composition was for the DreamWorks video game adaptation of the 1997 movie, The Lost World: Jurassic Park. The video game was the first PlayStation (also on Sega Saturn) console title to be recorded with an original live orchestral score. Giacchino has since continued his relationship with DreamWorks, providing full orchestral scores for many of their popular videogames.   Giacchino's award-winning compositions covers the first four Medal of Honor series, (Underground, Allied Assault and Frontline, along with the original Medal of Honor).    He has also provided scores for several other World War II-related video games like Secret Weapons Over Normandy, Call of Duty and Call of Duty: Finest Hour.  Additionally, Giacchino wrote the main theme for Mercenaries while composer Chris Tilton provided the rest of the underscore. Giacchino also composed themes for The Incredibles: Rise of the Underminer, and co-wrote the theme from Black with composer Chris Tilton. He also composed the score for Alias, which was based on the television series of the same name.  Michael has not been composing full soundtracks for video games in the past few years, but he is now going back to his roots as he is scheduled to score the music for a brand new world war II video game: Turning Point: Fall of Liberty. In 2007, Michael returned to the Medal of Honor franchise as he has composed the music for Medal of Honor: Airborne.  Giacchino's work on the various video games led to his first work on television first working on the pilot to the Steven Spielberg produced, Semper Fi.  In 2001, J.J. Abrams, producer of the television series Alias, discovered Giacchino through his work on the video games and tapped Giacchino to provide the new show's soundtrack. The soundtrack featured a mix of full orchestral pieces, often mixed with upbeat electronic music, a departure from much of his previous work. Giacchino would also provide the score for J.J. Abrams's next project, the 2004 television series, Lost, which he continues to score today.  This acclaimed soundtrack is notable for its multiple themes and leitmotifs, as well as the use of a real orchestra rather than synthesized instruments - an unusual choice in television scoring.  In 2004, Giacchino was given his first big feature film composition, when he was called on to provide the soundtrack for the Pixar film, The Incredibles. Director Brad Bird had heard Giacchino's work on Alias and asked him to work on the soundtrack for the new movie. The upbeat jazz orchestral sound was a departure in sound not only for Giacchino but for Pixar, who had previously relied on the works of Randy Newman and Thomas Newman for all of their previous films. Brad Bird had originally sought out John Barry, who was best known for composing many of the early James Bond movie soundtracks, to compose the music, but was reportedly unwilling to write music for an animated movie. Giacchino was nominated for two Grammy Awards in 2005 for his work on The Incredibles: Best Score Soundtrack Album For Motion Picture, Television Or Other Visual Media and Best Instrumental Composition. Giacchino also composed scores for the 2005 films, Sky High, Looking for Comedy in the Muslim World and The Family Stone, and the television movie, The Muppets' Wizard of Oz. Giacchino composed the score for the movie Mission: Impossible III, directed by J.J. Abrams, which was released on May 5, 2006. Giacchino then went on the compose the soundtrack for other Pixar films, Ratatouille and Up. Giacchino's latest large scale composition was composing the score for the newest Star Trek movie in 2009.   Additional Compositions In addition to his long list of soundtracks, in 2000 Giacchino was commissioned to write a concert piece in 3 movements performed by the Haddonfield Symphony called Camden 2000.  In 2005 Giacchino collaborated with Walt Disney Imagineering in creating two new soundtracks for the updated versions of Space Mountain at Disneyland, Disneyland Paris, and Hong Kong Disneyland. Giacchino was also contracted by Sarah Vowell, who played character Violet in The Incredibles, to compose the score to the audio version of her book Assassination Vacation.  In 2001, Giacchino won the \"Academy of Interactive Arts and Science Award\" for Best Score for his work on Medal of Honor: Underground.  His score to Medal of Honor: Frontline won two GANG awards; Music of the Year and Best Live Performance (\"Operation Market Garden\").  In 2004, Giacchino won the award of \"Excellence in Audio\" in the Game Developers Choice Awards for work on the video game, Call of Duty. Giacchino was nominated for two Grammy Awards in 2005 for his work on The Incredibles: Best Score Soundtrack Album For Motion Picture, Television Or Other Visual Media and Best Instrumental Composition. The Incredibles also won four awards for Best Score from the \"L.A. Film Critics Association\", \"The International Film Music Critics Association\", \"The Las Vegas Film Critics\" and \"The Annie Awards.\"  In 2005 Michael received an Outstanding Music and Lyrics Emmy nomination for his song \"I'm With You\" from the television film, The Muppets Wizard of Oz.  Cited by the New Yorker music critic Alex Ross as \"some of the most compelling film music of the past year,\" Giacchino's work on Lost won him the 2005 Emmy for Music Composition For A Series (Dramatic Underscore)."
          },
          {
            "id": 381,
            "kind": "Album",
            "name": "The Water Horse: Legend of the Deep (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9933bf2b0f5beb86612fc7e7c02a8c8eb87a3426",
            "release_date": "2007-12-03",
            "about": ""
          },
          {
            "id": 195,
            "kind": "Album",
            "name": "The Accidental Tourist (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/25b3201a35acb211b26c23cdbea119226dfd1a95",
            "release_date": "1989-04-01",
            "about": ""
          },
          {
            "id": 162,
            "kind": "Album",
            "name": "Harry Potter and The Sorcerer's Stone Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/f17680876d197d0d7c96d80d020163dc254b0cd6",
            "release_date": "2001-10-30",
            "about": ""
          },
          {
            "id": 91,
            "kind": "Album",
            "name": "African Safari 3D (Ben Stassen's Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/8384d7572ca98a5158aa8132187b83d5cda8e01c",
            "release_date": "2014-04-14",
            "about": ""
          },
          {
            "id": 368,
            "kind": "Album",
            "name": "The Hunger Games: Catching Fire (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/ce8854ab8733837abf089616bd640d7e27bab53d",
            "release_date": "2013-01-01",
            "about": ""
          },
          {
            "id": 334,
            "kind": "Album",
            "name": "More Music from the Motion Picture \"Gladiator",
            "image": "https://i.scdn.co/image/1c8477e22f61999d918df13bb35aea204a1b5d7b",
            "release_date": "2001-01-01",
            "about": ""
          },
          {
            "id": 126,
            "kind": "Album",
            "name": "The Post (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/f20a1b293ff94dfb4ae640251969215f020e0325",
            "release_date": "2017-12-22",
            "about": ""
          },
          {
            "id": 283,
            "kind": "Album",
            "name": "Dunkirk: Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/ac9075f92ebd34a1fe99bd816dbedabe9a4e1ea4",
            "release_date": "2017-07-21",
            "about": ""
          },
          {
            "id": 408,
            "kind": "Album",
            "name": "Wyatt Earp (Music From The Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/328a68551b569fb2911f2d7d64938405ad713701",
            "release_date": "1994-06-21",
            "about": ""
          },
          {
            "id": 261,
            "kind": "Album",
            "name": "Star Trek (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/07024310624218884edb9019eae22b947adc504a",
            "release_date": "2009-05-05",
            "about": ""
          },
          {
            "id": 107,
            "kind": "Album",
            "name": "Beat The Drum (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b8c741f1d0f54319b09639ed242a9f4af5214e65",
            "release_date": "2007-01-01",
            "about": ""
          },
          {
            "id": 231,
            "kind": "Album",
            "name": "Black Sunday (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9a9594fbcb18295f755d0916e8efb80ede6e3862",
            "release_date": "1977",
            "about": ""
          },
          {
            "id": 167,
            "kind": "Album",
            "name": "Jaws (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/8f411907bc5bb61493191810266430c0f1cb565c",
            "release_date": "2000",
            "about": ""
          },
          {
            "id": 336,
            "kind": "Album",
            "name": "An Everlasting Piece (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e6da8637de393ad0c573acf5322d07976721cac1",
            "release_date": "2000-01-01",
            "about": ""
          },
          {
            "id": 172,
            "kind": "Album",
            "name": "Superman: The Movie (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/d0188be2612e57e9bd5043252a66ef23c02f8e03",
            "release_date": "1998-01-01",
            "about": ""
          },
          {
            "id": 380,
            "kind": "Album",
            "name": "Charlie Wilson's War (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9b42a5ded06142f8ccd143206759edd21132086b",
            "release_date": "2007-12-18",
            "about": ""
          },
          {
            "id": 330,
            "kind": "Album",
            "name": "Matchstick Men (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/7c3716b17f3751c39070c13824660e62d3ca1931",
            "release_date": "2003-01-01",
            "about": ""
          },
          {
            "id": 175,
            "kind": "Album",
            "name": "Amistad (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/f2aacdcdad29a9be60fc2b3c4c4fc1cc6d091d2e",
            "release_date": "1997-01-01",
            "about": ""
          },
          {
            "id": 340,
            "kind": "Album",
            "name": "The Peacemaker (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9830028cee727384cf09a5d5d48f72d3cdf476a9",
            "release_date": "1997-01-01",
            "about": ""
          },
          {
            "id": 157,
            "kind": "Album",
            "name": "Star Wars: Attack of the Clones (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/c7950bcd303e2575c0b538a2c4750938e4d63ec5",
            "release_date": "2002-04-23",
            "about": ""
          },
          {
            "id": 106,
            "kind": "Album",
            "name": "Mr. Brooks (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/031085d9b63085734d35556b724c63f8b1924ac1",
            "release_date": "2007-05-29",
            "about": ""
          },
          {
            "id": 402,
            "kind": "Album",
            "name": "Snow Falling On Cedars (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e80eeca9bdc1a6109f78f52c608cce5e2749d151",
            "release_date": "1999-01-01",
            "about": ""
          },
          {
            "id": 264,
            "kind": "Album",
            "name": "Speed Racer (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/ac8f20f2cabc83c4562147a09b0719f47196789d",
            "release_date": "2008-01-01",
            "about": ""
          },
          {
            "id": 198,
            "kind": "Album",
            "name": "Indiana Jones and the Last Crusade (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/dbaf1c621295103d19d919285e79a4315f4ad52e",
            "release_date": "1989",
            "about": ""
          },
          {
            "id": 244,
            "kind": "Album",
            "name": "Jurassic World (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b985204ec9e4cb3c71dba633e729ea6e786a6d8e",
            "release_date": "2015-06-09",
            "about": ""
          },
          {
            "id": 327,
            "kind": "Album",
            "name": "The Last Samurai: Original Motion Picture Score",
            "image": "https://i.scdn.co/image/7fc7998b03158d0a55b8536e42f54e7d09cebb59",
            "release_date": "2003-11-25",
            "about": ""
          },
          {
            "id": 308,
            "kind": "Album",
            "name": "A World Apart (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/398a9755a469dd0e719b576d024377b6cacbcdc3",
            "release_date": "2010-03-13",
            "about": ""
          },
          {
            "id": 160,
            "kind": "Album",
            "name": "Minority Report (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/37ed206747327dc5db280fb1cb22b8faee7f54e1",
            "release_date": "2002-01-01",
            "about": ""
          },
          {
            "id": 363,
            "kind": "Album",
            "name": "Concussion (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/87c6aa881a67987a46f16f4f6be20bdda39b4175",
            "release_date": "2015",
            "about": ""
          },
          {
            "id": 240,
            "kind": "Album",
            "name": "Rogue One: A Star Wars Story (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/bbe394544368113a857164312d550cdc5ecf15d8",
            "release_date": "2016-12-16",
            "about": ""
          },
          {
            "id": 104,
            "kind": "Album",
            "name": "The Unborn (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/ef464c7f43e45e9793909f2aece6d79a7352f3d2",
            "release_date": "2009",
            "about": ""
          },
          {
            "id": 407,
            "kind": "Album",
            "name": "Waterworld (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/04062847d0cecfe8224fcd9b1d2c236d14131b87",
            "release_date": "1995-01-01",
            "about": ""
          },
          {
            "id": 163,
            "kind": "Album",
            "name": "A.I. (Music from the Motion Picture)",
            "image": "https://i.scdn.co/image/0136f508e01f4d877a465034c507e8219ea113e4",
            "release_date": "2001-07-03",
            "about": ""
          },
          {
            "id": 394,
            "kind": "Album",
            "name": "Dreamcatcher (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/7929d8f5fa32f6ed749cfdb2ef7558ca0a18c658",
            "release_date": "2003-01-01",
            "about": ""
          },
          {
            "id": 227,
            "kind": "Album",
            "name": "The Empire Strikes Back (Symphonic Suite From The Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/37cedf11f9abd76b0f2b9b4a1e0860190836bf32",
            "release_date": "1980-01-01",
            "about": ""
          },
          {
            "id": 302,
            "kind": "Album",
            "name": "The Dark Knight Rises (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/9b42795b91389c526a22175c332427a4bdd72dea",
            "release_date": "2012-07-17",
            "about": ""
          },
          {
            "id": 299,
            "kind": "Album",
            "name": "Man of Steel: Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba",
            "release_date": "2013-06-10",
            "about": ""
          },
          {
            "id": 123,
            "kind": "Album",
            "name": "Baby Boy (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/c89ba98262f1efbf7e84c2bb0a64e91675ba06ff",
            "release_date": "2001",
            "about": ""
          },
          {
            "id": 212,
            "kind": "Album",
            "name": "Indiana Jones and the Temple of Doom (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/dbaf1c621295103d19d919285e79a4315f4ad52e",
            "release_date": "1984",
            "about": ""
          },
          {
            "id": 401,
            "kind": "Album",
            "name": "The Sixth Sense (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2315133710e9d825b65e154b190126b52731ce10",
            "release_date": "1999-08-23",
            "about": ""
          },
          {
            "id": 364,
            "kind": "Album",
            "name": "The Hunger Games: Mockingjay Pt. 1 (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/5903c72f6ea5bdf38344f6c6d470f19a188da065",
            "release_date": "2014-11-24",
            "about": ""
          },
          {
            "id": 400,
            "kind": "Album",
            "name": "Vertical Limit (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/0c23117d97a73eb0b0a7fdf5564758b7c7703fef",
            "release_date": "2000-01-01",
            "about": ""
          },
          {
            "id": 358,
            "kind": "Album",
            "name": "All The Way (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/5ed7b3bdcf71b6cbf03b71c88a077c6fa51b27d1",
            "release_date": "2016-05-27",
            "about": ""
          },
          {
            "id": 362,
            "kind": "Album",
            "name": "Restoration (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/d5f008a01c888d600dcc65b31412e8f6265de462",
            "release_date": "2015-04-10",
            "about": ""
          },
          {
            "id": 250,
            "kind": "Album",
            "name": "Star Trek Into Darkness (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/3b6db809f3243b290ce2b16cf61592b8da214b6f",
            "release_date": "2013-05-21",
            "about": ""
          },
          {
            "id": 171,
            "kind": "Album",
            "name": "Saving Private Ryan (Music From The Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/7cf70de8c2bfd9e544e936ca0139f73470609e61",
            "release_date": "1998-01-01",
            "about": ""
          },
          {
            "id": 405,
            "kind": "Album",
            "name": "Just Cause (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/6816d1202001dcb7ecdf1b3d96b0371db3254551",
            "release_date": "1995-01-01",
            "about": ""
          },
          {
            "id": 200,
            "kind": "Album",
            "name": "Empire Of The Sun (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b842440814a0bb40235c22447df63e190008bbb3",
            "release_date": "1987-12-01",
            "about": ""
          },
          {
            "id": 127,
            "kind": "Album",
            "name": "Star Wars: The Last Jedi (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/61f628d30ea243144e3c602d2ec8b728acca61ba",
            "release_date": "2017-12-15",
            "about": ""
          },
          {
            "id": 372,
            "kind": "Album",
            "name": "Salt (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/564831bfeb4ded37b99fc7cbd4b4f497b65db5a0",
            "release_date": "2010-07-20",
            "about": ""
          },
          {
            "id": 284,
            "kind": "Album",
            "name": "The Boss Baby (Music from the Motion Picture)",
            "image": "https://i.scdn.co/image/c17765ef9fb4dc0f3913464709cb60ae3db44a58",
            "release_date": "2017-03-24",
            "about": ""
          },
          {
            "id": 312,
            "kind": "Album",
            "name": "The Dark Knight (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/5580398a0cd589a2aea31f13896a05b3b43a2d65",
            "release_date": "2008-07-14",
            "about": ""
          },
          {
            "id": 409,
            "kind": "Album",
            "name": "Junior (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/01a3ecdddfe157c6848f31fde64af12a51f0124c",
            "release_date": "1994-01-01",
            "about": ""
          },
          {
            "id": 352,
            "kind": "Album",
            "name": "Pacific Heights (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/601fca82306e333ea9309eeb2dd3f816ccc33626",
            "release_date": "1990-01-01",
            "about": ""
          },
          {
            "id": 289,
            "kind": "Album",
            "name": "Inferno (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/814230c1800198335d8455bc3fd6986f4e7def31",
            "release_date": "2016-10-14",
            "about": ""
          },
          {
            "id": 253,
            "kind": "Album",
            "name": "Mission: Impossible - Ghost Protocol (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/f8eadc0a6ca43cb34a5afc326932ba41e3ad3ed0",
            "release_date": "2011",
            "about": ""
          },
          {
            "id": 328,
            "kind": "Album",
            "name": "Tears Of The Sun (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/88ad07c7d0df1a6f99595ddb5bfb52479ff19e5e",
            "release_date": "2003-03-18",
            "about": ""
          },
          {
            "id": 333,
            "kind": "Album",
            "name": "Invincible (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2d209a2a4609e0536933103f391111474074187d",
            "release_date": "2001-04-03",
            "about": ""
          },
          {
            "id": 170,
            "kind": "Album",
            "name": "Midway (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/2676013dbfd2b41a0fcbdfa5bdf709e449fb8613",
            "release_date": "1998-01-01",
            "about": ""
          },
          {
            "id": 378,
            "kind": "Album",
            "name": "The Happening (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/12a26dfb925fce4758d0657eb3ab556ec1545540",
            "release_date": "2008-01-01",
            "about": ""
          },
          {
            "id": 311,
            "kind": "Album",
            "name": "The Dark Knight (Collectors Edition) [Original Motion Picture Soundtrack]",
            "image": "https://i.scdn.co/image/6765b04ee163ea5f4b1d3bf0a82b6f812cce1a69",
            "release_date": "2008-07-14",
            "about": ""
          },
          {
            "id": 395,
            "kind": "Album",
            "name": "The Emperor's Club (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/bb69f1687e4d091a48d97c0ecb8372bd322e7681",
            "release_date": "2002-01-01",
            "about": ""
          },
          {
            "id": 214,
            "kind": "Album",
            "name": "Star Wars: Return of the Jedi (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/ad6d48d9eab31495a3c87612a9c2a8b7cf4f6aa9",
            "release_date": "1983-01-01",
            "about": ""
          },
          {
            "id": 385,
            "kind": "Album",
            "name": "Freedomland (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/c9e5ec8a0319d968b275dfc2abb1691480ff6306",
            "release_date": "2006-02-28",
            "about": ""
          },
          {
            "id": 404,
            "kind": "Album",
            "name": "Primal Fear (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2afe9e4bd987656be99241c84d816d79ae6bcdf4",
            "release_date": "1996-01-01",
            "about": ""
          },
          {
            "id": 285,
            "kind": "Album",
            "name": "Smilla's Sense of Snow (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/ff88629d4b7febd0ad3ebd3c1e1c07624f9f8e42",
            "release_date": "2017-02-24",
            "about": ""
          },
          {
            "id": 92,
            "kind": "Album",
            "name": "The House of Magic (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/1909f34134350ebe8a11d2630f755553aeb5b72a",
            "release_date": "2013-12-19",
            "about": ""
          },
          {
            "id": 205,
            "kind": "Album",
            "name": "The Witches of Eastwick (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2db5dd0ff1e0b30f4c593abdf5276b9f7f0264d0",
            "release_date": "1986",
            "about": ""
          },
          {
            "id": 86,
            "kind": "Album",
            "name": "Warcraft (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/599553c0a9c46f7f4ea88bdf15f8b4e4186ae9ed",
            "release_date": "2016-06-03",
            "about": ""
          },
          {
            "id": 361,
            "kind": "Album",
            "name": "Pawn Sacrifice (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/8d1e89397e14f15f77a57217c224e5f9dd72a354",
            "release_date": "2015-09-11",
            "about": ""
          },
          {
            "id": 278,
            "kind": "Album",
            "name": "True Romance (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/8fd5bb121b27076c144040002da4243a3e4371ba",
            "release_date": "2018-01-12",
            "about": ""
          },
          {
            "id": 121,
            "kind": "Album",
            "name": "Changing Lanes (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/4a67fe2f57fe9b983588d99eed52114be4506c22",
            "release_date": "2002-04-29",
            "about": ""
          },
          {
            "id": 304,
            "kind": "Album",
            "name": "Kung Fu Panda 2 (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/149cfe6253d7ef42f940b3b48354a1b3277fbe10",
            "release_date": "2011",
            "about": ""
          },
          {
            "id": 350,
            "kind": "Album",
            "name": "Green Card (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/26cea1606b6c71359c9c65ec32a1389c95b0d360",
            "release_date": "1991-02-01",
            "about": ""
          },
          {
            "id": 89,
            "kind": "Album",
            "name": "Dracula Untold (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/412f25dd49def06b90233ece07e3f0dea20a11d2",
            "release_date": "2014-10-07",
            "about": ""
          },
          {
            "id": 230,
            "kind": "Album",
            "name": "Star Wars: A New Hope (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/fcd0b628bdbee20f4aaa8c4e36be8116d11f56af",
            "release_date": "1977-01-01",
            "about": ""
          },
          {
            "id": 331,
            "kind": "Album",
            "name": "Black Hawk Down (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/bca0e42d5b5d29e5de30f31ca22ffbd1b7369682",
            "release_date": "2002-01-07",
            "about": ""
          },
          {
            "id": 17,
            "kind": "Album",
            "name": "The Case Against 8 (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/afa75606a8fff48b42c0d97a2b6927779624f199",
            "release_date": "2014-06-10",
            "about": ""
          },
          {
            "id": 337,
            "kind": "Album",
            "name": "Gladiator - Music From The Motion Picture",
            "image": "https://i.scdn.co/image/4adc0e7f062a8506cf209afa422d10e3458b5255",
            "release_date": "2000-01-01",
            "about": ""
          },
          {
            "id": 295,
            "kind": "Album",
            "name": "Fools of Fortune (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/8dbb0812289f4fec264ffef3f919de73b30d83f8",
            "release_date": "2015-03-14",
            "about": ""
          },
          {
            "id": 355,
            "kind": "Album",
            "name": "Red Sparrow (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/dfbd36ca4c810a6154a1dc34429c73ecbc8822f1",
            "release_date": "2018-03-02",
            "about": ""
          },
          {
            "id": 226,
            "kind": "Album",
            "name": "Star Wars: The Empire Strikes Back (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2e7a8970799a099d3ce336dd6263cc004caff5a3",
            "release_date": "1980-01-01",
            "about": ""
          },
          {
            "id": 382,
            "kind": "Album",
            "name": "Michael Clayton (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e74dc3aed831b1961dbabf28aa64dc17128a2441",
            "release_date": "2007-01-01",
            "about": ""
          },
          {
            "id": 383,
            "kind": "Album",
            "name": "The Great Debaters (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/ae15bb646a43236ae01fc18cbca5e8fe07ab0447",
            "release_date": "2007-01-01",
            "about": ""
          },
          {
            "id": 128,
            "kind": "Album",
            "name": "The BFG (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/212b1f7302790b3237dc89c2fb42de628e24f595",
            "release_date": "2016-07-01",
            "about": ""
          },
          {
            "id": 149,
            "kind": "Album",
            "name": "Superman: The Movie (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2a2212f0a76bf8f202e531cbed6e7bf447106ff4",
            "release_date": "2005-03-15",
            "about": ""
          },
          {
            "id": 102,
            "kind": "Album",
            "name": "Clash Of The Titans: Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/c52dd525a1ebff9c122dd68abf9783e068e9f004",
            "release_date": "2010-03-30",
            "about": ""
          },
          {
            "id": 220,
            "kind": "Album",
            "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/399212ef4aa3612b92e1efe7602bcf8888a676f1",
            "release_date": "1982-01-01",
            "about": ""
          },
          {
            "id": 119,
            "kind": "Album",
            "name": "Four Brothers (Score From The Motion Picture)",
            "image": "https://i.scdn.co/image/5b27647951ab101c8a7dc86d0b123b7bb42bc37a",
            "release_date": "2005-09-20",
            "about": ""
          },
          {
            "id": 228,
            "kind": "Album",
            "name": "Jaws 2 (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/be56b7fb25122f6b296556b1f22be968b70c1be5",
            "release_date": "1978-01-01",
            "about": ""
          },
          {
            "id": 282,
            "kind": "Album",
            "name": "Blade Runner 2049 (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/71ba954049737d56477cc150c348e223ebfcfa03",
            "release_date": "2017-10-05",
            "about": ""
          },
          {
            "id": 242,
            "kind": "Album",
            "name": "Zootopia (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/f39e673f088cfea02338f234315db6222268a04f",
            "release_date": "2016-02-12",
            "about": ""
          },
          {
            "id": 309,
            "kind": "Album",
            "name": "Sherlock Holmes (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2db70832156d2b183a7c4a8fbfef883cf65abc86",
            "release_date": "2010",
            "about": ""
          },
          {
            "id": 326,
            "kind": "Album",
            "name": "Spanglish (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/3351cb5d84c56c44c18e241e4e869b4cabe22bfc",
            "release_date": "2004-01-01",
            "about": ""
          },
          {
            "id": 169,
            "kind": "Album",
            "name": "Star Wars: The Phantom Menace (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b5ea738479cd2183895ec952aa4f0d7ae6030bf0",
            "release_date": "1999-05-04",
            "about": ""
          },
          {
            "id": 129,
            "kind": "Album",
            "name": "Star Wars: The Force Awakens (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/cc5e0c2b07782e10495244a7bf8be95b120e9697",
            "release_date": "2015-12-18",
            "about": ""
          },
          {
            "id": 296,
            "kind": "Album",
            "name": "Chappie (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/643b96ec48b2050de49e227435347480522e5b09",
            "release_date": "2015-01-01",
            "about": ""
          },
          {
            "id": 252,
            "kind": "Album",
            "name": "Monte Carlo (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/6ee0a3bd4345c78dbae67bd642c21c3e8b98cab9",
            "release_date": "2011-01-01",
            "about": ""
          },
          {
            "id": 258,
            "kind": "Album",
            "name": "Let Me In (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/0100e7065757924f869ce1670742f267c322c334",
            "release_date": "2010-01-01",
            "about": ""
          },
          {
            "id": 313,
            "kind": "Album",
            "name": "Frost/Nixon (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/540c26dab23044a89f8ad62d1a4ec68d1310d3af",
            "release_date": "2008-01-01",
            "about": ""
          },
          {
            "id": 14,
            "kind": "Artist",
            "name": "James Newton Howard",
            "image": "https://i.scdn.co/image/998e3bfa6efb8832802670a015b03b1e334dc311",
            "release_date": "",
            "about": "James Newton Howard (born June 9, 1951 in Los Angeles, California, United States) is an American film score composer.  Throughout his prolific career, James Newton Howard has scored films of all scales and genres, earning multiple award nominations for his work. Howard began studying music as a small child and went on to attend the Music Academy of the West in Santa Barbara, California and then majored in piano performance at the University of Southern California. After Howard left college, he toured with Elton John and Toto as a keyboardist during the late 1970s and early 1980s before moving into film music in the mid-1980s.  By the 1990s, Howard truly hit his career stride, scoring the surprise blockbuster romantic comedy Pretty Woman (1990) and receiving his first Academy Award nomination for his score for Barbra Streisand's drama The Prince of Tides (1991). Setting the musical mood for numerous films throughout the decade, Howard's skills encompassed a plethora of genres, including two more best original score Oscar nominations, the Harrison Ford actioner The Fugitive (1993) and the Julia Roberts romantic comedy My Best Friend's Wedding. In addition, Howard scored the Western epic Wyatt Earp (1994), the legal drama Primal Fear (1996), and the blockbuster M. Night Shyamalan suspense thrillers The Sixth Sense (1999), Unbreakable (2000), Signs (2002), and The Village (2004). His collaborations on tunes for One Fine Day (1996) and Junior (1994) garnered Best Song nods. Along with scoring such smaller, character-driven films as Five Corners (1988), Glengarry Glen Ross (1992), and American Heart (1993), Howard proved equally skilled at composing for big-budget Hollywood spectacles, including Space Jam (1996), Dante's Peak (1997),  Dinosaur (2000), and Collateral (2004). Although for Dante's Peak he only composed the main theme only, the score itself was composed by John Frizzell. Though he concentrated primarily on films, Howard has also contributed music for TV series, earning an Emmy nomination in 1995 for his theme to NBC's ratings smash ER.  Howard is now one of the most recognized composers for film. His work in 2004 on The Village, with violin solos by Hilary Hahn, earned him an Oscar nomination. Since, he has composed for several major motion pictures, notably the score for Batman Begins which he co-wrote with Hans Zimmer. On October 14, 2005, it was officially announced that Howard would replace Howard Shore as composer for King Kong, due to \"differing creative aspirations for the score\" between Shore and director Peter Jackson. The resultant score earned Howard his first Golden Globe nomination for Best Original Score.  Since then he has been nominated for Best Original Score for the legal thriller Michael Clayton in 2008 and the war film Defiance in 2009. Since then he has composed music for blockbuster franchises and solo films including I Am Legend,The Dark Knight with Hans Zimmer, all of The Hunger Games films and Fantastic Beasts and Where to Find Them,with the upcoming sequel to the first film coming out in 2018."
          },
          {
            "id": 390,
            "kind": "Album",
            "name": "The Interpreter (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/a6893e5ba0622d86ee2c52ed24686351ab62f875",
            "release_date": "2005-01-01",
            "about": ""
          },
          {
            "id": 153,
            "kind": "Album",
            "name": "Harry Potter and the Prisoner of Azkaban / Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/ff3165976744f9fb7e3d7ed66280ceffacc1910d",
            "release_date": "2004-05-25",
            "about": ""
          },
          {
            "id": 297,
            "kind": "Album",
            "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)",
            "image": "https://i.scdn.co/image/eed15df0d0849836293b9f787fabf077ce9e9f2e",
            "release_date": "2014-11-21",
            "about": ""
          },
          {
            "id": 79,
            "kind": "Album",
            "name": "The Hallow (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/6150b9dd2f0dfa4ae0e64c432c3fd2825c256d79",
            "release_date": "2016-02-05",
            "about": ""
          },
          {
            "id": 28,
            "kind": "Album",
            "name": "Hoodwinked Too! Hood vs. Evil (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/862e025a9946183c9d07e070f631f797204e4333",
            "release_date": "2011-04-26",
            "about": ""
          },
          {
            "id": 359,
            "kind": "Album",
            "name": "The Huntsman: Winter's War (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/411db5afae7c02007699679df6a6d6a81d7d360e",
            "release_date": "2016-04-15",
            "about": ""
          },
          {
            "id": 345,
            "kind": "Album",
            "name": "Drop Zone (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/25020a1d63bad259ce2e975d124361bb3f880f89",
            "release_date": "1994-01-01",
            "about": ""
          },
          {
            "id": 247,
            "kind": "Album",
            "name": "Tomorrowland (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/22b97f10bfa3cd5b480179d2b00ce386b38b6a3d",
            "release_date": "2015-01-01",
            "about": ""
          },
          {
            "id": 254,
            "kind": "Album",
            "name": "Super 8 (Music From The Motion Picture)",
            "image": "https://i.scdn.co/image/3620b56b69d7e2e1f1576f37020b091fe288af4a",
            "release_date": "2011",
            "about": ""
          },
          {
            "id": 292,
            "kind": "Album",
            "name": "Kung Fu Panda 3 (Music from the Motion Picture)",
            "image": "https://i.scdn.co/image/ce15b9031909b8f8b1eb9ba97f1ff021a94764bc",
            "release_date": "2016-01-22",
            "about": ""
          },
          {
            "id": 375,
            "kind": "Album",
            "name": "The Tourist (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/2d21415e0b8bf9305f8ba8693bd6e680e9cc4389",
            "release_date": "2010",
            "about": ""
          },
          {
            "id": 386,
            "kind": "Album",
            "name": "Blood Diamond (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/0c3b0fe22afe1f00b1daf7362442b5aec46f5984",
            "release_date": "2006-01-01",
            "about": ""
          },
          {
            "id": 376,
            "kind": "Album",
            "name": "Duplicity (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/6dadaabbbc24e8d9bb28d61e3a93c5e54da59742",
            "release_date": "2009-03-24",
            "about": ""
          },
          {
            "id": 269,
            "kind": "Album",
            "name": "Mission: Impossible III (Music From The Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/fd7b67c2a0887c04d4d3ab701d928f16a4f5adb4",
            "release_date": "2006-05-08",
            "about": ""
          },
          {
            "id": 371,
            "kind": "Album",
            "name": "Green Lantern: Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/d8f39bf2f3d2a5817b6a3db17cb88cbd72441916",
            "release_date": "2011-06-14",
            "about": ""
          },
          {
            "id": 238,
            "kind": "Album",
            "name": "War for the Planet of the Apes (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/b34c68b2fca23fcec3edfaed0ad0ebf742f78411",
            "release_date": "2017-07-07",
            "about": ""
          },
          {
            "id": 344,
            "kind": "Album",
            "name": "Nine Months (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/e3f89f05715e9dc0416e356e70b8bfdacb859c8c",
            "release_date": "1995",
            "about": ""
          },
          {
            "id": 239,
            "kind": "Album",
            "name": "The Book of Henry (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/1f38d06ee95786c9ff48707ae8d93e94dc02c5b0",
            "release_date": "2017-06-16",
            "about": ""
          },
          {
            "id": 406,
            "kind": "Album",
            "name": "Outbreak (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/5cbe8d6ee204732279b5c10efd15c7a18a3efc97",
            "release_date": "1995-01-01",
            "about": ""
          },
          {
            "id": 360,
            "kind": "Album",
            "name": "The Hunger Games: Mockingjay, Part 2 (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/6a06733ab4eb0398de172fa5a4dad57d8476069a",
            "release_date": "2015-11-23",
            "about": ""
          },
          {
            "id": 224,
            "kind": "Album",
            "name": "Heartbeeps (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/8ce0ad0e3b97179d8cb7a1aa2922095fc87658ce",
            "release_date": "1981",
            "about": ""
          },
          {
            "id": 356,
            "kind": "Album",
            "name": "Roman J. Israel, Esq. (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/c92e44b1009f72a1b0a201e54d2600747de3c6ca",
            "release_date": "2017-11-03",
            "about": ""
          },
          {
            "id": 105,
            "kind": "Album",
            "name": "Fly Me To The Moon (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/055f91bb35aab81b84ec87f51e55e192a0118b94",
            "release_date": "2008-09-09",
            "about": ""
          },
          {
            "id": 237,
            "kind": "Album",
            "name": "Spider-Man: Homecoming (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/a36a0cf1e4e87df284f54eceb8f11d3e285ee2e1",
            "release_date": "2017-07-07",
            "about": ""
          },
          {
            "id": 245,
            "kind": "Album",
            "name": "Jupiter Ascending: Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/b2e808f43507a2b0d09e5c68190619a2bb773df6",
            "release_date": "2015-02-03",
            "about": ""
          },
          {
            "id": 9,
            "kind": "Album",
            "name": "Serena (Original Motion Picture Score)",
            "image": "https://i.scdn.co/image/58c0a1ad09c9ad5b398e74c0b555e5176c80ff1f",
            "release_date": "2016-09-01",
            "about": ""
          },
          {
            "id": 379,
            "kind": "Album",
            "name": "I Am Legend (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/1bf99195b95e6f849af5fb342d79764bb6b336e2",
            "release_date": "2008",
            "about": ""
          },
          {
            "id": 370,
            "kind": "Album",
            "name": "The Hunger Games: Original Motion Picture Score",
            "image": "https://i.scdn.co/image/a71c5e0f185a21f7d683da187689eb19d4d43989",
            "release_date": "2012-03-26",
            "about": ""
          },
          {
            "id": 357,
            "kind": "Album",
            "name": "Fantastic Beasts and Where to Find Them (Original Motion Picture Soundtrack) [Deluxe Edition]",
            "image": "https://i.scdn.co/image/c831efdcb8ed38529b4e762ce24eb7e37496f4e4",
            "release_date": "2016-11-18",
            "about": ""
          },
          {
            "id": 373,
            "kind": "Album",
            "name": "Nanny McPhee Returns (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/c2f4ab3737667b312967b5b5828cf123e2f4f3a6",
            "release_date": "2010-01-01",
            "about": ""
          },
          {
            "id": 148,
            "kind": "Album",
            "name": "Star Wars: Revenge of the Sith (Original Motion Picture Soundtrack)",
            "image": "https://i.scdn.co/image/8e367cf15efff0c909b0008f06a09ed15650cefb",
            "release_date": "2005-05-03",
            "about": ""
          },
          {
            "id": 156,
            "kind": "Album",
            "name": "Harry Potter and The Chamber of Secrets/ Original Motion Picture Soundtrack",
            "image": "https://i.scdn.co/image/fcdfe6c62aba4435c240cb32909ced5eef01db7c",
            "release_date": "2002-11-11",
            "about": ""
          }
        ],
        count: 200
      })
    });
  }
}
