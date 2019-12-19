import React from 'react';
import { useParams, Link } from "react-router-dom";
import './NavBar.css';
import Logo from './TAP.png';

function NavBar() {
    let { page } = useParams();
    return (
        <>
            <nav id='navbar'>
                <Link to='about-app'>
                    <img src={Logo} alt='TAP' className='TAPLogo' />
                </Link>
                <div className='links'>
                    {
                        page === 'dashboard' || page === 'profile-page' || page === 'settings' || page === 'show' ?
                            <div>
                                <Link to='settings'>
                                    <button className='buttonNavbar' id='settingsBtn'>Settings</button>
                                </Link>
                            </div> :
                            page === '' || page === '/' || page === 'about-app' || page === 'about-us' || page === 'terms' ?
                                <>
                                    <div>
                                        <Link to='profile-page'>
                                            <button className='buttonNavbar'>Profile Page</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='dashboard'>
                                            <button className='buttonNavbar'>Dashboard</button>
                                        </Link>
                                    </div>
                                </> :
                                <></>
                    }
                </div>
            </nav>
        </>
    );
}
export default NavBar;