
export default class ApiService {
  static getArtists() {
    return new Promise((resolve, reject) => {
      resolve(ARTIST_JSON)
    })
  }

  static getAlbums() {
    return new Promise((resolve, reject) => {
      resolve(ALBUM_JSON)
    })
  }

  static getMedia() {
    return new Promise((resolve, reject) => {
      resolve(MEDIA_JSON)
    })
  }
}

const ALBUM_JSON = [{
  "album_type": "album",
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
  "available_markets": ["CA", "MX", "US"],
  "copyrights": [{
    "text": "© 1982 Universal City Studios Inc.",
    "type": "C"
  }, {
    "text": "℗ 1982 Geffen Records",
    "type": "P"
  }],
  "external_ids": {
    "upc": "00602547167330"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/album/5hdpBZRfkVI9Orjq9cVJ9x"
  },
  "genres": [],
  "href": "https://api.spotify.com/v1/albums/5hdpBZRfkVI9Orjq9cVJ9x",
  "id": "5hdpBZRfkVI9Orjq9cVJ9x",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/399212ef4aa3612b92e1efe7602bcf8888a676f1",
    "width": 640
  }, {
    "height": 300,
    "url": "https://i.scdn.co/image/78cf80e3ea45f63b366a1a1f51c75280709e13e8",
    "width": 300
  }, {
    "height": 64,
    "url": "https://i.scdn.co/image/2a5cc150aad743d1456a52c663c7dfa1c10d1e97",
    "width": 64
  }],
  "label": "Geffen",
  "name": "E.T. The Extra-Terrestrial (Music From The Original Motion Picture Soundtrack)",
  "popularity": 25,
  "release_date": "1982-01-01",
  "release_date_precision": "day",
  "tracks": {
    "href": "https://api.spotify.com/v1/albums/5hdpBZRfkVI9Orjq9cVJ9x/tracks?offset=0&limit=50",
    "items": [{
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 178640,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1BwEs0zhm9avrXW4TFoE8a"
      },
      "href": "https://api.spotify.com/v1/tracks/1BwEs0zhm9avrXW4TFoE8a",
      "id": "1BwEs0zhm9avrXW4TFoE8a",
      "name": "Three Million Light Years From Home - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:1BwEs0zhm9avrXW4TFoE8a"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 182333,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3JBP0fc8YlTt5eULovZGbj"
      },
      "href": "https://api.spotify.com/v1/tracks/3JBP0fc8YlTt5eULovZGbj",
      "id": "3JBP0fc8YlTt5eULovZGbj",
      "name": "Abandoned And Pursued - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 2,
      "type": "track",
      "uri": "spotify:track:3JBP0fc8YlTt5eULovZGbj"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 294093,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7DdPHFSS6oazZCk7hM7ZoU"
      },
      "href": "https://api.spotify.com/v1/tracks/7DdPHFSS6oazZCk7hM7ZoU",
      "id": "7DdPHFSS6oazZCk7hM7ZoU",
      "name": "E.T. And Me - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:7DdPHFSS6oazZCk7hM7ZoU"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 251040,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/53I6Asl7hqUhnKGt5HuO61"
      },
      "href": "https://api.spotify.com/v1/tracks/53I6Asl7hqUhnKGt5HuO61",
      "id": "53I6Asl7hqUhnKGt5HuO61",
      "name": "E.T.'s Halloween - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 4,
      "type": "track",
      "uri": "spotify:track:53I6Asl7hqUhnKGt5HuO61"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 204466,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7lMb4MqMMBbApnMWHp1wC5"
      },
      "href": "https://api.spotify.com/v1/tracks/7lMb4MqMMBbApnMWHp1wC5",
      "id": "7lMb4MqMMBbApnMWHp1wC5",
      "name": "Flying - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:7lMb4MqMMBbApnMWHp1wC5"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 261026,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1CPV6Ga8cWsnXyeemXjQ0O"
      },
      "href": "https://api.spotify.com/v1/tracks/1CPV6Ga8cWsnXyeemXjQ0O",
      "id": "1CPV6Ga8cWsnXyeemXjQ0O",
      "name": "E.T. Phone Home - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 6,
      "type": "track",
      "uri": "spotify:track:1CPV6Ga8cWsnXyeemXjQ0O"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 131973,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/047uCf5LHj85fdBcGniA1e"
      },
      "href": "https://api.spotify.com/v1/tracks/047uCf5LHj85fdBcGniA1e",
      "id": "047uCf5LHj85fdBcGniA1e",
      "name": "Over The Moon - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 7,
      "type": "track",
      "uri": "spotify:track:047uCf5LHj85fdBcGniA1e"
    }, {
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
      "available_markets": ["CA", "MX", "US"],
      "disc_number": 1,
      "duration_ms": 908666,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/58umot7I9kiwB4feIbxkij"
      },
      "href": "https://api.spotify.com/v1/tracks/58umot7I9kiwB4feIbxkij",
      "id": "58umot7I9kiwB4feIbxkij",
      "name": "Adventure On Earth - From \"E.T. The Extra-Terrestrial\" Soundtrack",
      "preview_url": null,
      "track_number": 8,
      "type": "track",
      "uri": "spotify:track:58umot7I9kiwB4feIbxkij"
    }],
    "limit": 50,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 8
  },
  "type": "album",
  "uri": "spotify:album:5hdpBZRfkVI9Orjq9cVJ9x"
}, {
  "album_type": "album",
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
  "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
  "copyrights": [{
    "text": "© 2014 Warner Bros. Entertainment / Paramount Pictures Corp.",
    "type": "C"
  }, {
    "text": "℗ 2014 WaterTower Music",
    "type": "P"
  }],
  "external_ids": {
    "upc": "794043192753"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/album/5OVGwMCexoHavOar6v4al5"
  },
  "genres": [],
  "href": "https://api.spotify.com/v1/albums/5OVGwMCexoHavOar6v4al5",
  "id": "5OVGwMCexoHavOar6v4al5",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/eed15df0d0849836293b9f787fabf077ce9e9f2e",
    "width": 640
  }, {
    "height": 300,
    "url": "https://i.scdn.co/image/ad59534ffa0a7b3477cec616f9fc3e2edab71e06",
    "width": 300
  }, {
    "height": 64,
    "url": "https://i.scdn.co/image/398054462a0f56f58f05482b9beb3ebfb31cda15",
    "width": 64
  }],
  "label": "WaterTower Music",
  "name": "Interstellar: Original Motion Picture Soundtrack (Deluxe Digital Version)",
  "popularity": 74,
  "release_date": "2014-11-21",
  "release_date_precision": "day",
  "tracks": {
    "href": "https://api.spotify.com/v1/albums/5OVGwMCexoHavOar6v4al5/tracks?offset=0&limit=50",
    "items": [{
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 235837,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4BvjHosOH8UhWloGmoMTAC"
      },
      "href": "https://api.spotify.com/v1/tracks/4BvjHosOH8UhWloGmoMTAC",
      "id": "4BvjHosOH8UhWloGmoMTAC",
      "name": "Dreaming of the Crash",
      "preview_url": "https://p.scdn.co/mp3-preview/cf23c7182cf352325b7c87273a53482a805e04f8?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:4BvjHosOH8UhWloGmoMTAC"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 126959,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/15WRWc3qqlyAzTne9q5tQK"
      },
      "href": "https://api.spotify.com/v1/tracks/15WRWc3qqlyAzTne9q5tQK",
      "id": "15WRWc3qqlyAzTne9q5tQK",
      "name": "Cornfield Chase",
      "preview_url": "https://p.scdn.co/mp3-preview/2be1387d787a1e1c7c2b7ddb5370126a769ca0f1?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 2,
      "type": "track",
      "uri": "spotify:track:15WRWc3qqlyAzTne9q5tQK"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 341395,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6NNW7XLQ5BecXtPumwkPd5"
      },
      "href": "https://api.spotify.com/v1/tracks/6NNW7XLQ5BecXtPumwkPd5",
      "id": "6NNW7XLQ5BecXtPumwkPd5",
      "name": "Dust",
      "preview_url": "https://p.scdn.co/mp3-preview/ab31493c9117d1b89210de16fa77130cb46dc878?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:6NNW7XLQ5BecXtPumwkPd5"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 199422,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2kDBZhuazsPJYUXFUHUnJY"
      },
      "href": "https://api.spotify.com/v1/tracks/2kDBZhuazsPJYUXFUHUnJY",
      "id": "2kDBZhuazsPJYUXFUHUnJY",
      "name": "Day One",
      "preview_url": "https://p.scdn.co/mp3-preview/c0010fd7b7c3700ef6f5db0c99e138cf5cfb469f?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 4,
      "type": "track",
      "uri": "spotify:track:2kDBZhuazsPJYUXFUHUnJY"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 412424,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3yt6lebWxZqZQTdtYmmLvN"
      },
      "href": "https://api.spotify.com/v1/tracks/3yt6lebWxZqZQTdtYmmLvN",
      "id": "3yt6lebWxZqZQTdtYmmLvN",
      "name": "Stay",
      "preview_url": "https://p.scdn.co/mp3-preview/bebce4572dcac48266118ab893da5422b15e3711?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:3yt6lebWxZqZQTdtYmmLvN"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 100877,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7ifyQ8PXhpc32SFa6t6luJ"
      },
      "href": "https://api.spotify.com/v1/tracks/7ifyQ8PXhpc32SFa6t6luJ",
      "id": "7ifyQ8PXhpc32SFa6t6luJ",
      "name": "Message from Home",
      "preview_url": "https://p.scdn.co/mp3-preview/c22dd801699f697a49adb6d97414e80c290e1a97?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 6,
      "type": "track",
      "uri": "spotify:track:7ifyQ8PXhpc32SFa6t6luJ"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 90569,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7vJRMHWCk64xHgGaL9lYTq"
      },
      "href": "https://api.spotify.com/v1/tracks/7vJRMHWCk64xHgGaL9lYTq",
      "id": "7vJRMHWCk64xHgGaL9lYTq",
      "name": "The Wormhole",
      "preview_url": "https://p.scdn.co/mp3-preview/ee6f57c338d90189b11e7a2290a364a988a083e4?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 7,
      "type": "track",
      "uri": "spotify:track:7vJRMHWCk64xHgGaL9lYTq"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 219092,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/50KpZ6oMPMwuOgpAg1bA0K"
      },
      "href": "https://api.spotify.com/v1/tracks/50KpZ6oMPMwuOgpAg1bA0K",
      "id": "50KpZ6oMPMwuOgpAg1bA0K",
      "name": "Mountains",
      "preview_url": "https://p.scdn.co/mp3-preview/9b8c078407a881d8b16cd2cda53f984c0346655e?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 8,
      "type": "track",
      "uri": "spotify:track:50KpZ6oMPMwuOgpAg1bA0K"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 152672,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7lSoQ4jDIP6sTyzrMMe2Ex"
      },
      "href": "https://api.spotify.com/v1/tracks/7lSoQ4jDIP6sTyzrMMe2Ex",
      "id": "7lSoQ4jDIP6sTyzrMMe2Ex",
      "name": "Afraid of Time",
      "preview_url": "https://p.scdn.co/mp3-preview/9d3f6883bbba6bab52c0a79f39a69c30ce173281?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 9,
      "type": "track",
      "uri": "spotify:track:7lSoQ4jDIP6sTyzrMMe2Ex"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 207117,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/32AaGMEOR21inErpbCpUnq"
      },
      "href": "https://api.spotify.com/v1/tracks/32AaGMEOR21inErpbCpUnq",
      "id": "32AaGMEOR21inErpbCpUnq",
      "name": "A Place Among the Stars",
      "preview_url": "https://p.scdn.co/mp3-preview/11cf0a99dbeaa92824447c9ba90113a240d6f77a?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 10,
      "type": "track",
      "uri": "spotify:track:32AaGMEOR21inErpbCpUnq"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 117241,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0I9WXFMCidIOawoZYdWHFw"
      },
      "href": "https://api.spotify.com/v1/tracks/0I9WXFMCidIOawoZYdWHFw",
      "id": "0I9WXFMCidIOawoZYdWHFw",
      "name": "Running Out",
      "preview_url": "https://p.scdn.co/mp3-preview/188e7fd70e169ac6e1480479e78cf80c2b23c640?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 11,
      "type": "track",
      "uri": "spotify:track:0I9WXFMCidIOawoZYdWHFw"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 348552,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0TYY20j7GIY2nNvCqdjiZb"
      },
      "href": "https://api.spotify.com/v1/tracks/0TYY20j7GIY2nNvCqdjiZb",
      "id": "0TYY20j7GIY2nNvCqdjiZb",
      "name": "I'm Going Home",
      "preview_url": "https://p.scdn.co/mp3-preview/3751988c6a7b38e64ae0fff581d306192e3af428?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 12,
      "type": "track",
      "uri": "spotify:track:0TYY20j7GIY2nNvCqdjiZb"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 506876,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6rDYKHBFzhpD1epBImBRB0"
      },
      "href": "https://api.spotify.com/v1/tracks/6rDYKHBFzhpD1epBImBRB0",
      "id": "6rDYKHBFzhpD1epBImBRB0",
      "name": "Coward",
      "preview_url": "https://p.scdn.co/mp3-preview/99f563ca03c4a32347e1de6c3e0b7674abb199f2?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 13,
      "type": "track",
      "uri": "spotify:track:6rDYKHBFzhpD1epBImBRB0"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 402202,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0I0lodWcHxJUvU9Norz7ZL"
      },
      "href": "https://api.spotify.com/v1/tracks/0I0lodWcHxJUvU9Norz7ZL",
      "id": "0I0lodWcHxJUvU9Norz7ZL",
      "name": "Detach",
      "preview_url": "https://p.scdn.co/mp3-preview/29cd9cb1c4a430fb83046e5fdd2ace13837d68a4?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 14,
      "type": "track",
      "uri": "spotify:track:0I0lodWcHxJUvU9Norz7ZL"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 383513,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6Kryy0BDFtQLRQZl31sPSu"
      },
      "href": "https://api.spotify.com/v1/tracks/6Kryy0BDFtQLRQZl31sPSu",
      "id": "6Kryy0BDFtQLRQZl31sPSu",
      "name": "S.T.A.Y.",
      "preview_url": "https://p.scdn.co/mp3-preview/5d18c8bcbc514309eb49aafa660c1e29657801f3?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 15,
      "type": "track",
      "uri": "spotify:track:6Kryy0BDFtQLRQZl31sPSu"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 461268,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6CYgAIHRRDEJmOfEOj7fW4"
      },
      "href": "https://api.spotify.com/v1/tracks/6CYgAIHRRDEJmOfEOj7fW4",
      "id": "6CYgAIHRRDEJmOfEOj7fW4",
      "name": "Where We're Going",
      "preview_url": "https://p.scdn.co/mp3-preview/fce6b97a8c645cbb203f90d88d2d631cdfe9124c?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 16,
      "type": "track",
      "uri": "spotify:track:6CYgAIHRRDEJmOfEOj7fW4"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 107767,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3CU97aGUQH8Kc46Fbuc2be"
      },
      "href": "https://api.spotify.com/v1/tracks/3CU97aGUQH8Kc46Fbuc2be",
      "id": "3CU97aGUQH8Kc46Fbuc2be",
      "name": "First Step",
      "preview_url": "https://p.scdn.co/mp3-preview/36e8db5936f861dae6d21b269342a796eb2cf045?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 17,
      "type": "track",
      "uri": "spotify:track:3CU97aGUQH8Kc46Fbuc2be"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 113193,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/40V3wJuUYpCDSjY8wKOP92"
      },
      "href": "https://api.spotify.com/v1/tracks/40V3wJuUYpCDSjY8wKOP92",
      "id": "40V3wJuUYpCDSjY8wKOP92",
      "name": "Flying Drone",
      "preview_url": "https://p.scdn.co/mp3-preview/667ab8c742185292f265351176b849b91095ca1c?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 18,
      "type": "track",
      "uri": "spotify:track:40V3wJuUYpCDSjY8wKOP92"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 100985,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0yO6NY07p5p8U4eXHj4xzl"
      },
      "href": "https://api.spotify.com/v1/tracks/0yO6NY07p5p8U4eXHj4xzl",
      "id": "0yO6NY07p5p8U4eXHj4xzl",
      "name": "Atmospheric Entry",
      "preview_url": "https://p.scdn.co/mp3-preview/b5c5e285d54be47101278a651fb6b2c866bf8674?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 19,
      "type": "track",
      "uri": "spotify:track:0yO6NY07p5p8U4eXHj4xzl"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 272909,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3uPB63FBosqBVHolyToCqp"
      },
      "href": "https://api.spotify.com/v1/tracks/3uPB63FBosqBVHolyToCqp",
      "id": "3uPB63FBosqBVHolyToCqp",
      "name": "No Need to Come Back",
      "preview_url": "https://p.scdn.co/mp3-preview/28bdb03c86f6e4ab66c05db4a6ed01b9e00e0eb8?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 20,
      "type": "track",
      "uri": "spotify:track:3uPB63FBosqBVHolyToCqp"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 414896,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3reMA9dO9GXNlG9RDjkITL"
      },
      "href": "https://api.spotify.com/v1/tracks/3reMA9dO9GXNlG9RDjkITL",
      "id": "3reMA9dO9GXNlG9RDjkITL",
      "name": "Imperfect Lock",
      "preview_url": "https://p.scdn.co/mp3-preview/10c5659347ff9b4c4a44f96b4a82800ce1f0bb55?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 21,
      "type": "track",
      "uri": "spotify:track:3reMA9dO9GXNlG9RDjkITL"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 246271,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1yzSSn5Sj1azuo7RgwvDb3"
      },
      "href": "https://api.spotify.com/v1/tracks/1yzSSn5Sj1azuo7RgwvDb3",
      "id": "1yzSSn5Sj1azuo7RgwvDb3",
      "name": "No Time for Caution",
      "preview_url": "https://p.scdn.co/mp3-preview/3bf629af2f741c4fd1b67a6091a019cb1a98baaf?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 22,
      "type": "track",
      "uri": "spotify:track:1yzSSn5Sj1azuo7RgwvDb3"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 146181,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/45unIQNJXE4T6vIxIlD6ud"
      },
      "href": "https://api.spotify.com/v1/tracks/45unIQNJXE4T6vIxIlD6ud",
      "id": "45unIQNJXE4T6vIxIlD6ud",
      "name": "What Happens Now?",
      "preview_url": "https://p.scdn.co/mp3-preview/b7ed991105dd3c45920876d805a82f9069777dc1?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 23,
      "type": "track",
      "uri": "spotify:track:45unIQNJXE4T6vIxIlD6ud"
    }, {
      "artists": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1KApqVthworS08PUownIe3"
        },
        "href": "https://api.spotify.com/v1/artists/1KApqVthworS08PUownIe3",
        "id": "1KApqVthworS08PUownIe3",
        "name": "John Lithgow",
        "type": "artist",
        "uri": "spotify:artist:1KApqVthworS08PUownIe3"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0T3ox1TUGdNqRgsxJWl3rS"
        },
        "href": "https://api.spotify.com/v1/artists/0T3ox1TUGdNqRgsxJWl3rS",
        "id": "0T3ox1TUGdNqRgsxJWl3rS",
        "name": "Ellen Burstyn",
        "type": "artist",
        "uri": "spotify:artist:0T3ox1TUGdNqRgsxJWl3rS"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3G5gD8BhY1VQMYBzGkcpQs"
        },
        "href": "https://api.spotify.com/v1/artists/3G5gD8BhY1VQMYBzGkcpQs",
        "id": "3G5gD8BhY1VQMYBzGkcpQs",
        "name": "Casey Affleck",
        "type": "artist",
        "uri": "spotify:artist:3G5gD8BhY1VQMYBzGkcpQs"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4NTQfilj8qEZ14xqtpF8KF"
        },
        "href": "https://api.spotify.com/v1/artists/4NTQfilj8qEZ14xqtpF8KF",
        "id": "4NTQfilj8qEZ14xqtpF8KF",
        "name": "Jessica Chastain",
        "type": "artist",
        "uri": "spotify:artist:4NTQfilj8qEZ14xqtpF8KF"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7DZCDlWtuVA88oQoAR4Lsv"
        },
        "href": "https://api.spotify.com/v1/artists/7DZCDlWtuVA88oQoAR4Lsv",
        "id": "7DZCDlWtuVA88oQoAR4Lsv",
        "name": "Matthew McConaughey",
        "type": "artist",
        "uri": "spotify:artist:7DZCDlWtuVA88oQoAR4Lsv"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3kIbuZy0YqgLk6H2WK50f7"
        },
        "href": "https://api.spotify.com/v1/artists/3kIbuZy0YqgLk6H2WK50f7",
        "id": "3kIbuZy0YqgLk6H2WK50f7",
        "name": "Mackenzie Foy",
        "type": "artist",
        "uri": "spotify:artist:3kIbuZy0YqgLk6H2WK50f7"
      }],
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 99104,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2yd9ETb7cW2vb0SwRDlaot"
      },
      "href": "https://api.spotify.com/v1/tracks/2yd9ETb7cW2vb0SwRDlaot",
      "id": "2yd9ETb7cW2vb0SwRDlaot",
      "name": "Do Not Go Gentle into That Good Night",
      "preview_url": "https://p.scdn.co/mp3-preview/98fdfeb21918660abe54eb0fc69ce862d81e53dc?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 24,
      "type": "track",
      "uri": "spotify:track:2yd9ETb7cW2vb0SwRDlaot"
    }],
    "limit": 50,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 24
  },
  "type": "album",
  "uri": "spotify:album:5OVGwMCexoHavOar6v4al5"
}, {
  "album_type": "album",
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
  "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
  "copyrights": [{
    "text": "© 2017 WaterTower Music. RIVERDALE and all related characters and elements are trademarks of and © Archie Comics. All artwork and photography TM and © Warner Bros. Entertainment Inc. All Rights Reserved",
    "type": "C"
  }, {
    "text": "℗ 2017 WaterTower Music",
    "type": "P"
  }],
  "external_ids": {
    "upc": "794043193590"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/album/4BYS4x13edZ1f3H1j1nyv0"
  },
  "genres": [],
  "href": "https://api.spotify.com/v1/albums/4BYS4x13edZ1f3H1j1nyv0",
  "id": "4BYS4x13edZ1f3H1j1nyv0",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/6d6058dda979cc24276aaab650befd5dd963e390",
    "width": 640
  }, {
    "height": 300,
    "url": "https://i.scdn.co/image/20166a47b7dfa4150170060f0302284a4c99e16a",
    "width": 300
  }, {
    "height": 64,
    "url": "https://i.scdn.co/image/996ae7770258cc48f85a39314a9ccbbc8e6ef47e",
    "width": 64
  }],
  "label": "WaterTower Music",
  "name": "Riverdale: Original Television Score (Season 1)",
  "popularity": 43,
  "release_date": "2017-07-18",
  "release_date_precision": "day",
  "tracks": {
    "href": "https://api.spotify.com/v1/albums/4BYS4x13edZ1f3H1j1nyv0/tracks?offset=0&limit=50",
    "items": [{
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 178240,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3QY6xUkoBY4lx52tPbcHJi"
      },
      "href": "https://api.spotify.com/v1/tracks/3QY6xUkoBY4lx52tPbcHJi",
      "id": "3QY6xUkoBY4lx52tPbcHJi",
      "name": "Riverdale",
      "preview_url": "https://p.scdn.co/mp3-preview/e778df961afa374ee2c451318d974cee82f030a9?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:3QY6xUkoBY4lx52tPbcHJi"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 127066,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0XkvFOYVnm9pTio1NajJN9"
      },
      "href": "https://api.spotify.com/v1/tracks/0XkvFOYVnm9pTio1NajJN9",
      "id": "0XkvFOYVnm9pTio1NajJN9",
      "name": "If You Love Me",
      "preview_url": "https://p.scdn.co/mp3-preview/77935ce7d5c1bcb65743cd3a4cf78ca74c4e4413?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 2,
      "type": "track",
      "uri": "spotify:track:0XkvFOYVnm9pTio1NajJN9"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 189000,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6mszP4mcuY25lqfGwIkUNh"
      },
      "href": "https://api.spotify.com/v1/tracks/6mszP4mcuY25lqfGwIkUNh",
      "id": "6mszP4mcuY25lqfGwIkUNh",
      "name": "Viral Gossip in Town",
      "preview_url": "https://p.scdn.co/mp3-preview/d84ca83179d782cebd8d17e3424f4db0a2f3e376?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:6mszP4mcuY25lqfGwIkUNh"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 153186,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4RrkWSiosnd4QOgrcl7O9V"
      },
      "href": "https://api.spotify.com/v1/tracks/4RrkWSiosnd4QOgrcl7O9V",
      "id": "4RrkWSiosnd4QOgrcl7O9V",
      "name": "Everyone a Suspect",
      "preview_url": "https://p.scdn.co/mp3-preview/daab100021814244937ad4534b50539719f94b78?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 4,
      "type": "track",
      "uri": "spotify:track:4RrkWSiosnd4QOgrcl7O9V"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 116933,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3EQ7xigoKwYXtgO5aSZJEd"
      },
      "href": "https://api.spotify.com/v1/tracks/3EQ7xigoKwYXtgO5aSZJEd",
      "id": "3EQ7xigoKwYXtgO5aSZJEd",
      "name": "Receiving the Jersey",
      "preview_url": "https://p.scdn.co/mp3-preview/0ad8a363984d426c76bd1d52e2e666e09e4edb27?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:3EQ7xigoKwYXtgO5aSZJEd"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 144546,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7ry0llJRHzGpWwipjym1DH"
      },
      "href": "https://api.spotify.com/v1/tracks/7ry0llJRHzGpWwipjym1DH",
      "id": "7ry0llJRHzGpWwipjym1DH",
      "name": "Doubts and Accusations",
      "preview_url": "https://p.scdn.co/mp3-preview/186fae42a32f051e87a5fba4c37564e84ba950cb?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 6,
      "type": "track",
      "uri": "spotify:track:7ry0llJRHzGpWwipjym1DH"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 168560,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1uKFZ9kwBH4xRYRSDJUR92"
      },
      "href": "https://api.spotify.com/v1/tracks/1uKFZ9kwBH4xRYRSDJUR92",
      "id": "1uKFZ9kwBH4xRYRSDJUR92",
      "name": "All is OK With Milkshakes",
      "preview_url": "https://p.scdn.co/mp3-preview/e7863d8e63f5e334076997ed23e355d16c96860d?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 7,
      "type": "track",
      "uri": "spotify:track:1uKFZ9kwBH4xRYRSDJUR92"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 227386,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4g2WTmvJEntoz104zq0NcN"
      },
      "href": "https://api.spotify.com/v1/tracks/4g2WTmvJEntoz104zq0NcN",
      "id": "4g2WTmvJEntoz104zq0NcN",
      "name": "Long Reach",
      "preview_url": "https://p.scdn.co/mp3-preview/48cc405215a8b7411ef30d04d060942c8c66cde6?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 8,
      "type": "track",
      "uri": "spotify:track:4g2WTmvJEntoz104zq0NcN"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 251186,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/5tq3A9PcR7vIuovJ93hCk6"
      },
      "href": "https://api.spotify.com/v1/tracks/5tq3A9PcR7vIuovJ93hCk6",
      "id": "5tq3A9PcR7vIuovJ93hCk6",
      "name": "Ended Up Drowning",
      "preview_url": "https://p.scdn.co/mp3-preview/502f93743a0987e00df6f4f04f97a6b59c8c0a6e?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 9,
      "type": "track",
      "uri": "spotify:track:5tq3A9PcR7vIuovJ93hCk6"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 205400,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/50dDiays5hZReBV71XUDeU"
      },
      "href": "https://api.spotify.com/v1/tracks/50dDiays5hZReBV71XUDeU",
      "id": "50dDiays5hZReBV71XUDeU",
      "name": "Irreconcilable",
      "preview_url": "https://p.scdn.co/mp3-preview/2e3bb028a80dd114365186ceaeaeab0500a9055b?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 10,
      "type": "track",
      "uri": "spotify:track:50dDiays5hZReBV71XUDeU"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 162520,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3SnJQ4ClbhnzbTnv2TnVOH"
      },
      "href": "https://api.spotify.com/v1/tracks/3SnJQ4ClbhnzbTnv2TnVOH",
      "id": "3SnJQ4ClbhnzbTnv2TnVOH",
      "name": "So Many Questions",
      "preview_url": "https://p.scdn.co/mp3-preview/9dd9c14a379d269baaeb2f3f906309efadbd9061?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 11,
      "type": "track",
      "uri": "spotify:track:3SnJQ4ClbhnzbTnv2TnVOH"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 203026,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6IAEkQeHs0Ne09AEpDNuZU"
      },
      "href": "https://api.spotify.com/v1/tracks/6IAEkQeHs0Ne09AEpDNuZU",
      "id": "6IAEkQeHs0Ne09AEpDNuZU",
      "name": "A Gift / Forced to Leave",
      "preview_url": "https://p.scdn.co/mp3-preview/5cfc8390c03d620f283d73e4dfcc1591d7cfbe6c?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 12,
      "type": "track",
      "uri": "spotify:track:6IAEkQeHs0Ne09AEpDNuZU"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 205506,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0koz0BlCix7qekguSEQUif"
      },
      "href": "https://api.spotify.com/v1/tracks/0koz0BlCix7qekguSEQUif",
      "id": "0koz0BlCix7qekguSEQUif",
      "name": "Not Making the Play",
      "preview_url": "https://p.scdn.co/mp3-preview/9ff16482ac2a19adb7d91ab69dc57923cb43a62c?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 13,
      "type": "track",
      "uri": "spotify:track:0koz0BlCix7qekguSEQUif"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 233346,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/15sHRo4Awj5ElzQq2QvUiA"
      },
      "href": "https://api.spotify.com/v1/tracks/15sHRo4Awj5ElzQq2QvUiA",
      "id": "15sHRo4Awj5ElzQq2QvUiA",
      "name": "Overwhelming Evidence",
      "preview_url": "https://p.scdn.co/mp3-preview/759c0857f3885d00d65b8846bf4864193a9402f5?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 14,
      "type": "track",
      "uri": "spotify:track:15sHRo4Awj5ElzQq2QvUiA"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 121880,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1lSz9oY7WI0W2D5Ox6u5GU"
      },
      "href": "https://api.spotify.com/v1/tracks/1lSz9oY7WI0W2D5Ox6u5GU",
      "id": "1lSz9oY7WI0W2D5Ox6u5GU",
      "name": "Realizations",
      "preview_url": "https://p.scdn.co/mp3-preview/ff51c7e140877e54d11c0ab2bd4ff00c00b5d352?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 15,
      "type": "track",
      "uri": "spotify:track:1lSz9oY7WI0W2D5Ox6u5GU"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 158106,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7E5n773WKcO3dAzUUodAqq"
      },
      "href": "https://api.spotify.com/v1/tracks/7E5n773WKcO3dAzUUodAqq",
      "id": "7E5n773WKcO3dAzUUodAqq",
      "name": "Do You Feel Guilty?",
      "preview_url": "https://p.scdn.co/mp3-preview/6411b57d6184970c799bd1d710f3ca5f0ded0481?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 16,
      "type": "track",
      "uri": "spotify:track:7E5n773WKcO3dAzUUodAqq"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 200906,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/45bxLRXPHAjQGRNcdAAZq9"
      },
      "href": "https://api.spotify.com/v1/tracks/45bxLRXPHAjQGRNcdAAZq9",
      "id": "45bxLRXPHAjQGRNcdAAZq9",
      "name": "Into the Woods",
      "preview_url": "https://p.scdn.co/mp3-preview/eb619ba3fb4f27fbc55afa0d9d8646d969523881?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 17,
      "type": "track",
      "uri": "spotify:track:45bxLRXPHAjQGRNcdAAZq9"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 218813,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1x41h3lSAUoaAdYZvhD945"
      },
      "href": "https://api.spotify.com/v1/tracks/1x41h3lSAUoaAdYZvhD945",
      "id": "1x41h3lSAUoaAdYZvhD945",
      "name": "Name of the Game",
      "preview_url": "https://p.scdn.co/mp3-preview/0b699e110d6110520a176e048d75c209441dded1?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 18,
      "type": "track",
      "uri": "spotify:track:1x41h3lSAUoaAdYZvhD945"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 172400,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7IHXKpoFDy6V155tK8rJ6D"
      },
      "href": "https://api.spotify.com/v1/tracks/7IHXKpoFDy6V155tK8rJ6D",
      "id": "7IHXKpoFDy6V155tK8rJ6D",
      "name": "Angry and Vulnerable Girls",
      "preview_url": "https://p.scdn.co/mp3-preview/9b9fd57ef41cab26689bc344e12df37ff3887505?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 19,
      "type": "track",
      "uri": "spotify:track:7IHXKpoFDy6V155tK8rJ6D"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 279520,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4a7LcdAOSgR8d13yKyj8wk"
      },
      "href": "https://api.spotify.com/v1/tracks/4a7LcdAOSgR8d13yKyj8wk",
      "id": "4a7LcdAOSgR8d13yKyj8wk",
      "name": "Results of the Father",
      "preview_url": "https://p.scdn.co/mp3-preview/d230526791f58c7cae1d0d93fd077aa6ee085eb7?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 20,
      "type": "track",
      "uri": "spotify:track:4a7LcdAOSgR8d13yKyj8wk"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 164680,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0y7kt9eOdyvkVrl55jfWnb"
      },
      "href": "https://api.spotify.com/v1/tracks/0y7kt9eOdyvkVrl55jfWnb",
      "id": "0y7kt9eOdyvkVrl55jfWnb",
      "name": "Your Father Was Arrested",
      "preview_url": "https://p.scdn.co/mp3-preview/abe1b339bf2abb9b0130580901d02902398708aa?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 21,
      "type": "track",
      "uri": "spotify:track:0y7kt9eOdyvkVrl55jfWnb"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 252266,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1dHFyBmiyDBR45MEIuOxK7"
      },
      "href": "https://api.spotify.com/v1/tracks/1dHFyBmiyDBR45MEIuOxK7",
      "id": "1dHFyBmiyDBR45MEIuOxK7",
      "name": "The Recording",
      "preview_url": "https://p.scdn.co/mp3-preview/c2b4f2a1e4eaa935f20971e4b8f427fbc104a765?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 22,
      "type": "track",
      "uri": "spotify:track:1dHFyBmiyDBR45MEIuOxK7"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 231560,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2Otbc9FQYSfvLTSK8mmLVm"
      },
      "href": "https://api.spotify.com/v1/tracks/2Otbc9FQYSfvLTSK8mmLVm",
      "id": "2Otbc9FQYSfvLTSK8mmLVm",
      "name": "Oh, Mommy!",
      "preview_url": "https://p.scdn.co/mp3-preview/b387a0454ac570bb4a0bfcf988b27857c617c30d?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 23,
      "type": "track",
      "uri": "spotify:track:2Otbc9FQYSfvLTSK8mmLVm"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 209680,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4NfqvGFnAdKwwTSIJbtrux"
      },
      "href": "https://api.spotify.com/v1/tracks/4NfqvGFnAdKwwTSIJbtrux",
      "id": "4NfqvGFnAdKwwTSIJbtrux",
      "name": "What Floats Beneath",
      "preview_url": "https://p.scdn.co/mp3-preview/0f4367ec164ece4a66d3d189c21bc94a1a7ce1cc?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 24,
      "type": "track",
      "uri": "spotify:track:4NfqvGFnAdKwwTSIJbtrux"
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
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY"],
      "disc_number": 1,
      "duration_ms": 118746,
      "explicit": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1e3tmixllMnIr0wbPreefB"
      },
      "href": "https://api.spotify.com/v1/tracks/1e3tmixllMnIr0wbPreefB",
      "id": "1e3tmixllMnIr0wbPreefB",
      "name": "Never Safe",
      "preview_url": "https://p.scdn.co/mp3-preview/b3f31ffed9444eb5be74b4a07fea0c72a13a4ff1?cid=a170636bea114cc6bd242130450d7e81",
      "track_number": 25,
      "type": "track",
      "uri": "spotify:track:1e3tmixllMnIr0wbPreefB"
    }],
    "limit": 50,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 25
  },
  "type": "album",
  "uri": "spotify:album:4BYS4x13edZ1f3H1j1nyv0"
}]


