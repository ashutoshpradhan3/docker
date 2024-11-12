import React from 'react';
import { Link } from 'react-scroll';
import '../Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Nalanda Ceramics</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
        <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
