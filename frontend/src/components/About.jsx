import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import styles from "../style/About.css";
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

//import alan from '../res/avatars/alan.png';
import aylish from '../res/avatars/aylish.jpg';
import melody from '../res/avatars/melody.jpg';
import connor from '../res/avatars/connor.jpeg';
import taylor from '../res/avatars/taylor.jpeg';
import steve from '../res/avatars/steve.jpg';

import reactjs from '../res/tools/reactjs.png';
import alchemy from '../res/tools/alchemy.png';
import aws from '../res/tools/aws.jpg';
import bootstrap from '../res/tools/bootstrap.png';
import enzyme from '../res/tools/enzyme.png';
import flask from '../res/tools/flask.png';
import gitbook from '../res/tools/gitbook.png';
import github from '../res/tools/github.png';
import mocha from '../res/tools/mocha.svg';
import namecheap from '../res/tools/namecheap.png';
import postgres from '../res/tools/postgres.svg';
import postman from '../res/tools/postman.png';
import reactstrap from '../res/tools/reactstrap.png';
import selenium from '../res/tools/selenium.png';
import slack from '../res/tools/slack.jpg';
import staruml from '../res/tools/staruml.png';
import unittest from '../res/tools/unittest.png';

class About extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="about-style-header">About</h1>
        <Desc />
        <Bio bios={this.props.about} />
        <Statistics stats={this.props.about} />
        <Data />
        <Tools />
      </Fragment>
    )
  };
}

export class Desc extends Component {
  render() {
    return (
      <Fragment>
        <hr />
        <p className='desc'>SoundtrackDB connects soundtracks, artists, and
        their associated movies and TV shows. This site allows users to discover
         the soundtracks from their favorite shows and films. Users can find out
         more about the artists behind the music and explore other media they
         have worked on.
        </p>
        <hr />
      </Fragment>
    );
  }
}

const names = ["Alan Yi", "Aylish Wrench", "Melody Truong",
  "Connor Lewis", "Taylor Schaffner", "Steve Wang"];

export class Bio extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>The Team - SoundDBG</h1>
          <div className="row align-self">
            <div className="column">
              <h1 className="about-style-header">{names[0]}</h1>
              <img className="avatar" src={} alt="Alan Yi Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Alan is a third-year CS major who watches a lot
              of anime TV shows and movies. Alan also enjoys listening to
              original soundtracks by various composers such as Yuki Hayashi,
              Hiroyuki Sawano, John Wiliams, and Hans Zimmer.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Front End and Data-Scraping</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.tsukkisuki}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.tsukkisuki}<br />
                <strong>Number of Unit Tests: </strong>{11}<br />
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[1]}</h1>
              <img className="avatar" src={aylish} alt="Aylish Wrench Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Aylish is a third-year Computer Science major who enjoys listening to TV and video game scores. Her all-time favorite TV shows include Doctor Who, Person of Interest and Chuck.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Front End and Data-Scraping</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.aylish19}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.aylish19}<br />
                <strong>Number of Unit Tests: </strong>{12}<br />
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[2]}</h1>
              <img className="avatar" src={melody} alt="Melody Truong Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Melody is a "thrid"-year CS major. The TV show she is currently watching is This is Us. Her go-to comedy movie is White Chicks.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Front End and Acceptance Testing</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.melxtru}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.melxtru}<br />
                <strong>Number of Unit Tests: </strong>{8}<br />
              </p>
            </div>
          </div>
          <div className="row align-start">
            <div className="column">
              <h1 className="about-style-header">{names[3]}</h1>
              <img className="avatar" src={connor} alt="Connor Lewis Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Connor is a fourth-year CS major and is currently watching The Magicians. He really enjoys musical theater soundtracks, and spends a lot of time watching TV shows.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Full Stack</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.connormlewis}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.connormlewis}<br />
                <strong>Number of Unit Tests: </strong>{21}<br />
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[4]}</h1>
              <img className="avatar" src={taylor} alt="Taylor Schaffner Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Hey my name is Taylor! I'm a junior computer science major at UT and I'm in charge of API/Backend/Database stuff for this website! I'm also a janitor!</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Backend and Documentation</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.TheSchaft}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.TheSchaft}<br />
                <strong>Number of Unit Tests: </strong>{15}<br />
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[5]}</h1>
              <img className="avatar" src={steve} alt="Steve Wang Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Steve is a third-year Computer Science major who's favorite TV show is Spongebob Squarepants. I also enjoy long walks on the beach and wrote this About page.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br />Front End and Acceptance Testing</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.stevex196x}<br />
                <strong>Number of Issues: </strong>{this.props.bios.issues.stevex196x}<br />
                <strong>Number of Unit Tests: </strong>{6}<br />
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

