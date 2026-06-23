// Content for the single-page portfolio. Project data lives in
// components/Projects/projectsData.js and is mapped in Portfolio.js.

export const profile = {
  name: 'Hong Teng Lee',
  eyebrow: 'Information Systems · Business Analytics · Singapore',
  headlineLead: 'A builder at the ',
  headlineEmphasis: 'edge',
  headlineRest: 'of AI, data & the web.',
  intro:
    'Final-year Information Systems student majoring in Business Analytics. I sit at the intersection of technology and business — equal parts analytical thinking and practical implementation.',
  lookingFor:
    'Seeking entry-level roles where I can apply technical & analytical skills while learning from real-world business challenges.',
  focus:
    'Especially interested in digital transformation, product development, and data-driven decision making — optimizing processes, uncovering insights from data, and bridging gaps between stakeholders.',
};

export const skills = [
  'Python', 'Java', 'React', 'SQL', 'HTML', 'CSS', 'JavaScript',
  'Data Analysis', 'Business Analytics', 'Next.js', 'Docker', 'TypeScript', 'Vue.js',
];

export const stats = [
  { value: '5', label: 'roles & internships' },
  { value: '11', label: 'shipped projects' },
  { value: '3', label: 'institutions' },
  { value: '13', label: 'core skills' },
];

export const experiences = [
  {
    company: 'Urban Redevelopment Authority',
    role: 'AI Developer (Contract)',
    period: 'Jul 2025 – Nov 2025',
    pdf: '/URA-Temp-Projects.pdf',
    pdfLabel: 'View project showcase',
    highlights: [
      { title: 'RAG Pipeline & AI Chatbot', desc: 'End-to-end Retrieval-Augmented Generation pipeline powering a domain-specific chatbot over URA web & PDF content — hybrid retrieval, reranking, and a live monitoring dashboard.' },
      { title: 'Smart Compliance Operations Tool', desc: 'AI tool automating property compliance checking and prioritising enforcement at scale, with bulk CSV and single-entry inputs.' },
      { title: 'Deep Research & Search Agent', desc: "Multi-step research agent using Exa's Research API for real-time fact-checking and citation-rich synthesised reports." },
      { title: 'Additional Projects', desc: 'PUB knowledge-base chatbot and drafted product T&Cs benchmarked against OpenAI, Gemini and Anthropic policies.' },
    ],
  },
  {
    company: 'Urban Redevelopment Authority',
    role: 'Product Development Intern (AI/ML)',
    period: 'Jan 2025 – May 2025',
    pdf: '/Internship presentation.pdf',
    pdfLabel: 'View internship presentation',
    highlights: [
      { title: 'GPT Chatbot Development', desc: 'Front-end for an in-house GPT chatbot powered by Gemini 2.5 Pro, with comparative model testing across Gemini and OpenAI.' },
      { title: 'Email Editor Application', desc: 'Notion-like email editor with GPT-4.1 content enhancement and real-time collaborative editing.' },
      { title: 'Prompt Engineering', desc: 'Optimised AI-generated responses for business use cases.' },
      { title: 'Front-end Development', desc: 'Modular, maintainable components with Next.js, HTML and TypeScript.' },
    ],
  },
  {
    company: 'Twimbit Pte Ltd',
    role: 'Research Intern',
    period: 'May 2023 – Jul 2023',
    highlights: [
      { title: 'Fintech Research', desc: 'Researched ChatGPT in financial services, BNPL market trends, and CX analysis for Singapore banks.', link: { url: 'https://twimbit.com/insights/chatgpt-in-financial-services-11-best-practice-cases-from-banks-and-fintechs', text: 'Read published article' } },
      { title: 'Content Development', desc: 'Transformed technical presentations into accessible blog content, improving reach.' },
      { title: 'Chatbot Testing', desc: "User testing and feedback for Twimbit's ChatGPT-powered website chatbot." },
    ],
  },
  {
    company: 'Jumbo Group of Restaurants',
    role: 'IT Intern',
    period: 'Mar 2018 – Sep 2018',
    highlights: [
      { title: 'Mobile App Testing', desc: 'Comprehensive UI/UX testing for a new mobile application.' },
      { title: 'ERP System Management', desc: 'Digitised 100+ physical recipes into Epicor ERP and managed menu pricing across nationwide POS.' },
      { title: 'IT Support', desc: 'Supported a company-wide Microsoft Office version upgrade.' },
      { title: 'Data Analysis', desc: 'Advanced Excel formulas for data analysis and reporting.' },
    ],
  },
  {
    company: 'Ncode Consultant',
    role: 'Intern',
    period: 'Jan 2017 – Dec 2017',
    highlights: [
      { title: 'Web Content Management', desc: 'Managed website content updates and maintenance.' },
      { title: 'Digital Media', desc: 'Photoshop editing and product photography sessions.' },
      { title: 'UX Design', desc: 'Applied information design principles to enhance user experience.' },
    ],
  },
];

