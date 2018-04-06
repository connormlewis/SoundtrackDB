import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  
  submitSearch(e) {
    e.preventDefault();
    if (this.state.searchTerm === "") {
      return;
    }
    this.props.onSubmit(this.state.searchTerm);
  }
  
  updateInputValue(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={evt => this.submitSearch(evt)}>
        <input className="form-control mr-sm-2" type="search" placeholder={this.props.placeholder} onChange={evt => this.updateInputValue(evt)} aria-label="Search"></input>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}