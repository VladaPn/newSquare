import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
      <div className="footer-content">
        
        <a className="footer-logo" href=""><img src={logo} alt="" /></a>
        <div className="footer-heading">
        <p className="footer-tagline">
          Crafting modern, responsive, and user-friendly web experiences.
        </p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Web Vladimir Dev. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
