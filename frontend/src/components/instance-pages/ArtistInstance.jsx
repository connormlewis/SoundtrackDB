import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import styles from "../../style/Artist.css"; 
import { RelatedAlbums } from './RelatedAlbums'; 
import { RelatedMedia } from './RelatedMedia'; 

export class ArtistInstance extends Component {

  getAlbums() {
    const albums = this.props.artist.albums;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('album.instance', { albumID: id });
    }
    return (<RelatedAlbums albums={albums} navigateToInstance={navigateToInstance}/>);
  }

  getMedia() {
    const media = this.props.artist.media;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('media.instance', { mediaID: id });
    }
    return (<RelatedMedia media={media} navigateToInstance={navigateToInstance}/>);
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="8">
            <h1 id="name" className="artist-name">{this.props.artist.name}</h1>
            <iframe id="followers" className="w-30" title="Artist Followers" src={"https://open.spotify.com/follow/1/?uri=" + this.props.artist.spotify_uri + "&size=detail&theme=light"} height="56" scrolling="no" frameBorder="0" allowtransparency="true"> </iframe>
            <h3>Biography</h3>
            <p id="bio" style={{whiteSpace: 'pre-line'}}>{this.props.artist.bio === undefined || this.props.artist.bio === null || this.props.artist.length === 0 ? "No biography available" : this.props.artist.bio}</p>
            <h3>Learn More</h3>
            <a className="external-links" href={"https://open.spotify.com/artist/" + this.props.artist.spotify_uri.substring(15)} target="_blank" style={{paddingLeft: "10px", display: "inline-block", paddingBottom: "5px"}}>Spotify</a>
            <br/>
            <a className="external-links" href={"https://www.last.fm/music/" + this.props.artist.name} target="_blank" style={{paddingLeft: "10px", display: "inline-block", paddingBottom: "5px"}}>Last FM</a>
          </Col>
          <Col sm="4">
            <img id="artist-image" className="w-100" src={this.props.artist.image} alt="Artist" vspace="20" style={styles} />
            <iframe id="player" className="embed-responsive-item w-100" title="Spotify Player" src={"https://open.spotify.com/embed?uri=" + this.props.artist.spotify_uri} height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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