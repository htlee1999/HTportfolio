// App.js
import "./styles.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/header";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import InterestsActivities from "./components/Interests/InterestsActivities";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div id="outer-container" className="app-container">
        <motion.div 
          className="progress-bar" 
          style={{ 
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--accent)',
            transformOrigin: '0%',
            zIndex: 1001
          }} 
        />
        <div className="dotted-background"></div>
        <Sidebar />
        <main id="page-wrap" className="main-content">
          <Header />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/interests" element={<InterestsActivities />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
}