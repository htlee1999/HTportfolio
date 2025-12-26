import React from 'react';
import { FaGithub, FaFileAlt } from 'react-icons/fa';

const ProjectLinks = ({ item, onPdfClick }) => {
  if (item.type === 'both') {
    return (
      <div className="project-links-accordion">
        <a href={item.github} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub size={20} />
          View on GitHub
        </a>
        <button
          className="pdf-link"
          onClick={(e) => { e.preventDefault(); onPdfClick(item.link); }}
        >
          <FaFileAlt size={20} />
          View Report
        </button>
      </div>
    );
  } else if (item.type === 'pdf') {
    return (
      <button
        className="pdf-link"
        onClick={(e) => { e.preventDefault(); onPdfClick(item.link); }}
      >
        <FaFileAlt size={20} />
        View Presentation
      </button>
    );
  } else {
    return (
      <a href={item.github} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub size={20} />
        View on GitHub
      </a>
    );
  }
};

export default ProjectLinks;
