import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

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

class ArtistItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.artist.id);
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <div width="100%" className="card-img-top" src={this.props.artist.images[0].url} alt="Card image cap" style={{
          height: '200px',
          backgroundImage: `url('${this.props.artist.images[1].url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <CardBody>
          <CardTitle className="text-left">{this.props.artist.name}</CardTitle>
          <CardSubtitle className="text-muted text-left">Artist</CardSubtitle>
          <CardText className="text-left">Spotify Followers: {this.props.artist.followers.total.toLocaleString()}</CardText>
        </CardBody>
      </Card>
    );
  }
}

class ArtistHome extends Component {
  constructor(props) {
    super(props)
    this.artists = ARTIST_JSON
    this.navigateToInstance = this.navigateToInstance.bind(this);
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('artistInstance', { artistID: id });
  }

  render() {
    return (
      <Fragment>
        <h2>Artists</h2>
        <div className="row">
          {
            this.artists.map((artist) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={artist.id}>
                  <ArtistItem artist={artist} navigateToInstance={this.navigateToInstance} />
                </div>
              );
            })
          }
        </div>
      </Fragment>
    );
  }
}

export default ArtistHome; 