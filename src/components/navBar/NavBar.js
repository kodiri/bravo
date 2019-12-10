import React from 'react';
import { useParams, Link } from "react-router-dom";
import './NavBar.css';
import logo from './TAP.png';

function NavBar() {
    let { page } = useParams();
    console.log('la url navbar es: ', { page });
    return (
        <>
            <nav id='navbar'>

                <Link to='about-app'>
                    <img src={logo} alt='TAP' className='TAPLogo' />
                </Link>
                
                <div className='links'>
                    {
                        page === 'dashboard' || page === 'profile-page' || page === 'settings' ?
                            <div>
                                <Link to='settings'>
                                    <button className='buttonNavbar'>Settings</button>
                                </Link>
                            </div> :
                            page === 'signup' ?
                                <div>
                                    <Link to='login'>
                                        <button className='buttonNavbar'>Login</button>
                                    </Link>
                                </div> :
                                page === 'login' ?
                                    <div>
                                        <Link to='signup'>
                                            <button className='buttonNavbar'>Sign Up</button>
                                        </Link>
                                    </div> :
                                    <>
                                        <div>
                                            <Link to='login'>
                                                <button className='buttonNavbar'>Login</button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to='signup'>
                                                <button className='buttonNavbar'>Sign Up</button>
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