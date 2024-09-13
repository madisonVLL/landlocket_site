import './App.css';
import NavBar from './Navbar';
import Contact from './Contact';
import Home from './Welcome';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Footer from './Footer';
import PrivacyPolicy from './Privacy';
import Portfolio from './Portfolio';
import AboutUs from './AboutUs';
import Pricing from './Pricing';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/WhatWeDo" element={<AboutUs />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Privacy" element={<PrivacyPolicy />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>

  );
}

export default App;
