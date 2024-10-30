// src/components/Recommendations.js
import React from 'react';
import PropTypes from 'prop-types';

const Recommendations = ({ favorites }) => (
    <div className="recommendations">
        <h2>Recommended for You</h2>
        {favorites.length === 0 ? (
            <p>No recommendations available. Add some favorites!</p>
        ) : (
            favorites.map((fav) => (
                <div key={fav.id} className="recommendation-item">
                    <img src={fav.coverArt} alt={`${fav.title} cover`} className="track-cover" />
                    <div>
                        <strong>{fav.title}</strong> by {fav.artist} <br />
                        Album: {fav.album} <br />
                        Duration: {fav.duration}
                    </div>
                </div>
            ))
        )}
    </div>
);

// Adding PropTypes for better prop validation
Recommendations.propTypes = {
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            album: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            coverArt: PropTypes.string,
        })
    ).isRequired,
};

export default Recommendations;
