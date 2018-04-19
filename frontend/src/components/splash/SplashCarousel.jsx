import React, { Component } from 'react';
import "../../style/Splash.css"; 
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import albumImg from '../../static/splash/carousel/albumCarousel.jpg';
import artistImg from '../../static/splash/carousel/artistCarousel.jpg';
import mediaImg from '../../static/splash/carousel/mediaCarousel.jpg';
import connectImg from '../../static/splash/carousel/connectionCarousel.jpg';

const items = [
  {
    src: albumImg,
    altText: 'Record Player',
    caption: 'Albums',
  },
  {
    src: artistImg,
    altText: 'Buddy Bergman Conducting',
    caption: 'Artists',
  },
  {
    src: mediaImg,
    altText: 'Titanic: I\'m flying',
    caption: 'TV and Movies',
  },
  {
    src: connectImg,
    altText: 'John Williams Conducting',
    caption: 'Making Connections',
  }
];

class SplashCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
      const slides = items.map((item) => {
        return (
          <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src} >
            <img src={item.src} alt={item.altText} className="carousel-img" />
            <CarouselCaption captionHeader={item.caption} captionText={""} />
          </CarouselItem>
        );
    });

    return (
      <div className="pos-relative">
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride={"carousel"} >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <h2 className="text-center home-title">Welcome to SoundtrackDB</h2>
      </div>
    );
  }
}

export default SplashCarousel;