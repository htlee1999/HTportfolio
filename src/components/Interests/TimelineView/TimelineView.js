import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillInstagram, AiOutlineLink } from 'react-icons/ai';
import './TimelineView.css';

const getLinkIcon = (url) => {
  if (!url) return <AiOutlineLink />;
  if (url.includes('instagram.com')) return <AiFillInstagram />;
  if (url.includes('github.com')) return <AiFillGithub />;
  return <AiOutlineLink />;
};

const hasRealPhoto = (url) => url && !url.includes('/api/placeholder');

const TimelineView = ({ timelineItemsList }) => (
  <section className="intr">
    <header className="intr-hero">
      <span className="intr-eyebrow">Beyond the Code</span>
      <h1 className="intr-title">Interests &amp; Activities</h1>
      <p className="intr-intro">
        A decade-long journey of leadership, communication, and community — from secondary-school
        clubs and Toastmasters to running student societies and blogging my way across Singapore's
        food scene.
      </p>
    </header>

    <div className="intr-timeline">
      {timelineItemsList.map((item, index) => {
        const isProject = item.categoryId === 'PROJECT';
        const kind = isProject ? 'project' : 'activity';
        const title = isProject ? item.projectTitle : item.courseTitle;
        const side = index % 2 === 0 ? 'left' : 'right';
        const showPhoto = hasRealPhoto(item.imageUrl);

        return (
          <motion.div
            className={`intr-row intr-row--${side}`}
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`intr-node intr-node--${kind}`} />

            <article className={`intr-card intr-card--${kind}`}>
              <div className="intr-card-top">
                <span className="intr-date">{item.title}</span>
                <span className={`intr-kind intr-kind--${kind}`}>
                  {isProject ? 'Project' : 'Activity'}
                </span>
              </div>

              <h3 className="intr-card-title">{title}</h3>
              {item.duration && <div className="intr-duration">{item.duration}</div>}

              {showPhoto && (
                <div className="intr-photo">
                  <img src={item.imageUrl} alt={title} />
                </div>
              )}

              <p className="intr-desc">{item.description}</p>

              {item.tagsList && item.tagsList.length > 0 && (
                <div className="intr-tags">
                  {item.tagsList.map((tag) => (
                    <span className="intr-tag" key={tag.id}>{tag.name}</span>
                  ))}
                </div>
              )}

              {item.projectUrl && (
                <a
                  className="intr-link"
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getLinkIcon(item.projectUrl)} View
                </a>
              )}
            </article>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default TimelineView;
