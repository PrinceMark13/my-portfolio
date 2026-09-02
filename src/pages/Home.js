import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function Home() {
    return (
        <div id='home'>
                <div id="main-container">
                    <div id="quote">
                        <h2 id='name'>Mark Anthony Gubat</h2>
                        <p id='subtitle'>Aspiring <span id='highlight'>Web Developer</span> from Philippines</p>
                        <Navbar />
                        <div className="social-links">
                            <a href="https://github.com/PrinceMark13" aria-label="GitHub"><i className="bi bi-github"></i></a>
                            <a href="https://www.facebook.com/PrinceMarkGubat.12.13.2003" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/_nero.exe" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/mark-anthony-gubat-062405433/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div id='profile-image'>
                        <img className='img img-first' src='me15.jfif' alt="Profile Image 1" />
                        <img className='img img-center' src='me1.jfif' alt="Profile Image 2" />
                        <img className='img img-last' src='me14.jfif' alt="Profile Image 3" />
                    </div>
                </div>
                <Footer minimal />
        </div>
    );
}

export default Home;