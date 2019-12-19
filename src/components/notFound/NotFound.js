import React from 'react';
import './NotFound.css';
import NotFoundPic from './404.png';

const NotFound = () => {
    return (
        <div className='notFoundMainContainer'>
            <h1>Sorry the page you are looking for is not available</h1>
            <div className='pictureContainer'>
                <img id='notFoundPicture' src={NotFoundPic} alt='page not found'/>
            </div>
        </div>
    );
};

export default NotFound;