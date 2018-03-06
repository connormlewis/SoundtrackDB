import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap'; 
import PropTypes from 'prop-types'

export class MediaInstance extends Component {
  getTitle() {
    let model_data = this.props.media.model_data; 

    if(model_data.name) {
      return model_data.name; 
    }
    else {
      return model_data.title; 
    }
  }

  getSubtitle() {
    let model_data = this.props.media.model_data; 
    if(model_data.name) {
      let first = model_data.first_air_date.substring(0, 4);  
      let last = model_data.last_air_date.substring(0, 4); 
      if (last === '2018') {
        last = 'Present'; 
      }
      let years = ''; 
      if (first === last) {
        years = first; 
      }
      else {
        years = first + ' - ' + last; 
      }

      let seasons = model_data.seasons.length; 
      let genres = model_data.genres.map(function(genre){return genre.name;}).join(', ');
      return 'TV Show | ' + years + ' | ' + seasons + " seasons | " + genres; 
    }
    else {
      let year = model_data.release_date.substring(0, 4); 
      let genres = model_data.genres.map(function(genre){return genre.name;}).join(', ');
      return 'Movie | ' + year + ' | ' + genres; 
    }
  }

  getCast() {
    const cast = this.props.media.cast_data.cast; 
    return cast.map((member, index) => <li key={index}>{member.name}</li>); 
  }

  render () {
    return (
      <Fragment>
        <Row className="pb-2">
          <Col sm="8">
            <h1 id="name">{this.getTitle()}</h1>
            <h4 id="subtitle">{this.getSubtitle()}</h4>
            <h3>About</h3>
            <p id="about">{this.props.media.model_data.overview}</p>
            <Row className="pb-2">
              <Col sm="6">
                <h3>Cast</h3>
                <ul id="cast">{this.getCast()}</ul>
              </Col>
            </Row>
          </Col> 
          <Col sm="4">
            <img className="w-100" src={"http://image.tmdb.org/t/p/w500/" + this.props.media.model_data.poster_path} alt="Poster" vspace="20"/>
            <div className="embed-responsive embed-responsive-16by9 w-100">
              <iframe className="embed-responsive-item" title="Trailer" src={"//www.youtube.com/embed/" + this.props.media.video_data.results[0].key} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h3>Soundtracks</h3>
            <ul id="albums"></ul>
          </Col>
          <Col sm="6">
            <h3>Artists</h3>
            <ul id="artists"></ul>
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