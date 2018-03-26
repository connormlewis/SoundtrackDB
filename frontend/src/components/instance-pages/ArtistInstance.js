import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { UISref } from '@uirouter/react';
import styles from "../../style/Artist.css"; 

export class ArtistInstance extends Component {

  getAlbums() {
    const albums = this.props.artist.albums; 
    return (
      <Fragment>
      {
        albums.map((album) => {
          return (
            <li key={album.id}>
              <UISref to="albumInstance" params={{ albumID: album.id }}>
                <a>{album.name}</a>
              </UISref>
            </li>
          )
        })
      }
      </Fragment>
    ); 
  }

  getMedia() {
    const media = this.props.artist.media; 
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
            <h2 id="name">{this.props.artist.name}</h2>
            <iframe id="followers" title="Artist Followers" src={"https://open.spotify.com/follow/1/?uri=" + this.props.artist.spotify_uri + "&size=detail&theme=light"} width="300" height="56" scrolling="no" frameborder="0" allowtransparency="true"> </iframe>
            <h3>Biography</h3>
            <p id="bio">{this.props.artist.bio === undefined || this.props.artist.bio === null || this.props.artist.length === 0 ? "No biography available" : this.props.artist.bio}</p>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.artist.image} alt="Artist" vspace="20"/>
            <iframe id="player" className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.artist.spotify_uri} height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h3>Media</h3>
            <ul id="media">{this.getMedia()}</ul>
          </Col>
          <Col sm="6">
            <h3>Albums</h3>
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