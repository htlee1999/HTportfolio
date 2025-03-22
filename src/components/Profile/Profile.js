import React, {useState} from 'react';
import './Profile.css';
import profilePhoto from './profile.jpg';
import resumePDF from './Resume 2025.pdf'

const Profile = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const openResumeModal = () => setShowResumeModal(true);
  const closeResumeModal = () => setShowResumeModal(false);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-photo-container">
          <img 
            src={profilePhoto}
            alt="Hong Teng Lee"
            className="profile-photo"
          />
        </div>
        <h1>Profile</h1>
        <div className="profile-subtitle">Information Systems Student | Business Analytics</div>
        <button className="resume-button" onClick={openResumeModal}>
          View Resume
        </button>
      </div>
      
      <div className="profile-content">
        <div className="profile-summary">
          <h2>About Me</h2>
          <p>
            A driven final year Information System student majoring in Business Analytics who is adept in 
            communication and IT. I have a great interest in exploring roles which bridge business and IT.
          </p>
        </div>

        <div className="profile-objectives">
          <div className="objective-item">
            <h3>What I'm Looking For</h3>
            <p>
              Seeking internship/job opportunities to enhance IT skills and gain diverse sector experience.
            </p>
          </div>

          <div className="objective-item">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Business Analytics</span>
              <span className="skill-tag">Next.js</span>
            </div>
          </div>

          <div className="objective-item">
            <h3>Interests</h3>
            <p>
              Passionate about bridging the gap between business and technology, with a focus on 
              innovative solutions and continuous learning.
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