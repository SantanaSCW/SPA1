import React from 'react';

function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <h1>Creative Agency</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
      />
    </header>
  );
}

export default Header;
