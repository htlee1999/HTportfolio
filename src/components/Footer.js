import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './HeaderFooter.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div className="site-footer-name">Hong Teng Lee</div>
          <p className="site-footer-tagline">
            Information Systems Student passionate about using data to drive business value.
          </p>
          <p className="site-footer-copy">&copy; {year} Hong Teng Lee. All rights reserved.</p>
        </div>

        <div className="site-footer-cols">
          <div className="site-footer-col">
            <h4>Contact</h4>
            <a href="tel:+6581681236"><FaPhone /> +(65) 8168 1236</a>
            <a href="mailto:Leehongteng1999@gmail.com"><FaEnvelope /> Email Me</a>
          </div>

          <div className="site-footer-col">
            <h4>Location</h4>
            <span className="site-footer-static"><FaMapMarkerAlt /> Singapore</span>
          </div>

          <div className="site-footer-col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/in/hongtenglee/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <a href="https://github.com/htlee1999" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/lee2eat/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
