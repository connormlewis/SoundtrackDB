import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap'; 
import PropTypes from 'prop-types'
import { MediaCarousel } from './MediaCarousel'; 
import { RelatedArtists } from './RelatedArtists'; 
import { RelatedAlbums } from './RelatedAlbums'; 

export class MediaInstance extends Component {

  getSubtitle() {
    let model_data = this.props.media;

    var genre_text;
    if (model_data.genres === null || model_data.genres.length === 0) {
      genre_text = "Unknown Genre"
    } else {
      let genres = [];
      for (let i = 0; i < model_data.genres.length; i++) {
        genres.push(model_data.genres[i].name);
      }
      genre_text = genres.join(', ');
    }

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

      return 'TV Show | ' + years + ' | ' + seasons + " seasons | " + genre_text; 
    }
    else {
      let year = model_data.release_date; 
      return 'Movie | ' + year + ' | ' + genre_text; 
    }
  }

  getCast() {
    const cast_data = this.props.media.cast; 
    if (cast_data === null || cast_data.length === 0) {
      return (<div id="no_cast">No cast information available</div>)
    }
    let cast = [];
    for(let i = 0; i < cast_data.length; i++) {
      cast.push(cast_data[i].name); 
    }
    return (
      <ul id="cast">     
      { cast.map((member, index) => <li key={index}>{member}</li>) }
      </ul> 
    )
  }

  getVideo() {
    if (this.props.media.videos !== undefined && this.props.media.videos !== null && this.props.media.videos.length !== 0) {
      let id = this.props.media.videos[0].key;
      return (<iframe className="embed-responsive-item" title="Trailer" src={"//www.youtube.com/embed/" + id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />)
    }
    else {
      return; 
    }
  }

  getAlbums() {
    const albums = this.props.media.albums;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('album.instance', { albumID: id });
    }
    return (<RelatedAlbums albums={albums} navigateToInstance={navigateToInstance}/>);
  }

  getArtists() {
    const artists = this.props.media.artists;
    const navigateToInstance = (id) => {
      const { stateService } = this.props.transition.router;
      stateService.go('artist.instance', { artistID: id });
    }
    return (<RelatedArtists artists={artists} navigateToInstance={navigateToInstance}/>);
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
                {this.getCast()}
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
          <h3 className="related-header">Photos</h3>
        </Row>
        <Row>
          {
            this.props.media.other_images === undefined || this.props.media.other_images === null || this.props.media.other_images.length === 0 ?
            (<div id="no_photos" style={{padding: '10px'}}>No photos available</div>) : <MediaCarousel photos={this.props.media.other_images}/>
          }
        </Row>
        <Row>
          <div id="albums"> {this.getAlbums()} </div>
        </Row>
        <Row>
          <div id="artists"> {this.getArtists()} </div>
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