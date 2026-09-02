import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Footer from './Footer';

const SERVICE_ID = 'service_30obpup';
const TEMPLATE_ID = 'template_t05244b';
const PUBLIC_KEY = 'MVFRNs_zBkewDo8Sl';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="info-grid-compact">
          <div className="info-item">
            <i className="icon bi bi-geo-alt"></i>
            <div>
              <h3>Address</h3>
              <p>Malabon, Philippines</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon bi bi-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>markgubat.13@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon bi bi-share"></i>
            <div>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://github.com/PrinceMark13" aria-label="GitHub"><i className="bi bi-github"></i></a>
                <a href="https://www.facebook.com/PrinceMarkGubat.12.13.2003" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/_nero.exe" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mark-anthony-gubat-062405433/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                aria-label="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                aria-label="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="6"
              placeholder="Message"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status === 'sent' && <p className="form-status success">Message sent successfully!</p>}
          {status === 'error' && <p className="form-status error">Failed to send message. Please try again.</p>}
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
