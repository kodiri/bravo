import React from 'react';
import './LandingPage.css';
import tap from './tap.png'
// import React from './node_modules/react';

export default function LandingPage(){
    return(
        <div className='landingPage'>
            <h1>Welcome to TAP</h1>
            <img className='landingLogo' src={tap} alt='logo'/>
            <h2>The Future of Networking</h2>
        </div>
    );
}