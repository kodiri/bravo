import React from 'react';
import { useParams, Link } from "react-router-dom";
import './NavBar.css';
import Logo from './TAP.png';

function NavBar() {
    let { page } = useParams();
    console.log('la url navbar es: ', { page });
    return (
        <>
            <nav id='navbar'>
                <Link to='about-app'>
                    <img src={Logo} alt='TAP' className='TAPLogo' />
                </Link>
                <div className='links'>
                    {
                        page === 'dashboard' || page === 'profile-page' || page === 'settings' ?
                            <div>
                                <Link to='settings'>
                                    <button className='buttonNavbar'>Settings</button>
                                </Link>
                            </div> :
                            <>
                                <div>
                                    <Link to='dashboard'>
                                        <button className='buttonNavbar'>Dashboard</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='profile-page'>
                                        <button className='buttonNavbar'>Profile Page</button>
                                    </Link>
                                </div>
                            </>

                    }
                </div>
            </nav>
        </>
    );
}
export default NavBar;

// page === undefined || page === 'about-app' || page === 'about-us' || page === 'terms'