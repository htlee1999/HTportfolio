import React from 'react';
import './Education.css';

const degrees = [
  {
    featured: true,
    emoji: '🏛️',
    year: '2021 — 2025',
    // honour: 'CGPA 2.81',
    titleLines: ['Bachelor of Science in', 'Information Systems'],
    subtitle: 'Major in Business Analytics',
    description:
      'Four years at Singapore Management University focused on the intersection of information systems, data analytics, and enterprise technology. Completed coursework spanning machine learning, analytics, web development, and business strategy — alongside an international exchange at Zhejiang University, China.',
    stats: [
      { icon: '📊', strong: '31 Course Units', span: 'Earned, Jun 2025' },
      { icon: '🌏', strong: 'Global Exposure', span: 'Zhejiang University Exchange' },
      { icon: '🎓', strong: 'Degree Awarded', span: '03 Jun 2025' },
    ],
  },
  {
    featured: false,
    emoji: '🏫',
    year: '2016 — 2019',
    honour: 'GPA 3.59 / 4.0',
    titleLines: ['Diploma in Business', 'Information Technology'],
    subtitle: 'Ngee Ann Polytechnic',
    description:
      'Three-year diploma building strong roots in business systems, web development, data management, and enterprise applications. Graduated with a strong GPA of 3.59, completing a 6-month industry internship (AD — Distinction) and the Professional Preparation Programme.',
    stats: [
      { icon: '⭐', strong: 'GPA 3.59 / 4.0', span: 'Graduating grade' },
      { icon: '🏆', strong: '6-Month Internship', span: 'Distinction (AD)' },
      { icon: '📅', strong: 'Graduated May 2019', span: 'Full-time programme' },
    ],
  },
];

