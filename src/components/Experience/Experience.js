import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./experience.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import twimbitPhoto from './twimbit_logo.jpeg';
import jumboPhoto from './jumbo.png';
import ncodePhoto from './ncode.png';

const Experience = () => {
  // Create the tabs array first so we can reference it for initial state
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
            <div>
              <h4>Research Intern</h4>
              <div className="date-range">May 2023 - July 2023</div>
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
                  📄 View Published Article: ChatGPT in Financial Services
                </a>
              </div>
            </li>
            <li>Support in converting slides & presentations into blog content and enhancing content accessibility</li>
            <li>Tested and provided feedback on new ChatGPT chatbot implementation for Twimbit website</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Jumbo Group of Restaurants",
      logo: jumboPhoto,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <div className="company-logo-large">
              <img src={jumboPhoto} alt="Jumbo Group logo" />
            </div>
            <div>
              <h4>IT Intern</h4>
              <div className="date-range">Mar 2018 - Sep 2018</div>
            </div>
          </div>
          <ul className="experience-list">
            <li>Captured, validated, and conducted UI/UX testing for new mobile application, ensuring optimal user experience</li>
            <li>Successfully converted and digitized over 100+ physical recipes into the internal ERP system (Epicor)</li>
            <li>Managed and updated menu prices and promotions from corporate to retail stores POS systems nationwide</li>
            <li>Assisted in company-wide implementation of latest Microsoft Office version</li>
            <li>Participated in physical quality control of new recipes, collecting and documenting feedback and experiences</li>
            <li>Utilized Microsoft Excel for data sorting and analysis using advanced formulas</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Ncode Consultant",
      logo: ncodePhoto,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <div className="company-logo-large">
              <img src={ncodePhoto} alt="Ncode logo" />
            </div>
            <div>
              <h4>Intern</h4>
              <div className="date-range">Jan 2017 - Dec 2017</div>
            </div>
          </div>
          <ul className="experience-list">
            <li>Managed website content through regular updates and maintenance</li>
            <li>Utilized Photoshop extensively for professional photo editing and optimization</li>
            <li>Conducted product photography sessions for website content</li>
            <li>Worked with Information Design platforms to enhance website presentation</li>
          </ul>
        </div>
      ),
    },
  ];

  // Set initial state to the first tab (Twimbit)
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="experience-container">
      <div className="experience-window">
        <nav className={`experience-nav ${isNavOpen ? 'nav-open' : ''}`}>
          <div className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="selected-tab">
              <img src={selectedTab.logo} alt="" className="tab-logo" />
              {selectedTab.label}
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
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.content}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Experience;