export const education = [
  {
    inst: 'Singapore Management University',
    degree: 'BSc (Information Systems), Business Analytics',
    duration: 'Aug 2021 – Jul 2025',
    details: {
      major: 'Business Analytics',
      highlights: [
        'Advanced coursework in AI and Machine Learning',
        'Specialization in Business Analytics',
        'Completed projects in GenAI solutions for URA',
        'Strong foundation in Web Development and Programming',
      ],
      keyCourses: [
        'Introduction to Artificial Intelligence',
        'Data Mining and Business Analytics',
        'Machine Learning & Applications',
        'Enterprise Solution Development',
        'Software Project Management',
        'Web Application Development',
        'Visual Analytics',
      ],
    },
  },
  {
    inst: 'Zhejiang University',
    degree: 'International Exchange — School of Public Affairs',
    duration: 'Feb 2024 – Jul 2024',
    details: {
      courses: [
        'International Law and Relations',
        'China Public Finance',
        'Social Science and Cultural Hegemony',
        'Consumer Neuroscience',
        'Technology Entrepreneurship',
        'Academic Writing in Psychology',
      ],
    },
  },
  {
    inst: 'Ngee Ann Polytechnic',
    degree: 'Diploma in Business Information Technology',
    duration: 'Jan 2016 – Dec 2019',
    details: {
      achievements: [
        "Tai Sin Prize for Most Outstanding Performance during '6-Month Internship'",
        'Participated in National Economics & Financial Management Challenge',
        'Part of Harvard Business School Mentorship Program',
      ],
      academicHighlights: [
        'Achieved AD (Distinction) grade for 6-Month Internship',
      ],
      keyCoursesByYear: [
        {
          year: 'Year 1',
          courses: ['Business Communication', 'Information Design in Business', 'Network & Server Systems', 'Business Applications', 'Business Management', 'Innovation Toolkit'],
        },
        {
          year: 'Year 2',
          courses: ['Web Database Applications', 'Web Development', 'Business Analytics', 'Business Systems Analysis & Design', 'Web & Mobile Applications'],
        },
        {
          year: 'Year 3',
          courses: ['Integrated E-Business Systems', 'Integrated Enterprise Applications', 'Management Information Systems', 'Managing eBusiness'],
        },
      ],
    },
  },
];

export const interests = [
  { date: 'Feb 2012', title: 'Infocomm Club Member', duration: '2 years', desc: 'Learned photo editing, PA & sound systems for events, and DSLR photography.' },
  { date: 'Feb 2014', title: 'Infocomm Club VP', duration: '1 year', desc: 'Led the club and the events it ran.' },
  { date: 'Apr 2016', title: 'Toastmasters Club', duration: '3 years', desc: 'Public speaking, self-presentation and leadership at Ngee Ann Toastmasters.' },
  { date: 'May 2018', title: 'Toastmasters Area Secretary', duration: '1 year', desc: 'Ran the Area D4 Instagram and supported event planning & execution.', url: 'https://www.instagram.com/d4studentclubs/?hl=en' },
  { date: 'May 2019', title: 'Food Blogging — @lee2eat', duration: 'Ongoing', desc: "Sharing my food journey across Singapore's restaurants.", url: 'https://www.instagram.com/lee2eat/?hl=en' },
  { date: 'Dec 2021', title: 'Gourmet Club General Secretary', duration: '1 year', desc: 'Owned membership and comms; supported event planning & execution.', url: 'https://www.instagram.com/smugourmetclub/?hl=en' },
  { date: 'Jun 2022', title: 'Orientation Camp Facilitator', duration: '3 months', desc: 'Facilitated 2 groups of 6–8 students for the SCIS orientation camp.', url: 'https://www.instagram.com/p/CfS45LAJl9o/?hl=en' },
];

export const contact = {
  email: 'Leehongteng1999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hongtenglee/',
  github: 'https://github.com/htlee1999',
  schoolGithub: 'https://github.com/htlee-2021',
};
