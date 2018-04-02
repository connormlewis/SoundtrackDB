import React, { Component } from 'react';
import "../style/Splash.css"; 
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
          <CarouselCaption captionHeader={item.caption} captionText={""} cssModule={"carousel-caption"} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <div className="pos-relative">
          <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride={"carousel"} >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          <h2 className="text-center home-title">Welcome to SoundtrackDB</h2>
        </div>
        <p><br/></p>
        <div>
          <Row>
            <Col sm="4" md="6" lg="8">
              <h3 className="text-left">Find the soundtracks for your favorite movies and TV shows</h3>
              <p className="text-left">
                <b><i>Locate</i></b> the title of the song you always sing or hum in the shower.<br/>
                <b><i>Listen</i></b> to the music on our site.<br/>
                <b><i>Discover</i></b> the artist behind the music and explore their other work.<br/>
              </p>
              <p className="text-left">
                <Button color="secondary" href="/album">Albums >></Button>
              </p>
            </Col>
            <Col sm="auto" md="auto" lg="4">
                <img className="detail-img-right" src="https://imgur.com/7jSEaYa.jpg" alt="Albums" vspace="20"></img>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col sm="auto" md="6" lg="4">
              <img className="detail-img-left" src="https://imgur.com/vdhzXGU.jpg" alt="Artists" vspace="20"></img>
            </Col>
            <Col sm="4" md="6" lg="8">
              <h3 className="text-right">Find the artists behind your favorite soundtracks</h3>
              <p className="text-right">
                <b><i>Uncover</i></b> the artist who wrote the song stuck in your head.<br/>
                <b><i>Explore</i></b> other media they have worked on.<br/>
                <b><i>Enjoy</i></b> popular tracks by the artist.<br/>
              </p>
              <p className="text-right">
                <Button color="secondary" href="/artist">Artists >></Button>
              </p> 
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col sm="4" md="6" lg="8">
              <h3 className="text-left">Find movies and TV shows with official soundtracks.</h3>
              <p className="text-left">
                <b><i>Unearth</i></b> information about your favorite media.<br/>
                <b><i>View</i></b> images and videos from movies and TV shows.<br/>
                <b><i>Identify</i></b> available soundtracks for your favorite movie or show.<br/>
              </p> 
              <p className="text-left">
                <Button color="secondary" href="/media">Media >></Button>
              </p>
            </Col>
            <Col sm="auto" md="6" lg="4">
              <img className="detail-img-right" src="https://imgur.com/OghGiJG.jpg" alt="Media" vspace="20"></img>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Splash;
