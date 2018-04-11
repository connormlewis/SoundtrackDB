import React, { Component } from 'react'
import Slider from 'react-slick'
// eslint-disable-next-line
import styles from '../../style/Slider.css'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const titleStyles = {
  'overflow': 'hidden',
  'textOverflow': 'ellipsis',
  'display': '-webkit-box',
  'WebkitBoxOrient': 'vertical',
  'WebkitLineClamp': 2, /* number of lines to show */
  'lineHeight': '1.2',        /* fallback */
  'maxHeight': '2.4'       /* fallback */
}

export class AlbumItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.album.id);
  }

  render() {
    return (
      <Card className="sm-3" onClick={this.handleClick}>
        <CardImg top width="100%" src={this.props.album.image} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt="Card image cap"/>
        <CardBody>
          <CardTitle className="text-left" style={titleStyles}>{this.props.album.name}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}


export class RelatedAlbums extends Component {
  componentWillReceiveProps(){
   this.refs.slick.innerSlider.onWindowResized()
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(this.props.albums.length, 4),
      slidesToScroll: Math.min(this.props.albums.length, 4),
      adaptiveHeight: true,
      variableWidth: true
    };

    return (
      <div>
      <h2 className='related-header'> Albums </h2>
        <div className='slider-parent'>
          <Slider ref='slick' {...settings}>
          {
            this.props.albums.map((album) => {
              return (
                <div className='slide-item' key={album.id}>
                  <AlbumItem album={album} navigateToInstance={this.props.navigateToInstance}/>
                </div>
              )
            })
          }
          </Slider>
        </div>
      </div>
    );
  }
}