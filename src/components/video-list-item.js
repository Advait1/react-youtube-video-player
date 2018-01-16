import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="collection-item" onClick={() => onVideoSelect(video)}>
          <div className="video-item">
            <div>
              <img src={imageUrl}/>
            </div>
            <div className="video-title">
              <h6>
                {video.snippet.title}
              </h6>
            </div>
          </div>
        </li>
    );
};

export default VideoListItem;