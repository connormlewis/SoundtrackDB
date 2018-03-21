import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap'; 
import PropTypes from 'prop-types'
import { UISref } from '@uirouter/react';
import { MediaCarousel } from './MediaCarousel'; 

export class MediaInstance extends Component {

  getSubtitle() {
    let model_data = this.props.media;
    if(model_data.type === 0) {
      let first = model_data.release_date;  
      let last = ''; 
      if (model_data.running === true) {
        last = 'Present'; 
      }
      else {
        last = model_data.last_aired;
      }

      let years = ''; 
      if (first === last) {
        years = first; 
      }
      else {
        years = first + ' - ' + last; 
      }

      let seasons = model_data.seasons; 
      let genres = [];
      for(let i = 0; i < model_data.genres.length; i++) {
        genres.push(model_data.genres[i].name); 
      }
      genres = genres.join(', ');
      return 'TV Show | ' + years + ' | ' + seasons + " seasons | " + genres; 
    }
    else {
      let year = model_data.release_date; 
      let genres = [];
      for(let i = 0; i < model_data.genres.length; i++) {
        genres.push(model_data.genres[i].name); 
      }
      genres = genres.join(', ');
      return 'Movie | ' + year + ' | ' + genres; 
    }
  }

  getCast() {
    const cast_data = this.props.media.cast; 
    let cast = [];
    for(let i = 0; i < cast_data.length; i++) {
      cast.push(cast_data[i].name); 
    }
    return cast.map((member, index) => <li key={index}>{member}</li>); 
  }

  getVideo() {
    if (this.props.media.videos.length !== 0) {
      let id = this.props.media.videos[0].key;
      return (<iframe className="embed-responsive-item" title="Trailer" src={"//www.youtube.com/embed/" + id} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />)
    }
    else {
      return; 
    }
  }

  getAlbums() {
    const albums = this.props.media.albums; 
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

  getArtists() {
    const artists = this.props.media.artists; 
    return (
      <Fragment>
      {
        artists.map((artist) => {
          return (
            <li key={artist.id}>
              <UISref to="artistInstance" params={{ artistID: artist.id }}>
                <a>{ artist.name }</a>
              </UISref>
            </li>
          )
        })
      }
      </Fragment>
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
                <MediaCarousel photos={this.props.media.other_images}/>
              </Col>
            </Row>
          </Col> 
          <Col sm="4">
            <img className="w-100" src={this.props.media.image} alt="Poster" vspace="20"/>
            <div className="embed-responsive embed-responsive-16by9 w-100">
              {this.getVideo()}
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