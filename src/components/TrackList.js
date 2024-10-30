// src/components/TrackList.js
import React from 'react';

const TrackList = ({ tracks, favorites, onToggleFavorite }) => {
    return (
        <div className="track-list">
            <h2>Tracks</h2>
            <div className="tracks">
                {tracks.map(track => (
                    <div key={track.id} className="track-card">
                        <img src={`path_to_cover_images/${track.id}.jpg`} alt={track.title} /> {/* Replace with actual image path */}
                        <h3 className="track-title">{track.title}</h3>
                        <p>by {track.artist}</p>
                        <p>Album: {track.album}</p>
                        <p>Duration: {track.duration}</p>
                        <button
                            className="favorite-btn"
                            onClick={() => onToggleFavorite(track.id)}
                        >
                            {favorites.some(fav => fav.id === track.id) ? '💔 Unfavorite' : '🤍 Favorite'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackList;
