import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import resumePDF from './Profile/Resume 2025.pdf';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/interests', label: 'Interests' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <Link to="/" className="topnav-brand">Hong Teng Lee</Link>

        <nav className="topnav-links desktop-only">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={location.pathname === l.to ? 'is-active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          className="topnav-resume desktop-only"
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
