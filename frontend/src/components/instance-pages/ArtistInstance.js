import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { UISref } from '@uirouter/react';

export class ArtistInstance extends Component {

  getAlbums() {
    const albums = this.props.artist.albums; 
    return (
      <li key={albums[0]}>
        <UISref to="albumInstance" params={{albumID:albums[0]}}>
          <a>{albums[1]}</a>
        </UISref>
      </li>
    ); 
  }

  getMedia() {
    const media = this.props.artist.media; 
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
            <h2 id="name">{this.props.artist.name}</h2>
            <h3>Biography</h3>
            <p id="bio">{this.props.artist.biography}</p>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.artist.img} alt="Artist" vspace="20"/>
            <iframe className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.artist.uri} height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h3>Media</h3>
            <ul id="media">{this.getMedia()}</ul>
          </Col>
          <Col sm="6">
            <h3>Artists</h3>
            <ul id="albums">{this.getAlbums()}</ul>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

ArtistInstance.propTypes = {
  resolves: PropTypes.shape({
    artist: PropTypes.arrayOf(PropTypes.object)
  })
}