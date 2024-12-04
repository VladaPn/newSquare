import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
      <div className="footer-content">
        
        <a className="footer-logo" href="#home-top"><img src={logo} alt="" /></a>
        <div className="footer-heading">
        <p className="footer-tagline">
          Crafting modern, responsive, and user-friendly web experiences.
        </p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/VladaPn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vladimir-jovanovi%C4%87-234821285/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/web.vladimir.dev/" target="_blank" rel="noopener noreferrer">
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
