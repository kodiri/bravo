import React from 'react';
import './App.css';
import Navbar from './NavBar/lisa_navbar';

export default function landingPage(){
    return(
        <>
        <Navbar/>
            <h1>Welcome to TAP</h1>
            <p id='content'>This is the Landing page of the web app TAP</p>
        </>
    );
}