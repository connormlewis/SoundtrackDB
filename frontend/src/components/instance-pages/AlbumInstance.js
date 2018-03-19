import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { UISref } from '@uirouter/react';

export class AlbumInstance extends Component {

  getTracklist() {
    const track_list = this.props.album.track_list; 
    return track_list.map((track, index) => <li key={index}>{track}</li>);
  }

  getArtists() {
    const artists = this.props.album.artists; 
    return (
      <li key={artists[0]}>
        <UISref to="artistInstance" params={{artistID:artists[0]}}>
          <a>{artists[1]}</a>
        </UISref>
      </li>
    ); 
  }

  getMedia() {
    const media = this.props.album.media; 
    return (
      <li key={media[0]}>
        <UISref to="mediaInstance" params={{mediaID:media[0]}}>
          <a>{media[1]}</a>
        </UISref>
      </li>
    ); 
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="8">
            <h2 id="name">{this.props.album.name}</h2>
            <h3>About</h3>
            <p id="label">Label: {this.props.album.model_data.label}</p>
            <p id="year">Release year: {this.props.album.year}</p>
            <p id="artistlist">Artists: {this.props.album.artists[1]}</p>
            <h3>Tracklist</h3>
              <ol id="tracks">{this.getTracklist()}</ol>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.album.model_data.images[1].url} alt="Poster" vspace="20"/>
            <iframe className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.album.model_data.uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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