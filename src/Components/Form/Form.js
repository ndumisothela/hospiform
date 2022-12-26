import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form_container">
      <div className="left_container">
        <h1> LEFT SIDE</h1>
        <p>
          Request a medical appointment Please provide your details below and we
          will find the appropriate appointment for you. HospiForm appointmed™
          consultants are available to assist you Monday to Friday 08:00 –
          17:00.
        </p>
      </div>
      <div className="right_container">
        <h1>RIGHT SIDE</h1>

        <form>
          <label for="full_name">Full Name</label>
          <input
            type="text"
            className="name"
            placeholder="First and Last"
            required=""
          />

          <label for="age">Age</label>
          <input type="text" className="age" placeholder="age" required="" />
          <label for="date_of_birth">Date of birth</label>
          <input
            type="text"
            className="date_of_birth"
            placeholder="Date of birth"
            required=""
          />
          <label for="gender">Gender</label>
          <input
            type="text"
            className="gender"
            placeholder="Gender"
            required=""
          />

          <label for="email_address">Email Address</label>
          <input
            type="email"
            className="email"
            placeholder="email@domain.com"
            required=""
          />
          <fieldset className="form_selects">
            <label for="timely">HEALTH CARE PROVIDERS </label>
            <select className="timely" required="">
              <option value="" selected="" disabled="">
                Choose
              </option>
              <option value="1">Audiology</option>
              <option value="2">Biokinetics</option>
              <option value="3">Cardiology</option>
              <option value="4">Cardiothoracic surgery</option>
              <option value="5">Dentistry</option>
              <option value="6">Dermatology</option>
              <option value="7">Dietetics</option>
              <option value="8">Family practice</option>
              <option value="9">General practice</option>
            </select>
            <br />

            <textarea
              rows="3"
              className="message"
              placeholder=" Not sure what type of healthcare provider you need ?
              Provde a short description of your symptoms and we will help find the right doctor for you."
              required=""
            ></textarea>
            <br />
            <label for="timely">LOCATION </label>
            <select className="timely" required="">
              <option value="" selected="" disabled="">
                Choose
              </option>
              <option value="1">Eastern Cape</option>
              <option value="2">Free State</option>
              <option value="3">Gauteng</option>
              <option value="4">Kwazulu Natal</option>
              <option value="5">Limpopo</option>
              <option value="6">Mpumalanga</option>
              <option value="7">Northern Cape</option>
              <option value="8">North West</option>
              <option value="9">Western Cape</option>
            </select>
          </fieldset>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  );
}

export default Form;
