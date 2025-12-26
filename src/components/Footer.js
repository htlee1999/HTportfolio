import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './HeaderFooter.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <FaPhone />
            +(65) 8168 1236
          </p>
          <p>
            <FaEnvelope />
            Leehongteng1999@gmail.com
          </p>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <p>
            <FaMapMarkerAlt />
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
            <FaLinkedin />
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/htlee1999"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            Personal GitHub
          </a>
          <a
            href="https://github.com/htlee-2021"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            School GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Hong Teng Lee.</p>
      </div>
    </footer>
  );
};

export default Footer;
