import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Sparkles, 
  UserCheck, 
  MessageSquare,
  Lock
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Toast } from '../components/Toast';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Email',
    clientRole: 'Adult',
    serviceInterest: 'Therapy',
    consultationFormat: 'Phone',
    generalAvailability: 'Flexible',
    briefGoal: '',
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

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required contact fields.');
      return;
    }

    if (!formData.privacyConfirmed) {
      setErrorMessage('Please confirm that you have not included sensitive medical or health details.');
      return;
    }

    setIsSubmitting(true);
    trackEvent('consultation_started', { service: formData.serviceInterest, format: formData.consultationFormat });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowToast(true);
      trackEvent('consultation_submitted', { 
        service: formData.serviceInterest, 
        role: formData.clientRole,
        format: formData.consultationFormat 
      });
    }, 800);
  };

  return (
    <div className="consultation-page">
      <SEOHead
        title="Start With a Conversation | Book an Initial Consultation"
        description="Schedule an initial consultation with Jessica N. Mouzon, MA, LCMHC to discuss therapy or educational advocacy support. Privacy-safe and confidential."
        canonicalPath="/consultation"
      />

      {/* Header Banner */}
      <section className="section section-bg-muted" style={{ paddingBottom: '2.5rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-terracotta">Initial Consultation</span>
          <h1 className="consultation-title">Start With a Conversation.</h1>
          <p className="lead">
            Taking the first step toward therapy or educational advocacy can feel significant. We offer an initial consultation to answer your questions, understand your needs, and explore whether GroWell is the right fit.
          </p>
        </div>
      </section>

      {/* Main Consultation Form Section */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container container-narrow">
          {/* What to Expect Card */}
          <div className="card card-tint what-to-expect-card">
            <h3 className="expect-title">What Happens During the Initial Consultation?</h3>
            <div className="grid-3 expect-grid">
              <div className="expect-item">
                <CheckCircle2 size={18} className="expect-icon" />
                <span>Discuss what kind of support you are looking for</span>
              </div>
              <div className="expect-item">
                <CheckCircle2 size={18} className="expect-icon" />
                <span>Explore scheduling & hybrid availability</span>
              </div>
              <div className="expect-item">
                <CheckCircle2 size={18} className="expect-icon" />
                <span>Review fee structures & determine next steps</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="consultation-form-wrapper card">
            {isSubmitted ? (
              <div className="submission-success-view text-center animate-fade-in">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-check-icon" />
                </div>
                <h2>Thank You, {formData.firstName}!</h2>
                <p className="lead" style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                  Your consultation request has been received. Jessica N. Mouzon will review your message and reach out via your preferred method ({formData.preferredContactMethod}) within 1–2 business days.
                </p>

                <div className="success-summary-box">
                  <p><strong>Selected Focus:</strong> {formData.serviceInterest}</p>
                  <p><strong>Format:</strong> {formData.consultationFormat} Consultation</p>
                  <p><strong>Contact:</strong> {formData.email} • {formData.phone}</p>
                </div>

                <div className="success-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        preferredContactMethod: 'Email',
                        clientRole: 'Adult',
                        serviceInterest: 'Therapy',
                        consultationFormat: 'Phone',
                        generalAvailability: 'Flexible',
                        briefGoal: '',
                        privacyConfirmed: false,
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate>
                {/* STRICT PRIVACY NOTICE */}
                <div className="notice-box notice-warning">
                  <Lock size={22} className="notice-icon" />
                  <div className="notice-content">
                    <p>
                      <strong>Privacy Notice:</strong> This public form is for initial consultation scheduling only. <strong>Do not submit medical records, detailed health history, diagnoses, medication lists, insurance IDs, or school records through this form.</strong> Clinical details will be gathered later through our encrypted, HIPAA-compliant patient portal.
                    </p>
                  </div>
                </div>

                {errorMessage && (
                  <div className="notice-box notice-danger animate-fade-in">
                    <AlertTriangle size={20} className="notice-icon" />
                    <div className="notice-content">
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Section 1: Contact Information */}
                <h3 className="form-section-title">1. Your Contact Information</h3>
                
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">
                      First Name <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      placeholder="e.g. Sarah"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">
                      Last Name <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      placeholder="e.g. Jenkins"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
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
                      Phone Number <span className="required-mark">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="pill-grid">
                    {['Email', 'Phone Call', 'Text Message'].map((method) => (
                      <label key={method} className="pill-option">
                        <input
                          type="radio"
                          name="preferredContactMethod"
                          value={method}
                          checked={formData.preferredContactMethod === method}
                          onChange={handleInputChange}
                        />
                        <span className="pill-label">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                  <label className="form-label">I am seeking support as:</label>
                  <div className="pill-grid">
                    {[
                      { val: 'Adult', label: 'An Adult for Myself' },
                      { val: 'Parent', label: 'A Parent / Guardian for My Child (11+)' },
                      { val: 'Family', label: 'A Family Together' },
                      { val: 'Organization', label: 'A School or Organization' }
                    ].map((item) => (
                      <label key={item.val} className="pill-option">
                        <input
                          type="radio"
                          name="clientRole"
                          value={item.val}
                          checked={formData.clientRole === item.val}
                          onChange={handleInputChange}
                        />
                        <span className="pill-label">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="form-divider" />

                {/* Section 2: Service Interests */}
                <h3 className="form-section-title">2. Service of Interest</h3>
                
                <div className="form-group">
                  <label className="form-label">What general area would you like to discuss?</label>
                  <div className="pill-grid">
                    {[
                      'Therapy (General)',
                      'Trauma / EMDR Therapy',
                      'Educational & IEP Advocacy',
                      'Adolescent / Teen Therapy',
                      'Parent Consultation',
                      'Workshops / Organization Training',
                      'Not Sure Yet'
                    ].map((interest) => (
                      <label key={interest} className="pill-option">
                        <input
                          type="radio"
                          name="serviceInterest"
                          value={interest}
                          checked={formData.serviceInterest === interest}
                          onChange={handleInputChange}
                        />
                        <span className="pill-label">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid-2" style={{ marginTop: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Preferred Consultation Format</label>
                    <select
                      name="consultationFormat"
                      className="form-control"
                      value={formData.consultationFormat}
                      onChange={handleInputChange}
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="Video">Secure Video Telehealth</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Best Time of Day for a Call</label>
                    <select
                      name="generalAvailability"
                      className="form-control"
                      value={formData.generalAvailability}
                      onChange={handleInputChange}
                    >
                      <option value="Flexible">Flexible / Any Time</option>
                      <option value="Mornings">Mornings (9am – 12pm)</option>
                      <option value="Afternoons">Afternoons (12pm – 4pm)</option>
                      <option value="Late Afternoons">Late Afternoons (4pm – 6pm)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label" htmlFor="briefGoal">
                    What would you like help with? (Optional)
                  </label>
                  <textarea
                    id="briefGoal"
                    name="briefGoal"
                    className="form-control"
                    placeholder="Brief high-level description (e.g., 'Looking for EMDR therapy for anxiety' or 'Seeking help preparing for an upcoming IEP meeting'). Please do NOT include medical records or sensitive health details."
                    rows={3}
                    value={formData.briefGoal}
                    onChange={handleInputChange}
                  />
                  <span className="form-helper">
                    Keep descriptions high-level. Detailed clinical background is collected during confidential intake.
                  </span>
                </div>

                {/* Privacy Confirmation Checkbox */}
                <div className="privacy-checkbox-row" style={{ marginTop: '1.75rem' }}>
                  <label className="checkbox-label-container">
                    <input
                      type="checkbox"
                      name="privacyConfirmed"
                      checked={formData.privacyConfirmed}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkbox-text">
                      I understand that this form is for general consultation scheduling and I have not submitted confidential medical records, diagnostic histories, or protected health information (PHI). <span className="required-mark">*</span>
                    </span>
                  </label>
                </div>

                <div className="form-submit-row" style={{ marginTop: '2rem' }}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg full-width-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="privacy-assurance-note">
                    <ShieldCheck size={16} className="shield-icon" />
                    <span>Your contact information is kept strictly confidential and will never be shared.</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Toast Confirmation */}
      <Toast
        show={showToast}
        type="success"
        title="Consultation Request Received"
        message="Thank you for reaching out to GroWell Therapy Collective. We will contact you within 1–2 business days."
        onClose={() => setShowToast(false)}
      />

      <style>{`
        .consultation-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .what-to-expect-card {
          margin-bottom: 2rem;
          padding: 2rem;
        }

        .expect-title {
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 1.25rem;
        }

        .expect-grid {
          gap: 1.25rem;
        }

        .expect-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--color-forest-light);
          font-weight: 500;
        }

        .expect-icon {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .consultation-form-wrapper {
          padding: 3rem 2.5rem;
        }

        .form-section-title {
          font-size: 1.25rem;
          color: var(--color-forest);
          margin-bottom: 1.25rem;
        }

        .form-divider {
          border: 0;
          border-top: 1px solid var(--color-border);
          margin: 2.25rem 0;
        }

        .checkbox-label-container {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
        }

        .checkbox-label-container input {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          accent-color: var(--color-terracotta);
        }

        .checkbox-text {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--color-text-main);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        .privacy-assurance-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--color-text-light);
          margin-top: 1rem;
          text-align: center;
        }

        .shield-icon {
          color: var(--color-sage);
        }

        /* Success View */
        .submission-success-view {
          padding: 2rem 1rem;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .success-summary-box {
          background-color: var(--color-linen);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          max-width: 480px;
          margin: 0 auto 2rem;
          text-align: left;
        }

        .success-summary-box p {
          margin: 0.4rem 0;
          font-size: 0.92rem;
        }

        @media (max-width: 768px) {
          .consultation-form-wrapper {
            padding: 2rem 1.5rem;
          }
          .expect-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
