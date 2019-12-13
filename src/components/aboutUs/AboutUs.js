import React from 'react';
import './AboutUs.css';
import Cat from './kitten.jpg';
import Lisa from './lisa.jpg'
import Johnny from './johnny.JPG'
import Max from './max.jpg'

export default function AboutUs() {
    return (
        <>
            <div className='aboutUs'>
                <h1>We are Team State.</h1>
                <p className='aboutUsParagraph'>We are a team of full-stack developers called 'State' who are passionate about developing apps that are relevant to the modern world of today. We met and graduated from the same web
                    development bootcamp in London called Kodiri. Using React.js to build our project and MongoDb for our backend, we came together to create a WebApp that ultimately helps people connect faster and easier than ever.
                </p>
                <div className="aboutUs-img">
                    <div>
                    <p className='teamMember'>Szymon</p>
                    <a href="https://www.linkedin.com/in/l-nguyen/"><img className='pic' src={Cat} alt="mate1" /></a>
                    </div>
                    <div>
                    <p className='teamMember'>Jonathan</p>
                    <a href="https://www.linkedin.com/in/l-nguyen/"><img className='pic' src={Johnny} alt="mate2" /></a> 
                    </div>
                    <div>
                    <p className='teamMember'>Lisa</p>
                    <a href="https://www.linkedin.com/in/l-nguyen/"><img className='pic' src={Lisa} alt="mate3" /></a>
                        <p className='memberInfo'>Lisa is the original founder of the idea behind TAP. She worked for multiple tech start-ups and realized her true passion lies in tech entrepreneurship.</p>
                    </div>
                    <div>
                    <p className='teamMember'>Max</p>
                    <a href="https://www.linkedin.com/in/l-nguyen/"><img className='pic' src={Max} alt="mate4" /></a>
                        <p className='memberInfo'>Max, is an experienced technologist in desktop, server and messaging systems. He is currently focused on fullstack javascript development and the cloud.</p>
                    </div>
                    <div>
                    <p className='teamMember'>Sanjay</p>
                    <a href="https://www.linkedin.com/in/l-nguyen/"><img className='pic' src={Cat} alt="mate5" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}