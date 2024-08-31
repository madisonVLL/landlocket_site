import logo from './images/no_background.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Menu from './OrderOnline';
import Hours from './Hours';

const HomePage = () => {
  return <h1>Home Page</h1>;
};

const AboutPage = () => {
  return <h1>About Page</h1>;
};


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
      <body>
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/ca37f308e1515a55acd31956383c8685.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style={{width:"100%", border:"0", overflow:"hidden"}}></iframe>
        <Menu />
        <Hours />
      </body>
    <main>
    </main>

    <footer class="sticky-footer">
        <p>&copy; 2024 Passion T Plates. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
