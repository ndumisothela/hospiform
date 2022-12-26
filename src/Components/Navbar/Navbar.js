import React from "react";
import "./Navbar.css";
import csb from "./../Asset/csb.png";

function Navbar() {
  return (
    <div className="navsection">
      <div className="navbar">
        <div className="logo">
          <img src={csb} alt="logo" />
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
        <button type="submit" className="patient_btn">
          Request an appointment{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
