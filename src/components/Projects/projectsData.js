import uraLogo from '../../assets/images/ura_logo.png';
import elipsisLogo from './ellipsis_logo.png';
import kangiitenLogo from './kangiiten_logo.png';
import oop from './oop_logo.png';
import cristiano from './cristiano_logo.png';
import wildfireLogo from './wildfire_logo.png';
import foodmapImg from './Foodmap.png';
import macsImg from './macs.jpg';
import personalPortfolioImg from './personalportfolio.png';
import historyImg from './history.png';
import portfolioAnalysisImg from './portfolio_analysis.png';

export const schoolProjects = [
  {
    title: "California Wildfire Statistics Visualization",
    description: "Developed an interactive visualization platform for California wildfire statistics using D3.js, React, and Node.js. The project features comprehensive data analysis and dynamic visualizations that help users understand wildfire patterns, affected areas, and environmental impact. Implemented with Docker for seamless deployment and scalability.",
    link: "/Final-Report.pdf",
    github: "https://github.com/htlee-2021/geoviz-dashboard",
    type: "both",
    tags: ["D3.js", "React", "Node.js", "Docker", "Data Visualization"],
    image: wildfireLogo
  },
  {
    title: "Final Year Project - URA GenAI Building Generator",
    description: "Research and development project focused on generating building blocks using GenAI solutions for URA. The project involves performing classification tasks on building polygons and conducting User Acceptance Testing (UAT) for end users.",
    link: "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ETGvO_KsFylPsNAUth8zgTUBU0p9OZA9nbbeoq1YUlAHbw?e=hqaymn",
    type: "pdf",
    tags: ["GenAI", "URA", "Research", "Classification"],
    image: uraLogo
  },
  {
    title: "Ellipsis Tech Series Hackathon - Job Shadowing Platform (Top 10)",
    description: "Developed an innovative job shadowing platform that connects students with professionals for short-term shadowing experiences, helping students make more informed career decisions. Built using Bootstrap & Vue.js. Our team achieved Top 10 placement in the hackathon.",
    link: "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/EUHR7_I1rJpBiom15u4a3Q0Bw3IBvsfrp_cT7p7F08J-KQ",
    type: "pdf",
    tags: ["Hackathon", "Vue.js", "Bootstrap", "Top 10"],
    image: elipsisLogo
  },
  {
    title: "Kangiiten Spreadsheet Analysis",
    description: "Conducted comprehensive data analysis for Kangiiten's Shopify data, including data cleaning, exploration, and visualization. Implemented Time-Series analysis to forecast demand and optimize resource allocation. Tools used: Excel, Power BI, and Python for data processing.",
    link: "https://smu-my.sharepoint.com/:b:/g/personal/htlee_2021_scis_smu_edu_sg/ERCe0XMFYJNAnjSK8Vb6dVwBAqx3e9gCpkFiDX4EVhaobA",
    type: "pdf",
    tags: ["Data Analysis", "Excel", "Python"],
    image: kangiitenLogo
  },
  {
    title: "Object Oriented Programming",
    description: "OOP Project focused on implementing key object-oriented principles and design patterns.",
    github: "https://github.com/BryenYeoh/IS-442-Portfolio",
    type: "github",
    tags: ["Java", "OOP", "Design Patterns"],
    image: oop
  }
];

export const personalProjects = [
  {
    title: "Singapore Food Map",
    description: "A Vue 3 application for tracking and rating food places in Singapore with interactive Google Maps integration. Features a tier-based rating system (S–F), category filtering by cuisine, an 'Up to you' spin wheel for random picks, admin-only restaurant management, and a public thumbs up/down voting system. Built with a Node.js/Express serverless backend on Vercel and a PostgreSQL (Neon) database with real-time data synchronization.",
    link: "https://food-map-chi.vercel.app/",
    github: "https://github.com/htlee1999/food_map",
    type: "both",
    tags: ["Vue 3", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google Maps API", "Vercel"],
    image: foodmapImg
  },
  {
    title: "Portfolio Analysis Dashboard",
    description: "Interactive Streamlit app for building a stock portfolio, fetching live market data from Yahoo Finance, and visualizing performance with Plotly. Features portfolio builder with multi-currency support, dashboard overview with key metrics and allocation charts, detailed analysis comparing against S&P 500, and comprehensive data management tools.",
    link: "https://htlee1999-portfolio-dashboard-portfolio-vrviy0.streamlit.app/Portfolio_Builder",
    github: "https://github.com/htlee1999/Portfolio_Dashboard",
    type: "both",
    tags: ["Python", "Streamlit", "yfinance", "Plotly", "Financial Analysis", "Data Visualization"],
    image: portfolioAnalysisImg
  },
  {
    title: "History Project - Interactive Timeline",
    description: "Created an interactive historical timeline application showcasing major events and developments. Features dynamic visualizations, responsive design, and smooth animations for exploring historical content in an engaging way.",
    link: "https://v0-history-project-ten.vercel.app/",
    github: "https://github.com/htlee1999/history_project",
    type: "both",
    tags: ["React", "Interactive Timeline", "Data Visualization", "GitHub Pages"],
    image: historyImg
  },
  {
    title: "MACS Assistant - AI-Powered FAQ Drafter",
    description: "Developed an AI-powered FAQ response drafter for McDonald's using Next.js, AI SDK, and shadcn/ui. The application helps generate appropriate responses to customer inquiries with relevant data, featuring a Notion-like editor for easy content editing. Implemented with Google's Gemini Flash 2.0 model while supporting multiple AI providers through the unified AI SDK. Contact me for the login credentials.",
    link: "https://macs-assistant.vercel.app/",
    github: "https://github.com/htlee1999/macs-assistant",
    type: "both",
    tags: ["Next.js", "AI SDK", "Tailwind CSS", "Vercel", "Gemini", "shadcn/ui"],
    image: macsImg
  },
  {
    title: "Personal Portfolio Website",
    description: "Developed a responsive, modern portfolio website using React.js to showcase my projects, skills, and experience. Implemented custom animations and interactive elements to enhance user experience.",
    github: "https://github.com/htlee1999/HTportfolio",
    type: "github",
    tags: ["React.js", "Portfolio", "Frontend"],
    image: personalPortfolioImg
  },
  {
    title: "Cristiano Ronaldo Stats Visualisation",
    description: "Created an interactive data visualization dashboard showcasing Cristiano Ronaldo's career statistics. Used Jupyter Notebook and Python to build dynamic charts and graphs that highlight key metrics and achievements throughout his career.",
    github: "https://github.com/htlee1999/CR7Stats",
    type: "github",
    tags: ["Data Visualization", "Jupyter Notebook", "Sports Analytics", "Python"],
    image: cristiano
  }
];
