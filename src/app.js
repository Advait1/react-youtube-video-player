import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoPlayer from './components/video-player';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('');
    }
    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
              <SearchBar onSearchTermChange={videoSearch}/>
              <div className="row">
                <div className="col l8 m7 s12">
                  <VideoPlayer video={this.state.selectedVideo} />
                </div>
                <div className="col l4 m5 s12">
                  <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
                </div>
              </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));