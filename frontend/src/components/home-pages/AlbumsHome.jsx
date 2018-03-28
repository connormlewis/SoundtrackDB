import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UISref } from '@uirouter/react';

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
          <CardSubtitle className="text-muted text-left">{this.props.album.release_date.substring(0,4)}</CardSubtitle>
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
  }

  navigateToInstance(id) {
    const { stateService } = this.props.transition.router;
    stateService.go('albumInstance', { albumID: id });
  }

  render() {
    this.params = this.props.transition.params()
    this.totalPages = Math.ceil(this.props.albums.count / this.params.limit);
    this.currentPage = this.params.offset / this.params.limit;

    return (
      <Fragment>
        <h2>Albums</h2>
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
        <div className="col-12">
          <Pagination className="justify-content-center">
            <PaginationItem>
              { 
                this.currentPage === 0 ? <PaginationLink previous disabled/> :
                <UISref to="albumHome" params={{ offset: this.params.offset - this.params.limit }}>
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
                <UISref to="albumHome" params={{ offset: this.params.offset + this.params.limit }}>
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

AlbumHome.propTypes = {
  resolves: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object),
  })
}