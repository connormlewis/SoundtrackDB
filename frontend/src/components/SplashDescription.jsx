import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { UISref } from '@uirouter/react';

class SplashDescription extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4" md="6" lg="8">
            <h3 className="text-left">Find the soundtracks from your favorite movies and TV shows</h3>
            <p className="text-left">
              <b><i>Locate</i></b> the title of the song you always sing or hum in the shower.<br/>
              <b><i>Discover</i></b> the artist behind the music and explore their other work.<br/>
              <b><i>Listen</i></b> to the music on our site.<br/>
            </p>
            <p className="text-left">
              <UISref to="albumHome">
                <Button color="secondary">Albums >></Button>
              </UISref>
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
              <b><i>Uncover</i></b> the artist who wrote that song stuck in your head.<br/>
              <b><i>Explore</i></b> other media they have worked on.<br/>
              <b><i>Enjoy</i></b> popular tracks by the artist.<br/>
            </p>
            <p className="text-right">
              <UISref to="artistHome">
                <Button color="secondary">Artists >></Button>
              </UISref>
            </p> 
          </Col>
        </Row>
        <hr/>

        <Row>
          <Col sm="4" md="6" lg="8">
            <h3 className="text-left">Find out more about your favorite movie and TV show.</h3>
            <p className="text-left">
              <b><i>Unearth</i></b> information about your favorite media.<br/>
              <b><i>View</i></b> images and videos from movies and TV shows.<br/>
              <b><i>Identify</i></b> available soundtracks for your favorite movie or show.<br/>
            </p> 
            <p className="text-left">
              <UISref to="mediaHome">
                <Button color="secondary">Media >></Button>
              </UISref>
            </p>
          </Col>
          <Col sm="auto" md="6" lg="4">
            <img className="detail-img-right" src="https://imgur.com/OghGiJG.jpg" alt="Media" vspace="20"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SplashDescription;