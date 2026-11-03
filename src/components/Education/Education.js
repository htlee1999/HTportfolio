import React from 'react';
import './Education.css';
import { degrees, smuCourses, npModules, milestones } from './educationData';

const Education = () => (
  <div className="edu">
    {/* HERO */}
    <section className="edu-hero">
      <p className="edu-eyebrow">Academic Journey</p>
      <h1 className="edu-hero-title">Foundations in Systems &amp; Analytics</h1>
      <p className="edu-hero-intro">
        From diploma-level systems thinking at Ngee Ann to a degree centred on data and
        enterprise at SMU — building a grounded understanding of how information architecture
        drives business decisions.
      </p>
    </section>

    {/* DEGREE CARDS */}
    <div className="edu-degrees">
      {degrees.map((d) => (
        <article key={d.subtitle} className={`edu-degree${d.featured ? ' is-featured' : ''}`}>
          <div className="edu-degree-emoji">{d.emoji}</div>
          <div className="edu-degree-body">
            <div className="edu-degree-meta">
              <span className="edu-year-badge">{d.year}</span>
              <span className="edu-honour-badge">{d.honour}</span>
            </div>
            <h2 className="edu-degree-title">
              {d.titleLines.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="edu-degree-sub">{d.subtitle}</p>
            <p className="edu-degree-desc">{d.description}</p>
            <div className="edu-degree-stats">
              {d.stats.map((s) => (
                <div className="edu-stat" key={s.strong}>
                  <span className="edu-stat-icon">{s.icon}</span>
                  <div>
                    <strong>{s.strong}</strong>
                    <span>{s.span}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* SMU COURSEWORK */}
    <section className="edu-section">
      <header className="edu-section-head">
        <h2>Specialized Coursework</h2>
        <p>Core modules from SMU that shaped my technical and analytical foundation.</p>
      </header>
      <div className="edu-courses">
        {smuCourses.map((c) => (
          <div className={`edu-course ${c.variant}`.trim()} key={c.title}>
            <div className="edu-course-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="edu-tag-row">
              {c.tags.map((t) => (
                <span className="edu-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* NP MODULES */}
    <section className="edu-section">
      <header className="edu-section-head">
        <h2>Diploma Modules</h2>
        <p>Key modules from the Ngee Ann Polytechnic Diploma in Business Information Technology.</p>
      </header>
      <div className="edu-modules">
        {npModules.map((g) => (
          <div className="edu-module-group" key={g.group}>
            <h4>{g.group}</h4>
            {g.items.map((m) => (
              <div className="edu-module-item" key={m.name}>
                <span className="edu-module-name">{m.name}</span>
                <span className="edu-module-skill">{m.skill}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* ACHIEVEMENTS TIMELINE */}
    <section className="edu-section">
      <div className="edu-milestones">
        <header className="edu-section-head">
          <h2>Academic Milestones</h2>
          <p>Recognition and experiences that defined the journey.</p>
        </header>
        <div className="edu-timeline">
          {milestones.map((m) => (
            <div className="edu-timeline-item" key={m.title}>
              <span className="edu-timeline-dot" />
              <div className="edu-timeline-date">{m.date}</div>
              <div className="edu-timeline-title">{m.title}</div>
              <div className="edu-timeline-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Education;
