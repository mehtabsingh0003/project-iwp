// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        if (onSearch && typeof onSearch === 'function') {
            onSearch(value);  // Call the onSearch function if it's provided
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
