import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import styles from "../style/About.css";
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
              <img className="avatar" src="https://i1.wp.com/swesteve.files.wordpress.com/2018/03/alan.png?ssl=1&w=450" alt="Alan Yi Avatar"></img>
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
              <img className="avatar" src="https://aylishw.files.wordpress.com/2018/01/headshot.jpg" alt="Aylish Wrench Avatar"></img>
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
              <img className="avatar" src="https://melodyisblogging.files.wordpress.com/2018/01/img_56411.jpg" alt="Melody Truong Avatar"></img>
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
              <img className="avatar" src="https://connorlewiscs373.files.wordpress.com/2018/01/fullsizeoutput_f5e.jpeg" alt="Connor Lewis Avatar"></img>
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
              <img className="avatar" src="https://i2.wp.com/swesteve.files.wordpress.com/2018/03/taylor.jpeg?ssl=1&w=450" alt="Taylor Schaffner Avatar"></img>
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
              <img className="avatar" src="https://swesteve.files.wordpress.com/2018/01/mug.jpg" alt="Steve Wang Avatar"></img>
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
                <CardImg className="about-image" src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>ReactJS</CardTitle>
                  <CardText>was used to build our front end.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>PostgreSQL</CardTitle>
                  <CardText>was used as our database to store our artists, albums, movies, and television shows.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://pbs.twimg.com/profile_images/476392134489014273/q5uAkmy7_400x400.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>SQLAlchemy</CardTitle>
                  <CardText> was to used to manage the entries in the database.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="data:image/png;base64,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"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Flask</CardTitle>
                  <CardText>is a Python micro web framework used for our backend.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://www.getpostman.com/img/v2/logo-glyph.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Postman</CardTitle>
                  <CardText>was used to test and refine the API.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://camo.githubusercontent.com/af4bf83ab2ca125346740f9961345a24ec43b3a9/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Mocha</CardTitle>
                  <CardText>was used for unit testing the frontend.</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://www.seleniumhq.org/images/big-logo.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Selenium</CardTitle>
                  <CardText>was used for acceptance testing the GUI.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="http://media.bestofmicro.com/K/G/399904/original/amazon-aws.jpg"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Amazon Web Services</CardTitle>
                  <CardText> was used to host our website.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://pbs.twimg.com/profile_images/496317028408365060/sSwMqqsH_400x400.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>NameCheap</CardTitle>
                  <CardText>for domain name registration.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>GitHub</CardTitle>
                  <CardText>was used for our Version Control System.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://avatars0.githubusercontent.com/u/7111340?s=400&v=4"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>GitBook</CardTitle>
                  <CardText>to document our API and our technical report.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://pbs.twimg.com/profile_images/885554951857946624/sd7GRyjY_400x400.jpg"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Slack</CardTitle>
                  <CardText>to communicate with our team members.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://raw.githubusercontent.com/lk-geimfari/unittest/master/logo.png"></CardImg>
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
                <CardImg className="about-image" src="https://getbootstrap.com/assets/img/bootstrap-stack.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>BootStrap</CardTitle>
                  <CardText>as a CSS framework.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://reactstrap.github.io/assets/logo.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>ReactStrap</CardTitle>
                  <CardText>is a library which allowed us to add BootStrap React components in our frontend.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://cdn-images-1.medium.com/max/1600/1*pu9U8EYL3KGrgvapyp1pSg.png"></CardImg>
                <CardBody className="text-center">
                  <CardTitle>Enzyme</CardTitle>
                  <CardText>is a JS library used to manipulate React components during unit testing.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="about-cell">
              <Card>
                <CardImg className="about-image" src="https://dl2.macupdate.com/images/icons256/55571.png?d=1515433193"></CardImg>
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
