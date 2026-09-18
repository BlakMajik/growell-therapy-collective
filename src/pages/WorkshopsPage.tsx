import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Toast } from '../components/Toast';
import { trackEvent } from '../services/analytics';

export const WorkshopsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    orgType: 'School / District',
    estimatedAudience: '20–50 People',
    topicInterest: 'Trauma-Informed Classroom Strategies',
    eventFormat: 'In-Person',
    targetDate: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.orgName.trim() || !formData.contactName.trim() || !formData.email.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowToast(true);
      trackEvent('workshop_inquiry', { 
        orgType: formData.orgType, 
        topic: formData.topicInterest,
        format: formData.eventFormat 
      });
    }, 750);
  };

  const workshopTopics = [
    {
      title: "Trauma-Informed School Environments",
      audience: "Teachers, Administrators & School Staff",
      desc: "Understanding the neurobiology of trauma and stress in adolescents, with practical de-escalation, sensory accommodation, and nervous-system calming tools for the classroom."
    },
    {
      title: "Demystifying IEPs & 504 Plans for Parents",
      audience: "PTAs, Parent Coalitions & Community Groups",
      desc: "An empowering, accessible breakdown of special education rights, how to read evaluations, and how to build positive collaborative partnerships with school teams."
    },
    {
      title: "Adolescent Mental Health & Emotional Regulation",
      audience: "Youth Mentors, Community Leaders & Counselors",
      desc: "Recognizing early warning signs of anxiety, depression, and executive dysfunction in youth, and implementing neurodivergent-affirming communication strategies."
    },
    {
      title: "Bridging Counseling & Classroom Accommodations",
      audience: "Mental Health Clinicians & Educational Specialists",
      desc: "A professional development workshop on aligning clinical outpatient therapy goals with school-based accommodations and 504 planning."
    }
  ];

  return (
    <div className="workshops-page">
      <SEOHead
        title="Workshops & Organizational Training | Mental Health & Education"
        description="Professional development, school staff training, and parent workshops on trauma-informed practices and special education advocacy by Jessica Mouzon."
        canonicalPath="/workshops"
      />

      {/* Hero */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-terracotta">Community & Professional Training</span>
          <h1 className="workshops-title">Workshops & Speaking Engagements</h1>
          <p className="lead">
            Engaging, evidence-based presentations and professional development designed for schools, parent organizations, youth programs, and community leaders.
          </p>
        </div>
      </section>

      {/* Featured Topics Grid */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sage">Popular Programs</span>
            <h2 className="section-title">Core Workshop Topics</h2>
            <p className="section-subtitle">
              All presentations can be tailored for keynote speeches, half-day professional development, or interactive evening parent seminars.
            </p>
          </div>

          <div className="grid-2 topics-grid">
            {workshopTopics.map((topic, idx) => (
              <div key={idx} className="card card-hover topic-card">
                <div className="topic-badge-row">
                  <span className="badge badge-forest">{topic.audience}</span>
                </div>
                <h3 className="topic-card-title">{topic.title}</h3>
                <p className="topic-card-desc">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section section-bg-sage" id="request-form" aria-labelledby="inquiry-heading">
        <div className="container container-narrow">
          <div className="card inquiry-form-card">
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="badge badge-sand">Organizational Inquiries</span>
              <h2 id="inquiry-heading" className="section-title" style={{ marginTop: '0.5rem' }}>
                Request a Workshop or Presentation
              </h2>
              <p className="section-subtitle">
                Share a few details about your organization and event goals to check availability and request a custom proposal.
              </p>
            </div>

            {isSubmitted ? (
              <div className="submission-success-view text-center animate-fade-in">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-check-icon" />
                </div>
                <h2>Thank You, {formData.contactName}!</h2>
                <p className="lead" style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                  Your organizational workshop inquiry for <strong>{formData.orgName}</strong> has been received. We will be in touch with proposal options within 2 business days.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate>
                {errorMessage && (
                  <div className="notice-box notice-danger">
                    <AlertTriangle size={20} className="notice-icon" />
                    <div className="notice-content"><p>{errorMessage}</p></div>
                  </div>
                )}

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="orgName">
                      Organization / School Name <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      id="orgName"
                      name="orgName"
                      className="form-control"
                      placeholder="e.g. Oakridge Middle School PTA"
                      value={formData.orgName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">
                      Contact Person & Title <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      className="form-control"
                      placeholder="e.g. David Vance, Principal"
                      value={formData.contactName}
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
                      placeholder="contact@school.org"
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

                <div className="grid-3">
                  <div className="form-group">
                    <label className="form-label">Organization Type</label>
                    <select
                      name="orgType"
                      className="form-control"
                      value={formData.orgType}
                      onChange={handleInputChange}
                    >
                      <option value="School / District">K–12 School / District</option>
                      <option value="Parent Group / PTA">Parent Group / PTA</option>
                      <option value="Nonprofit / Youth Program">Nonprofit / Youth Program</option>
                      <option value="Clinical Practice">Clinical Practice</option>
                      <option value="Other Organization">Other Organization</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Audience</label>
                    <select
                      name="estimatedAudience"
                      className="form-control"
                      value={formData.estimatedAudience}
                      onChange={handleInputChange}
                    >
                      <option value="Under 20 People">Under 20 People</option>
                      <option value="20–50 People">20–50 People</option>
                      <option value="50–150 People">50–150 People</option>
                      <option value="150+ Keynote">150+ Keynote / Assembly</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Event Format</label>
                    <select
                      name="eventFormat"
                      className="form-control"
                      value={formData.eventFormat}
                      onChange={handleInputChange}
                    >
                      <option value="In-Person">In-Person</option>
                      <option value="Virtual Webinar">Virtual Webinar</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="details">
                    Tell us about your event and goals
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    className="form-control"
                    placeholder="Provide details such as desired date ranges, key objectives for your audience, or custom topic ideas..."
                    rows={3}
                    value={formData.details}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg full-width-btn"
                  disabled={isSubmitting}
                  style={{ marginTop: '1.25rem' }}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Workshop Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Toast
        show={showToast}
        type="success"
        title="Workshop Request Submitted"
        message="Thank you! We will review your event details and respond within 2 business days."
        onClose={() => setShowToast(false)}
      />

      <style>{`
        .workshops-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .topics-grid {
          gap: 2rem;
        }

        .topic-card {
          padding: 2.5rem 2.25rem;
        }

        .topic-badge-row {
          margin-bottom: 1rem;
        }

        .topic-card-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-bottom: 0.75rem;
        }

        .topic-card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .inquiry-form-card {
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-md);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        .success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        @media (max-width: 768px) {
          .inquiry-form-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};
