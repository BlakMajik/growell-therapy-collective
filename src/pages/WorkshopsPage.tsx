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
  AlertTriangle,
  Presentation,
  HeartHandshake
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Toast } from '../components/Toast';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const WorkshopsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    orgType: 'School / District',
    estimatedAudience: '20–50 People',
    topicInterest: 'Trauma-Informed Support in Educational Settings',
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

  const audienceGroups = [
    { name: "K–12 Schools & School Districts", icon: GraduationCap, desc: "Teacher professional development, counselor coaching, and classroom de-escalation strategies." },
    { name: "Parent Organizations & PTAs", icon: Users, desc: "Accessible workshops on IEP navigation, 504 plans, and teen mental health advocacy." },
    { name: "Youth Organizations & Mentorship Programs", icon: HeartHandshake, desc: "Equipping staff with trauma-informed frameworks and emotional regulation tools." },
    { name: "Nonprofits & Community Organizations", icon: Building2, desc: "Community mental health literacy, family-school collaboration, and youth support." },
    { name: "Mental Health & Clinical Organizations", icon: BookOpen, desc: "Cross-disciplinary training on aligning therapy with special education workflows." },
    { name: "Professional & Corporate Groups", icon: Presentation, desc: "Workplace burnout prevention, supporting neurodivergent employees, and stress management." },
  ];

  const workshopTopics = [
    {
      category: "Trauma & Emotional Support",
      title: "Trauma-Informed Support in School & Community Settings",
      desc: "Understanding the neurobiology of trauma and stress in adolescents, with actionable de-escalation, sensory accommodation, and nervous-system calming tools."
    },
    {
      category: "Educational Systems",
      title: "Understanding IEP Processes & Special Education Planning",
      desc: "An empowering, demystified breakdown of special education rights, evaluation data interpretation, measurable goal design, and collaborative school meetings."
    },
    {
      category: "Mental Health Literacy",
      title: "Mental Health & School Performance",
      desc: "Exploring the neurological intersection between emotional regulation, anxiety, executive dysfunction, and classroom participation."
    },
    {
      category: "Behavior & Classroom Strategy",
      title: "Supporting Students With Emotional and Behavioral Needs",
      desc: "Designing proactive, positive behavior support plans and accommodation workflows for neurodivergent and dysregulated learners."
    },
    {
      category: "Family Advocacy",
      title: "Parent Advocacy & Collaborative School Communication",
      desc: "Practical frameworks for families to build constructive, high-trust partnerships with teachers, administrators, and multidisciplinary teams."
    },
    {
      category: "Interdisciplinary Care",
      title: "Family-School-Provider Collaboration",
      desc: "Bridging outpatient psychotherapy, classroom instruction, and home routines to create consistent wrap-around care for children and teens."
    },
    {
      category: "Special Education Development",
      title: "Supporting Exceptional Children: Educator Coaching",
      desc: "Professional development for special education and general education teachers on differentiated instruction, accommodations, and IEP workflows."
    },
    {
      category: "Behavior Support",
      title: "Behavior Support & Educational Planning",
      desc: "Functional behavior assessments, accommodation feasibility, and trauma-sensitive interventions for diverse school environments."
    }
  ];

  return (
    <div className="workshops-page">
      <SEOHead
        title="Workshops & Professional Education"
        description="Professional development, school staff training, and parent education workshops on trauma-informed practices, IEP processes, and adolescent mental health by Jessica N. Mouzon, MA, LCMHC."
        canonicalPath="/workshops"
      />

      {/* Hero */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-terracotta">Community & Professional Education</span>
          <h1 className="workshops-title">Workshops & Professional Training</h1>
          <p className="lead">
            Engaging, evidence-based presentations, staff professional development, and community seminars led by Jessica N. Mouzon, MA, LCMHC.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="#request-form" className="btn btn-primary btn-lg">
              <span>Request a Workshop</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Background & Positioning */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-sage">Experienced Facilitation</span>
            <h2 className="section-title">Bridging Clinical Insights & Educational Experience</h2>
            <p className="section-subtitle">
              Jessica brings an extensive professional history spanning clinician onboarding, psychoeducational resource development, community programming, special education teacher coaching, and institutional program coordination.
            </p>
          </div>

          <div className="audience-groups-grid grid-3">
            {audienceGroups.map((grp, idx) => {
              const Icon = grp.icon;
              return (
                <div key={idx} className="card audience-group-card">
                  <div className="audience-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h4>{grp.name}</h4>
                  <p>{grp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Topics Grid */}
      <section className="section section-bg-sage" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Topic Catalog</span>
            <h2 className="section-title">Potential Workshop & Training Topics</h2>
            <p className="section-subtitle">
              Presentations can be tailored for keynote addresses, half-day professional development workshops, or interactive evening parent seminars.
            </p>
          </div>

          <div className="grid-2 topics-grid">
            {workshopTopics.map((topic, idx) => (
              <div key={idx} className="card card-hover topic-card">
                <div className="topic-badge-row">
                  <span className="badge badge-sand">{topic.category}</span>
                </div>
                <h3 className="topic-card-title">{topic.title}</h3>
                <p className="topic-card-desc">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section" id="request-form" aria-labelledby="inquiry-heading">
        <div className="container container-narrow">
          <div className="card inquiry-form-card">
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="badge badge-sand">Organizational Inquiries</span>
              <h2 id="inquiry-heading" className="section-title" style={{ marginTop: '0.5rem' }}>
                Request a Workshop
              </h2>
              <p className="section-subtitle">
                Share details about your organization, target audience, and event goals to check availability and receive a tailored proposal.
              </p>
            </div>

            {isSubmitted ? (
              <div className="submission-success-view text-center animate-fade-in">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-check-icon" />
                </div>
                <h2>Thank You, {formData.contactName}!</h2>
                <p className="lead" style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                  Your workshop request for <strong>{formData.orgName}</strong> has been received. Jessica will review your event details and respond within 2 business days.
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
                      placeholder="e.g. Oakridge High School PTA"
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
                      placeholder="e.g. Rachel Miller, Program Director"
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
                      placeholder="contact@organization.org"
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
                      <option value="Youth Organization">Youth Organization / Nonprofit</option>
                      <option value="Community Organization">Community Organization</option>
                      <option value="Mental Health Organization">Mental Health Organization</option>
                      <option value="Professional Group">Professional Group</option>
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
                      <option value="Under 20 People">Small Team (Under 20)</option>
                      <option value="20–50 People">Workshop (20–50 People)</option>
                      <option value="50–150 People">Large Seminar (50–150 People)</option>
                      <option value="150+ Keynote">Keynote / Assembly (150+)</option>
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
                  <label className="form-label" htmlFor="topicInterest">
                    Primary Topic of Interest
                  </label>
                  <select
                    id="topicInterest"
                    name="topicInterest"
                    className="form-control"
                    value={formData.topicInterest}
                    onChange={handleInputChange}
                  >
                    <option value="Trauma-Informed Support in Educational Settings">Trauma-Informed Support</option>
                    <option value="Mental Health & School Performance">Mental Health & School Performance</option>
                    <option value="Understanding IEP Processes">Understanding IEP Processes</option>
                    <option value="Supporting Students With Emotional and Behavioral Needs">Supporting Students With Emotional & Behavioral Needs</option>
                    <option value="Parent Advocacy & School Collaboration">Parent Advocacy & School Collaboration</option>
                    <option value="Mental Health Literacy">Mental Health Literacy</option>
                    <option value="Family-School-Provider Collaboration">Family-School-Provider Collaboration</option>
                    <option value="Supporting Exceptional Children">Supporting Exceptional Children</option>
                    <option value="Behavior Support & Educational Planning">Behavior Support & Educational Planning</option>
                    <option value="Custom Topic">Custom Topic / Multi-Day Program</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="details">
                    Tell us about your event and goals
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    className="form-control"
                    placeholder="Provide details such as desired dates, key objectives for your attendees, or specific topics you'd like highlighted..."
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
                  {isSubmitting ? 'Sending Request...' : 'Request a Workshop'}
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

        .audience-groups-grid {
          gap: 1.25rem;
        }

        .audience-group-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .audience-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .audience-group-card h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .audience-group-card p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }

        .topics-grid {
          gap: 1.75rem;
        }

        .topic-card {
          padding: 2.25rem 2rem;
        }

        .topic-badge-row {
          margin-bottom: 0.75rem;
        }

        .topic-card-title {
          font-size: 1.25rem;
          color: var(--color-forest);
          margin-bottom: 0.65rem;
        }

        .topic-card-desc {
          font-size: 0.92rem;
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
          .audience-groups-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
