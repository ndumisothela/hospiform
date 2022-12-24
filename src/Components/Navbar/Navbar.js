import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navsection'>
            <div className="navbar">
          <div className="logo">
        
            <img
              src="https://hasa.co.za/wp-content/uploads/2022/09/life-healthcare-2.png"
              alt=""
            />
          </div>
          <div className="searchbar">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button><i className="material-icons">search</i></button>
            </div>
          </div>
          <div className="logout">
            <button>logout</button>
          </div>
        </div>
      </div>
  
  )
}

export default Navbar
