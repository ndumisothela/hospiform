import React from "react";
import "./Dashboard.css";

const formUrl = "https://docs.google.com/forms/u/0/";

function Dashboard() {
  return (
    <div className="dash_container">
      <div className="left_side"></div>
      <div className="right_side">
        <p>
          Medical Care appointmed™ is a convenient medical booking service
          designed to assist YOU with all your medical appointments. Get access
          to our extensive Medical Care network of healthcare professionals at
          the hospitals. <br />
          <br />
          No membership, no fees, just hassle-free healthcare to suit your
          unique needs.
        </p>

        <a
          type="submit"
          className="form_btn"
          target="_top"
          rel="noreferrer"
          href={`${formUrl}`}
        >
          Create Form
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
