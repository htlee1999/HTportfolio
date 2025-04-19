import React, { useState, useEffect } from 'react';
import AccordionWrapper from './ProjectWrapper';
import AccordionItem from './ProjectItem';
import './Projects.css';
import uraLogo from './ura_logo.png';
import elipsisLogo from './ellipsis_logo.png';
import kangiitenLogo from './kangiiten_logo.png';
import oop from './oop_logo.png';
import portfolio from './portfolio_logo.png';
import cristiano from './cristiano_logo.png';
import wildfireLogo from './wildfire_logo.png'; 

// Enhanced PDFViewer Component with fixed hook order
const PDFViewer = ({ pdfUrl, isOpen, onClose }) => {
  // Check if the URL is a SharePoint URL
  const isSharePointUrl = pdfUrl && (pdfUrl.includes('sharepoint.com') || pdfUrl.includes('smu-my.sharepoint'));
  
  // Check if URL is a regular website (not PDF)
  const isRegularWebsite = pdfUrl && pdfUrl.startsWith('http') && !pdfUrl.endsWith('.pdf');

  // Animation handling - MOVED ABOVE the conditional return
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Return null after the hook is defined
  if (!isOpen) return null;
  
  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3>
            {isSharePointUrl ? 'SharePoint Document' : 
             isRegularWebsite ? 'External Website' : 
             'Document Viewer'}
          </h3>
          <button className="pdf-modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="pdf-modal-body">
          {isSharePointUrl ? (
            // For SharePoint links, show a message and a button to open in new tab
            <div className="sharepoint-fallback">
              <div className="fallback-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </div>
              <p>This document is hosted on SharePoint and cannot be displayed directly in this viewer.</p>
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link-button"
              >
                Open Document in New Tab
              </a>
            </div>
          ) : isRegularWebsite ? (
            // For regular websites, provide a link to open in new tab
            <div className="website-fallback">
              <div className="fallback-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <p>This is a live website and will open in a new tab.</p>
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link-button"
              >
                Open Website in New Tab
              </a>
            </div>
          ) : (
            // For regular PDFs, use the iframe as before
            <iframe 
              src={`${pdfUrl}#view=FitH`} 
              title="PDF Viewer" 
              width="100%" 
              height="100%" 
              className="pdf-iframe"
            />
          )}
        </div>
        
        <div className="pdf-modal-footer">
          {!isRegularWebsite && (
            <a 
              href={pdfUrl} 
              download
              target="_blank" 
              rel="noopener noreferrer"
              className="pdf-download-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          )}
          <button onClick={onClose} className="pdf-close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('school');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [animatedItems, setAnimatedItems] = useState([]);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');

  // Function to open PDF in modal
  const openPdfModal = (pdfUrl) => {
    setCurrentPdf(pdfUrl);
    setPdfModalOpen(true);
  };

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
  // Add this useEffect to your Projects component right after your other useEffect
useEffect(() => {
  // Function to handle the custom openPdfModal event
  const handleOpenPdfModal = (event) => {
    const pdfUrl = event.detail;
    openPdfModal(pdfUrl);
  };

  // Add event listener
  window.addEventListener('openPdfModal', handleOpenPdfModal);

  // Clean up
  return () => {
    window.removeEventListener('openPdfModal', handleOpenPdfModal);
  };
}, []);

  const schoolProjects = [
    {
      "title": "California Wildfire Statistics Visualization",
      "description": "Developed an interactive visualization platform for California wildfire statistics using D3.js, React, and Node.js. The project features comprehensive data analysis and dynamic visualizations that help users understand wildfire patterns, affected areas, and environmental impact. Implemented with Docker for seamless deployment and scalability.",
      "link": "/Final-Report.pdf", 
      "github": "https://github.com/htlee-2021/geoviz-dashboard", 
      "type": "both",
      "tags": ["D3.js", "React", "Node.js", "Docker", "Data Visualization"],
      "image": wildfireLogo
    },
    {
      "title": "Final Year Project - URA GenAI Building Generator",
      "description": "Research and development project focused on generating building blocks using GenAI solutions for URA. The project involves performing classification tasks on building polygons and conducting User Acceptance Testing (UAT) for end users.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ETGvO_KsFylPsNAUth8zgTUBU0p9OZA9nbbeoq1YUlAHbw?e=hqaymn",
      "type": "pdf",
      "tags": ["GenAI", "URA", "Research", "Classification"],
      "image": uraLogo
    },
    {
      "title": "Ellipsis Tech Series Hackathon - Job Shadowing Platform (Top 10)",
      "description": "Developed an innovative job shadowing platform that connects students with professionals for short-term shadowing experiences, helping students make more informed career decisions. Built using Bootstrap & Vue.js. Our team achieved Top 10 placement in the hackathon.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/EUHR7_I1rJpBiom15u4a3Q0Bw3IBvsfrp_cT7p7F08J-KQ",
      "type": "pdf",
      "tags": ["Hackathon", "Vue.js", "Bootstrap", "Top 10"],
      "image": elipsisLogo 
    },
    {
      "title": "Kangiiten Spreadsheet Analysis",
      "description": "Conducted comprehensive data analysis for Kangiiten's Shopify data, including data cleaning, exploration, and visualization. Implemented Time-Series analysis to forecast demand and optimize resource allocation. Tools used: Excel, Power BI, and Python for data processing.",
      "link": "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ERCe0XMFYJNAnjSK8Vb6dVwBAqx3e9gCpkFiDX4EVhaobA",
      "type": "pdf",
      "tags": ["Data Analysis", "Excel", "Python"],
      "image": kangiitenLogo 
    },
    {
      "title": "Object Oriented Programming",
      "description": "OOP Project focused on implementing key object-oriented principles and design patterns.",
      "github": "https://github.com/BryenYeoh/IS-442-Portfolio",
      "type": "github",
      "tags": ["Java", "OOP", "Design Patterns"],
      "image": oop
    }
  ];

  const personalProjects = [
    {
      "title": "MACS Assistant - AI-Powered FAQ Drafter",
      "description": "Developed an AI-powered FAQ response drafter for McDonald's using Next.js, AI SDK, and shadcn/ui. The application helps generate appropriate responses to customer inquiries with relevant data, featuring a Notion-like editor for easy content editing. Implemented with Google's Gemini Flash 2.0 model while supporting multiple AI providers through the unified AI SDK. Contact me for the login credentials.",
      "link": "https://macs-assistant.vercel.app/",
      "github": "https://github.com/htlee1999/macs-assistant", // Replace with your actual GitHub repository
      "type": "both", // Or use "link" if only the deployed site is available
      "tags": ["Next.js", "AI SDK", "Tailwind CSS", "Vercel", "Gemini", "shadcn/ui"],
      "image": portfolio
    },
    {
      "title": "Personal Portfolio Website",
      "description": "Developed a responsive, modern portfolio website using React.js to showcase my projects, skills, and experience. Implemented custom animations and interactive elements to enhance user experience.",
      "github": "https://github.com/htlee1999/HTportfolio",
      "type": "github",
      "tags": ["React.js", "Portfolio", "Frontend"],
      "image": portfolio
    },
    {
      "title": "Cristiano Ronaldo Stats Visualisation",
      "description": "Created an interactive data visualization dashboard showcasing Cristiano Ronaldo's career statistics. Used Jupyter Notebook and Python to build dynamic charts and graphs that highlight key metrics and achievements throughout his career.",
      "github": "https://github.com/htlee1999/CR7Stats",
      "type": "github",
      "tags": ["Data Visualization", "Jupyter Notebook", "Sports Analytics", "Python"],
      "image": cristiano
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
    
    const getLinkButton = (link, type, github) => {
      if (type === 'both') {
        return (
          <div className="dual-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <span className="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </span>
              View on GitHub
            </a>
            {link.endsWith('.pdf') ? (
              // For PDF files
              <a 
                href="#" 
                className="project-link pdf-link"
                onClick={(e) => {
                  e.preventDefault();
                  openPdfModal(link);
                }}
              >
                <span className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </span>
                View Report
              </a>
            ) : (
              // For website links
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link website-link"
              >
                <span className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                Visit Website
              </a>
            )}
          </div>
        );
      } else {
        switch(type) {
          case 'github':
            return (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
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
              <a 
                href="#" 
                className="project-link pdf-link"
                onClick={(e) => {
                  e.preventDefault();
                  openPdfModal(link);
                }}
              >
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
          case 'link':
            return (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link website-link"
              >
                <span className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                Visit Website
              </a>
            );
          default:
            return null;
        }
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
            {getLinkButton(project.link, project.type, project.github)}
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
      {/* Keep the accordion for mobile devices */}
<div className="projects-accordion-mobile">
  <AccordionWrapper>
    {(activeCategory === 'school' ? schoolProjects : personalProjects).map((item, index) => {
      // Prepare link HTML based on project type
      let linkHtml = '';
      if (item.type === 'both') {
        linkHtml = `
          <div class="project-links-accordion">
            <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="github-link">
              <span class="github-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </span>
              View on GitHub
            </a>
            <a href="#" class="pdf-link" onclick="window.dispatchEvent(new CustomEvent('openPdfModal', {detail: '${item.link}'})); return false;">
              <span class="pdf-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
              </span>
              View Report
            </a>
          </div>
        `;
      } else if (item.type === 'pdf') {
        linkHtml = `
          <a href="#" class="pdf-link" onclick="window.dispatchEvent(new CustomEvent('openPdfModal', {detail: '${item.link}'})); return false;">
            <span class="pdf-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
            </span>
            View Presentation
          </a>
        `;
      } else {
        linkHtml = `
          <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="github-link">
            <span class="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </span>
            View on GitHub
          </a>
        `;
      }
      
      return (
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
              ${linkHtml}
            </div>
          `} 
        />
      );
    })}
  </AccordionWrapper>
</div>

{/* PDF Modal Viewer */}
<PDFViewer 
  pdfUrl={currentPdf} 
  isOpen={pdfModalOpen} 
  onClose={() => setPdfModalOpen(false)} 
/>

    </div>
  );
}
export default Projects;  