import React, { useState, useEffect } from 'react';
import { FaGithub, FaFileAlt, FaGlobe, FaTh, FaList } from 'react-icons/fa';
import AccordionWrapper from './ProjectWrapper';
import AccordionItem from './ProjectItem';
import PDFViewer from './PDFViewer';
import ProjectLinks from './ProjectLinks';
import { schoolProjects, personalProjects } from './projectsData';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('school');
  const [viewMode, setViewMode] = useState('grid');
  const [animatedItems, setAnimatedItems] = useState([]);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');

  const openPdfModal = (pdfUrl) => {
    setCurrentPdf(pdfUrl);
    setPdfModalOpen(true);
  };

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

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <span key={index} className="project-tag">
        {tag}
      </span>
    ));
  };

  const getLinkButton = (link, type, github) => {
    if (type === 'both') {
      return (
        <div className="dual-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
            <span className="link-icon"><FaGithub size={20} /></span>
            View on GitHub
          </a>
          {link.endsWith('.pdf') ? (
            <button className="project-link pdf-link" onClick={() => openPdfModal(link)}>
              <span className="link-icon"><FaFileAlt size={20} /></span>
              View Report
            </button>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link website-link">
              <span className="link-icon"><FaGlobe size={20} /></span>
              Visit Website
            </a>
          )}
        </div>
      );
    } else {
      switch (type) {
        case 'github':
          return (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <span className="link-icon"><FaGithub size={20} /></span>
              View on GitHub
            </a>
          );
        case 'pdf':
          return (
            <button className="project-link pdf-link" onClick={() => openPdfModal(link)}>
              <span className="link-icon"><FaFileAlt size={20} /></span>
              View Presentation
            </button>
          );
        case 'link':
          return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link website-link">
              <span className="link-icon"><FaGlobe size={20} /></span>
              Visit Website
            </a>
          );
        default:
          return null;
      }
    }
  };

  const renderProjectCard = (project, index) => {
    const isAnimated = animatedItems.includes(index.toString());

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
    setAnimatedItems([]);
  };

  const currentProjects = activeCategory === 'school' ? schoolProjects : personalProjects;

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
          <div className="view-toggle" role="group" aria-label="View mode toggle">
            <button
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => viewMode !== 'grid' && toggleViewMode()}
              title="Grid View"
              aria-label="Switch to grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <FaTh size={20} />
            </button>
            <button
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => viewMode !== 'list' && toggleViewMode()}
              title="List View"
              aria-label="Switch to list view"
              aria-pressed={viewMode === 'list'}
            >
              <FaList size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className={`projects-grid ${viewMode === 'grid' ? 'grid-mode' : 'list-mode'}`}>
        {currentProjects.map((project, index) => renderProjectCard(project, index))}
      </div>

      {/* Mobile accordion view */}
      <div className="projects-accordion-mobile">
        <AccordionWrapper>
          {currentProjects.map((item, index) => (
            <AccordionItem key={index} index={index} title={item.title}>
              <div className="project-content">
                <p>{item.description}</p>
                <div className="project-tags-accordion">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <ProjectLinks item={item} onPdfClick={(url) => {
                  setCurrentPdf(url);
                  setPdfModalOpen(true);
                }} />
              </div>
            </AccordionItem>
          ))}
        </AccordionWrapper>
      </div>

      <PDFViewer
        pdfUrl={currentPdf}
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />
    </div>
  );
};

export default Projects;
