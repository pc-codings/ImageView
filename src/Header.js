// Header.js
import React, { useState } from "react";
import SearchSuggestions from "./SearchSuggestion";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const MAX_SUGGESTIONS = 5; // Set the maximum number of suggestions

  const handleSearch = () => {
    onSearch(searchTerm);
    if (searchTerm) {
      // Update the suggestions
      setSuggestions((prevSuggestions) => {
        // Remove the oldest suggestion if the limit is reached
        if (prevSuggestions.length === MAX_SUGGESTIONS) {
          prevSuggestions.shift();
        }
        const newSuggestions = [...prevSuggestions, searchTerm];
        return newSuggestions;
      });

      setSearchTerm(""); // Clear the input field after searching
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
  };

  return (
    <div className="header">
      <div>
        <h1>Search Photos</h1>
      </div>
      <div>
        <input
          type="text"
          className="search-img"
          placeholder="Search Photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <SearchSuggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default Header;
