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

const LINKEDIN_URL = 'https://www.linkedin.com/in/hongtenglee/';
const EMAIL = 'mailto:Leehongteng1999@gmail.com';

/* Real interests & activities — same content that lived in the old timeline. */
const timelineItems = [
  {
    id: 'infocomm-member',
    date: 'February 2012',
    title: 'Infocomm Club Member',
    duration: '2 years',
    description:
      'A member of my secondary school Infocomm Club, where I picked up the basics of photo editing, running PA and sound systems for school events, and shooting with a DSLR.',
    tags: ['Photography', 'Sound System'],
    icon: <FaCamera />,
    accent: 'green',
  },
  {
    id: 'infocomm-vp',
    date: 'February 2014',
    title: 'Infocomm Club Vice President',
    duration: '1 year',
    description:
      'Stepped up as Vice President of the Infocomm Club, taking charge of the club and the events it supported across the school.',
    tags: ['Leadership', 'Event Management'],
    icon: <FaUsers />,
    accent: 'terracotta',
  },
  {
    id: 'toastmasters-member',
    date: 'April 2016',
    title: 'Toastmasters Club',
    duration: '3 years',
    description:
      'As a member of the Ngee Ann Polytechnic Toastmasters Club, I learned to speak in front of a crowd, present myself with confidence, and grow as a leader.',
    tags: ['Public Speaking', 'Leadership'],
    image: tmClubPhoto,
    icon: <FaMicrophone />,
    accent: 'pink',
  },
  {
    id: 'toastmasters-secretary',
    date: 'May 2018',
    title: 'Toastmasters Area Secretary',
    duration: '1 year',
    description:
      'Served as Area Secretary for Area D4 in Singapore, managing the Area D4 Instagram page and supporting the Area Director in planning and running events.',
    tags: ['Social Media', 'Event Planning'],
    image: tmAreaPhoto,
    url: 'https://www.instagram.com/d4studentclubs/?hl=en',
    icon: <FaBullhorn />,
    accent: 'green',
  },
  {
    id: 'food-blogging',
    date: 'May 2019',
    title: 'Food Blogging',
    duration: 'Ongoing',
    description:
      'Started an Instagram account to share my food journey across Singapore. I love discovering new places to eat and documenting the experience for others.',
    tags: ['Food', 'Photography', 'Social Media'],
    image: foodPhoto,
    url: 'https://www.instagram.com/lee2eat/?hl=en',
    icon: <FaUtensils />,
    accent: 'terracotta',
  },
  {
    id: 'gourmet-club',
    date: 'December 2021',
    title: 'Gourmet Club General Secretary',
    duration: '1 year',
    description:
      'Handled membership and communications for the SMU Gourmet Club, sending out event updates to the school population while supporting event planning and execution.',
    tags: ['Event Planning', 'Communication'],
    image: gourmetPhoto,
    url: 'https://www.instagram.com/smugourmetclub/?hl=en',
    icon: <FaConciergeBell />,
    accent: 'pink',
  },
  {
    id: 'orientation-facilitator',
    date: 'June 2022',
    title: 'Faculty Orientation Camp Facilitator',
    duration: '3 months',
    description:
      'Facilitated the School of Computing and Information Systems Orientation Camp, leading two groups of 6–8 students and helping run the camp activities.',
    tags: ['Mentoring', 'Team Building'],
    image: facilPhoto,
    url: 'https://www.instagram.com/p/CfS45LAJl9o/?hl=en',
    icon: <FaHandsHelping />,
    accent: 'green',
  },
];

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
        <p className="intr-hero-intro">
          A decade-long journey of leadership, communication, and community — from
          secondary-school clubs and Toastmasters to running student societies and
          blogging my way across Singapore&apos;s food scene.
        </p>
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
                <img src={item.image} alt={item.title} />
              </div>
            ) : (
              <div className={`intr-art intr-art--${item.accent}`}>{item.icon}</div>
            )}
          </motion.div>
        );

        return (
          <div className="intr-row" key={item.id}>
            {textOnLeft ? textCell : mediaCell}
            <span className={`intr-node intr-node--${item.accent}`}>{item.icon}</span>
            {textOnLeft ? mediaCell : textCell}
          </div>
        );
      })}
    </section>

    {/* ---------- QUOTE ---------- */}
    <motion.section className="intr-quote" {...reveal}>
      <FaQuoteRight className="intr-quote-mark" />
      <blockquote>
        &ldquo;Every club, camp, and conversation has been a classroom — each one a
        doorway into understanding people a little better.&rdquo;
      </blockquote>
      <cite>— Hong Teng Lee</cite>
    </motion.section>

    {/* ---------- CTA ---------- */}
    <motion.section className="intr-cta" {...reveal}>
      <h2 className="intr-cta-title">
        Want to discuss shared interests or collaborations?
      </h2>
      <p className="intr-cta-text">
        I&apos;m always open to talking about leadership, community, or sharing where to
        find the best food in Singapore.
      </p>
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
