import React from 'react';
import './AboutUs.css';
import Cat from './kitten.jpg';

export default function AboutUs() {
    return (
        <>
            <div>
                <h1>Meet the team.</h1>
                <p>State Team is a team of developers who graduated from Kodiri web
                    development bootcamp in London and created this WebApp as a graduation project.
                    The project is built by React.js and uses MongoDb in the backend for data.
                    The application repository is hosted on GitHub.
                </p>
                <div className="aboutUs-img">
                    <div>
                    <p>Szymon</p>
                        <img src={Cat} alt="mate1" />
                        
                    </div>
                    <div>
                    <p>Jonathan</p>
                        <img src={Cat} alt="mate2" />
                        
                    </div>
                    <div>
                    <p>Lisa</p>
                        <img src={Cat} alt="mate3" />
                        
                    </div>
                    <div>
                    <p>Max</p>
                        <img src={Cat} alt="mate4" />
                        
                    </div>
                    <div>
                    <p>Sanjay</p>
                        <img src={Cat} alt="mate5" />
                        
                    </div>
                </div>
            </div>
        </>
    );
}