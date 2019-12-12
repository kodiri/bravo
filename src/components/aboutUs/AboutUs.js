import React from 'react';
import './AboutUs.css';
import Cat from './kitten.jpg';

export default function AboutUs() {
    return (
        <>
            <div>
                <h1>Meet the team.</h1>
                <p className='paragraph'>State Team is a team of developers who graduated from Kodiri web
                    development bootcamp in London and created this WebApp as a graduation project.
                    The project is built by React.js and uses MongoDb in the backend for data.
                    The application repository is hosted on GitHub.
                </p>
                <div className="aboutUs-img">
                    <div>
                    <p className='paragraph'>Szymon</p>
                        <img className='pic' src={Cat} alt="mate1" /> 
                    </div>
                    <div>
                    <p className='paragraph'>Jonathan</p>
                        <img className='pic' src={Cat} alt="mate2" />  
                    </div>
                    <div>
                    <p className='paragraph'>Lisa</p>
                        <img className='pic' src={Cat} alt="mate3" />
                    </div>
                    <div>
                    <p className='paragraph'>Max</p>
                        <img className='pic' src={Cat} alt="mate4" />
                    </div>
                    <div>
                    <p className='paragraph'>Sanjay</p>
                        <img className='pic' src={Cat} alt="mate5" />
                    </div>
                </div>
            </div>
        </>
    );
}