import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UISref } from '@uirouter/react'
import PropTypes from 'prop-types'
import SDBPagination from "./../Pagination";


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
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('^.instance', { mediaID: id });
  }

  render() {
    this.params = this.props.transition.params()
    this.totalPages = Math.ceil(this.props.media.count / this.params.limit);
    this.currentPage = this.params.offset / this.params.limit;

    return (
      <Fragment>
        <h2>Media - Movies/TV Series</h2>
        <div className="row">
          {
            this.props.media.items.map((mediaItem) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" style={{ cursor: 'pointer' }} key={mediaItem.id}>
                  <MediaItem media={mediaItem} navigateToInstance={this.navigateToInstance}/>
                </div>
              );
            })
          }
        </div>
        <SDBPagination offset={this.params.offset} limit={this.params.limit} total={this.props.media.count} state="^.home"/>
      </Fragment>
    );
  }
}

MediaHome.propTypes = {
  resolves: PropTypes.shape({
    media: PropTypes.arrayOf(PropTypes.object)
  })
}