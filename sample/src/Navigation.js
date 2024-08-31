
import './App.css';
import logo from './images/no_background.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
           <header>
                <nav class="sticky-header">
                    <div class="logo">
                        <Link to="\"><a href="home"><img src={logo} alt="Logo"></img></a></Link>
                    </div>
                    <Link to="/menu">Menu</Link>
                    <Link to="/hours">Hours & Locations</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/catering">Catering</Link>
                    <Link to="/order">Order Online</Link>
                </nav>
            </header> 
        </>
    );
};

/*
<header>
<nav class="sticky-header">
    <div class="logo">
        <a href="home"><img src={logo} alt="Logo"></img></a>
    </div>
    <ul>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#hours">Hours & Locations</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#catering">Catering</a></li>
        <li><a href="#orderOnline">Order Online</a></li>
    </ul>
</nav>
</header>
*/
 
export default Navbar;