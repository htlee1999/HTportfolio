import React, { useState } from "react";
import { motion } from "framer-motion";
import "./experience.css";
import uraLogo from './ura_logo.png';
import twimbitLogo from './twimbit_logo.jpeg';
import jumboLogo from './jumbo.png';
import ncodeLogo from './ncode.png';

const TimelineExperience = () => {
  const experiences = [
    {
      id: "ura",
      company: "Urban Redevelopment Authority",
      logo: uraLogo,
      role: "Product Development Intern (AI/ML)",
      period: "Jan 2025 - May 2025",
      // Add this presentation link at the experience level
      presentationLink: {
        url: "/Internship presentation.pdf",
        text: "View Internship Presentation"
      },
      highlights: [
        {
          title: "GPT Chatbot Development",
          description: "Developed front-end components for an in-house GPT chatbot powered by Gemini 2.5 Pro",
          details: [
            "Conducted comparative testing with Gemini 2.0 Flash, Gemini 2.5 Pro and OpenAI o3/o3-mini models, GPT 4.1/4, o4 mini",
            "Tested with long context and web grounding capabilities for Gemini models",
            "Implemented responsive UI design for optimal display across devices"
          ],
          icon: "💬"
        },
        {
          title: "Email Editor Application",
          description: "Built a Notion-like email editor web application",
          details: [
            "Integrated AI functions powered by GPT-4.1 for content enhancement",
            "Implemented real-time collaborative editing features"
          ],
          icon: "✉️"
        },
        {
          title: "Prompt Engineering",
          description: "Applied prompt engineering techniques to optimize AI-generated responses for business use cases",
          details: [],
          icon: "🧠"
        },
        {
          title: "Front-end Development",
          description: "Utilized Next.JS, HTML, and TypeScript to build modular and maintainable front-end components",
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
      period: "May 2023 - July 2023",
      highlights: [
        {
          title: "Fintech Research",
          description: "Researched and contributed to articles on emerging financial technologies",
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
          description: "Transformed technical presentations into accessible blog content, improving content reach",
          details: [],
          icon: "📝"
        },
        {
          title: "Chatbot Testing",
          description: "Provided user testing and feedback for Twimbit's ChatGPT-powered website chatbot",
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
      period: "Mar 2018 - Sep 2018",
      highlights: [
        {
          title: "Mobile App Testing",
          description: "Conducted comprehensive UI/UX testing for new mobile application",
          details: [],
          icon: "📱"
        },
        {
          title: "ERP System Management",
          description: "Digitized over 100+ physical recipes into the Epicor ERP system and managed menu pricing across nationwide POS systems",
          details: [],
          icon: "🗄️"
        },
        {
          title: "IT Support",
          description: "Supported company-wide Microsoft Office version upgrade",
          details: [],
          icon: "🖥️"
        },
        {
          title: "Data Analysis",
          description: "Applied advanced Excel formulas for data analysis and reporting",
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
      period: "Jan 2017 - Dec 2017",
      highlights: [
        {
          title: "Web Content Management",
          description: "Managed website content updates and maintenance",
          details: [],
          icon: "🌐"
        },
        {
          title: "Digital Media",
          description: "Utilized Photoshop for professional photo editing and conducted product photography sessions",
          details: [],
          icon: "📷"
        },
        {
          title: "UX Design",
          description: "Implemented information design principles to enhance user experience",
          details: [],
          icon: "🎨"
        }
      ]
    }
  ];

  const [expandedHighlights, setExpandedHighlights] = useState({});

  const toggleHighlight = (expId, highlightIndex) => {
    setExpandedHighlights(prev => {
      const key = `${expId}-${highlightIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  const isHighlightExpanded = (expId, highlightIndex) => {
    const key = `${expId}-${highlightIndex}`;
    return expandedHighlights[key];
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={experience.id}>
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
            
            <div className="timeline-connector">
              {index < experiences.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <motion.div 
              className="timeline-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-header">
                <div className="company-logo">
                  <img src={experience.logo} alt={`${experience.company} logo`} />
                </div>
                <div className="company-info">
                  <h3>{experience.company}</h3>
                  <h4>{experience.role}</h4>
                  <div className="period">{experience.period}</div>
                  
                  {/* Add presentation link below period if it exists */}
                  {experience.presentationLink && (
                    <a 
                      className="presentation-link"
                      href={experience.presentationLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📊 {experience.presentationLink.text}
                    </a>
                  )}
                </div>
              </div>
              
              <div className="experience-highlights">
                {experience.highlights.map((highlight, highlightIndex) => (
                  <motion.div 
                    className="highlight-item"
                    key={highlightIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + highlightIndex * 0.05 }}
                  >
                    <div 
                      className="highlight-header"
                      onClick={() => highlight.details.length > 0 && toggleHighlight(experience.id, highlightIndex)}
                    >
                      <span className="highlight-icon">{highlight.icon}</span>
                      <h5>{highlight.title}</h5>
                      {highlight.details.length > 0 && (
                        <span className={`expand-icon ${isHighlightExpanded(experience.id, highlightIndex) ? 'expanded' : ''}`}>
                          ▼
                        </span>
                      )}
                    </div>
                    
                    <p className="highlight-description">{highlight.description}</p>
                    
                    {highlight.details.length > 0 && isHighlightExpanded(experience.id, highlightIndex) && (
                      <motion.ul 
                        className="highlight-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {highlight.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </motion.ul>
                    )}
                    
                    {highlight.link && (
                      <a 
                        className="highlight-link"
                        href={highlight.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 {highlight.link.text}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;