const smuCourses = [
  {
    variant: 'highlight wide',
    icon: '🤖',
    title: 'Machine Learning & Applications (IS460)',
    desc: 'Covers the foundations, types, and frameworks of machine learning — from supervised and unsupervised learning to model evaluation — applied to real-world business problems. Explores the conceptual relationship between machine learning, statistics, and artificial intelligence through hands-on implementation.',
    tags: ['Python', 'Scikit-Learn', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
  },
  {
    variant: '',
    icon: '📈',
    title: 'Data Mining & Business Analytics (IS424)',
    desc: 'Core data mining concepts and techniques — data preprocessing, pattern discovery, classification, clustering, and association rule mining — applied to enterprise data to support business intelligence and managerial decision-making with industry-strength tools.',
    tags: ['R', 'Data Preprocessing', 'Classification', 'Clustering', 'Association Mining', 'Business Intelligence'],
  },
  {
    variant: 'accent',
    icon: '📊',
    title: 'Visual Analytics for Business Intelligence (IS428)',
    desc: 'Uses interactive data visualisation tools and techniques to explore massive, dynamic, and often ambiguous datasets without relying on complex statistical formulas — synthesising insights from multiple sources into interactive dashboards and visual analytics systems.',
    tags: ['Tableau', 'R Shiny', 'Interactive Dashboards', 'Geospatial Analytics', 'Data Storytelling'],
  },
  {
    variant: '',
    icon: '💻',
    title: 'Web Application Development I & II (IS113 / IS216)',
    desc: 'A two-course sequence building database-driven web applications from the ground up — static and dynamic pages, session management, server-side scripting, input validation, and UI styling — extending into full-stack development with RESTful API integration and external web services.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'MySQL', 'RESTful APIs', 'Full-Stack Development'],
  },
  {
    variant: '',
    icon: '🏗️',
    title: 'Enterprise Solution Development & Management (IS213 / IS214)',
    desc: 'A pair of modules spanning the build and the governance of enterprise systems. Development covers systems analysis, object-oriented design, and building enterprise web applications from real business requirements; Management covers IT project management, governance frameworks like COBIT, and the full solution lifecycle from procurement through deployment.',
    tags: ['Systems Analysis', 'Object-Oriented Design', 'IT Project Management', 'IT Governance', 'COBIT', 'Solution Lifecycle'],
  },
  {
    variant: '',
    icon: '🎨',
    title: 'Interaction Design & Prototyping (IS211)',
    desc: 'Fundamental human-computer interaction (HCI) principles and techniques for designing usable interactive systems — user requirements gathering, basic UI and graphics programming, and usability evaluation — culminating in a full design-and-prototyping project.',
    tags: ['HCI Principles', 'User Requirements Gathering', 'UI Prototyping', 'Usability Evaluation', 'Figma'],
  },
  {
    variant: '',
    icon: '🤝',
    title: 'IS/SMT/C&L Project Experience (IS483)',
    desc: "SMU's signature SMU-X capstone, partnering student teams with real industry organisations to solve business problems using information systems — covering the full lifecycle from scoping and requirements through build and stakeholder presentation.",
    tags: ['Project Management', 'Agile', 'Stakeholder Management', 'Systems Development', 'Industry Collaboration'],
  },
  {
    variant: '',
    icon: '🌐',
    title: 'Digital Business: Technologies & Transformation',
    desc: 'Examines how digital technologies reshape industries, business models, and organisational strategy — platform economics, digital disruption, the business value of emerging technologies, and frameworks for leading digital transformation, analysed through real-world cases.',
    tags: ['Digital Strategy', 'Platform Business Models', 'Digital Transformation', 'Business Analysis', 'Innovation Frameworks'],
  },
];

const npModules = [
  {
    group: 'Business & Analytics',
    items: [
      { name: 'Business Analytics', skill: 'Tableau' },
      { name: 'Decision Support Applications', skill: 'Decision Support Systems' },
      { name: 'Business Systems Analysis & Design', skill: 'Systems Design' },
      { name: 'Management Information Systems', skill: 'MIS Frameworks' },
      { name: 'Business Management', skill: 'Strategic Planning' },
      { name: 'Managing eBusiness', skill: 'Digital Business Strategy' },
      { name: 'Business Statistics', skill: 'Statistical Analysis' },
    ],
  },
  {
    group: 'Technology & Systems',
    items: [
      { name: 'Integrated Enterprise Applications', skill: 'SAP / ERP' },
      { name: 'Integrated E-Business Systems', skill: 'E-Business' },
      { name: 'Web Database Applications', skill: 'SQL / MySQL' },
      { name: 'Web & Mobile Applications', skill: 'Mobile Development' },
      { name: 'Network & Server Systems', skill: 'Networking' },
      { name: 'Web Development', skill: 'HTML / CSS / JS' },
      { name: 'IT Law & Governance', skill: 'PDPA / COBIT' },
    ],
  },
  {
    group: 'Internship & Professional',
    items: [
      { name: '6-Month Internship', skill: 'Industry Practice' },
      { name: 'Business Communication 1', skill: 'Business Writing' },
      { name: 'Business Communication 2', skill: 'Presentations' },
      { name: 'Business Communication 3', skill: 'Professional Comms' },
      { name: 'Innovation Toolkit', skill: 'Design Thinking' },
    ],
  },
  {
    group: 'Finance & Accounting',
    items: [
      { name: 'Principles of Accounting', skill: 'Financial Statements' },
      { name: 'Cost & Managerial Accounting', skill: 'Cost Analysis' },
      { name: 'Microeconomics', skill: 'Price Theory' },
      { name: 'Macroeconomics', skill: 'Economic Policy' },
      { name: 'Principles of Marketing', skill: 'Marketing Mix' },
      { name: 'Business Law', skill: 'Contract Law' },
    ],
  },
];

const milestones = [
  {
    date: 'Aug 2018',
    title: 'Internship with Distinction — Ngee Ann Polytechnic',
    desc: 'Awarded AD (Distinction) grade for the 6-month industry internship at Ngee Ann — the highest possible grade, reserved for the top 5% of the cohort.',
  },
  {
    date: 'May 2019',
    title: 'Diploma Conferred — Ngee Ann Polytechnic',
    desc: 'Graduated with Diploma in Business Information Technology with a graduating GPA of 3.59 / 4.0, completing the Professional Preparation Programme for industry readiness.',
  },
  {
    date: '2023 – 2024',
    title: 'International Exchange — Zhejiang University, China',
    desc: "Participated in SMU's International Student Exchange Programme at Zhejiang University for a full term, transferring 4.0 course units. Fulfilled SMU's Global Exposure graduation requirement.",
  },
  {
    date: '2024 – 2025',
    title: 'Short-Term Study — Universitas Gadjah Mada, Indonesia',
    desc: "Completed a short-term study programme at one of Indonesia's leading universities, broadening regional business and technology perspectives.",
  },
  {
    date: '2024 – 2025',
    title: 'Capstone SMU-X Project Experience',
    desc: 'Delivered a real-world systems solution in an industry context, from requirements through deployment, as part of the SMU-X applied project stream.',
  },
  {
    date: 'Jun 2025',
    title: "Bachelor's Degree Conferred — SMU",
    desc: 'Awarded Bachelor of Science in Information Systems (Business Analytics) from Singapore Management University. 31 course units completed.',
  },
];

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
