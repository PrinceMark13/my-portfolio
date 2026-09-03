import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Footer.css";

const Footer = ({ minimal = false, style }) => {
  return (
    <footer className="footer" style={style}>
      {!minimal && (
        <div className="container">
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links horizontal-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/PrinceMark13" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://www.facebook.com/PrinceMarkGubat.12.13.2003" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/_nero.exe" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/mark-anthony-gubat-062405433/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      )}
      <div className="footer-bottom">
        {minimal && (
          <div className="footer-bottom-toggle">
            <ThemeToggle />
          </div>
        )}
        <p id="b-footer">&copy; 2024 <a href="https://github.com/PrinceMark13" ><em>@NeroZoldyck</em></a> . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
