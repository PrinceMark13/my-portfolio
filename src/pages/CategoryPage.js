import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Portfolio.css';
import Footer from './Footer';

export const categoryFilterOptions = [
  'All',
  'Web App Development',
  'Desktop App Development',
  'Mobile App Development',
  'UI/UX Design',
  'Graphic Design'
];

function CategoryPage({ pageId, title, projects, getProjectPath }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio" id={pageId}>
      <div className="category-page-nav">
        <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
      </div>
      <h1 className='portfolio-title'>{title.toUpperCase()}</h1>

      <div className="filter-bar">
        {categoryFilterOptions.map((option) => (
          <button
            key={option}
            className={`filter-button${activeFilter === option ? ' active' : ''}`}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="academic-projects-content">
        {filteredProjects.length === 0 ? (
          <p className="coming-soon-text">No projects in this category yet.</p>
        ) : (
          <div className="project-cards">
            {filteredProjects.map((project, index) => {
              const detailPath = getProjectPath ? getProjectPath(project) : null;
              const metaParts = [project.details?.year, project.details?.team].filter(Boolean);
              return (
                <div key={index} className="project-card">
                  {detailPath ? (
                    <Link
                      to={detailPath}
                      className="project-card-image"
                      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${project.imgSrc})` }}
                    >
                      <span className="project-card-badge">{project.category}</span>
                      <div className="overlay">
                        <span className="overlay-action">
                          View Details <FaArrowRight />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-image"
                      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${project.imgSrc})` }}
                    >
                      <span className="project-card-badge">{project.category}</span>
                      <div className="overlay">
                        <span className="overlay-action">
                          View Project <FaArrowRight />
                        </span>
                      </div>
                    </a>
                  )}
                  <div className="project-card-body">
                    <h3 className='title-boxed'>{project.title}</h3>
                    <p className='box-description'>{project.description}</p>
                    {metaParts.length > 0 && (
                      <p className="project-card-meta">{metaParts.join(' · ')}</p>
                    )}
                    <p className="project-card-tags">
                      {[project.tech, project.category].filter(Boolean).join(' · ')}
                    </p>
                    {detailPath ? (
                      <Link to={detailPath} className="project-card-link">
                        View Project <FaArrowRight />
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                      >
                        View Project <FaArrowRight />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;
