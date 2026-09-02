import React from 'react';
import './Header.css';
import Navbar from './pages/Navbar';
import ThemeToggle from './pages/ThemeToggle';

function Header({ showNavbar }) {
  return (
    <div id="header" className={showNavbar ? 'header-transition visible' : 'header-transition'}>
      <div id="header-container">
        <a href='https://github.com/PrinceMark13' id='logo'><h1 id='sitename'>@NeroZoldyck</h1></a>
        <div className="header-actions">
          {showNavbar && <Navbar />}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
