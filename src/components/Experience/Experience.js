import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./experience.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import twimbitPhoto from './twimbit_logo.jpeg';
import jumboPhoto from './jumbo.png';
import ncodePhoto from './ncode.png';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ExperienceLanding = () => (
    <div className="experience-landing">
      <div className="experience-summary">
        <h3>Professional Experience</h3>
        <div className="timeline-container">
          <div className="timeline-vertical">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-dot current"></div>
                <div className="company-logo">
                  <img src={twimbitPhoto} alt="Twimbit logo" />
                </div>
                <h5>Research Intern</h5>
                <p>Twimbit Pte Ltd</p>
                <span className="timeline-date">2023</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="company-logo">
                  <img src={jumboPhoto} alt="Jumbo Group logo" />
                </div>
                <h5>IT Intern</h5>
                <p>Jumbo Group of Restaurants</p>
                <span className="timeline-date">2018</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="company-logo">
                  <img src={ncodePhoto} alt="Ncode logo" />
                </div>
                <h5>Intern</h5>
                <p>Ncode Consultant</p>
                <span className="timeline-date">2017</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-prompt">
          <p>Tap a company to view detailed experience</p>
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      label: "Twimbit Pte Ltd",
      logo: twimbitPhoto,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <div className="company-logo-large">
              <img src={twimbitPhoto} alt="Twimbit logo" />
            </div>
            <div className="header-text">
              <h4>Research Intern</h4>
              <span className="date-range">May 2023 - July 2023</span>
            </div>
          </div>
          <ul className="experience-list">
            <li>
              Researched and contributed to articles on ChatGPT in Financial services, Buy now Pay Later (BNPL) and Customer Experience in Singapore Banks
              <div className="article-link">
                <a 
                  href="https://twimbit.com/insights/chatgpt-in-financial-services-11-best-practice-cases-from-banks-and-fintechs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  📄 View Published Article
                </a>
              </div>
            </li>
            <li>Support in converting slides & presentations into blog content and enhancing content accessibility</li>
            <li>Tested and provided feedback on new ChatGPT chatbot implementation for Twimbit website</li>
          </ul>
        </div>
      ),
    },
    // ... rest of the tabs remain the same
  ];

  return (
    <div className="experience-container">
      <div className="experience-window">
        <nav className={`experience-nav ${isNavOpen ? 'nav-open' : ''}`}>
          <div className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="selected-tab">
              {selectedTab ? (
                <>
                  <img src={selectedTab.logo} alt="" className="tab-logo" />
                  {selectedTab.label}
                </>
              ) : 'Select Company'}
            </span>
            <span className={`arrow ${isNavOpen ? 'up' : 'down'}`}>▼</span>
          </div>
          <ul className="nav-menu">
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => {
                  setSelectedTab(item);
                  setIsNavOpen(false);
                }}
              >
                <img src={item.logo} alt="" className="tab-logo" />
                {item.label}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="experience-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.content : <ExperienceLanding />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Experience;