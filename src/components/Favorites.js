import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const Favorites = ({ favorites, onToggleFavorite }) => (
    <div className="favorites">
        <h2>Your Favorite Tracks</h2>
        {favorites.length === 0 ? (
            <p>No favorite tracks yet! Add some tracks to your favorites.</p>
        ) : (
            favorites.map((track) => (
                <div
                    key={track.id}
                    onClick={() => onToggleFavorite(track.id)}
                    className="favorite-track"
                    role="button" // Accessibility
                    tabIndex={0}   // Accessibility
                    onKeyPress={(e) => { // Accessibility
                        if (e.key === 'Enter') {
                            onToggleFavorite(track.id);
                        }
                    }}
                >
                    {track.title} - {track.artist}
                </div>
            ))
        )}
    </div>
);

// Adding PropTypes for better prop validation
Favorites.propTypes = {
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
        })
    ).isRequired,
    onToggleFavorite: PropTypes.func.isRequired,
};

export default Favorites;
