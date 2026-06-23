import React, { useEffect, useState, useCallback } from 'react';
import './Portfolio.css';
import profilePhoto from './components/Profile/profile.jpg';
import resumePDF from './components/Profile/Resume 2025.pdf';
import { schoolProjects, personalProjects } from './components/Projects/projectsData';
import {
  profile,
  skills,
  stats,
  experiences,
  education,
  interests,
  contact,
} from './data/portfolioData';

const idx = (i) => String(i + 1).padStart(2, '0');
const liveLabel = (p) => (p.type === 'pdf' ? 'PDF ↗' : 'Live ↗');

const PAGE_SECTIONS = [
  { id: 'profile',    label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'education',  label: 'Education' },
  { id: 'interests',  label: 'Interests' },
  { id: 'contact',    label: 'Contact' },
];

const PageNav = () => {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide while hero is in view
    const hero = document.querySelector('.pf-hero');
    if (hero) {
      const heroObs = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0.1 }
      );
      heroObs.observe(hero);
    }

    const observers = PAGE_SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <nav className={`pf-pagenav${visible ? ' is-visible' : ''}`} aria-label="Page sections">
      <ul>
        {PAGE_SECTIONS.map(({ id, label }) => (
          <li key={id} className={active === id ? 'is-active' : ''}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Nav = () => (
  <nav className="pf-nav">
    <div className="pf-nav-inner">
      <div className="pf-nav-brand">{profile.name}</div>
      <div className="pf-nav-links">
        <a href="#profile">Profile</a>
        <a href="#experience">Work</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact" className="is-contact">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="pf-hero">
    <div className="pf-hero-inner">
      <div className="pf-eyebrow pf-fade">{profile.eyebrow}</div>
      <h1 className="pf-rise">
        {profile.headlineLead}
        <em>{profile.headlineEmphasis}</em>
        <br />
        {profile.headlineRest}
      </h1>
      <div className="pf-hero-row">
        <p className="pf-rise">{profile.intro}</p>
        <div className="pf-hero-cta pf-rise">
          <a className="pf-btn pf-btn-solid" href={resumePDF} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a className="pf-btn pf-btn-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="pf-stats">
        {stats.map((s) => (
          <div className="pf-stat" key={s.label}>
            <div className="pf-stat-val">{s.value}</div>
            <div className="pf-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </header>
);

const ProfileSection = () => (
  <section id="profile" className="pf-section">
    <div className="pf-profile-inner">
      <div className="pf-eyebrow">01 — Profile</div>
      <div className="pf-profile-grid">
        <div className="pf-portrait">
          <img src={profilePhoto} alt="Hong Teng Lee" />
        </div>
        <div>
          <p className="pf-lead">{profile.lookingFor}</p>
          <p className="pf-body">{profile.focus}</p>
          <div className="pf-subhead pf-skills-head">Key Skills</div>
          <div className="pf-skills">
            {skills.map((s) => (
              <span className="pf-skill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="pf-section pf-exp">
    <div className="pf-exp-inner">
      <div className="pf-head">
        <div>
          <div className="pf-kicker">02 — Experience</div>
          <h2>The road so far</h2>
        </div>
        <span className="pf-head-meta">2017 → 2025</span>
      </div>
      {experiences.map((x) => (
        <div className="pf-exp-row" key={`${x.company}-${x.period}`}>
          <div>
            <div className="pf-exp-company">{x.company}</div>
            <div className="pf-exp-role">{x.role}</div>
            <div className="pf-exp-period">{x.period}</div>
            {x.pdf && (
              <a className="pf-exp-pdf" href={x.pdf} target="_blank" rel="noopener noreferrer">
                {x.pdfLabel} ↗
              </a>
            )}
          </div>
          <div className="pf-exp-highlights">
            {x.highlights.map((h) => (
              <div key={h.title}>
                <div className="pf-exp-h-title">{h.title}</div>
                <div className="pf-exp-h-desc">{h.desc}</div>
                {h.link && (
                  <a className="pf-exp-pdf" href={h.link.url} target="_blank" rel="noopener noreferrer">
                    {h.link.text} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project, kind, i }) => (
  <div className={`pf-card pf-card--${kind}`}>
    <div className="pf-card-head">
      {project.image && <img className="pf-card-logo" src={project.image} alt={`${project.title} logo`} />}
      <span className="pf-card-badge">{kind === 'school' ? 'School' : 'Personal'}</span>
      <span className="pf-card-idx">{kind === 'school' ? 'S' : 'P'}/{idx(i)}</span>
    </div>
    <div className="pf-card-body">
      <div className="pf-card-title">{project.title}</div>
      <div className="pf-card-blurb">{project.description}</div>
      {project.tags && project.tags.length > 0 && (
        <div className="pf-card-tags">
          {project.tags.map((t) => (
            <span className="pf-card-tag" key={t}>{t}</span>
          ))}
        </div>
      )}
      <div className="pf-card-links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">{liveLabel(project)}</a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="pf-section">
    <div className="pf-proj-inner">
      <div className="pf-head">
        <div>
          <div className="pf-kicker" style={{ color: 'var(--terra)' }}>03 — Selected Work</div>
          <h2>Things I've shipped</h2>
        </div>
        <span className="pf-head-meta">
          School &amp; personal · {schoolProjects.length + personalProjects.length} builds
        </span>
      </div>

      <div className="pf-group">
        <span className="pf-group-dot pf-dot--school" />
        <span className="pf-group-label pf-label--school">School Work</span>
        <span className="pf-group-meta">{schoolProjects.length} builds · coursework, FYP &amp; hackathons</span>
        <span className="pf-group-rule" />
      </div>
      <div className="pf-card-grid">
        {schoolProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} kind="school" i={i} />
        ))}
      </div>

      <div className="pf-group">
        <span className="pf-group-dot pf-dot--personal" />
        <span className="pf-group-label pf-label--personal">Personal Projects</span>
        <span className="pf-group-meta">{personalProjects.length} builds · self-initiated &amp; for fun</span>
        <span className="pf-group-rule" />
      </div>
      <div className="pf-card-grid">
        {personalProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} kind="personal" i={i} />
        ))}
      </div>
    </div>
  </section>
);

const EduDetails = ({ details }) => (
  <div className="pf-edu-details">
    {details.major && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Major</div>
        <div>{details.major}</div>
      </div>
    )}
    {details.achievements && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Achievements</div>
        <ul>{details.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
      </div>
    )}
    {details.academicHighlights && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Academic Highlights</div>
        <ul>{details.academicHighlights.map((h) => <li key={h}>{h}</li>)}</ul>
      </div>
    )}
    {details.highlights && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Academic Highlights</div>
        <ul>{details.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
      </div>
    )}
    {details.keyCourses && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Key Courses</div>
        <ul>{details.keyCourses.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    )}
    {details.courses && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Exchange Courses</div>
        <ul>{details.courses.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    )}
    {details.keyCoursesByYear && (
      <div className="pf-edu-detail-block">
        <div className="pf-edu-detail-label">Key Courses</div>
        {details.keyCoursesByYear.map((y) => (
          <div key={y.year} className="pf-edu-year">
            <div className="pf-edu-year-label">{y.year}</div>
            <ul>{y.courses.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        ))}
      </div>
    )}
  </div>
);

const EducationSection = () => {
  const [open, setOpen] = useState(null);
  const toggle = useCallback((inst) => setOpen((prev) => (prev === inst ? null : inst)), []);

  return (
    <section id="education" className="pf-section pf-edu">
      <div className="pf-edu-inner">
        <div className="pf-eyebrow">04 — Education</div>
        {education.map((e) => {
          const isOpen = open === e.inst;
          return (
            <div key={e.inst} className={`pf-edu-row${e.details ? ' pf-edu-row--clickable' : ''}`} onClick={() => e.details && toggle(e.inst)}>
              <div className="pf-edu-row-header">
                <div className="pf-edu-inst">{e.inst}</div>
                <div className="pf-edu-degree">{e.degree}</div>
                <div className="pf-edu-duration">{e.duration}</div>
                {e.details && <div className={`pf-edu-chevron${isOpen ? ' is-open' : ''}`}>▾</div>}
              </div>
              {isOpen && e.details && <EduDetails details={e.details} />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const InterestsSection = () => (
  <section id="interests" className="pf-section">
    <div className="pf-int-inner">
      <div className="pf-head">
        <div>
          <div className="pf-kicker" style={{ color: 'var(--terra)' }}>05 — Beyond Work</div>
          <h2>Leadership &amp; appetite</h2>
        </div>
        <span className="pf-head-meta">Clubs, comms &amp; food</span>
      </div>
      <div className="pf-int-grid">
        {interests.map((it) => (
          <div className="pf-int-row" key={it.title}>
            <div className="pf-int-date">{it.date}</div>
            <div>
              <div className="pf-int-head">
                {it.url ? (
                  <a className="pf-int-title" href={it.url} target="_blank" rel="noopener noreferrer">
                    {it.title} <span className="pf-int-link-mark">↗</span>
                  </a>
                ) : (
                  <span className="pf-int-title">{it.title}</span>
                )}
                <span className="pf-int-dur">{it.duration}</span>
              </div>
              <div className="pf-int-desc">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactFooter = () => (
  <footer id="contact" className="pf-section pf-footer">
    <div className="pf-footer-inner">
      <h2>Say hello — let's make something good.</h2>
      <div className="pf-footer-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/hongtenglee ↗</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">github.com/htlee1999 ↗</a>
        <a href={contact.schoolGithub} target="_blank" rel="noopener noreferrer">github.com/htlee-2021 ↗</a>
      </div>
    </div>
  </footer>
);

const Portfolio = () => (
  <div className="pf">
    <PageNav />
    <Nav />
    <Hero />
    <ProfileSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <InterestsSection />
    <ContactFooter />
  </div>
);

export default Portfolio;
