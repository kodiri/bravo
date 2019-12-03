import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import './Footer.css';

function Footer() {
    let { page } = useParams();
    return (
        <>
            {
            page === '/' || page === 'about-us' || page === 'about-app' || page === 'terms' || page === 'sign-in' || page === 'sign-up' ?
                <footer className='footerOut'>
                    <Link className='linksFooterOut' to='/about-app'>
                        <div className='buttonFooterOut'>
                            <p>About App</p>
                        </div>
                    </Link>
                    <Link className='linksFooterOut' to='/about-us'>
                        <div className='buttonFooterOut'>
                            <p>About Us</p>
                        </div>
                    </Link>
                    <Link className='linksFooterOut' to='/terms'>
                        <div className='buttonFooterOut'>
                            <p>Terms and Conditions</p>
                        </div>
                    </Link>
                </footer> :
                page === 'dashboard' || page === 'profile-page' || page === 'settings' ?
                    <footer className='footerIn'>
                        <Link className='linksFooterIn' to='/dashboard'>
                            <div className='buttonFooterIn'>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        <Link className='linksFooterIn' to='/profile-page'>
                            <div className='buttonFooterIn'>
                                <p>Profile Page</p>
                            </div>
                        </Link>
                    </footer> :
                    <footer className='footerNotFound'>
                        <Redirect to='/not-found' />
                        <div>asdasda</div>
                    </footer>
            }
        </>
    );
}
export default Footer
