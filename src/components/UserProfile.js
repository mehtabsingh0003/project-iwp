import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const UserProfile = ({ user }) => {
    const [username, setUsername] = useState(user.username || '');
    const [bio, setBio] = useState(user.bio || '');
    const [avatar, setAvatar] = useState(user.avatar || '');

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result); // Set the avatar to the image file
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Handle saving the profile information (e.g., API call)
        console.log('Profile saved:', { username, bio, avatar });
        // Optionally, reset the form or provide feedback to the user
    };

    return (
        <div className="profile">
            <h2>User Profile</h2>
            <div className="profile-info">
                {avatar && <img src={avatar} alt="Avatar" className="avatar" />}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="avatar-input"
                />
                <form onSubmit={handleSave}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows="4"
                            className="textarea-field"
                        />
                    </div>
                    <button type="submit" className="save-button">Save Profile</button>
                </form>
            </div>
        </div>
    );
};

// Adding PropTypes for better prop validation
UserProfile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        bio: PropTypes.string,
        avatar: PropTypes.string,
    }),
};

UserProfile.defaultProps = {
    user: {},
};

export default UserProfile;
