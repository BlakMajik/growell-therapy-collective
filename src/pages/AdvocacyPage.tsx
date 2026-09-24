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
  MessageSquare,
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { trackEvent } from '../services/analytics';
import { getAssetUrl } from '../utils/assets';

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
        title="IEP & Educational Advocacy"
        description="Exceptional Children's K–12 educator and licensed clinician Jessica N. Mouzon, MA, LCMHC helps parents navigate IEPs, 504 plans, and school meetings with confidence."
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
                Jessica N. Mouzon, MA, LCMHC combines an Exceptional Children’s General Curriculum K–12 Educator License with more than a decade of mental health counseling to help parents advocate effectively for their children.
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
                  src={getAssetUrl('/images/educational-advocacy.jpg')}
                  alt="An organized, welcoming educational consultation workspace with an open notebook, planner, and warm lighting"
                  className="rounded-feature-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Inside the Educational System */}
      <section className="section" aria-labelledby="system-experience-heading">
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-sage">Educator Expertise</span>
            <h2 id="system-experience-heading" className="section-title">
              Experience Inside the Educational System
            </h2>
            <p className="section-subtitle">
              Jessica understands these systems from both sides of the table—as a mental health clinician supporting students and families and as an experienced Exceptional Children's educator working within school systems.
            </p>
          </div>

          <div className="experience-items-grid grid-2">
            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Creating & Managing IEPs</strong>
                <p>Drafting individualized goals, tracking quarterly progress, and aligning specialized instruction with curriculum standards.</p>
              </div>
            </div>

            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Coordinating IEP Referral Processes</strong>
                <p>Guiding child-find referrals, Multi-Tiered System of Supports (MTSS), and multidisciplinary evaluation timelines.</p>
              </div>
            </div>

            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Academic Assessment & Interpretation</strong>
                <p>Administering academic evaluations and translating complex psychoeducational reports into clear, actionable classroom plans.</p>
              </div>
            </div>

            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Writing Behavior Support Plans</strong>
                <p>Developing functional behavior assessments (FBAs) and positive, neurodivergent-affirming behavioral interventions.</p>
              </div>
            </div>

            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Exceptional Children's Programming</strong>
                <p>Managing district procedures, compliance standards, and specialized workflows across grade levels.</p>
              </div>
            </div>

            <div className="experience-item-card card">
              <CheckCircle2 size={20} className="exp-item-icon" />
              <div>
                <strong>Teacher Coaching & Professional Development</strong>
                <p>Training and mentoring special education teachers, general education staff, and multidisciplinary teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Mental Health and Education Intersect */}
      <section className="section section-bg-sage" aria-labelledby="intersect-section-heading">
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-forest">Holistic Understanding</span>
            <h2 id="intersect-section-heading" className="section-title">
              When Mental Health and Education Intersect
            </h2>
            <p className="section-subtitle">
              Students rarely experience challenges in isolation. Cognitive learning, nervous system regulation, and classroom environments continuously influence one another.
            </p>
          </div>

          <div className="intersection-breakdown card" style={{ padding: '2.5rem 2.25rem' }}>
            <p className="lead" style={{ marginBottom: '1.25rem' }}>
              A student may be navigating overlapping factors that impact their ability to thrive in school:
            </p>

            <div className="intersect-factors-grid grid-2">
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Emotional Concerns:</strong> Anxiety, perfectionism, or mood dysregulation</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Trauma & Stress:</strong> Nervous system hyperarousal or shutdown</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Behavior Challenges:</strong> Frustration responses, task avoidance, or impulsivity</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Academic Struggles:</strong> Working memory overload or processing speed gaps</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Learning Differences:</strong> ADHD, dyslexia, dysgraphia, or executive dysfunction</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Family Stress & Transitions:</strong> Household changes, divorce, grief, or moves</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>School Avoidance:</strong> Somatic complaints, morning distress, or attendance barriers</span>
              </div>
              <div className="factor-pill">
                <span className="factor-dot">•</span>
                <span><strong>Social Challenges:</strong> Peer friction, isolation, or communication barriers</span>
              </div>
            </div>

            <div className="notice-box notice-sage" style={{ marginTop: '2rem' }}>
              <Lightbulb size={20} className="notice-icon" />
              <div className="notice-content">
                <p>
                  <strong>GroWell’s Advantage:</strong> While not every academic difficulty is a clinical disorder, understanding the interconnected nature of clinical, behavioral, family, and educational environments allows us to design supports that address root causes rather than just surface symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Services Grid */}
      <section className="section" aria-labelledby="services-list-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-terracotta">Service Offerings</span>
            <h2 id="services-list-title" className="section-title">How We Support Families</h2>
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
      <section className="section section-bg-muted" aria-labelledby="process-title">
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

        .experience-items-grid {
          gap: 1.25rem;
        }

        .experience-item-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
        }

        .exp-item-icon {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .experience-item-card strong {
          display: block;
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .experience-item-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        .intersect-factors-grid {
          gap: 1rem;
        }

        .factor-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--color-text-main);
          background-color: var(--color-linen);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
        }

        .factor-dot {
          color: var(--color-terracotta);
          font-size: 1.2rem;
          line-height: 1;
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
          .experience-items-grid,
          .intersect-factors-grid {
            grid-template-columns: 1fr;
          }
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
