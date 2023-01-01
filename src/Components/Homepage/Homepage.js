import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home_container">
      <div className="left-container">
        <h1>Medical appointments tailor-made for YOU</h1>
        <p>
          Medical appointments are made for YOU based on a number of criteria
          including your availability, medical aid plan cover, geographic
          location, doctors’ availability and consultation fee.
        </p>
      </div>

      <div className="home_msg">
        <h1>LEFT SIDE</h1>
      </div>
    </div>
  );
}

export default Homepage;
