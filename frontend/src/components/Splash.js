import React, { Component } from 'react';
import styles from "../style/Splash.css"; 
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button, Col, Row } from 'reactstrap';

const items = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg',
    altText: 'Record Player',
    caption: 'Albums',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Buddy_Bregman_conducts_at_Westlake_Recording_Studios_-_%28May_2006%29.jpg',
    altText: 'Buddy Bergman Conducting',
    caption: 'Artists',
  },
  {
    src: 'http://i.imgur.com/iMJ7Un1.jpg',
    altText: 'Titanic: I\'m flying',
    caption: 'TV and Movies',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/John_Williams_scoring_Raiders.jpg',
    altText: 'John Williams Conducting',
    caption: 'Making Connections',
  }
];

class Splash extends Component {
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
          <CarouselCaption captionHeader={item.caption} captionText={""} cssModule={styles} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <h2 className="text-center">Welcome to SoundtrackDB</h2>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride={"carousel"} >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <Row>
          <Col sm="4">
            <h3 className="text-center">Albums</h3>
              <img className="model-img" src="https://imgur.com/5A4IyV1.jpg" alt="Albums" vspace="20"></img>
              <p className="text-center">
                <Button color="secondary" href="/album">Albums</Button>
              </p> 
          </Col>
          <Col sm="4">
            <h3 className="text-center">Artists</h3>
              <img className="model-img" src="https://imgur.com/KcslUKJ.jpg" alt="Albums" vspace="20"></img>
              <p className="text-center">
                <Button color="secondary" href="/artist">Artists</Button>
              </p> 
          </Col>
          <Col sm="4">
            <h3 className="text-center">Media</h3>
              <img className="model-img" src="https://imgur.com/ZEAV6aZ.jpg" alt="Albums" vspace="20"></img>
              <p className="text-center">
                <Button color="secondary" href="/media">Media</Button>
              </p> 
          </Col>
        </Row>
      </div>
    );
  }
}

export default Splash;
