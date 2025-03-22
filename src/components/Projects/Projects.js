import React, { useState, useEffect } from 'react';
import AccordionWrapper from './ProjectWrapper';
import AccordionItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('school');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [animatedItems, setAnimatedItems] = useState([]);

  // Add animation when items come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.dataset.index]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeCategory, viewMode]);

  const schoolProjects = [
    {
      "title": "Final Year Project - URA GenAI Building Generator",
      "description": "Research and development project focused on generating building blocks using GenAI solutions for URA. The project involves performing classification tasks on building polygons and conducting User Acceptance Testing (UAT) for end users.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ETGvO_KsFylPsNAUth8zgTUBU0p9OZA9nbbeoq1YUlAHbw?e=hqaymn",
      "type": "pdf",
      "tags": ["GenAI", "URA", "Research", "Classification"],
      "image": "/images/ura-project.jpg" // Add a placeholder image path
    },
    {
      "title": "Ellipsis Tech Series Hackathon - Job Shadowing Platform (Top 10)",
      "description": "Developed an innovative job shadowing platform that connects students with professionals for short-term shadowing experiences, helping students make more informed career decisions. Built using Bootstrap & Vue.js. Our team achieved Top 10 placement in the hackathon.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/EUHR7_I1rJpBiom15u4a3Q0Bw3IBvsfrp_cT7p7F08J-KQ",
      "type": "pdf",
      "tags": ["Hackathon", "Vue.js", "Bootstrap", "Top 10"],
      "image": "/images/hackathon-project.jpg" // Add a placeholder image path
    },
    {
      "title": "Kangiiten Spreadsheet Analysis",
      "description": "Conducted comprehensive data analysis for Kangiiten's Shopify data, including data cleaning, exploration, and visualization. Implemented Time-Series analysis to forecast demand and optimize resource allocation. Tools used: Excel, Power BI, and Python for data processing.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ERCe0XMFYJNAnjSK8Vb6dVwBAqx3e9gCpkFiDX4EVhaobA",
      "type": "pdf",
      "tags": ["Data Analysis", "Excel", "Power BI", "Python"],
      "image": "/images/spreadsheet-project.jpg" // Add a placeholder image path
    },
    {
      "title": "Object Oriented Programming",
      "description": "OOP Project focused on implementing key object-oriented principles and design patterns.",
      "github": "https://github.com/BryenYeoh/IS-442-Portfolio",
      "type": "github",
      "tags": ["Java", "OOP", "Design Patterns"],
      "image": "/images/oop-project.jpg" // Add a placeholder image path
    }
  ];

  const personalProjects = [
    {
      "title": "Personal Portfolio Website",
      "description": "Developed a responsive, modern portfolio website using React.js to showcase my projects, skills, and experience. Implemented custom animations and interactive elements to enhance user experience.",
      "github": "https://github.com/htlee1999/HTportfolio",
      "type": "github",
      "tags": ["React.js", "Portfolio", "Frontend"],
      "image": "/images/portfolio-project.jpg" // Add a placeholder image path
    },
    {
      "title": "Cristiano Ronaldo Stats Visualisation",
      "description": "Created an interactive data visualization dashboard showcasing Cristiano Ronaldo's career statistics. Used Chart.js and D3.js to build dynamic charts and graphs that highlight key metrics and achievements throughout his career.",
      "github": "https://github.com/htlee1999/CR7Stats",
      "type": "github",
      "tags": ["Data Visualization", "D3.js", "Chart.js", "Sports Analytics"],
      "image": "/images/cr7-project.jpg" // Add a placeholder image path
    }
  ];

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <span key={index} className="project-tag">
        {tag}
      </span>
    ));
  };

  const renderProjectCard = (project, index) => {
    const isAnimated = animatedItems.includes(index.toString());
    
    const getLinkButton = (link, type) => {
      switch(type) {
        case 'github':
          return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </span>
              View on GitHub
            </a>
          );
        case 'pdf':
          return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link pdf-link">
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </span>
              View Presentation
            </a>
          );
        default:
          return null;
      }
    };

    return (
      <div 
        className={`project-card ${viewMode === 'grid' ? 'grid-mode' : 'list-mode'} ${isAnimated ? 'animated' : ''}`}
        key={index}
        data-index={index}
      >
        <div className="project-image-container">
          <div className="project-image" style={{ backgroundImage: `url(${project.image || '/images/placeholder.jpg'})` }}>
            <div className="project-tags">
              {renderTags(project.tags)}
            </div>
          </div>
        </div>
        <div className="project-details">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {getLinkButton(project.github || project.link, project.type)}
          </div>
        </div>
      </div>
    );
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'grid' ? 'list' : 'grid');
    // Reset animations when changing view
    setAnimatedItems([]);
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="projects-actions">
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
          <div className="view-toggle">
            <button 
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => viewMode !== 'grid' && toggleViewMode()}
              title="Grid View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button 
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => viewMode !== 'list' && toggleViewMode()}
              title="List View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`projects-grid ${viewMode === 'grid' ? 'grid-mode' : 'list-mode'}`}>
        {(activeCategory === 'school' ? schoolProjects : personalProjects).map((project, index) => (
          renderProjectCard(project, index)
        ))}
      </div>

      {/* Keep the accordion for mobile devices */}
      <div className="projects-accordion-mobile">
        <AccordionWrapper>
          {(activeCategory === 'school' ? schoolProjects : personalProjects).map((item, index) => (
            <AccordionItem 
              key={index} 
              index={index} 
              title={item.title} 
              description={`
                <div class="project-content">
                  <p>${item.description}</p>
                  <div class="project-tags-accordion">
                    ${item.tags.map(tag => `<span class="project-tag">${tag}</span>`).join(' ')}
                  </div>
                  <a href="${item.github || item.link}" target="_blank" rel="noopener noreferrer" 
                     class="${item.type === 'github' ? 'github-link' : 'pdf-link'}">
                    <span class="${item.type}-icon">
                      ${item.type === 'github' 
                        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>' 
                        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>'
                      }
                    </span>
                    ${item.type === 'github' ? 'View on GitHub' : 'View Presentation'}
                  </a>
                </div>
              `} 
            />
          ))}
        </AccordionWrapper>
      </div>
    </div>
  );
}

export default Projects;