import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='home_container'>
    <div className='right_container'>
       <h1> RIGHT SIDE</h1>
    </div>
    <div className='left_container'>
<h1>LEFT SIDE</h1>
<p>Request a medical appointment
Please provide your details below and we will find the appropriate appointment for you. HospiForm appointmed™ consultants are available to assist you Monday to Friday 08:00 – 17:00.</p>
<form action="/form/submit" method="get">
      
      <input type="text" className="first_name" placeholder='Your name' />
      <br/>
      <br/>
     
      <input type="text" className="last_name" placeholder='Your Surname' />
      <br/>
      <br/>
     
      <input type="email" className="user_email" placeholder='Enter Your E-Mail:' />
      <br/>
      <br/>
      <input type='type or select' placeholder='Type or select an option'/>
      <br/>
      <br/>
      <input type="type" className="text" placeholder='Not sure what type of healthcare provider you need? Provide a short description of your symptoms and we will help you find the righ doctor for you.'/>
<br/>
<br/>
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  )
}

export default Homepage
