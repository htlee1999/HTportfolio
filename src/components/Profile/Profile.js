import React from 'react';
import {
  FaUser,
  FaTerminal,
  FaRocket,
  FaBrain,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaEnvelope,
} from 'react-icons/fa';
import './Profile.css';
import profilePhoto from '../../assets/images/profile.jpg';

const skills = [
  'Python', 'Java', 'React', 'SQL', 'HTML', 'CSS', 'JavaScript',
  'Data Analysis', 'Business Analytics', 'Next.js', 'Docker', 'TypeScript', 'Vue.js',
];
const featuredSkills = new Set(['SQL', 'Data Analysis', 'Business Analytics']);

const Profile = () => (
  <div className="home">
    {/* TOP: photo + about + skills/looking */}
    <div className="home-top">
      {/* Photo */}
      <div className="home-photo">
        <img src={profilePhoto} alt="Hong Teng Lee" />
        <div className="home-photo-overlay">
          <h2 className="home-photo-name">Hong Teng Lee</h2>
          <p className="home-photo-sub">Information Systems | Analytics</p>
        </div>
      </div>

      <div className="home-right">
        {/* About Me */}
        <section className="home-card home-about">
          <h3 className="home-card-title"><FaUser /> About Me</h3>
          <p className="home-about-text">
            I'm a Information Systems Graduate majoring in Business Analytics with a
            strong interest in the intersection of technology and business. My journey is fueled
            by a passion for solving complex problems through data-driven insights and innovative
            software solutions.
          </p>
          <div className="home-about-grid">
            <div className="home-fact">
              <span className="home-fact-label">Education</span>
              <span className="home-fact-value">Information Systems, Business Analytics</span>
            </div>
            <div className="home-fact">
              <span className="home-fact-label">Current Focus</span>
              <span className="home-fact-value">Machine Learning &amp; Data Strategy</span>
            </div>
          </div>
        </section>

        {/* Skills + Looking For */}
        <div className="home-mid">
          <section className="home-card home-skills">
            <h3 className="home-card-title"><FaTerminal /> Key Skills</h3>
            <div className="home-skill-tags">
              {skills.map((s) => (
                <span
                  key={s}
                  className={`home-skill${featuredSkills.has(s) ? ' is-featured' : ''}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="home-card home-looking">
            <h3 className="home-card-title home-card-title--light">Looking For</h3>
            <p className="home-looking-text">
              Actively seeking entry-level roles in digital transformation, product, or
              data-driven decision making.
            </p>
            <div className="home-looking-foot">
              <FaRocket /> Ready to contribute
            </div>
          </section>
        </div>
      </div>
    </div>

    {/* BOTTOM: interests + work with me */}
    <div className="home-bottom">
      <section className="home-card home-interests">
        <div className="home-interests-text">
          <h3 className="home-card-title"><FaBrain /> Interests</h3>
          <p>
            Curious, adaptable, and a strong communicator, I enjoy exploring how technology can
            drive smarter decision-making. My goal is to contribute to innovative, real-world
            solutions.
          </p>
        </div>
        <div className="home-interests-icons">
          <span className="home-icon-bubble"><FaChartLine /></span>
          <span className="home-icon-bubble"><FaLightbulb /></span>
          <span className="home-icon-bubble"><FaUsers /></span>
        </div>
      </section>

      <section className="home-card home-work">
        <h3 className="home-work-title">Work with me</h3>
        <p className="home-work-status">Open to opportunities</p>
        <a className="home-work-btn" href="mailto:Leehongteng1999@gmail.com">
          <FaEnvelope /> Get in Touch
        </a>
      </section>
    </div>
  </div>
);

export default Profile;
