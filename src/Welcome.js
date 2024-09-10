import "./App.css";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div style={{padding: "1em"}}>
            <h1>Welcome To <span className="specialStyling">WebAlity</span></h1>
            <p>At WebAlity, we specialize in developing responsive, professional, and creative websites that prioritize what matters most for your restaurant, hotel, or travel service—your customers. We ensure that every element, from mouth-watering photos and videos of your delicious offerings to the thoughtful, heartfelt reviews from satisfied patrons, is prominently featured in your website's design. Our expertise lies in seamlessly integrating social media and online reviews, allowing potential customers to easily see the praise your business has received. We believe that the warmth of exceptional hospitality can be conveyed through a well-crafted, customer-focused website. Discover more about how we can elevate your online presence at WebAlity.</p>
            <table style={{marginLeft: "auto", marginRight: "auto", width: "100%", tableLayout: "fixed"}}>
                <tr>
                    <th>
                        <Link to="/Portfolio" className="clickDiv">
                            <div className="contentDiv">
                                <FontAwesomeIcon icon={faBriefcase} className="fontIcon"/>
                                <p><b>Portfolio</b></p>
                                <p>Check out some of our previous partnerships to see the work we've done and get inspiration for your own site.</p>
                            </div>
                        </Link>
                    </th>
                    <th>
                        <Link to="/WhatWeDo" className="clickDiv">
                            <div className="contentDiv">
                                <FontAwesomeIcon icon={faBellConcierge} className="fontIcon"/> 
                                <p><b>Our Services</b></p>
                                <p>From designing your resturants first website to polishing up your online presence, Web-Ality provides services to present your unique, best selves to new and old customers alike so you can worry about what you do best, serving your customers in real time.</p>
                            </div> 
                        </Link>
                    </th>
                    <th>
                    <Link to="/ContactUs" className="clickDiv">
                        <div className="contentDiv">
                            <FontAwesomeIcon icon={faEnvelope} className="fontIcon"/>
                            <p><b>Contact Us</b></p>
                            <p>Contact us to schedule a free 30 minute consulation, email about our services, and develop the right plan for you and your business.</p>
                        </div>
                    </Link>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Home