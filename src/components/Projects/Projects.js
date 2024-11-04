import React, { useState } from 'react';
import AccordionWrapper from './ProjectWrapper';
import AccordionItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('school');

  const schoolProjects = [
    {
      "title": "Final Year Project - URA GenAI Building Generator",
      "description": "Research and development project focused on generating building blocks using GenAI solutions for URA. The project involves performing classification tasks on building polygons and conducting User Acceptance Testing (UAT) for end users.",
      "github": "https://github.com/yourusername/fyp-ura-genai",
      "type": "github"
    },
    {
      "title": "Ellipsis Tech Series Hackathon - Job Shadowing Platform (Top 10)",
      "description": "Developed an innovative job shadowing platform that connects students with professionals for short-term shadowing experiences, helping students make more informed career decisions. Built using Bootstrap & Vue.js. Our team achieved Top 10 placement in the hackathon.",
      "link": "https://smu-my.sharepoint.com/personal/htlee_2021_scis_smu_edu_sg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fhtlee%5F2021%5Fscis%5Fsmu%5Fedu%5Fsg%2FDocuments%2FKage%5FEllipsisTechSeries2023%2Epdf&parent=%2Fpersonal%2Fhtlee%5F2021%5Fscis%5Fsmu%5Fedu%5Fsg%2FDocuments&ga=1",
      "type": "pdf"
    },
    {
      "title": "Kangiiten Spreadsheet Analysis",
      "description": "Conducted comprehensive data analysis for Kangiiten's Shopify data, including data cleaning, exploration, and visualization. Implemented Time-Series analysis to forecast demand and optimize resource allocation. Tools used: Excel, Power BI, and Python for data processing.",
      "link": "https://smu-my.sharepoint.com/personal/htlee_2021_scis_smu_edu_sg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fhtlee%5F2021%5Fscis%5Fsmu%5Fedu%5Fsg%2FDocuments%2FKangiiten%20Presentation%2Epdf&parent=%2Fpersonal%2Fhtlee%5F2021%5Fscis%5Fsmu%5Fedu%5Fsg%2FDocuments&ga=1",
      "type": "pdf"
    },
    {
      "title": "Object Oriented Programming",
      "description": "OOP Project focused on implementing key object-oriented principles and design patterns.",
      "github": "https://github.com/BryenYeoh/IS-442-Portfolio",
      "type": "github"
    },
    {
      "title": "Software Project Management",
      "description": "Project management implementation using Agile methodologies and industry best practices.",
      "github": "https://github.com/YingXuan99/SBRP",
      "type": "github"
    },
    {
      "title": "Enterprise Solution Development",
      "description": "Development of enterprise-level solutions focusing on scalability and business integration.",
      "github": "https://github.com/YingXuan99/CEP",
      "type": "github"
    },
    {
      "title": "Web Application Development",
      "description": "Development of web applications using modern frameworks and libraries.",
      "github": "https://github.com/YingXuan99/Tutizen",
      "type": "github"
    },
    
  ];

  const personalProjects = [
    {
      "title": "Personal Portfolio Website",
      "description": "Portfolio Website Description",
      "github": "https://github.com/htlee1999/HTportfolio",
      "type": "github"
    },
    {
      "title": "Cristiano Ronaldo Stats Visualisation",
      "description": "Ronaldo Stats Description",
      "github": "https://github.com/htlee1999/CR7Stats",
      "type": "github"
    },
    {
      "title": "Fun Run Webpage",
      "description": "FunRun2025 Description",
      "github": "https://github.com/htlee1999/FunRun2025",
      "type": "github"
    }
  ];

  const formatDescription = (description, link, type) => {
    const getLinkButton = (link, type) => {
      switch(type) {
        case 'github':
          return `
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="github-link">
              <span class="github-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </span>
              View on GitHub
            </a>
          `;
        case 'pdf':
          return `
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="pdf-link">
              <span class="pdf-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
              </span>
              View Presentation
            </a>
          `;
        default:
          return '';
      }
    };

    return `
      <div class="project-content">
        <p>${description}</p>
        ${getLinkButton(link, type)}
      </div>
    `;
  };

  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <h1>Projects</h1>
        </div>
        
        <div className="category-tabs">
          <button 
            className={`tab-button ${activeCategory === 'school' ? 'active' : ''}`}
            onClick={() => setActiveCategory('school')}
          >
            School Projects
          </button>
          <button 
            className={`tab-button ${activeCategory === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('personal')}
          >
            Personal Projects
          </button>
        </div>

        <AccordionWrapper>
          {(activeCategory === 'school' ? schoolProjects : personalProjects).map((item, index) => (
            <AccordionItem 
              key={index} 
              index={index} 
              title={item.title} 
              description={formatDescription(
                item.description, 
                item.github || item.link, 
                item.type
              )} 
            />
          ))}
        </AccordionWrapper>
      </div>
    </div>
  );
}

export default Projects;