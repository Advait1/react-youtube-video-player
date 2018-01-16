import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    render() {
        return (
            <div className="search-bar">
              <input 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} 
                placeholder="Search Videos" />
            </div>
        );
    }
}

export default SearchBar;