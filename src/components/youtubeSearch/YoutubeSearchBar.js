import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./YoutubeSearchBar.css"

export const YoutubeSearchBar = ({ handleFormSubmit }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(search);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="formfield">
              
              <input
                className="formfieldYoutubeSearch"
                type="text"
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="Youtube-searchButton" type="submit">
                <SearchIcon  />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
