import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
          <h1>Hong Teng Lee</h1>
          <p className="subtitle">Information Systems Student | Business Analytics</p>
        </div>
        <div className="nav-links desktop-only">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/interests" className={location.pathname === '/interests' ? 'active' : ''}>Interests</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;