// src/components/Achievements.js
import React from 'react';

const Achievements = ({ userActions }) => {
    return (
        <div className="achievements">
            <h2>Achievements</h2>
            <p>Songs Played: {userActions.songsPlayed}</p>
            <p>Playlists Created: {userActions.playlistsCreated}</p>
            <p>Favorite Tracks: {userActions.favoritesCount}</p>
        </div>
    );
};

export default Achievements;
