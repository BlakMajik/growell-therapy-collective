import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  FileText, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Scale, 
  Briefcase, 
  Lightbulb, 
  Compass, 
  MessageSquare 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { trackEvent } from '../services/analytics';

export const AdvocacyPage: React.FC = () => {
  const advocacyServices = [
    {
      title: "IEP Support & Goal Analysis",
      desc: "Comprehensive review of current Individualized Education Programs, analyzing whether annual goals are measurable, appropriate, and adequately supported with specialized instruction."
    },
    {
      title: "504 Plan Navigation & Accommodations",
      desc: "Guiding parents on designing meaningful classroom, testing, and environmental accommodations for students with ADHD, anxiety, sensory needs, or health conditions."
    },
    {
      title: "Educational Document & Psychoed Review",
      desc: "Translating complex psychoeducational testing, psychological evaluations, and school progress reports into plain English with actionable takeaways."
    },
    {
      title: "School Meeting Preparation & Strategy",
      desc: "Collaborative pre-meeting sessions to define your family's priorities, prepare a concise parent statement, and construct a targeted meeting agenda."
    },
    {
      title: "Meeting Attendance & Support",
      desc: "Joining parents at IEP, 504, or Student Support Team (SST) meetings as an experienced educational specialist to ensure a collaborative, focused dialogue."
    },
    {
      title: "Student Self-Advocacy & Coaching",
      desc: "Equipping adolescents and teens with the confidence and self-awareness to understand their learning profile and voice their accommodation needs directly."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We discuss your child's educational background, current challenges, and specific school concerns."
    },
    {
      num: "02",
      title: "Understand the Concern",
      desc: "We evaluate the intersection of your student's emotional well-being, cognitive style, and classroom dynamics."
    },
    {
      num: "03",
      title: "Review Available Records",
      desc: "We analyze evaluations, report cards, prior IEP/504 documents, and communication logs."
    },
    {
      num: "04",
      title: "Develop a Strategy",
      desc: "We outline concrete accommodations, measurable goals, and a collaborative communication plan."
    },
    {
      num: "05",
      title: "Support Next Steps",
      desc: "We assist through meeting attendance, implementation check-ins, and ongoing parent coaching."
    }
  ];

  return (
    <div className="advocacy-page">
      <SEOHead
        title="Educational & Student Advocacy | IEP & 504 Navigation"
        description="Exceptional Children's K-12 educator and mental health clinician Jessica Mouzon helps parents navigate IEPs, 504 plans, and school meetings with confidence."
        canonicalPath="/educational-advocacy"
      />

      {/* Hero Section */}
      <section className="section section-bg-muted" aria-labelledby="advocacy-hero-title">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="advocacy-hero-text">
              <span className="badge badge-terracotta">Educational Consultation</span>
              <h1 id="advocacy-hero-title" className="advocacy-main-title">
                Helping Families Navigate Educational Challenges With Confidence.
              </h1>
              <p className="lead">
                Jessica Mouzon combines an Exceptional Children’s General Curriculum K–12 Educator License with over a decade of mental health counseling to help parents advocate effectively for their children.
              </p>

              {/* Strict Legal Disclaimer */}
              <div className="notice-box notice-warning" style={{ margin: '1.5rem 0' }}>
                <ShieldAlert size={22} className="notice-icon" />
                <div className="notice-content">
                  <p>
                    <strong>Important Legal Notice:</strong> GroWell Therapy Collective provides educational consultation and parent advocacy services. These services do not constitute legal advice or formal legal representation.
                  </p>
                </div>
              </div>

              <div className="advocacy-hero-actions">
                <Link
                  to="/consultation"
                  className="btn btn-primary btn-lg"
                  onClick={() => trackEvent('consultation_cta_clicked', { source: 'advocacy_hero' })}
                >
                  <span>Book an Advocacy Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="advocacy-hero-visual">
              <div className="rounded-image-wrapper">
                <img
                  src="/images/educational-advocacy.jpg"
                  alt="An organized, welcoming educational consultation workspace with an open notebook, planner, and warm lighting"
                  className="rounded-feature-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jessica's Dual Perspective Matters */}
      <section className="section" aria-labelledby="why-dual-heading">
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge badge-sage">The Dual Perspective</span>
            <h2 id="why-dual-heading" className="section-title">
              Bridging Mental Health & Special Education
            </h2>
            <p className="section-subtitle">
              Most therapists do not hold K–12 special education licenses, and most school advocates lack clinical mental health training. GroWell sits at the unique intersection of both.
            </p>
          </div>

          <div className="dual-perspective-cards grid-2">
            <div className="card card-tint">
              <div className="dual-card-icon">
                <GraduationCap size={28} className="icon-terracotta" />
              </div>
              <h3 style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }}>Inside the School System</h3>
              <p>
                As a licensed Exceptional Children's educator, Jessica understands school district hierarchies, IDEA legal timelines, accommodation feasibility, and how educators assess progress behind closed doors.
              </p>
            </div>

            <div className="card card-sage">
              <div className="dual-card-icon">
                <Lightbulb size={28} className="icon-sage" />
              </div>
              <h3 style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }}>Inside the Nervous System</h3>
              <p>
                As a mental health counselor, Jessica understands how anxiety, trauma, sensory overload, ADHD, and emotional dysregulation directly affect executive functioning, classroom participation, and test performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Services Grid */}
      <section className="section section-bg-sage" aria-labelledby="services-list-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Service Offerings</span>
            <h2 id="services-list-title" className="section-title">How We Can Support Your Family</h2>
            <p className="section-subtitle">
              Customized support packages tailored to where your family is in the educational planning process.
            </p>
          </div>

          <div className="grid-3 services-cards-grid">
            {advocacyServices.map((svc, idx) => (
              <div key={idx} className="card card-hover advocacy-item-card">
                <div className="advocacy-item-num">0{idx + 1}</div>
                <h3 className="advocacy-item-title">{svc.title}</h3>
                <p className="advocacy-item-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sand">Step-by-Step</span>
            <h2 id="process-title" className="section-title">Our 5-Step Advocacy Process</h2>
            <p className="section-subtitle">
              A structured, transparent pathway designed to replace confusion with clarity and teamwork.
            </p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className="timeline-step">
                <div className="timeline-badge">{step.num}</div>
                <div className="timeline-content card">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <ConsultationCTA
        title="Need Guidance Navigating School Support?"
        subtitle="Book a consultation to discuss your child's educational needs, review available options, and build a collaborative plan."
        badge="Educational Advocacy Consultation"
      />

      <style>{`
        .advocacy-main-title {
          font-size: clamp(2.15rem, 3.8vw, 3.25rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .advocacy-hero-actions {
          margin-top: 1.5rem;
        }

        .dual-card-icon {
          margin-bottom: 1rem;
        }

        .advocacy-item-card {
          padding: 2.25rem 2rem;
        }

        .advocacy-item-num {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-sand);
          margin-bottom: 0.75rem;
        }

        .advocacy-item-title {
          font-size: 1.2rem;
          color: var(--color-forest);
          margin-bottom: 0.75rem;
        }

        .advocacy-item-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Timeline */
        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 820px;
          margin: 0 auto;
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .timeline-badge {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background-color: var(--color-forest);
          color: #ffffff;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        .timeline-content {
          flex: 1;
          padding: 1.5rem 1.75rem;
        }

        .timeline-content h4 {
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .timeline-content p {
          font-size: 0.94rem;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 640px) {
          .timeline-step {
            flex-direction: column;
            gap: 0.75rem;
          }
          .timeline-badge {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