const ARTIST_JSON = [{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/4UOzqO0jZUrTiTunfBw4tp"
  },
  "followers": {
    "href": null,
    "total": 10677
  },
  "genres": ["epicore", "scorecore", "soundtrack", "video game music"],
  "href": "https://api.spotify.com/v1/artists/4UOzqO0jZUrTiTunfBw4tp",
  "id": "4UOzqO0jZUrTiTunfBw4tp",
  "images": [{
    "height": 1000,
    "url": "https://i.scdn.co/image/86193f7ba3136d145915a9afb477626ed1c9f40a",
    "width": 1000
  }, {
    "height": 640,
    "url": "https://i.scdn.co/image/fd2411a369cfbff1397ed9ca9ed95d308e7e4bcf",
    "width": 640
  }, {
    "height": 200,
    "url": "https://i.scdn.co/image/ac8167667869ec415062d36b77f061cfa23c3bc2",
    "width": 200
  }, {
    "height": 64,
    "url": "https://i.scdn.co/image/ac859a1dcd49deb66d4aec86de87d707eecfab36",
    "width": 64
  }],
  "name": "Blake Neely",
  "popularity": 56,
  "type": "artist",
  "uri": "spotify:artist:4UOzqO0jZUrTiTunfBw4tp"
}, {
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"
  },
  "followers": {
    "href": null,
    "total": 1068930
  },
  "genres": ["soundtrack"],
  "href": "https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ",
  "id": "0YC192cP3KPCRWx8zr8MfZ",
  "images": [{
    "height": 563,
    "url": "https://i.scdn.co/image/14657235e8724181f8b32c6bfa54cdbf86d70852",
    "width": 1000
  }, {
    "height": 360,
    "url": "https://i.scdn.co/image/960a8d4afdf777c543618e384428aacffdcf517a",
    "width": 640
  }, {
    "height": 113,
    "url": "https://i.scdn.co/image/94ad4486b19037fa88ed58a946698365f4a7bb73",
    "width": 200
  }, {
    "height": 36,
    "url": "https://i.scdn.co/image/3d05c3dffd54fb06b0191f258e88ca3b5832250f",
    "width": 64
  }],
  "name": "Hans Zimmer",
  "popularity": 80,
  "type": "artist",
  "uri": "spotify:artist:0YC192cP3KPCRWx8zr8MfZ"
}, {
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/3dRfiJ2650SZu6GbydcHNb"
  },
  "followers": {
    "href": null,
    "total": 550855
  },
  "genres": ["soundtrack"],
  "href": "https://api.spotify.com/v1/artists/3dRfiJ2650SZu6GbydcHNb",
  "id": "3dRfiJ2650SZu6GbydcHNb",
  "images": [{
    "height": 1500,
    "url": "https://i.scdn.co/image/bde64350466df4aa41efb9b8b766deef6c46fd08",
    "width": 1000
  }, {
    "height": 960,
    "url": "https://i.scdn.co/image/6a9431e000404c20c36a2be94bf962002844b39f",
    "width": 640
  }, {
    "height": 300,
    "url": "https://i.scdn.co/image/a7aa976f681b60848abef51e5798d2bd62afa605",
    "width": 200
  }, {
    "height": 96,
    "url": "https://i.scdn.co/image/92ec82b0fdba388d1fce2e4b0ccba5f12e4f139a",
    "width": 64
  }],
  "name": "John Williams",
  "popularity": 79,
  "type": "artist",
  "uri": "spotify:artist:3dRfiJ2650SZu6GbydcHNb"
}]

