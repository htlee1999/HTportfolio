import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import resumePDF from './Profile/Resume 2025.pdf';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/interests', label: 'Interests & Activities' }
  ];

  return (
    <div className="sidebar-wrapper mobile-only">
      <Menu
        isOpen={isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        className="sidebar-menu"
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <a
          className="menu-item menu-resume"
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </Menu>
    </div>
  );
};

export default Sidebar;
