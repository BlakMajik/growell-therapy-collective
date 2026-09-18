import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Toast } from '../components/Toast';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
    privacyConfirmed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (!formData.privacyConfirmed) {
      setErrorMessage('Please confirm that you have not included confidential health details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowToast(true);
      trackEvent('consultation_submitted', { source: 'contact_form', subject: formData.subject });
    }, 750);
  };

  return (
    <div className="contact-page">
      <SEOHead
        title="Contact GroWell Therapy Collective | Jessica Mouzon"
        description="Get in touch with GroWell Therapy Collective. In-person therapy in North Carolina and secure telehealth across the state."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-sage">Get In Touch</span>
          <h1 className="contact-title">Contact & Locations</h1>
          <p className="lead">
            We are here to answer your questions and help you explore whether therapy, educational advocacy, or parent consultation is right for your family.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Non-PHI Form */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="grid-2 contact-main-grid">
            {/* Left: Contact Info & Practice Hours */}
            <div className="contact-info-col">
              <div className="card card-tint contact-details-card">
                <h2 className="contact-col-heading">Practice Information</h2>
                <p className="contact-col-sub">
                  GroWell Therapy Collective operates on a hybrid care model offering both in-person appointments and statewide virtual telehealth.
                </p>

                <div className="contact-items-stack">
                  <div className="contact-detail-row">
                    <div className="cd-icon-box">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <strong>Office Location</strong>
                      <p>{siteConfig.contact.officeAddress}</p>
                      <p>{siteConfig.contact.city}, {siteConfig.contact.state}</p>
                      <span className="cd-subtag">Serving {siteConfig.contact.serviceArea}</span>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="cd-icon-box">
                      <Mail size={22} />
                    </div>
                    <div>
                      <strong>Direct Email</strong>
                      <p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          onClick={() => trackEvent('email_clicked', { source: 'contact_page' })}
                        >
                          {siteConfig.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="cd-icon-box">
                      <Phone size={22} />
                    </div>
                    <div>
                      <strong>Phone & Inquiries</strong>
                      <p>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          onClick={() => trackEvent('phone_clicked', { source: 'contact_page' })}
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="cd-icon-box">
                      <Clock size={22} />
                    </div>
                    <div>
                      <strong>Practice Hours</strong>
                      <p>{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Consultation Banner Callout */}
                <div className="consult-callout-box">
                  <h4>Ready to schedule a free 15-min consultation?</h4>
                  <p>Book directly through our streamlined consultation scheduling form.</p>
                  <Link to="/consultation" className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>
                    <span>Book a Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: General Non-PHI Inquiry Form */}
            <div className="contact-form-col">
              <div className="card form-container-card">
                <h2 className="contact-col-heading">Send a General Message</h2>
                <p className="contact-col-sub">
                  Have a quick question about our practice or services? Send us a note below.
                </p>

                {/* Non-PHI Warning */}
                <div className="notice-box notice-warning" style={{ margin: '1.25rem 0 1.75rem' }}>
                  <Lock size={20} className="notice-icon" />
                  <div className="notice-content">
                    <p>
                      <strong>Privacy Notice:</strong> Please do NOT submit sensitive medical records, detailed psychiatric history, or school documents through this general contact form.
                    </p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="submission-success-view text-center animate-fade-in">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={44} className="success-check-icon" />
                    </div>
                    <h3>Message Received!</h3>
                    <p style={{ margin: '0.75rem 0 1.5rem' }}>
                      Thank you for reaching out, {formData.name}. We will get back to you within 1–2 business days.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate>
                    {errorMessage && (
                      <div className="notice-box notice-danger">
                        <AlertTriangle size={18} className="notice-icon" />
                        <div className="notice-content"><p>{errorMessage}</p></div>
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Full Name <span className="required-mark">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address <span className="required-mark">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <select
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="General Question">General Practice Question</option>
                        <option value="Therapy Inquiry">Therapy Services (Adolescent / Adult)</option>
                        <option value="Advocacy Inquiry">Educational / IEP Advocacy</option>
                        <option value="Workshops">Workshops & Speaking</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Message <span className="required-mark">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="How can we assist you? Please keep descriptions non-clinical..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="privacy-checkbox-row" style={{ marginTop: '1.25rem' }}>
                      <label className="checkbox-label-container">
                        <input
                          type="checkbox"
                          name="privacyConfirmed"
                          checked={formData.privacyConfirmed}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="checkbox-text">
                          I understand that this form is for general inquiries and I have not included confidential medical or health history. <span className="required-mark">*</span>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg full-width-btn"
                      disabled={isSubmitting}
                      style={{ marginTop: '1.5rem' }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast
        show={showToast}
        type="success"
        title="Message Sent"
        message="Thank you! Jessica Mouzon will respond within 1–2 business days."
        onClose={() => setShowToast(false)}
      />

      <style>{`
        .contact-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .contact-col-heading {
          font-size: 1.45rem;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .contact-col-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 2rem;
        }

        .contact-details-card, .form-container-card {
          padding: 3rem 2.5rem;
        }

        .contact-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .contact-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .cd-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-detail-row strong {
          display: block;
          font-size: 0.96rem;
          color: var(--color-forest);
          margin-bottom: 0.15rem;
        }

        .contact-detail-row p {
          font-size: 0.92rem;
          margin: 0;
        }

        .cd-subtag {
          display: inline-block;
          font-size: 0.78rem;
          color: var(--color-text-light);
          font-style: italic;
          margin-top: 0.2rem;
        }

        .consult-callout-box {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }

        .consult-callout-box h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .consult-callout-box p {
          font-size: 0.88rem;
          margin: 0;
        }

        .checkbox-label-container {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          cursor: pointer;
        }

        .checkbox-label-container input {
          margin-top: 0.2rem;
          accent-color: var(--color-terracotta);
        }

        .checkbox-text {
          font-size: 0.84rem;
          line-height: 1.45;
          color: var(--color-text-main);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-details-card, .form-container-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};
