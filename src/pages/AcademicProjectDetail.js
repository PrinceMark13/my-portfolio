import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaGithub, FaPlay, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import './Portfolio.css';
import { academicProjects } from './Portfolio';
import Footer from './Footer';
import VideoThumbnail from './VideoThumbnail';
import TechIcon from './TechIcon';

function AcademicProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const project = academicProjects.find((p) => p.slug === slug);
  const otherProjects = project
    ? academicProjects.filter((p) => p.slug !== slug).slice(0, 6)
    : [];

  // Gallery shows only real screenshots — no padding with placeholders.
  // A project can set `noVideo: true` to omit the video tile entirely.
  // A project can also set `singlePreview: true` to skip the grid entirely
  // and show its one real screenshot as a single large image instead.
  // Uses optional chaining so this stays safe (and hooks below can still run
  // unconditionally) even when no matching project is found for the slug.
  const realScreenshots = project?.screenshots || [];
  const isSinglePreview = Boolean(project?.singlePreview);
  const screenshotSlots = isSinglePreview
    ? realScreenshots.slice(0, 1).map((src) => ({ type: 'image', src }))
    : realScreenshots.map((src) => ({ type: 'image', src }));
  let videoSlot = null;
  if (!isSinglePreview) {
    if (project?.video) {
      videoSlot = { type: 'video', src: project.video };
    } else if (project && !project.noVideo) {
      videoSlot = { type: 'placeholder-video' };
    }
  }
  const galleryItems = videoSlot ? [...screenshotSlots, videoSlot] : screenshotSlots;
  // Both real screenshots and a real video (when present) are navigable
  // together in the lightbox via Next/Previous. Placeholder tiles are not
  // real media, so they're excluded from navigation.
  const mediaItems = galleryItems.filter((item) => item.type === 'image' || item.type === 'video');

  const showPrevImage = () => {
    setLightboxIndex((i) => (i - 1 + mediaItems.length) % mediaItems.length);
  };
  const showNextImage = () => {
    setLightboxIndex((i) => (i + 1) % mediaItems.length);
  };

  // This useEffect must stay above the early return below — React Hooks
  // have to run in the same order on every render, so they can never sit
  // after a conditional return.
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight' && mediaItems.length > 1) showNextImage();
      else if (e.key === 'ArrowLeft' && mediaItems.length > 1) showPrevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, mediaItems.length]);

  if (!project) {
    return (
      <div className="portfolio" id="academic-project-detail-page">
        <div className="category-page-nav">
          <Link to="/portfolio/academic-projects" className="back-link">&larr; Back to Academic Projects</Link>
        </div>
        <p className="coming-soon-text">Project not found.</p>
        <Footer />
      </div>
    );
  }

  const techTags = (project.techTags && project.techTags.length > 0)
    ? project.techTags
    : [project.tech].filter(Boolean);

  const hasActions = Boolean(project.demoLink || project.githubLink);

  return (
    <div className="portfolio" id="academic-project-detail-page">
      <div className="category-page-nav">
        <Link to="/portfolio/academic-projects" className="back-link">&larr; Back to Academic Projects</Link>
      </div>

      {/* Hero: image only by default — hovering reveals title, description,
          tech tags, project type / category, and demo/GitHub links (if set) */}
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

            {techTags.length > 0 && (
              <div className="tech-icons-row">
                {techTags.map((tag) => (
                  <TechIcon key={tag} label={tag} />
                ))}
              </div>
            )}

            <p className="project-detail-meta">
              {project.details.projectType} &middot; {project.details.category}
            </p>

            {hasActions && (
              <div className="project-actions">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-action-btn primary" onClick={(e) => e.stopPropagation()}>
                    <FaPlay /> View Live Demo &#8599;
                  </a>
                )}
                {!project.demoLink && project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-action-btn primary" onClick={(e) => e.stopPropagation()}>
                    <FaPlay /> View Preview Video &#8599;
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-action-btn" onClick={(e) => e.stopPropagation()}>
                    <FaGithub /> GitHub &#8599;
                  </a>
                )}
              </div>
            )}

            {isSinglePreview && mediaItems.length > 0 && !hasActions && (
              <div className="project-actions">
                <button
                  type="button"
                  className="project-action-btn primary"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(0); }}
                >
                  <FaExpand /> View Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Summary Bar */}
      <div className="project-section">
        <div className="project-summary-bar">
          {project.details.year && (
            <div className="project-summary-item">
              <span className="project-summary-label">Year</span>
              <span className="project-summary-value">{project.details.year}</span>
            </div>
          )}
          {project.details.team && (
            <div className="project-summary-item">
              <span className="project-summary-label">Team</span>
              <span className="project-summary-value">{project.details.team}</span>
            </div>
          )}
          {project.details.role && (
            <div className="project-summary-item">
              <span className="project-summary-label">Role</span>
              <span className="project-summary-value">{project.details.role}</span>
            </div>
          )}
          {project.details.category && (
            <div className="project-summary-item">
              <span className="project-summary-label">Category</span>
              <span className="project-summary-value">{project.details.category}</span>
            </div>
          )}
        </div>
      </div>

      {/* Custom Process Section for Cloning Project */}
      {project.slug === 'cloning' && (
        <div className="project-section">
          <h2 className="project-section-title">The Process</h2>
          <p className="cloning-process-intro">
            Six separate photos were taken, each with me in a different position within the same scene. These were then composited in Adobe Photoshop to create the final cloning effect.
          </p>
          <div className="cloning-source-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                type="button"
                className="cloning-source-item"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Cloning/${num}.jpg)` }}
                onClick={() => {
                  const idx = mediaItems.findIndex((m) => m.src === `/Cloning/${num}.jpg`);
                  if (idx !== -1) setLightboxIndex(idx);
                }}
                aria-label={`View source photo ${num}`}
              />
            ))}
          </div>
          <div className="cloning-arrow">
            <span>&#8595;</span>
          </div>
          <div className="cloning-final-wrapper">
            <button
              type="button"
              className="cloning-final-item"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Cloning/finalpic.png)` }}
              onClick={() => {
                const idx = mediaItems.findIndex((m) => m.src === '/Cloning/finalpic.png');
                if (idx !== -1) setLightboxIndex(idx);
              }}
              aria-label="View final result"
            />
          </div>
        </div>
      )}

      {/* Project Preview / Gallery — skipped for single-preview projects
          (hero already displays the image) and for Cloning (process section
          already shows all images) */}
      {!isSinglePreview && project.slug !== 'cloning' && (
      <div className="project-section">
        <h2 className="project-section-title">Project Preview</h2>
        <div className="project-gallery">
          {galleryItems.map((item, index) => {
            if (item.type === 'image') {
              return (
                <button
                  key={index}
                  type="button"
                  className="project-gallery-item"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${item.src})`, border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => setLightboxIndex(mediaItems.indexOf(item))}
                  aria-label={`View screenshot ${index + 1} of ${project.title}`}
                />
              );
            }
            if (item.type === 'video') {
              return (
                <button
                  key={index}
                  type="button"
                  className="project-gallery-item project-gallery-video"
                  style={{ border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => setLightboxIndex(mediaItems.indexOf(item))}
                  aria-label={`Play preview video for ${project.title}`}
                >
                  <VideoThumbnail src={process.env.PUBLIC_URL + item.src} />
                </button>
              );
            }
            if (item.type === 'placeholder-video') {
              return (
                <div key={index} className="project-gallery-item project-gallery-placeholder">
                  <FaPlay className="placeholder-icon" />
                  <span>Video coming soon</span>
                </div>
              );
            }
            return (
              <div key={index} className="project-gallery-item project-gallery-placeholder">
                <span>Screenshot coming soon</span>
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* About */}
      <div className="project-section">
        <h2 className="project-section-title">About the Project</h2>
        <div className="project-about-card">
          {project.about.split('\n\n').map((paragraph, index) => (
            <p className="project-about-text" key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      {project.details.responsibilities && (
        <div className="project-section">
          <h2 className="project-section-title">Responsibilities</h2>
          <div className="project-responsibilities-card">
            <p className="project-responsibilities-text">{project.details.responsibilities}</p>
          </div>
        </div>
      )}

      {/* Technologies */}
      {techTags.length > 0 && (
        <div className="project-section">
          <h2 className="project-section-title">Technologies</h2>
          <div className="project-tech-panel">
            <div className="tech-icons-row">
              {techTags.map((tag) => (
                <TechIcon key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* More Academic Projects */}
      {otherProjects.length > 0 && (
        <div className="project-section more-projects-section">
          <h2 className="project-section-title">More Academic Projects</h2>
          <div className="project-cards">
            {otherProjects.map((p) => {
              const metaParts = [p.details?.year, p.details?.team].filter(Boolean);
              return (
                <div key={p.slug} className="project-card">
                  <button
                    type="button"
                    className="project-card-image"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${p.imgSrc})`, cursor: 'pointer', border: 'none', padding: 0, width: '100%' }}
                    onClick={() => navigate(`/portfolio/academic-projects/${p.slug}`)}
                    aria-label={`View ${p.title} project details`}
                  >
                    <span className="project-card-badge">{p.category}</span>
                    <div className="overlay">
                      <span className="overlay-action">
                        View Details <FaChevronRight />
                      </span>
                    </div>
                  </button>
                  <div className="project-card-body">
                    <h3 className='title-boxed'>{p.title}</h3>
                    <p className='box-description'>{p.description}</p>
                    {metaParts.length > 0 && (
                      <p className="project-card-meta">{metaParts.join(' · ')}</p>
                    )}
                    <p className="project-card-tags">
                      {[p.tech, p.category].filter(Boolean).join(' · ')}
                    </p>
                    <Link to={`/portfolio/academic-projects/${p.slug}`} className="project-card-link">
                      View Project <FaChevronRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="view-all-row">
            <Link to="/portfolio/academic-projects" className="view-all-link">View All &rarr;</Link>
          </div>
        </div>
      )}

      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && mediaItems[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            &times;
          </button>

          {mediaItems.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
          )}

          {mediaItems[lightboxIndex].type === 'video' ? (
            <video
              src={process.env.PUBLIC_URL + mediaItems[lightboxIndex].src}
              controls
              autoPlay
              className="lightbox-video"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + mediaItems[lightboxIndex].src}
              alt="Project screenshot enlarged"
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {mediaItems.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); showNextImage(); }}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          )}

          {mediaItems.length > 1 && (
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {mediaItems.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AcademicProjectDetail;
