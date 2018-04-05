import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types'
import SDBPagination from "./../Pagination";
import SearchBar from './../SearchBar'

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
    stateService.go('^.instance', { artistID: id });
  }

  search(searchTerm) {
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', { limit: 12, offset: 0, searchTerm: searchTerm });
  }

  clearSearch() {
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', { limit: 12, offset: 0, searchTerm: null });
  }

  render() {
    this.params = this.props.transition.params()

    return (
      <Fragment>
        <div className="clearfix">
          <h2 className="float-left">Artists{this.params.searchTerm === null || this.params.searchTerm === "" ? "" : <span> – searching for "{this.params.searchTerm}"</span>}</h2>
          {
            this.params.searchTerm === null || this.params.searchTerm === "" ? null :
              <div className="float-right">
                <button className="btn btn-link" type="button" onClick={() => this.clearSearch()}><i className="fas fa-times-circle"></i> Clear</button>
              </div>
          }
          <div className="float-right">
            <SearchBar placeholder="Search Artists" value={this.params.searchTerm} onSubmit={(searchTerm) => this.search(searchTerm)} />
          </div>
        </div>

        {
          this.props.artists.count === 0 ?
            <div className="text-center my-4">No matching albums were found</div>
            :
            <div className="row">
              {
                this.props.artists.items.map((artist) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={artist.id}>
                      <ArtistItem artist={artist} navigateToInstance={this.navigateToInstance} />
                    </div>
                  );
                })
              }
            </div>
        }
        <SDBPagination offset={this.params.offset} limit={this.params.limit} total={this.props.artists.count} state="^.home" />
      </Fragment>
    );
  }
}

ArtistHome.propTypes = {
  resolves: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.object)
  })
}