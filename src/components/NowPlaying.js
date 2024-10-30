// src/components/NowPlaying.js
import React from 'react';

const NowPlaying = ({ currentTrack }) => {
    return (
        <div className="now-playing">
            <h2>Now Playing</h2>
            {currentTrack ? (
                <p>{currentTrack.title} by {currentTrack.artist}</p>
            ) : (
                <p>No track is currently playing.</p>
            )}
        </div>
    );
};

export default NowPlaying;
