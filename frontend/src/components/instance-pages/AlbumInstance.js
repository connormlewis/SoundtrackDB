import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { UISref } from '@uirouter/react';

export class AlbumInstance extends Component {

  getTracklist() {
    const track_list = this.props.album.tracks; 
    return (
      <Fragment>
      {
        track_list.map((track) => {
          let artists = [];
          for (let i = 0; i < track.artists.length; i++) {
            artists.push(track.artists[i].name);
          }
          let artist_names = artists.join(', ');
          return (
            <li key={track.id}><strong>{track.name}</strong> by <em>{artist_names}</em></li>
          )
        })
      }
      </Fragment>
    )
  }

  getArtists() {
    const artists = this.props.album.artists; 
    return (
      <Fragment>
      {
        artists.map((artist) => {
          return (
            <li key={artist.id}>
              <UISref to="artistInstance" params={{ artistID: artist.id }}>
                <a>{ artist.name }</a>
              </UISref>
            </li>
          )
        })
      }
      </Fragment>
    ); 
  }

  getMedia() {
    const media = this.props.album.media; 
    return (
      <Fragment>
      {
        media.map((item) => {
          return (
            <li key={item.id}>
              <UISref to="mediaInstance" params={{ mediaID: item.id }}>
                <a>{item.name}</a>
              </UISref>
            </li>
          )
        })
      }
      </Fragment>
    )
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="8">
            <h1 id="name">{this.props.album.name}</h1>
            <h3>About</h3>
            <p id="label">Label: {this.props.album.label}</p>
            <p id="year">Release Year: {this.props.album.release_date.substring(0,4)}</p>
            <h3>Tracklist</h3>
            <ol id="tracks">{this.getTracklist()}</ol>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.album.image} alt="Poster" vspace="20"/>
            <iframe className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.album.spotify_uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h3>Media</h3>
            <ul id="media">{this.getMedia()}</ul>
          </Col>
          <Col sm="6">
            <h3>Artists</h3>
            <ul id="artists">{this.getArtists()}</ul>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

AlbumInstance.propTypes = {
  resolves: PropTypes.shape({
    album: PropTypes.arrayOf(PropTypes.object)
  })
}