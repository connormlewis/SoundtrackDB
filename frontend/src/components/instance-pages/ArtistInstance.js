import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'reactstrap'; 
import { UISref } from '@uirouter/react';

export class ArtistInstance extends Component {

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
      </Fragment>
    );
  }
}

ArtistInstance.propTypes = {
  resolves: PropTypes.shape({
    artist: PropTypes.arrayOf(PropTypes.object)
  })
}