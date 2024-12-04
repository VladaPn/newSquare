import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importujemo Link za navigaciju
import './Navbar.css';
import moon from '../../assets/moon1.png';
import sun from '../../assets/sun1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Učitavanje stanja teme iz localStorage-a pri pokretanju aplikacije
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle('dark-mode', newTheme);
    
    // Sačuvaj novo stanje teme u localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo-a" to="/">WebVladimirDev</Link>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="main-menu-list">
            <li><Link to="/#home"><span className="hashtag">#</span>home</Link></li>
            <li><Link to="/#projects"><span className="hashtag">#</span>projects</Link></li>
            <li><Link to="/#contact"><span className="hashtag">#</span>contact</Link></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          <img className='toggler' src={darkMode ? sun : moon} alt="Theme toggle icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;


