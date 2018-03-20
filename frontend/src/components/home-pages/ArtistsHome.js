import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types'


export class ArtistItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.artist.id);
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <div width="100%" className="card-img-top" alt="Card image cap" style={{
          height: '200px',
          backgroundImage: `url('${this.props.artist.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <CardBody>
          <CardTitle className="text-left">{this.props.artist.name}</CardTitle>
          <CardSubtitle className="text-muted text-left">Artist</CardSubtitle>
          <CardText className="text-left">Spotify Followers: {this.props.artist.followers.toLocaleString()}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export class ArtistHome extends Component {
  constructor(props) {
    super(props)
    this.navigateToInstance = this.navigateToInstance.bind(this);
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('artistInstance', { artistID: id });
  }

  render() {
    return (
      <Fragment>
        <h2>Artists</h2>
        <div className="row">
          {
            this.props.artists.map((artist) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={artist.id}>
                  <ArtistItem artist={artist} navigateToInstance={this.navigateToInstance} />
                </div>
              );
            })
          }
        </div>
      </Fragment>
    );
  }
}

ArtistHome.propTypes = {
  resolves: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.object)
  })
}