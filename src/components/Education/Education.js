import AccordionWrapper from './EducationWrapper'; 
import AccordionItem from './EducationItem';
import './Education.css';

const Education = () => {
  const data = [
    {
      "title": "Bachelor of Science (Information Systems) - Singapore Management University",
      "description": `
        <p><strong>Duration:</strong> Aug 2021 – Aug 2025 (Expected)</p>
        <p><strong>Major:</strong> Business Analytics</p>
      `
    },
    {
      "title": "Semester Exchange - Zhejiang University",
      "description": `
        <p><strong>School of Public Affairs</strong></p>
        <p><strong>Duration:</strong> Feb 2024 – Jul 2024</p>
        <p><strong>Courses taken:</strong></p>
        <ul>
          <li>International Law and Relations</li>
          <li>China Public Finance</li>
          <li>Social Science and Cultural Hegemony</li>
          <li>Consumer Neuroscience</li>
          <li>Technology Entrepreneurship</li>
          <li>Academic Writing in Psychology</li>
        </ul>
      `
    },
    {
      "title": "Diploma in Business Information Technology - Ngee Ann Polytechnic",
      "description": `
        <p><strong>Duration:</strong> Jan 2016 - Dec 2019</p>
        <p><strong>Achievements:</strong></p>
        <ul>
          <li>Awarded Tai Sin Prize for Most Outstanding Performance during '6-Month Internship'</li>
          <li>Participated in National Economics & Financial Management Challenge</li>
          <li>Part of Harvard Business School Mentorship Program</li>
        </ul>
      `
    }
  ];
  
  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <h1>Education</h1>
        </div>
        <AccordionWrapper>
          {data.map((item, index) => (
            <AccordionItem key={index} index={index} title={item.title} description={item.description} />
          ))}
        </AccordionWrapper>
      </div>
    </div>
  );
}

export default Education;