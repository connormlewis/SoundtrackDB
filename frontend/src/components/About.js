import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import styles from "../style/About.css";
import PropTypes from 'prop-types'

class About extends Component {
    render() {
      return (
        <Fragment>
          <h1 className="about-style-header">About</h1>
          <Desc />
          <Bio bios={this.props.about}/>
          <Statistics stats={this.props.about}/>
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
        <hr/>
        <p className='desc'>SoundtrackDB connects soundtracks, artists, and
        their associated movies and TV shows. This site allows users to discover
         the soundtracks from their favorite shows and films. Users can find out
         more about the artists behind the music and explore other media they
         have worked on.
        </p>
        <hr/>
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
          <h1 style={{textAlign: 'center'}}>The Team - SoundDBG</h1>
          <div className="row align-self">
            <div className="column">
              <h1 className="about-style-header">{names[0]}</h1>
              <img className="avatar" src="https://i1.wp.com/swesteve.files.wordpress.com/2018/03/alan.png?ssl=1&w=450" alt="Alan Yi Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Alan is a third-year CS major who watches a lot
              of anime TV shows and movies. Alan also enjoys listening to
              original soundtracks by various composers such as Yuki Hayashi,
              Hiroyuki Sawano, John Wiliams, and Hans Zimmer.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Front End and Data-Scraping</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.tsukkisuki}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.tsukkisuki}<br/>
                <strong>Number of Unit Tests: </strong>{11}<br/>
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[1]}</h1>
              <img className="avatar" src="https://aylishw.files.wordpress.com/2018/01/headshot.jpg" alt="Aylish Wrench Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Aylish is a third-year Computer Science major who enjoys listening to TV and video game scores. Her all-time favorite TV shows include Doctor Who, Person of Interest and Chuck.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Front End and Data-Scraping</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.aylish19}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.aylish19}<br/>
                <strong>Number of Unit Tests: </strong>{12}<br/>
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[2]}</h1>
              <img className="avatar" src="https://melodyisblogging.files.wordpress.com/2018/01/img_56411.jpg" alt="Melody Truong Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Melody is a "thrid"-year CS major. The TV show she is currently watching is This is Us. Her go-to comedy movie is White Chicks.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Front End and Acceptance Testing</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.melxtru}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.melxtru}<br/>
                <strong>Number of Unit Tests: </strong>{8}<br/>
              </p>
            </div>
          </div>
          <div className="row align-start">
            <div className="column">
              <h1 className="about-style-header">{names[3]}</h1>
              <img className="avatar" src="https://connorlewiscs373.files.wordpress.com/2018/01/fullsizeoutput_f5e.jpeg" alt="Connor Lewis Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Connor is a fourth-year CS major and is currently watching The Magicians. He really enjoys musical theater soundtracks, and spends a lot of time watching TV shows.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Full Stack</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.connormlewis}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.connormlewis}<br/>
                <strong>Number of Unit Tests: </strong>{21}<br/>
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[4]}</h1>
              <img className="avatar" src="https://i2.wp.com/swesteve.files.wordpress.com/2018/03/taylor.jpeg?ssl=1&w=450" alt="Taylor Schaffner Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Hey my name is Taylor! I'm a junior computer science major at UT and I'm in charge of API/Backend/Database stuff for this website! I'm also a janitor!</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Backend and Documentation</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.TheSchaft}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.TheSchaft}<br/>
                <strong>Number of Unit Tests: </strong>{15}<br/>
              </p>
            </div>
            <div className="column">
              <h1 className="about-style-header">{names[5]}</h1>
              <img className="avatar" src="https://swesteve.files.wordpress.com/2018/01/mug.jpg" alt="Steve Wang Avatar"></img>
              <p className="bio"></p><p className="about-style-p">Steve is a third-year Computer Science major who's favorite TV show is Spongebob Squarepants. I also enjoy long walks on the beach and wrote this About page.</p>
              <p className="responsibilities"><strong>Major Responsibilities:</strong><br/>Front End and Acceptance Testing</p>
              <p className="stats">
                <strong>Number of Commits: </strong>{this.props.bios.commits.stevex196x}<br/>
                <strong>Number of Issues: </strong>{this.props.bios.issues.stevex196x}<br/>
                <strong>Number of Unit Tests: </strong>{6}<br/>
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
          <p className="about-style-p"><strong>Total Commits: </strong>{this.props.stats.total_commits}<br/>
            <strong>Total Issues: </strong>{this.props.stats.total_issues}<br/>
            <strong>Total Unit Tests: </strong>{73}</p>
          <p className="about-style-p"><a href="https://github.com/connormlewis/idb">GitHub Repository</a><br/>
            <a href="https://connormlewis.gitbooks.io/api/">API Documentation</a><br/>
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
          <p className="about-style-p"><a href="https://developer.spotify.com/web-api/">Spotify API</a><br/>
                 <a href="https://www.last.fm/api">LastFM API</a><br/>
                 <a href="https://www.themoviedb.org/documentation/api">TheMovieDB API</a><br/>
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
            <p className="about-style-p">
              <strong>ReactJS</strong> was used to build our front end.<br/>
              <strong>PostgreSQL</strong> was used as our database to store our artists, albums, movies, and television shows.<br/>
              <strong>SQLAlchemy</strong> was to used to manage the entries in the database.<br/>
              <strong>Flask</strong> is a Python micro web framework used for our backend.<br/>
              <strong>Postman</strong> was used to test and refine the API.<br/>
              <strong>Mocha</strong> was used for unit testing the frontend.<br/>
              <strong>unittest</strong> was used for unit testing the backend.<br/>
              <strong>Selenium</strong> was used for acceptance testing the GUI.<br/>
              <strong>Amazon Web Services</strong> was used to host our website.<br/>
              <strong>NameCheap</strong> for domain name registration.<br/>
              <strong>GitHub</strong> was used for our Version Control System.<br/>
              <strong>GitBook</strong> to document our API and our technical report.<br/>
              <strong>Slack</strong> to communicate with our team members.<br/>
              <br/>
              <h3>Non-required tools</h3>
              <strong>BootStrap</strong> as a CSS framework.<br/>
              <strong>ReactStrap</strong> is a library which allowed us to add BootStrap React components in our frontend.<br/>
              <strong>Enzyme</strong> is a JS library used to manipulate React components during unit testing.<br/>
              <strong>StarUML</strong> was used to create the UML diagram for database.<br/>
            </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
