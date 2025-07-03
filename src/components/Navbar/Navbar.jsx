import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const closeMenu = () => {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) checkbox.checked = false;
  };

  return (
    <>
      <div id="menuToggle">
        <input id="checkbox" type="checkbox" />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>

        <div className="slide">
          <h1>MENU</h1>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>

      <nav id='navbar'>
        <div className="nav-left">Yash</div>
        <div className="nav-right">
          <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="portfolio">
          <button className='probtn'><Link to="/projects">Projects</Link></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
