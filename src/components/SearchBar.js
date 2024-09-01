import React from 'react';
import './css/style.css';
function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    </div>
  );
}

export default SearchBar;