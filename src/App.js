import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './pages/ThemeContext';
import Header from './Header';
// import Navbar from './pages/Navbar';
// import Picture from './pages/Picture';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import AcademicProjects from './pages/AcademicProjects';
import AcademicProjectDetail from './pages/AcademicProjectDetail';
import ThesisCapstone from './pages/ThesisCapstone';
import OjtInternship from './pages/OjtInternship';
import PersonalProjects from './pages/PersonalProjects';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/my-portfolio">
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

function MainContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <div className="app-main">
        <Header showNavbar={!isHomePage} />
          {/* <Navbar /> {/*Navigation bar is always displayed} */}
          {/* <Picture /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/academic-projects" element={<AcademicProjects />} />
            <Route path="/portfolio/academic-projects/:slug" element={<AcademicProjectDetail />} />
            <Route path="/portfolio/thesis-capstone" element={<ThesisCapstone />} />
            <Route path="/portfolio/ojt-internship" element={<OjtInternship />} />
            <Route path="/portfolio/personal-projects" element={<PersonalProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
     </div>
   </div>
  );
}

export default App;
