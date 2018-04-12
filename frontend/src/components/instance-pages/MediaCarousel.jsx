import React, { Component } from 'react';
import Slider from 'react-slick'; 

export class MediaCarousel extends Component {
  componentWillReceiveProps(){
   this.refs.slick.innerSlider.onWindowResized()
  }

  getImgSrc(photo) {
    return "http://image.tmdb.org/t/p/w500" + photo.file_path;
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(this.props.photos.length, 3),
      slidesToScroll: Math.min(this.props.photos.length, 3),
      adaptiveHeight: true,
      lazyload: true,
      swipe: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
            infinite: true,
            dots: true,
            lazyload: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            lazyload: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            lazyload: true,
            dots: false
          }
        }
      ]
    };

    return (
      <div>
        <div className='slider-parent'>
          <Slider ref='slick' {...settings}>
          {
            this.props.photos.map((photo, index) => {
              return (
                <div className='slide-img' key={index}>
                  <img src={this.getImgSrc(photo)} alt="" className="w-100 h-100" onLoad={() => window.dispatchEvent(new Event('resize'))}/>
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
