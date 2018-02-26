import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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

class MediaItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.media.id);
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <CardImg top width="100%" src={"http://image.tmdb.org/t/p/w500/" + this.props.media.poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-left">{this.props.media.name ? this.props.media.name : this.props.media.title}</CardTitle>
          <CardSubtitle className="text-muted text-left">{this.props.media.name ? 'TV Series' : 'Movie'} • {this.props.media.yearText}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

class MediaHome extends Component {
  constructor(props) {
    super(props)
    this.media = MEDIA_JSON
    this.navigateToInstance = this.navigateToInstance.bind(this);
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('mediaInstance', { mediaID: id });
  }

  render() {
    return (
      <Fragment>
        <h2>Movies/TV Series</h2>
        <div className="row">
          {
            this.media.map((mediaItem) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={mediaItem.id}>
                  <MediaItem media={mediaItem} navigateToInstance={this.navigateToInstance}/>
                </div>
              );
            })
          }
        </div>
      </Fragment>
    );
  }
}

export default MediaHome; 