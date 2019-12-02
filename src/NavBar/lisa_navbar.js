import React from 'react';
import { useParams } from "react-router";
import './lisa_navbar.css';
import logo from '../TAP.png';
import navSettings from '../icons/settings.svg';
import landingPage from '../LandingPage';

function NavBar() {
    
    let { page } = useParams();
    console.log('The current page is', page)
    return (
        <nav id='navHeader'>
            <a className='navLogo' href='logo'><img src={logo} alt='TAP' /></a>
            <div className='links'>
                {
                    page === undefined || page === 'landing' ?
                        <div>
                            <div><a href='/login'><p className='navLogIn'>Login</p></a></div>
                            <div><a href='/signup'><p className='navSignUp'>Sign Up</p></a></div>
                        </div> :
                        page === 'login' ?
                            <div>
                                <div><a href='/landing'><p className='navLanding'>Landing</p></a></div>
                                <div><a href='/signup'><p className='navSignUp'>Sign Up</p></a></div>
                            </div> :
                            page === 'signup' ?
                                <div>
                                    <div><a href='/landing'><p className='navLanding'>Landing</p></a></div>
                                    <div><a href='/login'><p className='navLogIn'>Login</p></a></div>
                                </div> :
                                <div>
                                    <div><a href='/settings'><p className='navSettings'><img src ={navSettings}></img></p></a></div>
                                </div>
                }
            </div>
        </nav>
    );
}
export default NavBar;