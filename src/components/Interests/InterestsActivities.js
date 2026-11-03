import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowDown,
  FaCamera,
  FaUsers,
  FaMicrophone,
  FaBullhorn,
  FaUtensils,
  FaConciergeBell,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaSeedling,
  FaInstagram,
  FaExternalLinkAlt,
  FaQuoteRight,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';
import './InterestsActivities.css';
import heroPhoto from '../../assets/images/IMG_1391.jpg';
import facilPhoto from '../../assets/images/facil.jpg';
import foodPhoto from '../../assets/images/food.jpg';
import gourmetPhoto from '../../assets/images/gourmet.jpg';
import tmClubPhoto from '../../assets/images/TM.jpg';
import tmAreaPhoto from '../../assets/images/TM2.jpg';
import { intro, quote, ctaText, timelineItems } from './interestsData';
import { contact } from '../Profile/profileData';

const LINKEDIN_URL = contact.linkedin;
const EMAIL = `mailto:${contact.email}`;

const icons = {
  FaBullhorn: <FaBullhorn />,
  FaCamera: <FaCamera />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaConciergeBell: <FaConciergeBell />,
  FaHandsHelping: <FaHandsHelping />,
  FaMicrophone: <FaMicrophone />,
  FaSeedling: <FaSeedling />,
  FaUsers: <FaUsers />,
  FaUtensils: <FaUtensils />,
};
const images = {
  tmClub: tmClubPhoto,
  tmArea: tmAreaPhoto,
  food: foodPhoto,
  gourmet: gourmetPhoto,
  facil: facilPhoto,
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const linkIcon = (url) =>
  url && url.includes('instagram.com') ? <FaInstagram /> : <FaExternalLinkAlt />;

const InterestsActivities = () => (
  <div className="intr">
    {/* ---------- HERO ---------- */}
    <section className="intr-hero">
      <motion.div className="intr-hero-text" {...reveal}>
        <span className="intr-eyebrow">Personal Journey</span>
        <h1 className="intr-hero-title">
          Leadership, Community
          <br />
          &amp; <em>Lifelong Learning.</em>
        </h1>
        <p className="intr-hero-intro">{intro}</p>
        <span className="intr-scroll">
          Explore my journey <FaArrowDown />
        </span>
      </motion.div>

      <motion.div
        className="intr-hero-media"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="intr-hero-accent" />
        <img src={heroPhoto} alt="Hong Teng Lee" />
      </motion.div>
    </section>

    {/* ---------- TIMELINE ---------- */}
    <section className="intr-timeline">
      <span className="intr-timeline-line" aria-hidden="true" />

      {timelineItems.map((item, index) => {
        const textOnLeft = index % 2 === 0;

        const textCell = (
          <motion.div
            className={`intr-cell intr-cell--text ${
              textOnLeft ? 'intr-align-right' : 'intr-align-left'
            }`}
            {...reveal}
          >
            <span className="intr-label">{item.date}</span>
            <h3 className="intr-theme-title">{item.title}</h3>
            {item.duration && <span className="intr-duration">{item.duration}</span>}
            <p className="intr-theme-desc">{item.description}</p>
            {item.tags && (
              <div className={`intr-tags ${textOnLeft ? 'intr-tags--right' : ''}`}>
                {item.tags.map((tag) => (
                  <span className="intr-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.url && (
              <a
                className="intr-view"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkIcon(item.url)} View
              </a>
            )}
          </motion.div>
        );

        const mediaCell = (
          <motion.div className="intr-cell intr-cell--media" {...reveal}>
            {item.image ? (
              <div className="intr-photo">
                <img src={images[item.image]} alt={item.title} />
              </div>
            ) : (
              <div className={`intr-art intr-art--${item.accent}`}>{icons[item.icon]}</div>
            )}
          </motion.div>
        );

        return (
          <div className="intr-row" key={item.id}>
            {textOnLeft ? textCell : mediaCell}
            <span className={`intr-node intr-node--${item.accent}`}>{icons[item.icon]}</span>
            {textOnLeft ? mediaCell : textCell}
          </div>
        );
      })}
    </section>

    {/* ---------- QUOTE ---------- */}
    <motion.section className="intr-quote" {...reveal}>
      <FaQuoteRight className="intr-quote-mark" />
      <blockquote>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite>— Hong Teng Lee</cite>
    </motion.section>

    {/* ---------- CTA ---------- */}
    <motion.section className="intr-cta" {...reveal}>
      <h2 className="intr-cta-title">
        Want to discuss shared interests or collaborations?
      </h2>
      <p className="intr-cta-text">{ctaText}</p>
      <div className="intr-cta-actions">
        <a className="intr-btn intr-btn--solid" href={EMAIL}>
          <FaEnvelope /> Get in Touch
        </a>
        <a
          className="intr-btn intr-btn--ghost"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>
      </div>
    </motion.section>
  </div>
);

export default InterestsActivities;
