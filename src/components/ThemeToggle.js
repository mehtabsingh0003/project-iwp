import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const ThemeToggle = ({ toggleDarkMode, isDarkMode }) => (
    <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} // Accessibility
    >
        {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'} {/* Change button text based on theme */}
    </button>
);

// Adding PropTypes for better prop validation
ThemeToggle.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired, // Expect toggleDarkMode prop to be a function
    isDarkMode: PropTypes.bool.isRequired, // Expect isDarkMode prop to be a boolean
};

export default ThemeToggle;
