import React from 'react';
import Logo from './TAP.png';
import './LandingPage.css';
// import React from './node_modules/react';

export default function LandingPage() {
    return (
        <div className='landingContainer'><img className='TAPLogoLanding'src={Logo} alt='TAP'></img>
        <br></br><br></br><br></br>
            <button className='landingButton' onClick>START TAPPING</button></div>
    );
}