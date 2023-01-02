import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash_container">
      <div className="left_side">
        {" "}
        <iframe
          className="google_form"
          id="googleForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLScaITaTN45SuI7lizHDnKJKgYapf_JMGEZHWSLmbSKVTj3lrA/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <div className="right_side">
        <p>
          Medical Care appointmed™ is a convenient medical booking service
          designed to assist YOU with all your medical appointments. Get access
          to our extensive Medical Care network of healthcare professionals at
          the hospital. <br />
          <br />
          No membership, no fees, just hassle-free healthcare to suit your
          unique needs.
        </p>

        <a
          type="submit"
          className="form_btn"
          target="_blank"
          rel="noreferrer"
          href={"#googleForm"}
        >
          Create Form
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
