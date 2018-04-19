import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import SDBPagination from "./../Pagination";
import SearchBar from './../SearchBar'
import { AlbumForm } from './forms/AlbumForm'; 

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
          <CardText className="text-left">{this.props.album.num_tracks} Track{this.props.album.num_tracks === 1 ? '' : 's'}</CardText>
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
    this.stateService = this.props.transition.router.stateService;
    this.state = {
      field: 'name',
      direction: 'asc'
    }
  }

  navigateToInstance(id) {
    this.stateService.go('^.instance', { albumID: id });
  }

  search(searchTerm) {
    this.stateService.go('^.home', { limit: 12, offset: 0, searchTerm: searchTerm });
  }

  clearSearch() {
    this.stateService.go('^.home', { limit: 12, offset: 0, searchTerm: null });
  }

  orderChange() {
    this.stateService.go('^.home', { limit: 12, offset: 0, orderBy: { field: this.state.field, direction: this.state.direction}})
  }

  orderFieldChange(e) {
    this.setState({
      field: e.target.value
    }, () => {
      this.orderChange();
    });
    console.debug(this.state)
  }

  orderDirectionChange(dir) {
    this.setState({
      direction: dir
    }, () => {
      this.orderChange();
    });
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
          <div className="float-right form-inline mr-2">
            <Button color="info" className="mr-2" onClick={() => {this.form.toggle() }}>Filter</Button>
            
            <label className="mr-2">Order by:</label>
            <select name="" className="form-control mr-2" onChange={(e) => this.orderFieldChange(e)}>
              <option value="name">Name</option>
              <option value="release_date">Year</option>
              <option value="num_tracks">Track Count</option>
            </select>

            <div className="btn-group">
              <button className={"btn " + (this.state.direction === 'asc' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => {this.orderDirectionChange('asc')}}>Asc</button>
              <button className={"btn " + (this.state.direction === 'desc' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => {this.orderDirectionChange('desc')}}>Desc</button>
            </div>
          </div>
        </div>
        <div className="row">
          <AlbumForm labels={this.props.labels} transition={this.props.transition} ref={instance => { this.form = instance; }}/>
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