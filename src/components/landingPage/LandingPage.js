import React from 'react';
import './LandingPage.css';
import tap from './tap.png'
// import React from './node_modules/react';

export default function LandingPage(){
    return(
        <div className='landingPage'>
            <h1>Welcome to TAP</h1>
            <img  src={tap} alt='logo'/>
            <h3>Your Social & Networking QR Code Creator</h3>
        </div>
    );
}