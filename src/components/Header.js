import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/marvel.png";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="header-container">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <Link to="/characters">
              <li>Characters</li>
            </Link>
            <li>Comics</li>
            <li>Les favs</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
