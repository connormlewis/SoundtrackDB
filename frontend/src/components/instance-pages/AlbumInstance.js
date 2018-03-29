import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { RelatedArtists } from './RelatedArtists'; 
import { RelatedMedia } from './RelatedMedia'; 

export class AlbumInstance extends Component {

  getTracklist() {
    const track_list = this.props.album.tracks; 
    return (
      <Fragment>
      {
        track_list.map((track) => {
          return (
            <li key={track.id}>{track.name}</li>
          )
        })
      }
      </Fragment>
    )
  }

  getArtists() {
    const artists = this.props.album.artists;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('artistInstance', { artistID: id });
    }
    return (<RelatedArtists artists={artists} navigateToInstance={navigateToInstance}/>);
  }

  getMedia() {
    const media = this.props.album.media;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('mediaInstance', { mediaID: id });
    }
    return (<RelatedMedia media={media} navigateToInstance={navigateToInstance}/>);
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="8">
            <h2 id="name">{this.props.album.name}</h2>
            <h3>About</h3>
            <p id="label">Label: {this.props.album.label}</p>
            <p id="year">Release year: {this.props.album.release_date.substring(0,4)}</p>
            <h3>Tracklist</h3>
            <ol id="tracks">{this.getTracklist()}</ol>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.album.image} alt="Poster" vspace="20"/>
            <iframe className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.album.spotify_uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>
        <Row>
          <div id="media">{this.getMedia()}</div>
        </Row>
        <Row>
          <div id="artists"> {this.getArtists()} </div>
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