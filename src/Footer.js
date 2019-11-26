import React from 'react';

export default function Footer({ links }) {
    return(
        <>
            <footer className='footer'>
                <div>{links.map(link => {
                        return <a href='/about-us'>about-us</a>
                    })}
                </div>
            </footer>
        </>
    );
}