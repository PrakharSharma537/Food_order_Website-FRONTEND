import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import "./Navbar.css"

const Navbar = ({ setshowlogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo / Title */}
      <h1 className="title">Dhaba420</h1>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to='/home'>Home</Link></li>
        <li><a href="#app">App</a></li>
        <li><a href="#explore-menu">Menu</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>

      {/* 🛒 Cart */}
      <div className="cart-icon">
        <a href="#cart">
          <img src={assets.basket_icon} alt="cart" />
        </a>
      </div>

      {/* Search + Sign in */}
      <div className='buttons'>
        <img src={assets.search_icon} alt="search" />
        <button onClick={() => setshowlogin(true)}>Sign in</button>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
