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

const TimelineView = ({ timelineItemsList }) => {
  return (
    <section className="interests-timeline">
      <header className="interests-header">
        <h1>
          MY JOURNEY OF
          <span>Interests &amp; Activities</span>
        </h1>
      </header>

      <div className="timeline-track">
        {timelineItemsList.map((item, index) => {
          const title =
            item.categoryId === 'PROJECT' ? item.projectTitle : item.courseTitle;
          const showPhoto =
            new Date(item.title).getFullYear() >= 2016 && item.imageUrl;
          const side = index % 2 === 0 ? 'left' : 'right';

          return (
            <motion.div
              className={`timeline-row ${side}`}
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="timeline-node" />

              <article className="interest-card">
                <div className="interest-card-date">{item.title}</div>
                <h3 className="interest-card-title">{title}</h3>

                {item.duration && (
                  <div className="interest-card-duration">{item.duration}</div>
                )}

                {showPhoto && (
                  <div className="interest-photo">
                    <img
                      src={item.imageUrl}
                      alt={title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/400/200';
                      }}
                    />
                    <div className="interest-photo-overlay">
                      {item.categoryId === 'PROJECT' ? 'Project' : 'Activity'} Photo
                    </div>
                  </div>
                )}

                <p className="interest-card-desc">{item.description}</p>

                {item.tagsList && item.tagsList.length > 0 && (
                  <div className="interest-tags">
                    {item.tagsList.map((tag) => (
                      <span className="interest-tag" key={tag.id}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                {item.projectUrl && (
                  <a
                    className="interest-link"
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getLinkIcon(item.projectUrl)}
                    View Project
                  </a>
                )}
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineView;
