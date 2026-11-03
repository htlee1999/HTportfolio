import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import uraLogo from '../../assets/images/ura_logo.png';
import twimbitLogo from '../../assets/images/twimbit_logo.jpeg';
import jumboLogo from '../../assets/images/jumbo.png';
import ncodeLogo from '../../assets/images/ncode.png';
import { experiences, competencies } from './experienceData';

const logos = { ura: uraLogo, twimbit: twimbitLogo, jumbo: jumboLogo, ncode: ncodeLogo };

const Experience = () => {
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="exp">
      {/* HERO */}
      <section className="exp-hero">
        <span className="exp-eyebrow">Career Journey</span>
        <h1 className="exp-hero-title">Professional Experience</h1>
        <p className="exp-hero-intro">
          A curated timeline of my professional contributions, technical growth, and the
          roles that shaped my work across AI, data, and the web.
        </p>
      </section>

      {/* TIMELINE */}
      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="exp-row"
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <h2 className="exp-role">{exp.role}</h2>
              <div className="exp-company">
                {exp.logo && (
                  <img className="exp-company-logo" src={logos[exp.logo]} alt={`${exp.company} logo`} />
                )}
                <span>{exp.company}</span>
              </div>
              {exp.presentationLink && (
                <a
                  className="exp-presentation-link"
                  href={exp.presentationLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📊 {exp.presentationLink.text}
                </a>
              )}
            </div>

            <div className="exp-card">
              <ul className="exp-highlights">
                {exp.highlights.map((h, i) => {
                  const key = `${exp.id}-${i}`;
                  const hasDetails = h.details && h.details.length > 0;
                  const isOpen = !!expanded[key];
                  return (
                    <li className="exp-highlight" key={key}>
                      <div
                        className={`exp-highlight-head${hasDetails ? ' is-clickable' : ''}`}
                        onClick={() => hasDetails && toggle(key)}
                      >
                        <span className="exp-highlight-icon">{h.icon}</span>
                        <div className="exp-highlight-text">
                          <span className="exp-highlight-title">{h.title}</span>
                          <p className="exp-highlight-desc">{h.description}</p>
                        </div>
                        {hasDetails && (
                          <span className={`exp-chevron${isOpen ? ' is-open' : ''}`}>▾</span>
                        )}
                      </div>

                      {hasDetails && isOpen && (
                        <ul className="exp-detail-list">
                          {h.details.map((d, di) => (
                            <li key={di}>{d}</li>
                          ))}
                        </ul>
                      )}

                      {h.link && (
                        <a
                          className="exp-highlight-link"
                          href={h.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📄 {h.link.text}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CORE COMPETENCIES */}
      <section className="exp-competencies">
        <h2 className="exp-comp-title">Core Competencies</h2>
        <div className="exp-comp-groups">
          {competencies.map((g) => (
            <div className="exp-comp-group" key={g.title}>
              <h4 className="exp-comp-group-title">{g.title}</h4>
              <div className="exp-comp-pills">
                {g.skills.map((s) => (
                  <span className="exp-comp-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
