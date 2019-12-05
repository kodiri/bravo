import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import './Footer.css';

function Footer() {
    let { page } = useParams();
    let history = useHistory();
    function goBackHandle() {
        history.goBack();
    }
    return (
        <>
            {
            page === '/' || page === 'landing' || page === 'about-app' || page === 'about-us' || page === 'terms' || page === 'signin' || page === 'signup' || page === 'login' ?
                <footer className='footer'>
                    <Link className='linksFooter' to='/about-app'>
                        <div>
                            <button className='buttonFooter'>About App</button>
                        </div>
                    </Link>
                    <Link className='linksFooter' to='/about-us'>
                        <div>
                            <button className='buttonFooter'>About Us</button>
                        </div>
                    </Link>
                    <Link className='linksFooter' to='/terms'>
                        <div>
                            <button className='buttonFooter'>Terms & Conditions</button>
                        </div>
                    </Link>
                </footer> :
                page === 'dashboard' || page === 'profile-page' || page === 'settings' ?
                    <footer className='footer'>
                        <Link className='linksFooter' to='/dashboard'>
                            <div>
                                <button className='buttonFooter'>Dashboard</button>
                            </div>
                        </Link>
                        <Link className='linksFooter' to='/profile-page'>
                            <div>
                                <button className='buttonFooter'>Profile Page</button>
                            </div>
                        </Link>
                    </footer> :
                    <footer className='footer'>
                        <div>
                            <button className='buttonFooter' onClick={goBackHandle}>Go Back</button>
                        </div>
                    </footer>
            }
        </>
    );
}
export default Footer
