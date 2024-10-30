import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Playlists = ({ playlists = [], onAddPlaylist }) => { // Default to empty array if undefined
    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handleAddPlaylist = () => {
        if (newPlaylistName.trim()) {
            onAddPlaylist(newPlaylistName);
            setNewPlaylistName(''); // Clear the input field after adding
        }
    };

    return (
        <div className="playlists">
            <h2>Your Playlists</h2>
            <div className="playlist-input">
                <input 
                    type="text" 
                    value={newPlaylistName} 
                    onChange={(e) => setNewPlaylistName(e.target.value)} 
                    placeholder="New Playlist Name" 
                />
                <button onClick={handleAddPlaylist}>Add Playlist</button>
            </div>
            {playlists.length > 0 ? (
                <ul className="playlist-list">
                    {playlists.map((playlist, index) => (
                        <li key={index} className="playlist-item">
                            {playlist}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No playlists available. Create your first playlist!</p>
            )}
        </div>
    );
};

// Adding PropTypes for better prop validation
Playlists.propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.string),
    onAddPlaylist: PropTypes.func.isRequired,
};

export default Playlists;
