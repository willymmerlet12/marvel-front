import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch }) => {
  return (
    <div>
      <nav>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="search-cont">
            <input
              type="text"
              placeholder="Search for the character you want !"
              className="search-input"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="search-icon">
              <FontAwesomeIcon icon="search" />
            </div>
          </div>
          <ul>
            <Link to="/character">
              <li>Characters</li>
            </Link>
            <Link to="/comics">
              <li>Comics</li>
            </Link>
            <li>Les favs</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
