import logo from './images/no_background.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';



function App() {
  return (

    <div className="App">
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

    <main>
    </main>

    <footer class="sticky-footer">
        <p>&copy; 2024 Passion T Plates. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
