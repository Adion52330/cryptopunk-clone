import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="logo" className="punkLogo" />
      </div>
      <div className="searchbarContainer">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          placeholder="Search for collection, item or user..."
          className="searchbar"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitcher">
          <img src={themeSwitch} alt="" className="themeSwitch" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
