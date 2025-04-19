import React, { useState, useEffect } from 'react';
import './Profile.css';
import profilePhoto from './profile.jpg';
import resumePDF from './Resume 2025.pdf';

const Profile = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Fade-in animation on load
    setIsVisible(true);
  }, []);

  const openResumeModal = () => setShowResumeModal(true);
  const closeResumeModal = () => setShowResumeModal(false);

  return (
    <div className={`profile-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="profile-header">
        <div className="profile-photo-container">
          <img 
            src={profilePhoto}
            alt="Hong Teng Lee"
            className="profile-photo"
          />
        </div>
        <div className="header-content">
          <h1>Profile</h1>
          <div className="profile-subtitle">Information Systems Student | Business Analytics</div>
          <button className="resume-button" onClick={openResumeModal}>
            View Resume
          </button>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-summary">
          <h2>About Me</h2>
          <p>
            I'm a final-year Information Systems student majoring in Business Analytics with a strong interest in the intersection of technology and business. With a foundation in programming and data analysis, I thrive in roles that require both analytical thinking and practical implementation.
          </p>
        </div>

        <div className="profile-objectives">
          <div className="objective-item">
            <h3>What I'm Looking For</h3>
            <p>
              I'm actively seeking entry-level opportunities where I can apply my technical and analytical skills, while learning from real-world business challenges. I'm especially interested in roles that allow me to contribute to digital transformation, product development, or data-driven decision making.
            </p>
          </div>

          <div className="objective-item">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              {["Python", "Java", "React", "SQL", "HTML", "CSS", "Javascript", "Data Analysis", "Business Analytics", "Next.js", "Docker", "Typescript", "Vue.js"].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="objective-item">
            <h3>Interests</h3>
            <p>
              Curious, adaptable, and a strong communicator, I enjoy exploring how technology can drive smarter decision-making across industries. My goal is to contribute to innovative, real-world solutions that make meaningful impact—whether through optimizing processes, uncovering insights from data, or bridging gaps between stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={closeResumeModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h2>My Resume</h2>
              <button className="close-button" onClick={closeResumeModal}>×</button>
            </div>
            <div className="resume-modal-body">
              <iframe 
                src={resumePDF} 
                title="Resume" 
                width="100%" 
                height="100%" 
                frameBorder="0"
              />
            </div>
            <div className="resume-modal-footer">
              <a href={resumePDF} download className="download-button">
                Download Resume
              </a>
              <button className="close-modal-button" onClick={closeResumeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;