import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(searchTerm);
  };

  const handleSearchClick = () => {
    // Call the handleSearch function with the searchTerm
    handleSearch(searchTerm);
  };

  return (
    <div className="d-flex justify-content-end m-2">
      <input
        type="text"
        placeholder="Search anime..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-dark" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Search;
