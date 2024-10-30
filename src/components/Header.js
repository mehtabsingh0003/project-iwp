// src/components/Header.js
import React from 'react';

const Header = ({ toggleDarkMode }) => {
    return (
        <header>
            <h1 className="app-title">🎶 My Music Stream</h1>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                🌜 Dark Mode
            </button>
        </header>
    );
};

export default Header;
