import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './Resume.css';
import Footer from './Footer';
import TechIcon from './TechIcon';

const education = [
  {
    school: 'Divine Mercy College Foundation Inc.',
    period: '2022 – 2026',
    degree: 'Bachelor of Science in Information Technology'
  },
  {
    school: 'AMA Caloocan Campus',
    period: '2020 – 2022',
    degree: 'ICT-Animation'
  },
  {
    school: 'Tugatog National High School',
    period: '2016 – 2020',
    degree: 'Junior High School'
  },
  {
    school: 'Epifanio Delos Santos Elementary School',
    period: '2010 – 2016',
    degree: 'Elementary'
  }
];

const certificates = [
  {
    title: 'Academic Achievements',
    viewAllPdf: '/certificates/academic-honors-all.pdf',
    items: [
      { text: 'Academic Distinction — Commencement Batch 2026', pdf: '/certificates/academic-honors-all.pdf', page: 1 },
      { text: 'Dean\'s List — BSIT, 1st Semester, S.Y. 2025–2026', pdf: '/certificates/academic-honors-all.pdf', page: 2 },
      { text: 'Dean\'s List — BSIT, 2nd Semester, S.Y. 2024–2025', pdf: '/certificates/academic-honors-all.pdf', page: 3 },
      { text: 'Dean\'s List — BSIT, 1st Semester, S.Y. 2023–2024', pdf: '/certificates/academic-honors-all.pdf', page: 4 },
      { text: 'Dean\'s List — BSIT, 2nd Semester, S.Y. 2022–2023', pdf: '/certificates/academic-honors-all.pdf', page: 5 },
      { text: 'Dean\'s List — BSIT, 1st Semester, S.Y. 2022–2023', pdf: '/certificates/academic-honors-all.pdf', page: 6 },
      { text: 'Grade 12 ICT (Animation) – Academic Excellence 2020–2021', pdf: '/certificates/academic-honors-all.pdf', page: 7 }
    ]
  },
  {
    title: 'Webinars & Seminars',
    viewAllPdf: '/certificates/webinars-seminars-all.pdf',
    items: [
      { text: 'DICT Region V: Basic Python Programming', pdf: '/certificates/webinars-seminars-all.pdf', page: 1 },
      { text: 'AI Ready ASEAN: Hour of Code with ASEAN Youth Organization (AYO)', pdf: '/certificates/webinars-seminars-all.pdf', page: 2 },
      { text: 'Network Configuration and Troubleshooting Essentials', pdf: '/certificates/webinars-seminars-all.pdf', page: 3 },
      { text: 'Blockchain Unleashed: Powering a Decentralized Future!', pdf: '/certificates/webinars-seminars-all.pdf', page: 4 },
      { text: 'The Hacker\'s Journey: A Guide to Getting into Cybersecurity, organized by Qubit', pdf: '/certificates/webinars-seminars-all.pdf', page: 5 },
      { text: 'Infosession: Stardust and Stride (UI/UX Webinar)', pdf: '/certificates/webinars-seminars-all.pdf', page: 6 },
      { text: 'Arduino for Beginners: Basics of Electronics and Coding', pdf: '/certificates/webinars-seminars-all.pdf', page: 7 },
      { text: 'Application of AI at the Edge', pdf: '/certificates/webinars-seminars-all.pdf', page: 8 },
      { text: 'Automation and Mechatronics in Power System', pdf: '/certificates/webinars-seminars-all.pdf', page: 9 },
      { text: 'Perspective of an ASEAN Engineer on AI in Engineering Education', pdf: '/certificates/webinars-seminars-all.pdf', page: 10 },
      { text: 'IT Convention 2024: The Future of IT and Emerging Technologies (UE-Caloocan, 9 Hours)', pdf: '/certificates/webinars-seminars-all.pdf', page: 11 },
      { text: 'Network Security', pdf: '/certificates/webinars-seminars-all.pdf', page: 12 },
      { text: 'Top Emerging Technology Trends', pdf: '/certificates/webinars-seminars-all.pdf', page: 13 }
    ]
  },
  {
    title: 'Course Completions',
    viewAllPdf: '/certificates/course-completions-all.pdf',
    items: [
      { text: 'Network Defense', pdf: '/certificates/course-completions-all.pdf', page: 1 },
      { text: 'Introduction to Cybersecurity', pdf: '/certificates/course-completions-all.pdf', page: 2 },
      { text: 'MATLAB Onramp', pdf: '/certificates/course-completions-all.pdf', page: 3 },
      { text: 'Python Essentials 2', pdf: '/certificates/course-completions-all.pdf', page: 4 },
      { text: 'Python Essentials 1', pdf: '/certificates/course-completions-all.pdf', page: 5 }
    ]
  }
];

const skills = {
  coding: {
    title: 'Coding & Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'C#', 'C++', 'Python Flask', 'React.js', 'MySQL']
  },
  software: {
    title: 'Software & Tools',
    items: ['Adobe Photoshop', 'Figma', 'Microsoft Office', 'AutoCAD', 'Krita', 'MATLAB', 'CapCut', 'Visual Studio Code', 'Visual Studio']
  },
  hardware: {
    title: 'Hardware & Installation',
    items: ['Basic Troubleshooting', 'RJ45 Installation', 'Windows OS Installation']
  }
};

const Resume = () => {
  return (
    <div className="portfolio" id="resume-page">
      <h1 className="portfolio-title">RESUME</h1>

      <div className="resume-content">
        {/* Education Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-timeline">
            {education.map((item, index) => (
              <div key={index} className="resume-timeline-item">
                <div className="resume-timeline-dot" />
                <div className="resume-timeline-content">
                  <span className="resume-period">{item.period}</span>
                  <h3 className="resume-school">{item.school}</h3>
                  <p className="resume-degree">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Certificates & Achievements</h2>
          <div className="resume-certificates-grid">
            {certificates.map((section, index) => (
              <div key={index} className="resume-certificate-card">
                <div className="resume-certificate-header">
                  <h3 className="resume-certificate-title">{section.title}</h3>
                  <a
                    href={section.viewAllPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-view-all-btn"
                  >
                    View All <FaExternalLinkAlt />
                  </a>
                </div>
                <ul className="resume-certificate-list">
                  {section.items.map((item, i) => (
                    <li key={i} className="resume-certificate-item">
                      <span className="resume-certificate-text">{item.text}</span>
                      <a
                        href={item.page ? `${item.pdf}#page=${item.page}` : item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-certificate-link"
                        title={`View ${item.text}`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills-grid">
            {Object.values(skills).map((skill, index) => (
              <div key={index} className="resume-skill-card">
                <h3 className="resume-skill-title">{skill.title}</h3>
                <div className="resume-skill-icons">
                  {skill.items.map((item, i) => (
                    <TechIcon key={i} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="resume-section resume-download-section">
          <div className="resume-download-card">
            <h2 className="resume-download-title">Download Resume</h2>
            <p className="resume-download-text">
              Click the button below to download my resume in PDF format.
            </p>
            <a
              href="/resume.pdf"
              download="Resume.pdf"
              className="resume-download-button"
            >
              <FaDownload /> Download PDF
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
