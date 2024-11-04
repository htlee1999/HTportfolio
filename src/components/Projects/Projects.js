import React, { useState, useContext } from 'react';
import AccordionWrapper from './ProjectWrapper';
import AccordionItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('school');

  const schoolProjects = [
    {
      "title": "Final Year Project",
      "description": "<p><strong>Insert Github link</strong></p>"
    },
    {
      "title": "Object Oriented Programming",
      "description": "<p><strong>Insert Github link</strong></p>"
    },
    {
      "title": "Software Project Management",
      "description": "<p><strong>Insert Github link</strong></p>"
    },
    {
      "title": "Enterprise Solution Development",
      "description": "<p><strong>Insert Github link</strong></p>"
    }
  ];

  const personalProjects = [
    {
      "title": "Personal Portfolio Website",
      "description": "<p><strong>Insert Github link</strong></p>"
    },
    {
      "title": "Weather Dashboard App",
      "description": "<p><strong>Insert Github link</strong></p>"
    },
    {
      "title": "Task Management System",
      "description": "<p><strong>Insert Github link</strong></p>"
    }
  ];

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
              description={item.description} 
            />
          ))}
        </AccordionWrapper>
      </div>
    </div>
  );
}

export default Projects;