About.propTypes = {
  resolves: PropTypes.shape({
    about: PropTypes.object
  })
}

export class Statistics extends Component {
  render() {
    return (
      <Fragment>
        <div className="statistics">
          <h1 className="about-style-header">Statistics</h1>
          <p className="about-style-p"><strong>Total Commits: </strong>{this.props.stats.total_commits}<br />
            <strong>Total Issues: </strong>{this.props.stats.total_issues}<br />
            <strong>Total Unit Tests: </strong>{73}</p>
          <p className="about-style-p"><a href="https://github.com/connormlewis/idb">GitHub Repository</a><br />
            <a href="https://connormlewis.gitbooks.io/api/">API Documentation</a><br />
            <a href="https://connormlewis.gitbooks.io/report/">GitBook Report</a></p>
        </div>
      </Fragment>
    );
  }
}

export class Data extends Component {
  render() {
    return (
      <Fragment>
        <div className="data">
          <h1 className="about-style-header">Data Sources</h1>
          <p className="about-style-p"><a href="https://developer.spotify.com/web-api/">Spotify API</a><br />
            <a href="https://www.last.fm/api">LastFM API</a><br />
            <a href="https://www.themoviedb.org/documentation/api">TheMovieDB API</a><br />
            <a href="https://developer.github.com/v3/">GitHub API</a>
          </p>
          <p className="desc">Spotify, LastFM, and TheMovieDB were scraped through python scripts. The scripts made calls to the API's and added the information from the responses directly to the database using SQLAlchemy. The GitHub API was scraped using the python requests library and the total commits and issues are updated when the page is refreshed.</p>
        </div>
      </Fragment>
    );
  }
}

export class Tools extends Component {
  render() {
    return (
      <Fragment>
        <div className="tools">
          <h1 className="about-style-header">Tools Used</h1>
          <div className="about-grid">
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={reactjs}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>ReactJS</CardTitle>
                  <CardText>was used to build our front end.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={postgres}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>PostgreSQL</CardTitle>
                  <CardText>was used as our database to store our artists, albums, movies, and television shows.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={alchemy}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>SQLAlchemy</CardTitle>
                  <CardText> was to used to manage the entries in the database.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={flask}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Flask</CardTitle>
                  <CardText>is a Python micro web framework used for our backend.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={postman}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Postman</CardTitle>
                  <CardText>was used to test and refine the API.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={mocha}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Mocha</CardTitle>
                  <CardText>was used for unit testing the frontend.</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={selenium}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Selenium</CardTitle>
                  <CardText>was used for acceptance testing the GUI.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={aws}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Amazon Web Services</CardTitle>
                  <CardText> was used to host our website.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
               <CardImg className="about-image" src={namecheap}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>NameCheap</CardTitle>
                  <CardText>for domain name registration.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
               <CardImg className="about-image" src={github}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>GitHub</CardTitle>
                  <CardText>was used for our Version Control System.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={gitbook}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>GitBook</CardTitle>
                  <CardText>to document our API and our technical report.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={slack}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Slack</CardTitle>
                  <CardText>to communicate with our team members.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={unittest}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>unittest</CardTitle>
                  <CardText>was used for unit testing the backend.</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <h1 className="about-style-header">Non-required tools</h1>
          <div className="about-grid">
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={bootstrap}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>BootStrap</CardTitle>
                  <CardText>as a CSS framework.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={reactstrap}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>ReactStrap</CardTitle>
                  <CardText>is a library which allowed us to add BootStrap React components in our frontend.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={enzyme}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Enzyme</CardTitle>
                  <CardText>is a JS library used to manipulate React components during unit testing.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src={staruml}></CardImg>
                <CardBody className="text-center">
                  <CardTitle>StarUML</CardTitle>
                  <CardText>was used to create the UML diagram for database.</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
