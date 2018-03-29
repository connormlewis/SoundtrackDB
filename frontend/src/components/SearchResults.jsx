import React, {Component} from 'react';

class SearchResults extends Component {
    render() {
        this.searchTerm = this.props.transition.params().searchTerm;
        return (
            <div>I'm a search result for { this.searchTerm }</div>
        )
    }
}

export default SearchResults;