import React from "react";
import "./Navbar.css";
import bgh from "./../Asset/bgh.webp";

function Navbar() {
  return (
    <div className="navsection">
      <div className="navbar">
        <div className="logo">
          <img src={bgh} alt="logo" />
        </div>
        <div className="searchbar">
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>

        <button type="submit" className="login_btn">
          Login
        </button>
        <button type="submit" className="signup_btn">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
