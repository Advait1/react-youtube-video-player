import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: YOUTUBE_API_KEY, term: 'cats'}, (videos) => {
            this.setState({videos})
        });
    }
    render() {
        return (
            <div>
              <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

