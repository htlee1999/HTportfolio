import React from 'react';
import './Profile.css';
import profilePhoto from './profile.jpg';

const Profile = () => {
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
      </div>
      
      <div className="profile-content">
        <div className="profile-summary">
          <h2>About Me</h2>
          <p>
            A driven year 3 Information System student majoring in Business Analytics who is adept in 
            communication and IT. I have a great interest in exploring roles which bridge business and IT.
          </p>
        </div>

        <div className="profile-objectives">
          <div className="objective-item">
            <h3>What I'm Looking For</h3>
            <p>
              Seeking internship opportunities to enhance IT skills and gain diverse sector experience.
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
    </div>
  );
};

export default Profile;