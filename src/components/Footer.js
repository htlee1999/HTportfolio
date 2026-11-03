import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './HeaderFooter.css';
import { profile, contact } from './Profile/profileData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div className="site-footer-name">{profile.name}</div>
          <p className="site-footer-tagline">
            Information Systems Student passionate about using data to drive business value.
          </p>
          <p className="site-footer-copy">&copy; {year} {profile.name}. All rights reserved.</p>
        </div>

        <div className="site-footer-cols">
          <div className="site-footer-col">
            <h4>Contact</h4>
            <a href={contact.phoneHref}><FaPhone /> {contact.phone}</a>
            <a href={`mailto:${contact.email}`}><FaEnvelope /> Email Me</a>
          </div>

          <div className="site-footer-col">
            <h4>Location</h4>
            <span className="site-footer-static"><FaMapMarkerAlt /> {profile.location}</span>
          </div>

          <div className="site-footer-col">
            <h4>Connect</h4>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
