import React from 'react';
import ReactDOM from 'react-dom';
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
        YTSearch({key: YOUTUBE_API_KEY, term: 'Maroon 5'}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (
            <div>
              <SearchBar />
              <div className="row">
                <div className="col s8">
                  <VideoPlayer video={this.state.selectedVideo} />
                </div>
                <div className="col s4">
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