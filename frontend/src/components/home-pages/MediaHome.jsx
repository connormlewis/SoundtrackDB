import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types'
import SDBPagination from "./../Pagination";
import SearchBar from './../SearchBar'
import { MediaForm } from './MediaForm'; 


export class MediaItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.media.id);
  }

  getTVYears() {
    let first = this.props.media.release_date;
    let last = '';
    if (this.props.media.running === true) {
      last = 'Present';
    }
    else {
      last = this.props.media.last_aired;
    }

    let years = '';
    if (first === last) {
      years = first;
    }
    else {
      years = first + ' - ' + last;
    }

    return years;
  }

  getSubtitleText() {
    if (this.props.media.type === 0) {
      // TV Show
      return `TV Series • ${this.getTVYears()} • ${this.props.media.seasons} Seasons`
    } else {
      return `Movie • ${this.props.media.release_date}`
    }
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <CardImg top width="100%" src={this.props.media.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-left">{this.props.media.name}</CardTitle>
          <CardSubtitle className="text-muted text-left">{this.getSubtitleText()}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export class MediaHome extends Component {
  constructor(props) {
    super(props)
    this.navigateToInstance = this.navigateToInstance.bind(this);
    this.stateService = this.props.transition.router.stateService;
  }

  navigateToInstance(id) {
    this.stateService.go('^.instance', { mediaID: id });
  }

  search(searchTerm) {
    this.stateService.go('^.home', { limit: 12, offset: 0, searchTerm: searchTerm });
  }

  clearSearch() {
    this.stateService.go('^.home', { limit: 12, offset: 0, searchTerm: null });
  }

  orderChange(e) {
    let val = e.target.value.split('.')
    this.stateService.go('^.home', { limit: 12, offset: 0, orderBy: { field: val[0], direction: val[1]}})
  }

  render() {
    this.params = this.props.transition.params()
    this.totalPages = Math.ceil(this.props.media.count / this.params.limit);
    this.currentPage = this.params.offset / this.params.limit;

    return (
      <Fragment>
        <div className="clearfix">
          <h2 className="float-left">Media{this.params.searchTerm === null || this.params.searchTerm === "" ? "" : <span> – searching for "{this.params.searchTerm}"</span>}</h2>
          {
            this.params.searchTerm === null || this.params.searchTerm === "" ? null :
              <div className="float-right">
                <button className="btn btn-link" type="button" onClick={() => this.clearSearch()}><i className="fas fa-times-circle"></i> Clear</button>
              </div>
          }
          <div className="float-right">
            <SearchBar placeholder="Search Media" value={this.params.searchTerm} onSubmit={(searchTerm) => this.search(searchTerm)} />
          </div>
          <div className="float-right form-inline mr-2">
            <label className="mr-2">Order by:</label>
            <select name="" className="form-control" onChange={(e) => this.orderChange(e)}>
              <option value="name.asc">Name Asc</option>
              <option value="name.desc">Name Desc</option>
              <option value="release_date.asc">Year Asc</option>
              <option value="release_date.desc">Year Desc</option>
              <option value="popularity.asc">Popularity Asc</option>
              <option value="popularity.desc">Popularity Desc</option>
            </select>
          </div>
        </div>
        <div className="row">
          <MediaForm transition={this.props.transition}/>
        </div>

        {
          this.props.media.count === 0 ?
            <div className="text-center my-4">No matching media were found</div>
            :
            <div className="row">
              {
                this.props.media.items.map((mediaItem) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={mediaItem.id}>
                      <MediaItem media={mediaItem} navigateToInstance={this.navigateToInstance} />
                    </div>
                  );
                })
              }
            </div>
        }
        <SDBPagination offset={this.params.offset} limit={this.params.limit} total={this.props.media.count} state="^.home" />
      </Fragment>
    );
  }
}

MediaHome.propTypes = {
  resolves: PropTypes.shape({
    media: PropTypes.arrayOf(PropTypes.object)
  })
}