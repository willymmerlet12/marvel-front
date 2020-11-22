import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ searchChar, setSearchChar }) => {
  const handleSearch = (ev) => {
    setSearchChar(ev.target.value);
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleSearch}
        type="text"
        value={searchChar}
        placeholder="SEARCH"
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchBar;
