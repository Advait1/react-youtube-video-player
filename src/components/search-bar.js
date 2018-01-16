import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="search-bar">
              <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
                placeholder="Search Videos" />
            </div>
        );
    }
}

export default SearchBar;