import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    render() {
        return (
            <div>
              <input value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;