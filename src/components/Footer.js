import React from 'react';
import './HeaderFooter.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <i className="fas fa-phone"></i>
            +(65) 8168 1236
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            Leehongteng1999@gmail.com
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Location</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Singapore
          </p>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <a
            href="https://www.linkedin.com/in/hongtenglee/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Hong Teng Lee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;