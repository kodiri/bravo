import React from 'react'
import './lisa_navbar.css'
import logo from '../TAP.png'
import settings from '../icons/settings.svg'
function Navbar() {
    return (
        <nav id='header'>
            <div><a href='logo' className='logo'><img src={logo} width='150px' alt='TAP'/></a></div>
            <div className="settings">
                <div className='settings' ><a href="settings"><img src={settings} width='55px' alt='Settings'/></a></div>
            </div>
        </nav>
    )
}
export default Navbar