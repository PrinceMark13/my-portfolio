import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaMedal } from 'react-icons/fa';
import './Portfolio.css';
import { ojtInternshipProjects } from './Portfolio';
import Footer from './Footer';
import TechIcon from './TechIcon';

const activityIcons = {
  'inventory': '\uD83D\uDCE6',
  'data-encoding': '\uD83D\uDCDD',
  'individual-website': '\uD83C\uDF10',
  'team-ecommerce': '\uD83D\uDED2',
  'cctv': '\uD83D\uDCF9',
  'uiux': '\uD83C\uDFA8',
  'hosting': '\u2601\uFE0F',
  'testing': '\u2705'
};

function OjtInternship() {
  const data = ojtInternshipProjects[0];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const showPrev = () => {
    if (!data) return;
    setLightboxIndex((i) => (i - 1 + data.photos.length) % data.photos.length);
  };
  const showNext = () => {
    if (!data) return;
    setLightboxIndex((i) => (i + 1) % data.photos.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight' && data.photos.length > 1) showNext();
      else if (e.key === 'ArrowLeft' && data.photos.length > 1) showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, data?.photos?.length]);

  if (!data) {
    return (
      <div className="portfolio" id="ojt-internship-page">
        <div className="category-page-nav">
          <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
        </div>
        <p className="coming-soon-text">No internship experience available yet.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="portfolio" id="ojt-internship-page">
      <div className="category-page-nav">
        <Link to="/portfolio#my-works" className="back-link">&larr; Back to My Works</Link>
      </div>

      {/* Hero */}
      <div className="ojt-hero">
        <div className="ojt-hero-content">
          <div className="ojt-hero-text">
            <h1 className="ojt-hero-title">{data.title}</h1>
            <p className="ojt-hero-company">{data.company}</p>
            <p className="ojt-hero-address">{data.address}</p>
          </div>
          {data.companyLogo && (
            <div className="ojt-hero-logo">
              <img src={process.env.PUBLIC_URL + data.companyLogo} alt={`${data.company} logo`} />
            </div>
          )}
        </div>
      </div>

      {/* Overview */}
      <div className="project-section">
        <h2 className="project-section-title">Overview</h2>
        {data.about.split('\n\n').map((paragraph, index) => (
          <p className="project-about-text" key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Key Projects */}
      <div className="project-section">
        <h2 className="project-section-title">Key Projects</h2>
        <div className="ojt-projects-grid">
          {data.projects.map((project, index) => (
            <div className="ojt-project-card" key={index}>
              {project.image && (
                <div
                  className="ojt-project-image"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${project.image})` }}
                />
              )}
              <div className="ojt-project-body">
                <div className="ojt-project-header">
                  <h3 className="ojt-project-name">{project.name}</h3>
                  <span className="ojt-project-type">{project.type}</span>
                </div>
                <p className="ojt-project-description">{project.description}</p>
                <div className="ojt-project-contributions">
                  <h4 className="ojt-contributions-title">Key Contributions</h4>
                  <ul className="ojt-contributions-list">
                    {project.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {project.techTags && project.techTags.length > 0 && (
                  <div className="tech-icons-row" style={{ justifyContent: 'flex-start' }}>
                    {project.techTags.map((tag) => (
                      <TechIcon key={tag} label={tag} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="project-section">
        <h2 className="project-section-title">Activities & Responsibilities</h2>
        <div className="ojt-activities-grid">
          {data.activities.map((activity, index) => (
            <div className="ojt-activity-card" key={index}>
              <div className="ojt-activity-icon">
                {activityIcons[activity.icon] || '\u2728'}
              </div>
              <h3 className="ojt-activity-title">{activity.title}</h3>
              <p className="ojt-activity-description">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      {data.photos && data.photos.length > 0 && (
        <div className="project-section">
          <h2 className="project-section-title">Pictures at Work</h2>
          <div className="ojt-photo-grid">
            {data.photos.map((photo, index) => (
              <button
                key={index}
                type="button"
                className="ojt-photo-item"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${photo.src})` }}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${photo.caption}`}
              >
                <div className="ojt-photo-caption">
                  <span>{photo.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Certificate */}
      {data.certificate && (
        <div className="project-section">
          <h2 className="project-section-title">Certificate of Completion</h2>
          <div className="ojt-certificate">
            <div className="ojt-certificate-badge">
              <FaMedal className="ojt-certificate-icon" />
            </div>
            <img
              className="ojt-certificate-image"
              src={process.env.PUBLIC_URL + data.certificate.src}
              alt={data.certificate.title}
            />
          </div>
        </div>
      )}

      {/* Internship Details */}
      <div className="project-section">
        <h2 className="project-section-title">Internship Details</h2>
        <ul className="project-details-list">
          <li><strong>Company:</strong> {data.company}</li>
          <li><strong>Year:</strong> {data.details.year}</li>
          <li><strong>Role:</strong> {data.details.role}</li>
          <li><strong>Responsibilities:</strong> {data.details.responsibilities}</li>
        </ul>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && data.photos[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            &times;
          </button>

          {data.photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={process.env.PUBLIC_URL + data.photos[lightboxIndex].src}
              alt={data.photos[lightboxIndex].caption}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{data.photos[lightboxIndex].caption}</p>
          </div>

          {data.photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          )}

          {data.photos.length > 1 && (
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {data.photos.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OjtInternship;
