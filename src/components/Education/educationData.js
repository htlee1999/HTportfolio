// Education content. Shared by the Education component and the chatbot knowledge base
// (api/_lib/knowledge.mjs) — keep it free of image/JSX imports.

export const degrees = [
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

export const smuCourses = [
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

export const npModules = [
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

export const milestones = [
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
