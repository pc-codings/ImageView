// SearchSuggestions.js
import React from "react";

const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="hero">
      <h3>Suggestions:</h3>
      <ul className="search-suggestions">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => onSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestions;
