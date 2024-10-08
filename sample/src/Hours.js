import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'



const Hours = () => {
    return (
        <div>
            <div style={{display: 'inline-flex', alignItems: 'center', textAlign: "center"}}>
                <div style={{padding: "1em", minWidth: "300px"}}>
                    <p><b>Trumbuli & 79th St.</b></p>
                    <p>3412 W 79th St 
                    <br></br>Chicago, IL 60652</p>
                    <p><FontAwesomeIcon icon={faClock} />   12pm-7pm, Thurs-Mon</p>
                    <a href="tel:+13125362166" title="phone number"><FontAwesomeIcon icon={faPhone} className='icon'/></a>
                    <a href="mailto:passionteecatering@yahoo.com?subject=Catering Request" title="email us"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.6389022888993!2d-87.7103993884063!3d41.749880971136285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e30107bba4f33%3A0x70f32167a1e562b9!2s3412%20W%2079th%20St%2C%20Chicago%2C%20IL%2060652!5e0!3m2!1sen!2sus!4v1724814418742!5m2!1sen!2sus" min_width="400" min_height="400" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" title="79th and Trumbuli Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div style={{display: 'inline-flex', alignItems: 'center', textAlign: "center"}}>
                <div style={{padding: "1em", minWidth: "300px"}}>
                    <p><b>Martin Luther King Dr. & 69th St.</b></p>
                    <p>
                    400 E 69th St<br></br>Chicago, IL 60637
                    </p>
                    <p><FontAwesomeIcon icon={faClock} />   12pm-7pm, Thurs-Mon</p>
                    <FontAwesomeIcon icon={faPhone} className='icon'/>
                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.7316330582175!2d-87.61778068854312!3d41.769443572090566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e28d3c00f0219%3A0x4c93fd240cda1851!2s400%20E%2069th%20St%2C%20Chicago%2C%20IL%2060637!5e0!3m2!1sen!2sus!4v1724814607964!5m2!1sen!2sus" title="69th and King Drive Location" min_width="400" min_height="400" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
    )
}

export default Hours