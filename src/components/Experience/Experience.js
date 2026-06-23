import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import uraLogo from '../../assets/images/ura_logo.png';
import twimbitLogo from '../../assets/images/twimbit_logo.jpeg';
import jumboLogo from '../../assets/images/jumbo.png';
import ncodeLogo from '../../assets/images/ncode.png';

const experiences = [
  {
    id: "ura-contract",
    company: "Urban Redevelopment Authority",
    logo: uraLogo,
    role: "AI Developer (Contract)",
    period: "Jul 2025 — Nov 2025",
    presentationLink: { url: "/URA-Temp-Projects.pdf", text: "View Project Showcase" },
    highlights: [
      {
        title: "RAG Pipeline & AI Chatbot",
        description: "Built an end-to-end Retrieval-Augmented Generation pipeline powering a domain-specific AI chatbot over URA web and PDF content.",
        details: [
          "Automated data acquisition with Puppeteer-based scraping (daily incremental + weekly full refresh via cron jobs) and PyMuPDF for multi-modal PDF extraction",
          "Processed content into 100–1000 token chunks with 1536-dim embeddings stored in a PostgreSQL + pgvector + Vercel Blob multi-tier system",
          "Implemented hybrid retrieval (80% vector similarity + 20% BM25 keyword) with query expansion and cross-encoder reranking",
          "Built a real-time monitoring dashboard tracking scraping health, content quality, and session status"
        ],
        icon: "🗃️"
      },
      {
        title: "Smart Compliance Operations Tool",
        description: "Developed an AI-powered tool that automates property compliance checking and prioritises enforcement at scale.",
        details: [
          "Automated occupant identification and assessment of properties against approved-use regulations",
          "Supported dual input modes: bulk CSV uploads and single-entry forms for ad-hoc checks",
          "Implemented smart prioritisation to rank enforcement actions by risk and urgency",
          "Evaluated SERP API vs. Exa API for AI search, selecting Exa for stronger accuracy"
        ],
        icon: "✅"
      },
      {
        title: "Advanced Deep Research & Search Agent",
        description: "Created a multi-step deep research agent that goes beyond standard RAG using live web data via Exa's Research API.",
        details: [
          "Web Search mode for real-time fact-checking and Deep Research mode for citation-rich synthesised reports",
          "Generated query variations and ran them in parallel via Promise.all with result deduplication",
          "Built a ResearchSteps UI visualising the planning → searching → synthesis thought process",
          "Implemented adaptive timeouts for complex models (e.g. exa-research-pro)"
        ],
        icon: "🧠"
      },
      {
        title: "Additional Projects",
        description: "Delivered a PUB knowledge-base chatbot and drafted product Terms & Conditions documentation.",
        details: [
          "PUB Chatbot: Python/Jupyter scraper extracting PDFs and web content into Markdown, with a custom chunking and embedding pipeline feeding a domain-specific RAG chatbot",
          "DC Assistant T&C: drafted legal, privacy, usage, IP, and SLA documentation benchmarked against OpenAI, Gemini, and Anthropic policies"
        ],
        icon: "📋"
      }
    ]
  },
  {
    id: "ura",
    company: "Urban Redevelopment Authority",
    logo: uraLogo,
    role: "Product Development Intern (AI/ML)",
    period: "Jan 2025 — May 2025",
    presentationLink: { url: "/Internship presentation.pdf", text: "View Internship Presentation" },
    highlights: [
      {
        title: "GPT Chatbot Development",
        description: "Developed front-end components for an in-house GPT chatbot powered by Gemini 2.5 Pro.",
        details: [
          "Conducted comparative testing with Gemini 2.0 Flash, Gemini 2.5 Pro and OpenAI o3/o3-mini models, GPT 4.1/4, o4 mini",
          "Tested with long context and web grounding capabilities for Gemini models",
          "Implemented responsive UI design for optimal display across devices"
        ],
        icon: "💬"
      },
      {
        title: "Email Editor Application",
        description: "Built a Notion-like email editor web application.",
        details: [
          "Integrated AI functions powered by GPT-4.1 for content enhancement",
          "Implemented real-time collaborative editing features"
        ],
        icon: "✉️"
      },
      {
        title: "Prompt Engineering",
        description: "Applied prompt engineering techniques to optimize AI-generated responses for business use cases.",
        details: [],
        icon: "🧠"
      },
      {
        title: "Front-end Development",
        description: "Utilized Next.js, HTML, and TypeScript to build modular and maintainable front-end components.",
        details: [],
        icon: "💻"
      }
    ]
  },
  {
    id: "twimbit",
    company: "Twimbit Pte Ltd",
    logo: twimbitLogo,
    role: "Research Intern",
    period: "May 2023 — Jul 2023",
    highlights: [
      {
        title: "Fintech Research",
        description: "Researched and contributed to articles on emerging financial technologies.",
        details: [
          "ChatGPT applications in Financial services",
          "Buy Now Pay Later (BNPL) market trends",
          "Customer Experience analysis for Singapore Banks"
        ],
        link: {
          url: "https://twimbit.com/insights/chatgpt-in-financial-services-11-best-practice-cases-from-banks-and-fintechs",
          text: "View Published Article: ChatGPT in Financial Services"
        },
        icon: "📊"
      },
      {
        title: "Content Development",
        description: "Transformed technical presentations into accessible blog content, improving content reach.",
        details: [],
        icon: "📝"
      },
      {
        title: "Chatbot Testing",
        description: "Provided user testing and feedback for Twimbit's ChatGPT-powered website chatbot.",
        details: [],
        icon: "🔍"
      }
    ]
  },
  {
    id: "jumbo",
    company: "Jumbo Group of Restaurants",
    logo: jumboLogo,
    role: "IT Intern",
    period: "Mar 2018 — Sep 2018",
    highlights: [
      {
        title: "Mobile App Testing",
        description: "Conducted comprehensive UI/UX testing for a new mobile application.",
        details: [],
        icon: "📱"
      },
      {
        title: "ERP System Management",
        description: "Digitized 100+ physical recipes into the Epicor ERP system and managed menu pricing across nationwide POS systems.",
        details: [],
        icon: "🗄️"
      },
      {
        title: "IT Support",
        description: "Supported a company-wide Microsoft Office version upgrade.",
        details: [],
        icon: "🖥️"
      },
      {
        title: "Data Analysis",
        description: "Applied advanced Excel formulas for data analysis and reporting.",
        details: [],
        icon: "📈"
      }
    ]
  },
  {
    id: "ncode",
    company: "Ncode Consultant",
    logo: ncodeLogo,
    role: "Intern",
    period: "Jan 2017 — Dec 2017",
    highlights: [
      {
        title: "Web Content Management",
        description: "Managed website content updates and maintenance.",
        details: [],
        icon: "🌐"
      },
      {
        title: "Digital Media",
        description: "Used Photoshop for professional photo editing and conducted product photography sessions.",
        details: [],
        icon: "📷"
      },
      {
        title: "UX Design",
        description: "Implemented information design principles to enhance user experience.",
        details: [],
        icon: "🎨"
      }
    ]
  }
];

const competencies = [
  {
    title: "AI & Machine Learning",
    skills: ["LLM Integration (GPT · Gemini · Claude)", "RAG Pipelines", "Prompt Engineering", "Embeddings & Vector Search", "Research Agents"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "HTML / CSS"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["PostgreSQL · pgvector", "Puppeteer", "Exa API", "Tableau", "Epicor ERP", "Excel Analytics"],
  },
  {
    title: "Professional Skills",
    skills: ["Technical Research", "Content Development", "UX & Information Design", "Stakeholder Communication"],
  },
];

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
                <img className="exp-company-logo" src={exp.logo} alt={`${exp.company} logo`} />
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
