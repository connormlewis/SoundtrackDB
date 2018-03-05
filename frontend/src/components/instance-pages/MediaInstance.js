import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap'; 
import PropTypes from 'prop-types'

export class MediaInstance extends Component {
  render () {
    return (
      <Fragment>
        <Row className="pb-2">
          <Col sm="8">
            <h1 id="name">{this.props.media.name}</h1>
            <h4>{this.props.media.type ? 'Movie' : 'TV Series'} | {this.props.media.years} | {this.props.media.name ? this.props.media.seasons + " seasons |" : ""} {this.props.media.genres}</h4>
            <h3>About</h3>
            <p>{this.props.media.description}</p>
            <Row className="pb-2">
              <Col sm="6">

              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
          </Col>
        </Row>
      </Fragment>
    );
  }
}

MediaInstance.propTypes = {
  resolves: PropTypes.shape({
    media: PropTypes.arrayOf(PropTypes.object)
  })
}