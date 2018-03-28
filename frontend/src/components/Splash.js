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
      <div className="pos-relative">
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride={"carousel"} >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <p><br/></p>
{/*        <Row>
          <Col sm="4">
            <h3 className="text-center">Albums</h3>
            <img className="model-img" src="https://imgur.com/5A4IyV1.jpg" alt="Albums" vspace="20"></img>
            <p className="text-center">
              <Button color="secondary" href="/album">Albums >></Button>
            </p> 
          </Col>
          <Col sm="4">
            <h3 className="text-center">Artists</h3>
            <img className="model-img" src="https://imgur.com/KcslUKJ.jpg" alt="Albums" vspace="20"></img>
            <p className="text-center">
              <Button color="secondary" href="/artist">Artists >></Button>
            </p> 
          </Col>
          <Col sm="4">
            <h3 className="text-center">Media</h3>
            <img className="model-img" src="https://imgur.com/ZEAV6aZ.jpg" alt="Albums" vspace="20"></img>
            <p className="text-center">
              <Button color="secondary" href="/media">Media >></Button>
            </p> 
          </Col>
        </Row>
        <hr/>*/}
        <Row>
          
          <Col sm="8">
            <h3 className="text-left">Find albums to your favorite movie or TV show</h3>
            <p className="text-left">
              In the beginning four nations blah blah blah.<br/>
              That all changed when the -fire- alan started to code.
            </p>
            <p className="text-left">
              <Button color="secondary" href="/media">Media >></Button>
            </p>
          </Col>
          <Col sm="4">
            <img className="detail-img" src="https://78.media.tumblr.com/eee93ec465ef242d57dd65d1809d41bc/tumblr_p68ztmEsDc1wtdfjzo1_540.png" alt="Albums" vspace="20"></img>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm="4">
            <img className="detail-img" src="https://78.media.tumblr.com/15399dc0c7a6ef555bf7ef4a38d75602/tumblr_p63hy6fG1D1rtk53qo4_r6_540.png" alt="Artists" vspace="20"></img>
          </Col>
          <Col sm="8">
            <h3 className="text-right">Find artists to your favorite music</h3>
            <p className="text-right">
              I'm Deku and this is how became the greatest hero.<br/>
              Plus Ultra!
            </p>
            <p className="text-right">
              <Button color="secondary" href="/artist">Artists >></Button>
            </p> 
          </Col>
        </Row>
        <hr/>
        <h2 className="text-center home-title">Welcome to SoundtrackDB</h2>
        <Row>
          <Col sm="8">
            <h3 className="text-left">Find your movie or TV show to your favorite soundtrack</h3>
            <p className="text-left">
              Is this really going to compile and look aesthetic???<br/>
              I'm not sure what's going to happen when I let docker compile this...
            </p>
            <p className="text-left">
              <Button color="secondary" href="/media">Media >></Button>
            </p> 
          </Col>
          <Col sm="4">
            <img className="detail-img" src="https://78.media.tumblr.com/0c3c0795315942fb2dc00cbfe498d42e/tumblr_p30uucUWdm1ru0b90o1_540.jpg" alt="Media" vspace="20"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Splash;
