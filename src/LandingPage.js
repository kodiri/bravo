import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
  } from "react-router-dom";
import Terms from './Terms';
import AboutUs from './AboutUs';
import AboutApp from './AboutApp';
import Footer from './Footer';



export default function LandingPage({ page }) {

    if (page === 'About Us'){
        return(
            <>
                <AboutUs />
            </>
        );
    }
    
}