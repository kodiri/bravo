import React from 'react';
import { useParams } from "react-router";
import './lisa_navbar.css';
import logo from '../TAP.png';
import navSettings from '../icons/settings.svg';

function NavBar() {
    
    let { page } = useParams();
    return (
        <nav id='navHeader'>
            <a className='navLogo' href='logo'><img src={logo} alt='TAP' /></a>
            <div className='links'>
                {
                    page === 'landing' ?
                        <div>
                            <div><a href='/login'><p className='navLogIn'>Login</p></a></div>
                            <div><a href='/signup'><p className='navSignUp'>Sign Up</p></a></div>
                        </div> :
                        page === 'login' ?
                            <div>
                                <div><a href='/landing'><p className='navLanding'>Login</p></a></div>
                                <div><a href='/signup'><p className='navSignUp'>Sign Up</p></a></div>
                            </div> :
                            page === 'signup' ?
                                <div>
                                    <div><a href='/landing'><p className='navLanding'>Sign Up</p></a></div>
                                    <div><a href='/login'><p className='navLogIn'>Login</p></a></div>
                                </div> :
                                <div>
                                    <div><a href='/settings'><p className='navSettings'><img src ={navSettings} alt='settings'></img></p></a></div>
                                </div>
                }
            </div>
        </nav>
    );
}
export default NavBar;