import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
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

  // Add styles to ensure the menu is visible on mobile
  const styles = {
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: 0,
      left: 0
    },
    bmMenu: {
      background: '#2c3e50',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '20px',
      top: '20px',
      zIndex: 1100
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: 0,
      left: 0
    }
  };

  return (
    <div className="sidebar-wrapper mobile-only">
      <Menu 
        isOpen={isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        className="sidebar-menu"
        styles={styles}
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
      </Menu>
    </div>
  );
};

export default Sidebar;