import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLoggedOut.css';

export default function footerLoggedOut({ firstSection, secondSection, thirdSection }) {
    return (
        <>
            <footer className='footerLoggedOut'>
                    <Link className='linksFooterLO' to={firstSection}>
                        <div className='buttonFooterLO'>
                            <p>About App</p>
                        </div>
                    </Link>
                    <Link className='linksFooterLO' to={secondSection}>
                        <div className='buttonFooterLO'>
                            <p>About Us</p>
                        </div>
                    </Link>
                    <Link className='linksFooterLO' to={thirdSection}>
                        <div className='buttonFooterLO'>
                            <p>Terms and Conditions</p>
                        </div>
                    </Link>
            </footer>
        </>
    );
}
