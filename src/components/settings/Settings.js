import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div className='mainContainer'>
            <div className='containerSettings'>
                <div className='aboutAppContainer'>
                    <h2>About App</h2>
                    <Link to='/about-app'>
                        <button className='settingsButton'>About App</button>
                    </Link>
                </div>
                <div className='aboutUsContainer'>
                    <h2>About Us</h2>
                    <Link to='/about-us'>
                    <button className='settingsButton'>About Us</button>
                    </Link>
                </div>
                <div className='termsConditionsContainer'>
                    <h2>Terms and Conditions</h2>
                    <Link to='/terms'>
                    <button className='settingsButton'>Ts & Cs</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Settings;