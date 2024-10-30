// src/components/Header.js

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ toggleDarkMode, isDarkMode }) => (
    <header>
        <h1 className="app-title">🎶 My Music Stream</h1>
        <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
        </button>
    </header>
);

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
