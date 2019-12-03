import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Footer.css';

function Footer() {
    let {page} = useParams();
    console.log(page);
    //DUDA ?????? por que page me muestra undefined en la consola ????? - PREGUNTAR A GRAY
    return (
        <footer className='footer'>
            {
                page !== '/' || page !== 'about-us' || page !== 'terms' || page !== 'about-app' ?
                    <>
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
                    </> :
                    <>
                        <Link to='/not-found'>
                            <p>NOT FOUND PAGE</p>
                        </Link>
                    </>
            }
        </footer>
    );
}
export default Footer

 