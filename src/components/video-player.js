import React from 'react';

const VideoPlayer = ({video}) => {
    if (!video) {
        return (
            <div className="loader">
              <img className="loader__image" src="/images/loader.gif" />
            </div>
        );
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
          <div className="video-container">
            <iframe src={url}>
            </iframe>
          </div>
          <div className="details">
            <h5>{video.snippet.title}</h5>
          </div>
        </div>
    );
};

export default VideoPlayer;