import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { thesisCapstoneProjects } from './Portfolio';
import Footer from './Footer';
import TechIcon from './TechIcon';

function ThesisCapstone() {
  const project = thesisCapstoneProjects[0];

  if (!project) {
    return (
      <div className="portfolio" id="thesis-capstone-page">
        <div className="category-page-nav">
          <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
        </div>
        <p className="coming-soon-text">No capstone project available yet.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="portfolio" id="thesis-capstone-page">
      <div className="category-page-nav">
        <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
      </div>

      {/* Hero */}
      <div className="project-hero">
        <div
          className="project-hero-image"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${project.imgSrc})` }}
        >
          <div className="project-hero-overlay">
            <h2>{project.title}</h2>
            <p className="project-detail-description">
              {project.description}
            </p>
            {project.techTags.length > 0 && (
              <div className="tech-icons-row">
                {project.techTags.map((tag) => (
                  <TechIcon key={tag} label={tag} />
                ))}
              </div>
            )}
            <p className="project-detail-meta">
              {project.details.projectType} &middot; {project.details.category}
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="project-section">
        <h2 className="project-section-title">Overview</h2>
        {project.about.split('\n\n').map((paragraph, index) => (
          <p className="project-about-text" key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Technologies */}
      {project.techTags.length > 0 && (
        <div className="project-section">
          <h2 className="project-section-title">Technologies</h2>
          <div className="capstone-tech-panel">
            <div className="tech-icons-row">
              {project.techTags.map((tag) => (
                <TechIcon key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Project Flow */}
      {project.flowSteps && project.flowSteps.length > 0 && (
        <div className="project-section">
          <h2 className="project-section-title">Project Flow</h2>
          <div className="capstone-timeline">
            {project.flowSteps.map((step, index) => (
              <div className="capstone-timeline-item" key={index}>
                <div className="capstone-timeline-marker">
                  <div className="capstone-timeline-number">{index + 1}</div>
                </div>
                <div className="capstone-timeline-card">
                  <h3 className="capstone-timeline-title">{step.title}</h3>
                  <p className="capstone-timeline-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sample Flow Video */}
      {project.video && (
        <div className="project-section">
          <h2 className="project-section-title">Sample Flow Video</h2>
          <div className="capstone-video-wrapper">
            <video
              className="capstone-video"
              controls
              preload="metadata"
            >
              <source src={process.env.PUBLIC_URL + project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Project Details */}
      <div className="project-section">
        <h2 className="project-section-title">Project Details</h2>
        <div className="capstone-details-grid">
          {[
            { label: 'Project Type', value: project.details.projectType },
            { label: 'Category', value: project.details.category },
            { label: 'Year', value: project.details.year },
            { label: 'Team', value: project.details.team },
            { label: 'My Role', value: project.details.role },
            { label: 'Responsibilities', value: project.details.responsibilities },
          ].map((item) => (
            <div className="capstone-detail-card" key={item.label}>
              <span className="capstone-detail-label">{item.label}</span>
              <span className="capstone-detail-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ThesisCapstone;
