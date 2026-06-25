import uraLogo from '../../assets/images/ura_logo.png';
import elipsisLogo from '../../assets/images/ellipsis_logo.png';
import kangiitenLogo from '../../assets/images/kangiiten_logo.png';
import oop from '../../assets/images/oop_logo.png';
import cristiano from '../../assets/images/cristiano_logo.png';
import wildfireLogo from '../../assets/images/wildfire_logo.png';
// real application screenshots
import foodmapShot from '../../assets/images/Foodmap.png';
import portfolioAnalysisShot from '../../assets/images/portfolio_analysis.png';
import historyShot from '../../assets/images/history.png';
import macsShot from '../../assets/images/macs.jpg';
import personalPortfolioShot from '../../assets/images/personalportfolio.png';
import worldcupShot from '../../assets/images/worldcup.png';

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
    title: "FIFA World Cup 2026 — Live Tracker",
    description: "A live scoreboard for the 2026 World Cup: real-time scores, group standings, and the knockout bracket. A static frontend polls a Vercel serverless function that proxies FIFA's public API (sidestepping CORS), normalizes and edge-caches the feed, and falls back to a bundled sample if the upstream is down. Upcoming fixtures show win/draw/loss bars from an offline Python prediction pipeline (Elo + Poisson + XGBoost meta-learner), and a Monte-Carlo simulation of the full tournament drives live title odds — both joined onto the feed by FIFA match ID and refreshed daily via GitHub Actions.",
    link: "https://world-cup-monitor-kappa.vercel.app/",
    type: "both",
    featured: true,
    tags: ["JavaScript", "Vercel Serverless", "Python", "XGBoost", "Monte Carlo", "GitHub Actions"],
    image: worldcupShot
  },
  {
    title: "Singapore Food Map",
    description: "A Vue 3 application for tracking and rating food places in Singapore with interactive Google Maps integration. Features a tier-based rating system (S–F), category filtering by cuisine, an 'Up to you' spin wheel for random picks, admin-only restaurant management, and a public thumbs up/down voting system. Built with a Node.js/Express serverless backend on Vercel and a PostgreSQL (Neon) database with real-time data synchronization.",
    link: "https://food-map-chi.vercel.app/",
    github: "https://github.com/htlee1999/food_map",
    type: "both",
    featured: true,
    tags: ["Vue 3", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google Maps API", "Vercel"],
    image: foodmapShot
  },
  {
    title: "Portfolio Analysis Dashboard",
    description: "Interactive Streamlit app for building a stock portfolio, fetching live market data from Yahoo Finance, and visualizing performance with Plotly. Features portfolio builder with multi-currency support, dashboard overview with key metrics and allocation charts, detailed analysis comparing against S&P 500, and comprehensive data management tools.",
    link: "https://htlee1999-portfolio-dashboard-portfolio-vrviy0.streamlit.app/Portfolio_Builder",
    github: "https://github.com/htlee1999/Portfolio_Dashboard",
    type: "both",
    featured: true,
    tags: ["Python", "Streamlit", "yfinance", "Plotly", "Financial Analysis", "Data Visualization"],
    image: portfolioAnalysisShot
  },
  {
    title: "History Project - Interactive Timeline",
    description: "Created an interactive historical timeline application showcasing major events and developments. Features dynamic visualizations, responsive design, and smooth animations for exploring historical content in an engaging way.",
    link: "https://htlee1999.github.io/history_project/",
    github: "https://github.com/htlee1999/history_project",
    type: "both",
    tags: ["React", "Interactive Timeline", "Data Visualization", "GitHub Pages"],
    image: historyShot
  },
  {
    title: "MACS Assistant - AI-Powered FAQ Drafter",
    description: "Developed an AI-powered FAQ response drafter for McDonald's using Next.js, AI SDK, and shadcn/ui. The application helps generate appropriate responses to customer inquiries with relevant data, featuring a Notion-like editor for easy content editing. Implemented with Google's Gemini Flash 2.0 model while supporting multiple AI providers through the unified AI SDK. Contact me for the login credentials.",
    link: "https://macs-assistant.vercel.app/",
    github: "https://github.com/htlee1999/macs-assistant",
    type: "both",
    featured: true,
    tags: ["Next.js", "AI SDK", "Tailwind CSS", "Vercel", "Gemini", "shadcn/ui"],
    image: macsShot
  },
  {
    title: "Personal Portfolio Website",
    description: "Developed a responsive, modern portfolio website using React.js to showcase my projects, skills, and experience. Implemented custom animations and interactive elements to enhance user experience.",
    github: "https://github.com/htlee1999/HTportfolio",
    type: "github",
    tags: ["React.js", "Portfolio", "Frontend"],
    image: personalPortfolioShot
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

// Smaller, self-contained tools and experiments. Rendered as compact,
// image-free cards rather than the full project cards above.
export const miniProjects = [
  {
    title: "Life Metrics Lab",
    description: "A small React/Vite tool for playing with time. \"10k Quest\" tracks your progress toward living 10,000 days and projects the date you'll reach it, while \"Age Gap\" compares two birth dates down to the day — even reframing the difference as how far Earth has travelled around the Sun in between.",
    link: "https://htlee1999.github.io/random_age_project/",
    github: "https://github.com/htlee1999/random_age_project",
    type: "both",
    tags: ["React", "Vite", "Tailwind CSS"]
  },
  {
    title: "Word Flipper",
    description: "A tiny single-file text toy that flips text three ways — reverse every character, reverse the word order, or reverse the letters within each word — with one-click copy to clipboard.",
    link: "https://htlee1999.github.io/word-flipper/",
    github: "https://github.com/htlee1999/word-flipper",
    type: "both",
    tags: ["HTML", "JavaScript", "Vanilla JS"]
  }
];
