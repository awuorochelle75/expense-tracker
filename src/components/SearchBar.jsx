// components/SearchBar.jsx
import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="max-w-xl ml-5 mt-5 mb-5">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />
    </div>
  );
}

export default SearchBar;
