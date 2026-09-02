import React from 'react';
import Footer from './Footer';
import './About.css';
import { FaGamepad, FaCameraRetro, FaFilm, FaCode, FaPaintBrush, FaUtensils, FaTshirt, FaDog, FaBed } from 'react-icons/fa'; // Font Awesome icons
import { SiNetflix, SiCrunchyroll, SiYoutubemusic, SiSpotify, SiAdobephotoshop } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

function About() {
    return (
        <div id='about-page'>
            <div className='margin-page'>
            <div id='aboutme'>
                <div id='me-container'>
                    <div className="section-title">
                        <h2>About Me</h2>
                        <div><span>Me, Myself & I</span></div>
                    </div>
                    <div id='me-section'>
                        <div id='profile'>
                            <img id='image' src='me16.jfif' alt="Profile" />
                        </div>
                        <div id='aboutme-content'>
                            <h2 id='content-title'>IT Student | Aspiring Web Developer</h2>
                            <p id='greet'>
                                Hello! I’m Mark Anthony, an aspiring web developer, software engineer, and game programmer. <br></br>Coding is my language, my art, and the way I express who I am.
                                </p>
                        <div id='info-content'>
                            <div className='info'>
                                <ul>
                                    <li><strong>Birthday:</strong> <span>13 December 2003</span></li>
                                    <li><strong>Age:</strong> <span>22</span></li>
                                    <li><strong>City:</strong> <span>Malabon, Philippines</span></li>
                                </ul>
                            </div>
                            <div className='info'>
                                <ul>
                                    <li><strong>Degree:</strong> <span>Information Technology</span></li>
                                    <li><strong>Email:</strong> <span>markgubat.13@gmail.com</span></li>
                                    <li><strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p id='description'>
                        When I was a child, I really wanted to become a doctor, so that was my first choice. But as I grew up, I started to realize that becoming a doctor might be impossible for me, especially after learning how expensive medical school is. At that point, I started thinking about other options, and one of the courses that came to mind was MedTech. Funny, right? It still has something to do with medicine. Maybe it’s because of my family background, as I’ve heard stories about relatives who became doctors and worked abroad. 
                        But just like medicine, MedTech also required a lot of money, so I thought again and looked at my interests, like using the computer a lot. Since I didn’t have a smartphone back then, the computer was my main source of entertainment, and that’s when I got the idea of taking Computer Science. I shared this with my older brother, and we discussed it a lot. He suggested I take IT (Information Technology) instead, saying it would give me broader career options and has a lot in common with Computer Science. So when it was time to enroll in college, I chose IT, even though I wasn’t completely sure if it would lead to success.
                        </p>
                        </div>
                    </div>
                    <div id='interest-container'>
                        <div className="section-title">
                            <h2>Features</h2>
                            <div><span>I'm interested in</span></div>
                        </div>
                        <div id='interest-section'>
                            <div className="interest-box icon-gaming">
                                <i className="icon"><FaGamepad /></i>
                                <span>Gaming</span>
                            </div>
                            <div className="interest-box icon-disney">
                                <i className="icon"><TbBrandDisney /></i>
                                <span>Watching Movies</span>
                            </div>
                            <div className="interest-box icon-anime">
                                <i className="icon"><SiCrunchyroll /></i>
                                <span>Watching Anime</span>
                            </div>
                            <div className="interest-box icon-kdrama">
                                <i className="icon"><SiNetflix /></i>
                                <span>Watching <br></br> K-Drama</span>
                            </div>
                            <div className="interest-box icon-music">
                                <i className="icon"><SiYoutubemusic /></i>
                                <span>Listening Music</span>
                            </div>
                            <div className="interest-box icon-podcast">
                                <i className="icon"><SiSpotify  /></i>
                                <span>Listening Podcast</span>
                            </div>
                            <div className="interest-box icon-camera">
                                <i className="icon"><FaCameraRetro /></i>
                                <span>Photography</span>
                            </div>
                            <div className="interest-box icon-film">
                                <i className="icon"><FaFilm /></i>
                                <span>Filming</span>
                            </div>
                            <div className="interest-box icon-ps">
                                <i className="icon"><SiAdobephotoshop /></i>
                                <span>Editing Photo</span>
                            </div>
                            <div className="interest-box icon-coding">
                                <i className="icon"><FaCode /></i>
                                <span>Coding</span>
                            </div>
                            <div className="interest-box icon-animation">
                                <i className="icon"><FaPaintBrush /></i>
                                <span>Animation</span>
                            </div>
                            <div className="interest-box icon-eating">
                                <i className="icon"><FaUtensils /></i>
                                <span>Eating</span>
                            </div>
                            <div className="interest-box icon-fashion">
                                <i className="icon"><FaTshirt /></i>
                                <span>Fashion</span>
                            </div>
                            <div className="interest-box icon-pets">
                                <i className="icon"><FaDog /></i>
                                <span>Pets</span>
                            </div>
                            <div className="interest-box icon-sleeping">
                                <i className="icon"><FaBed /></i>
                                <span>Sleeping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <Footer />
        </div>
    );
}

export default About;