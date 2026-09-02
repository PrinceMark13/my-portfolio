import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Footer from './Footer';

/*
// Original Personal Projects content — hidden temporarily until projects
// are added. Restore by uncommenting below and removing the Coming Soon
// section above the Footer.
import CategoryPage from './CategoryPage';
import { personalProjects } from './Portfolio';

function PersonalProjects() {
  return (
    <CategoryPage
      pageId="personal-projects-page"
      title="Personal Projects"
      projects={personalProjects}
    />
  );
}
*/

function PersonalProjects() {
  return (
    <div className="portfolio" id="personal-projects-page">
      <div className="category-page-nav">
        <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
      </div>
      <h1 className="portfolio-title">PERSONAL PROJECTS</h1>

      <div className="coming-soon-wrapper">
        <div className="coming-soon-card">
          <h2 className="coming-soon-title">Coming Soon</h2>
          <p className="coming-soon-description">
            I'm currently working on personal projects that I'll be sharing here soon.
            Stay tuned for updates.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PersonalProjects;
