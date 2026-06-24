import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilePdf, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Projects.css';
import { schoolProjects, personalProjects, miniProjects } from './projectsData';

const allProjects = [...schoolProjects, ...personalProjects];
const featuredProjects = allProjects.filter((p) => p.featured);

// Derive the primary call-to-action label + URL for a project.
const primaryAction = (p) => {
  if (p.type === 'github') return { url: p.github, label: 'GitHub Repo' };
  if (p.type === 'pdf') return { url: p.link, label: 'View Case Study' };
  return { url: p.link, label: 'View Live' }; // 'both' / live
};

const CardLinks = ({ p }) => {
  const action = primaryAction(p);
  return (
    <div className="pjt-card-foot">
      <a className="pjt-link" href={action.url} target="_blank" rel="noopener noreferrer">
        {action.label} <FaArrowRight />
      </a>
      <div className="pjt-card-icons">
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
            <FaGithub />
          </a>
        )}
        {p.type !== 'github' && p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={p.type === 'pdf' ? 'PDF document' : 'Live site'}>
            {p.type === 'pdf' ? <FaFilePdf /> : <FaExternalLinkAlt />}
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ p, kind }) => (
  <div className={`pjt-card pjt-card--${kind}`}>
    <div className="pjt-card-img">
      <span className={`pjt-card-badge pjt-card-badge--${kind}`}>
        {kind === 'school' ? 'School' : 'Personal'}
      </span>
      <img src={p.image} alt={`${p.title} preview`} />
    </div>
    <div className="pjt-card-body">
      <h3 className="pjt-card-title">{p.title}</h3>
      <p className="pjt-card-desc">{p.description}</p>
      <div className="pjt-tags">
        {p.tags.slice(0, 5).map((t) => (
          <span className="pjt-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
    <CardLinks p={p} />
  </div>
);

// Compact, image-free card for small tools / experiments.
const MiniCard = ({ p }) => (
  <div className="pjt-mini">
    <div className="pjt-mini-body">
      <h3 className="pjt-mini-title">{p.title}</h3>
      <p className="pjt-mini-desc">{p.description}</p>
      <div className="pjt-tags">
        {p.tags.slice(0, 4).map((t) => (
          <span className="pjt-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
    <CardLinks p={p} />
  </div>
);

const ProjectGroup = ({ title, meta, kind, projects }) => (
  <section className={`pjt-group pjt-group--${kind}`}>
    <header className="pjt-group-head">
      <span className="pjt-group-dot" />
      <h2 className="pjt-group-title">{title}</h2>
      <span className="pjt-group-count">
        {projects.length} {projects.length === 1 ? 'build' : 'builds'} · {meta}
      </span>
      <span className="pjt-group-rule" />
    </header>
    <div className="pjt-grid">
      {projects.map((p) => (
        <ProjectCard p={p} kind={kind} key={p.title} />
      ))}
    </div>
  </section>
);

const Projects = () => {
  const [idx, setIdx] = useState(0);
  const hasFeatured = featuredProjects.length > 0;
  const fp = hasFeatured ? featuredProjects[idx] : null;
  const next = () => setIdx((i) => (i + 1) % featuredProjects.length);
  const prev = () => setIdx((i) => (i - 1 + featuredProjects.length) % featuredProjects.length);
  const action = fp ? primaryAction(fp) : null;

  return (
    <div className="pjt">
      {/* HERO */}
      <section className="pjt-hero">
        <h1 className="pjt-hero-title">Curated Projects</h1>
        <p className="pjt-hero-intro">
          Exploring the intersection of data-driven business strategy and robust information
          systems. A collection of analytical solutions and technical builds.
        </p>
      </section>

      {/* FEATURED */}
      {hasFeatured && (
        <section className="pjt-featured">
          <div className="pjt-featured-text">
            <div className="pjt-eyebrow">
              <span className="pjt-eyebrow-line" /> Featured Project
            </div>
            <h2 className="pjt-featured-title">{fp.title}</h2>
            <p className="pjt-featured-desc">{fp.description}</p>
            <div className="pjt-tags">
              {fp.tags.slice(0, 5).map((t) => (
                <span className="pjt-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="pjt-featured-foot">
              <a className="pjt-link" href={action.url} target="_blank" rel="noopener noreferrer">
                {action.label} <FaArrowRight />
              </a>
              {featuredProjects.length > 1 && (
                <div className="pjt-carousel-ctrls">
                  <button type="button" onClick={prev} aria-label="Previous featured project">
                    <FaArrowLeft />
                  </button>
                  <button type="button" onClick={next} aria-label="Next featured project">
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="pjt-featured-img">
            <img src={fp.image} alt={`${fp.title} preview`} />
          </div>
        </section>
      )}

      {/* SCHOOL & PERSONAL GROUPS */}
      <ProjectGroup
        title="School Projects"
        meta="coursework, FYP & hackathons"
        kind="school"
        projects={schoolProjects}
      />
      <ProjectGroup
        title="Personal Projects"
        meta="self-initiated & for fun"
        kind="personal"
        projects={personalProjects}
      />

      {/* MINI PROJECTS */}
      <section className="pjt-group pjt-group--mini">
        <header className="pjt-group-head">
          <span className="pjt-group-dot" />
          <h2 className="pjt-group-title">Mini Projects</h2>
          <span className="pjt-group-count">
            {miniProjects.length} {miniProjects.length === 1 ? 'build' : 'builds'} · quick experiments & fun tools
          </span>
          <span className="pjt-group-rule" />
        </header>
        <div className="pjt-mini-grid">
          {miniProjects.map((p) => (
            <MiniCard p={p} key={p.title} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pjt-cta">
        <div className="pjt-cta-text">
          <h2>Interested in working together?</h2>
          <p>
            I'm always looking for new opportunities in AI, data, and systems engineering.
            Let's discuss your next project.
          </p>
        </div>
        <div className="pjt-cta-btns">
          <a className="pjt-btn pjt-btn-solid" href="mailto:Leehongteng1999@gmail.com">
            Get In Touch
          </a>
          <a
            className="pjt-btn pjt-btn-ghost"
            href="https://www.linkedin.com/in/hongtenglee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
