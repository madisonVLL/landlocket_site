import React, { useState, useEffect } from 'react';
import calandly from "./images/calandly-removebg-preview.png"

const Contact = () => {
    return (
        <div>
        <table style={{marginLeft: "auto", marginRight: "auto", width: "100%"}}>
            <tr>
                <th style={{width: "50%"}} className='contentDiv'>
                    <a href="malito: madison@landlocket.com" target="_blank">
                        <p><b>Email</b></p>
                        <p>Please email us if you'd like to partner with us to create a responsive, professional, and engaging website to increase your reach at <a href="malito: madison@landlocket.com">madison@landlocket.com</a></p>
                    </a>
                </th>
                <th  style={{width: "50%"}} className='contentDiv'>
                    <a href="https://calendly.com/madison-landlocket/30min" target='_blank'>
                    <p><b>Schedule a Meeting</b></p>
                    <p>Schedule an appointment with Calendly <a href="https://calendly.com/madison-landlocket/30min" target='_blank'></a></p>
                    <img alt="Schedule a Calendly meeting with our team here" src={calandly} style={{width: "5em", alignContent: "center"}}/>
                    </a>
                </th>
            </tr>
        </table>
    </div>
    )
}

export default Contact;