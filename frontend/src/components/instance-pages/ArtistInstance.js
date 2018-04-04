import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { RelatedAlbums } from './RelatedAlbums'; 
import { RelatedMedia } from './RelatedMedia'; 

export class ArtistInstance extends Component {

  getAlbums() {
    const albums = this.props.artist.albums;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('albumInstance', { albumID: id });
    }
    return (<RelatedAlbums albums={albums} navigateToInstance={navigateToInstance}/>);
  }

  getMedia() {
    const media = this.props.artist.media;
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
            <h2 id="name">{this.props.artist.name}</h2>
            <h3>Biography</h3>
            <p id="bio">{this.props.artist.bio === undefined || this.props.artist.bio === null || this.props.artist.length === 0 ? "No biography available" : this.props.artist.bio}</p>
          </Col>
          <Col sm="4">
            <img className="w-100" src={this.props.artist.image} alt="Artist" vspace="20"/>
            <iframe className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.artist.spotify_uri} height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>
        <Row>
          <div id="media">{this.getMedia()}</div>  
        </Row>
        <Row>
          <div id="albums">{this.getAlbums()}</div>
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