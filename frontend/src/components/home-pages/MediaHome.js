import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UISref } from '@uirouter/react'
import PropTypes from 'prop-types'


export class MediaItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.navigateToInstance(this.props.media.id);
  }

  getSubtitleText() {
    if (this.props.media.type === 0) {
      // TV Show
      return `TV Series • ${this.props.media.years} • ${this.props.media.seasons} Seasons`
    } else {
      return `Movie • ${this.props.media.years}`      
    }
  }

  render() {
    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <CardImg top width="100%" src={this.props.media.img} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-left">{this.props.media.name ? this.props.media.name : this.props.media.title}</CardTitle>
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
    stateService.go('mediaInstance', { mediaID: id });
  }

  render() {
    this.params = this.props.transition.params()
    this.totalPages = Math.ceil(this.props.media.count / this.params.limit);
    this.currentPage = this.params.offset / this.params.limit;

    return (
      <Fragment>
        <h2>Movies/TV Series</h2>
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
        <div className="col-12">
          <Pagination className="justify-content-center">
            <PaginationItem>
              { 
                this.currentPage === 0 ? <PaginationLink previous disabled/> :
                <UISref to="." params={{ offset: this.params.offset - this.params.limit }}>
                  <PaginationLink previous/>
                </UISref>
              }
            </PaginationItem>

            <PaginationItem>
              <PaginationLink disabled>{ this.currentPage + 1 }</PaginationLink>
            </PaginationItem>

            <PaginationItem>
            { 
                this.currentPage === this.totalPages - 1 ? <PaginationLink next disabled/> :
                <UISref to="." params={{ offset: this.params.offset + this.params.limit }}>
                <PaginationLink next/>
                </UISref>
              }
            </PaginationItem>
          </Pagination>
        </div>
      </Fragment>
    );
  }
}

MediaHome.propTypes = {
  resolves: PropTypes.shape({
    media: PropTypes.arrayOf(PropTypes.object)
  })
}