import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from "./images/WA_with_background.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logo} style={{width: "10em", borderRadius: "50%", boxShadow: "0px  0px 10px 10px rgba(38,38,38,.7)"}} alt="Web Ality Logo"/></Link>
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
            <li><Link className="link" to="/Portfolio">Portfolio</Link></li>
            <li><Link className="link" to="/WhatWeDo">What We Do</Link></li>
            <li><Link className="link" to="/Pricing">Pricing</Link></li>
            <li><Link className="link" to="/ContactUs">Contact Us</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}


export default NavBar;