const MEDIA_JSON = [
  {
    "adult": false,
    "backdrop_path": "/mXLVA0YL6tcXi6SJSuAh9ONXFj5.jpg",
    "belongs_to_collection": null,
    "budget": 10500000,
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "homepage": "http://www.et20.com/",
    "id": 601,
    "imdb_id": "tt0083866",
    "original_language": "en",
    "original_title": "E.T. the Extra-Terrestrial",
    "overview": "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
    "popularity": 26.231302,
    "poster_path": "/8htLKK03TJjKZOXJgihZCu8v0P.jpg",
    "production_companies": [
      {
        "name": "Universal Pictures",
        "id": 33
      },
      {
        "name": "Amblin Entertainment",
        "id": 56
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "1982-04-03",
    "revenue": 792965326,
    "runtime": 115,
    "spoken_languages": [
      {
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "He is afraid. He is alone. He is three million light years from home.",
    "title": "E.T. the Extra-Terrestrial",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 4052
  }, {
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
        "name": "Paramount Pictures",
        "id": 4
      },
      {
        "name": "Legendary Pictures",
        "id": 923
      },
      {
        "name": "Warner Bros.",
        "id": 6194
      },
      {
        "name": "Syncopy",
        "id": 9996
      },
      {
        "name": "Lynda Obst Productions",
        "id": 13769
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
  }, {
    "backdrop_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
    "created_by": [
      {
        "id": 1098032,
        "name": "Roberto Aguirre-Sacasa",
        "gender": 0,
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
        "name": "Warner Bros. Television",
        "id": 1957
      },
      {
        "name": "Berlanti Productions",
        "id": 27711
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
  }]