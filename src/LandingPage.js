import React from 'react';
import FooterLoggedOut from './Footer/FooterLoggedOut';
import './Footer/FooterLoggedOut.css';
import './App.css';

export default function landingPage(){
    return(
        <>
            <h1>Welcome to TAP</h1>
            <p id='content'>This is the Landing page of the web app TAP</p>
            <FooterLoggedOut 
                firstSection='/about-app'
                secondSection='/about-us'
                thirdSection='/terms'
            />
        </>
    );
}