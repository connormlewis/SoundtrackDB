import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap'; 
import PropTypes from 'prop-types'
import { UISref } from '@uirouter/react';
import { MediaCarousel } from './MediaCarousel'; 

export class MediaInstance extends Component {

  getSubtitle() {
    let model_data = this.props.media;
    if(model_data.type === 'show') {
      let first = model_data.years[0];  
      let last = ''; 
      if (model_data.running === true) {
        last = 'Present'; 
      }
      else {
        last = model_data.years[model_data.years.length - 1]; 
      }

      let years = ''; 
      if (first === last) {
        years = first; 
      }
      else {
        years = first + ' - ' + last; 
      }

      let seasons = model_data.seasons; 
      let genres = model_data.genres.join(', ');
      return 'TV Show | ' + years + ' | ' + seasons + " seasons | " + genres; 
    }
    else {
      let year = model_data.years; 
      let genres = model_data.genres.join(', ');
      return 'Movie | ' + year + ' | ' + genres; 
    }
  }

  getCast() {
    const cast = this.props.media.cast; 
    return cast.map((member, index) => <li key={index}>{member}</li>); 
  }

  getAlbums() {
    const albums = this.props.media.albums; 
    return (
      <li key={albums[0]}>
        <UISref to="albumInstance" params={{albumID:albums[0]}}>
          <a>{albums[1]}</a>
        </UISref>
      </li>
    ); 
  }

  getArtists() {
    const artists = this.props.media.artists; 
    return (
      <li key={artists[0]}>
        <UISref to="artistInstance" params={{artistID:artists[0]}}>
          <a>{artists[1]}</a>
        </UISref>
      </li>
    ); 
  }

  render () {
    return (
      <Fragment>
        <Row className="pb-2">
          <Col sm="8">
            <h1 id="name">{this.props.media.name}</h1>
            <h4 id="subtitle">{this.getSubtitle()}</h4>
            <h3>About</h3>
            <p id="about">{this.props.media.overview}</p>
            <Row className="pb-2">
              <Col sm="6">
                <h3>Cast</h3>
                <ul id="cast">{this.getCast()}</ul>
                <h3>Photos</h3>
                <MediaCarousel photos={this.props.media.backdrops}/>
              </Col>
            </Row>
          </Col> 
          <Col sm="4">
            <img className="w-100" src={this.props.media.poster} alt="Poster" vspace="20"/>
            <div className="embed-responsive embed-responsive-16by9 w-100">
              <iframe className="embed-responsive-item" title="Trailer" src={"//www.youtube.com/embed/" + this.props.media.video.key} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h3>Soundtracks</h3>
            <ul id="albums">{this.getAlbums()}</ul>
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

MediaInstance.propTypes = {
  resolves: PropTypes.shape({
    media: PropTypes.arrayOf(PropTypes.object)
  })
}