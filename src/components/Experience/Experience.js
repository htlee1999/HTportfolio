import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./experience.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const ExperienceLanding = () => (
    <div className="experience-landing">
      <div className="experience-summary">
        <h3>Professional Experience</h3>
        <div className="timeline-container">
          <div className="timeline-horizontal">
            <div className="timeline-line"></div>
            
            <div className="timeline-item top">
              <div className="timeline-content">
                <div className="timeline-dot current"></div>
                <h5>Research Intern</h5>
                <p>Twimbit Pte Ltd</p>
                <span className="timeline-date">2023</span>
              </div>
            </div>

            <div className="timeline-item bottom">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <h5>IT Intern</h5>
                <p>Jumbo Group of Restaurants</p>
                <span className="timeline-date">2018</span>
              </div>
            </div>

            <div className="timeline-item top">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <h5>Intern</h5>
                <p>Ncode Consultant</p>
                <span className="timeline-date">2017</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-prompt">
          <p>Select a company above to view detailed experience</p>
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      label: "Twimbit Pte Ltd",
      content: (
        <div className="experience-content">
          <h4>Research Intern (May 2023 - July 2023)</h4>
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
      content: (
        <div className="experience-content">
          <h4>IT Intern (Mar 2018 - Sep 2018)</h4>
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
      content: (
        <div className="experience-content">
          <h4>Intern (Jan 2017 - Dec 2017)</h4>
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

  return (
    <div className="experience-container">
      <div className="experience-window">
        <nav className="experience-nav">
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
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