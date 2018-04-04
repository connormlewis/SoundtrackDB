import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SDBPagination from "./Pagination";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  getAboutExerpt() {
    if (this.props.item.about === undefined || this.props.item.about === null) {
      return ""
    }
    let idx = this.props.item.about.search(new RegExp(this.props.searchTerm, 'gi'))
    if (idx === -1) {
      let str = this.props.item.about.substring(0, Math.min(300, this.props.item.about.length))
      return str.length === this.props.item.about.length ? str : str + "..."
    } else {
      let startIdx = Math.max(0, idx - 200)
      let endIdx = Math.min(this.props.item.about.length, idx + 200)
      let str = this.props.item.about.substring(startIdx, endIdx)
      var retStr = ""
      if (startIdx !== 0) {
        retStr += "..."
      }
      retStr += str.replace(new RegExp(this.props.searchTerm, 'gi'), function (str) {
        return "<mark>" + str + "</mark>"
      })
      if (endIdx !== 0) {
        retStr += "..."
      }
      return retStr;
    }
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  handleClick(e) {
    e.preventDefault();
    switch (this.props.item.kind) {
      case 'Artist':
        this.props.stateService.go('artist.instance', { artistID: this.props.item.id })
        break;
      case 'Album':
        this.props.stateService.go('album.instance', { albumID: this.props.item.id })
        break;
      case 'Media':
        this.props.stateService.go('media.instance', { mediaID: this.props.item.id })
        break;
      default:
        break;
    }
  }

  resultsPerPageChanged(e) {

  }

  render() {
    const hoveredClass = this.state.isHovered ? " bg-light" : "";

    return (
      <div className={"row py-3 searchResult" + hoveredClass} style={{ cursor: 'pointer' }} onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="col-auto">
          <img src={this.props.item.image} width="150" alt="" />
        </div>
        <div className="col">
          <h4>
            <span dangerouslySetInnerHTML={{
              __html: this.props.item.name.replace(new RegExp(this.props.searchTerm, 'gi'), function (str) {
                return "<mark>" + str + "</mark>"
              })
            }} /> <small className="text-muted">{this.props.item.kind}</small>
          </h4>
          {
            this.props.item.release_date !== undefined && this.props.item.release_date !== null && this.props.item.release_date !== "" ? <p>Released: {this.props.item.release_date.substring(0, 4)}</p> : null
          }
          <p dangerouslySetInnerHTML={{
            __html: this.getAboutExerpt()
          }} />
        </div>
      </div>
    )
  }
}

class SearchResults extends Component {
  render() {
    this.params = this.props.transition.params();
    this.searchTerm = decodeURI(this.params.searchTerm)
    console.debug(this.props.results)
    return (
      <React.Fragment>
        <div className="clearfix">
          <h2 className="float-left mb-3">Showing results for: <span className="text-muted">{this.searchTerm}</span></h2>
          {/* <div className="float-right form-inline">
            <label>Results per page: </label>
            <select name="" id="" className="form-control" onChange={this.resultsPerPageChanged}>
              <option value="10">10</option>
              <option value="10">25</option>
              <option value="10">50</option>
            </select>
          </div> */}
        </div>
        <div className="mb-2">
          {
            this.props.results.count === 0 ?
            <div>No matching results were found</div>
            :
            this.props.results.items.map((result, index) => {
              return (
                <React.Fragment key={result.kind + result.id}>
                  <Result item={result} searchTerm={this.searchTerm} stateService={this.props.transition.router.stateService} />
                  {index === this.props.results.items.length - 1 ? null : <hr />}
                </React.Fragment>
              )
            })
          }
        </div>
        <SDBPagination state="searchResults" params={{ searchTerm: this.searchTerm }} limit={this.params.limit} offset={this.params.offset} total={this.props.results.count} />
      </React.Fragment>
    )
  }
}

export default SearchResults;

SearchResults.propTypes = {
  resolves: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  })
}