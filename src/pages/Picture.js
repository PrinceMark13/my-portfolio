import React from 'react';
import './Home.css';

function Picture() {
    return (
        <div id='profile-image'>
            <img className='img img-first' src='me15.jfif' alt="Profile Image 1"></img>
            <img className='img img-center' src='me1.jfif' alt="Profile Image 2"></img>
            <img className='img img-last' src='me14.jfif' alt="Profile Image 3"></img>
        </div>
    );
}

export default Picture;