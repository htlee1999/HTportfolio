import React, { useState } from 'react';
import './Education.css';

const Icons = {
  School: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
    </svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
};

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const educationData = [
    {
      institution: "Singapore Management University",
      degree: "Bachelor of Science (Information Systems)",
      duration: "Aug 2021 – Aug 2025 (Expected)",
      icon: <Icons.School />,
      details: {
        major: "Business Analytics",
        gpa: "2.68",
        highlights: [
          "Advanced coursework in AI and Machine Learning",
          "Specialization in Business Analytics",
          "Completed projects in GenAI solutions for URA",
          "Strong foundation in Web Development and Programming"
        ],
        keyCourses: [
          "Introduction to Artificial Intelligence",
          "Data Mining and Business Analytics",
          "Machine Learning & Applications",
          "Enterprise Solution Development",
          "Software Project Management",
          "Web Application Development"
        ]
      }
    },
    {
      institution: "Zhejiang University",
      degree: "International Exchange Program",
      duration: "Feb 2024 – Jul 2024",
      icon: <Icons.Building />,
      details: {
        department: "School of Public Affairs",
        courses: [
          "International Law and Relations",
          "China Public Finance",
          "Social Science and Cultural Hegemony",
          "Consumer Neuroscience",
          "Technology Entrepreneurship",
          "Academic Writing in Psychology"
        ]
      }
    },
    {
      institution: "Ngee Ann Polytechnic",
      degree: "Diploma in Business Information Technology",
      duration: "Jan 2016 - Dec 2019",
      icon: <Icons.Award />,
      details: {
        gpa: "3.59",
        achievements: [
          "Tai Sin Prize for Most Outstanding Performance during '6-Month Internship'",
          "Participated in National Economics & Financial Management Challenge",
          "Part of Harvard Business School Mentorship Program"
        ],
        academicHighlights: [
          "Graduated with Distinction (Top 5% of cohort)",
          "Achieved AD (Distinction) grade for 6-Month Internship",
          "Completed Professional Preparation Programme"
        ],
        keyCourses: [
          {
            semester: "Year 1",
            courses: [
              "Business Communication",
              "Information Design in Business",
              "Network & Server Systems",
              "Business Applications",
              "Business Management",
              "Innovation Toolkit"
            ]
          },
          {
            semester: "Year 2",
            courses: [
              "Web Database Applications",
              "Web Development",
              "Business Analytics",
              "Business Systems Analysis & Design",
              "Web & Mobile Applications"
            ]
          },
          {
            semester: "Year 3",
            courses: [
              "Integrated E-Business Systems",
              "Integrated Enterprise Applications",
              "Management Information Systems",
              "Managing eBusiness"
            ]
          }
        ]
      }
    }
  ];

  const renderCourses = (edu) => {
    // Check if it's a simple array of courses or a structured object with years
    if (!edu.details.keyCourses[0]?.semester) {
      return (
        <ul className="education-list">
          {edu.details.keyCourses.map((course, i) => (
            <li key={i} className="education-list-item">{course}</li>
          ))}
        </ul>
      );
    } 

      // If it has semester structure, render by year
      return (
        <div className="education-years">
          {edu.details.keyCourses.map((yearData, i) => (
            <div key={i} className="education-year-section">
              <h4 className="education-year-title">{yearData.semester}</h4>
              <ul className="education-list">
                {yearData.courses.map((course, j) => (
                  <li key={j} className="education-list-item">{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    };

  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="education-header-title">Education Journey</h1>
        <div className="education-header-line"></div>
      </div>

      <div className="education-card-list">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className={`education-card ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="education-card-header"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="education-card-header-content">
                <div className="education-icon-container">
                  {edu.icon}
                </div>
                <div className="education-card-info">
                  <h2 className="education-institution-name">{edu.institution}</h2>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-duration">{edu.duration}</p>
                </div>
                <div className={`education-chevron ${activeIndex === index ? 'active' : ''}`}>
                  <Icons.ChevronDown />
                </div>
              </div>
            </div>

            {activeIndex === index && (
              <div className="education-card-content">
                {edu.details.major && (
                  <div className="education-section">
                    <h3 className="education-section-title">Major</h3>
                    <p>{edu.details.major}</p>
                  </div>
                )}

                {/* {edu.details.gpa && (
                  <div className="education-section">
                    <h3 className="education-section-title">Cumulative GPA</h3>
                    <p>{edu.details.gpa}/4.00</p>
                  </div>
                )} */}

                {edu.details.achievements && (
                  <div className="education-section">
                    <h3 className="education-section-title">Achievements</h3>
                    <ul className="education-list">
                      {edu.details.achievements.map((achievement, i) => (
                        <li key={i} className="education-list-item">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.details.highlights && (
                  <div className="education-section">
                    <h3 className="education-section-title">Academic Highlights</h3>
                    <ul className="education-list">
                      {edu.details.highlights.map((highlight, i) => (
                        <li key={i} className="education-list-item">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.details.keyCourses && (
                  <div className="education-section">
                    <h3 className="education-section-title">Key Courses</h3>
                    {renderCourses(edu)}
                  </div>
                )}

                {edu.details.courses && (
                  <div className="education-section">
                    <h3 className="education-section-title">Exchange Courses</h3>
                    <ul className="education-list">
                      {edu.details.courses.map((course, i) => (
                        <li key={i} className="education-list-item">{course}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;