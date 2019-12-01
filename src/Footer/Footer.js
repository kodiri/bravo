import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function footerLoggedOut() {
    return (
        <footer className='footerContainer'>
            <Link className='linksFooter' to='/about-app'>
                <div className='buttonFooter'>
                    <p>About App</p>
                </div>
            </Link>
            <Link className='linksFooter' to='/about-us'>
                <div className='buttonFooter'>
                    <p>About Us</p>
                </div>
            </Link>
            <Link className='linksFooter' to='/terms'>
                <div className='buttonFooter'>
                    <p>Terms and Conditions</p>
                </div>
            </Link>
        </footer>
    )
}
