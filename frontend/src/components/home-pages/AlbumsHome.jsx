import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import SDBPagination from "./../Pagination";
import SearchBar from './../SearchBar'
import { AlbumForm } from './AlbumForm'; 

const titleStyles = {
  'overflow': 'hidden',
  'textOverflow': 'ellipsis',
  'display': '-webkit-box',
  'WebkitBoxOrient': 'vertical',
  'WebkitLineClamp': 2, /* number of lines to show */
  'lineHeight': '1.2',        /* fallback */
  'maxHeight': '2.4'       /* fallback */
}

export class AlbumItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.album.id);
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <CardImg top width="100%" src={this.props.album.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-left" style={titleStyles}>{this.props.album.name}</CardTitle>
          <CardSubtitle className="text-muted text-left">{this.props.album.release_date.substring(0, 4)}</CardSubtitle>
          <CardText className="text-left">{this.props.album.track_count} Track{this.props.album.track_count === 1 ? '' : 's'}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export class AlbumHome extends Component {
  constructor(props) {
    super(props)
    this.navigateToInstance = this.navigateToInstance.bind(this);
    this.search = this.search.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('^.instance', { albumID: id });
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
          <h2 className="float-left">Albums{this.params.searchTerm === null || this.params.searchTerm === "" ? "" : <span> – searching for "{this.params.searchTerm}"</span>}</h2>
          {
            this.params.searchTerm === null || this.params.searchTerm === "" ? null :
              <div className="float-right">
                <button className="btn btn-link" type="button" onClick={() => this.clearSearch()}><i className="fas fa-times-circle"></i> Clear</button>
              </div>
          }
          <div className="float-right">
            <SearchBar placeholder="Search Albums" value={this.params.searchTerm} onSubmit={(searchTerm) => this.search(searchTerm)} />
          </div>
        </div>
        <div className="row">
          <AlbumForm transition={this.props.transition}/>
        </div>

        {
          this.props.albums.count === 0 ?
            <div className="text-center my-4">No matching albums were found</div>
            :
            <div className="row">
              {
                this.props.albums.items.map((album) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={album.id}>
                      <AlbumItem album={album} navigateToInstance={this.navigateToInstance} />
                    </div>
                  );
                })
              }
            </div>
        }
        <SDBPagination offset={this.params.offset} limit={this.params.limit} total={this.props.albums.count} state="^.home" />
      </Fragment>
    );
  }
}

AlbumHome.propTypes = {
  resolves: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object),
  })
}