import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Activity,
  SmilePlus
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const TherapyPage: React.FC = () => {
  return (
    <div className="therapy-page">
      <SEOHead
        title="Therapy Services & Clinical Modalities"
        description="Individual adolescent therapy (11+), adult counseling, trauma recovery, and family support using EMDR, TF-CBT, CBT, and Person-Centered Therapy."
        canonicalPath="/therapy"
      />

      {/* Hero */}
      <section className="section section-bg-muted" aria-labelledby="therapy-hero-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sage">Clinical Services</span>
            <h1 id="therapy-hero-title" className="section-title">
              Therapy for Adolescents, Adults & Families.
            </h1>
            <p className="section-subtitle">
              Evidence-based psychotherapy tailored to your nervous system, life history, and individual goals—creating a grounded space to heal, process, and build resilience.
            </p>
            <div style={{ marginTop: '1.75rem' }}>
              <Link
                to="/consultation"
                className="btn btn-primary btn-lg"
                onClick={() => trackEvent('consultation_cta_clicked', { source: 'therapy_hero' })}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Primary Service Areas */}
      <section className="section" aria-labelledby="service-areas-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-terracotta">Who We Help</span>
            <h2 id="service-areas-heading" className="section-title">Our Core Service Areas</h2>
            <p className="section-subtitle">
              We may be able to help with trauma, anxiety, stress, emotional regulation, academic pressure, and life transitions.
            </p>
          </div>

          <div className="grid-2 service-areas-grid">
            {/* Area 1: Adolescent Therapy */}
            <div className="card card-hover service-category-card">
              <div className="service-card-header">
                <div className="service-icon-box icon-sage">
                  <SmilePlus size={26} />
                </div>
                <div>
                  <span className="badge badge-sage">Ages ~11+</span>
                  <h3 className="service-category-title">Adolescent & Teen Therapy</h3>
                </div>
              </div>
              <p className="service-category-desc">
                Adolescence is a vital window of identity formation, brain development, and social stress. We provide teens with a safe, confidential space free of judgment to explore their feelings, manage anxiety, navigate peer dynamics, and build effective coping mechanisms.
              </p>
              <div className="service-focus-list">
                <p className="focus-label">Common Areas of Support:</p>
                <ul>
                  <li>School anxiety, perfectionism & academic burnout</li>
                  <li>Emotional regulation, impulsivity & mood fluctuations</li>
                  <li>Low self-esteem, identity exploration & social stress</li>
                  <li>Navigating family transitions and peer challenges</li>
                </ul>
              </div>
              <div className="service-card-footer">
                <Link
                  to="/consultation"
                  className="btn btn-forest btn-sm"
                  onClick={() => trackEvent('consultation_cta_clicked', { source: 'therapy_teen_card' })}
                >
                  Book Teen Consultation &rarr;
                </Link>
              </div>
            </div>

            {/* Area 2: Adult Therapy */}
            <div className="card card-hover service-category-card">
              <div className="service-card-header">
                <div className="service-icon-box icon-terracotta">
                  <User size={26} />
                </div>
                <div>
                  <span className="badge badge-terracotta">Individual Care</span>
                  <h3 className="service-category-title">Adult Therapy & Young Adults</h3>
                </div>
              </div>
              <p className="service-category-desc">
                Support for emerging adults and mature adults navigating major life transitions, relationship patterns, chronic stress, workplace burnout, and personal growth. We work collaboratively to unhook from unhelpful patterns and rediscover personal clarity.
              </p>
              <div className="service-focus-list">
                <p className="focus-label">Common Areas of Support:</p>
                <ul>
                  <li>Generalized anxiety, panic & chronic stress</li>
                  <li>Life transitions (college, career, relationships, parenting)</li>
                  <li>Setting boundaries, self-advocacy & values alignment</li>
                  <li>Depression, grief, and unhelpful behavioral loops</li>
                </ul>
              </div>
              <div className="service-card-footer">
                <Link
                  to="/consultation"
                  className="btn btn-forest btn-sm"
                  onClick={() => trackEvent('consultation_cta_clicked', { source: 'therapy_adult_card' })}
                >
                  Book Adult Consultation &rarr;
                </Link>
              </div>
            </div>

            {/* Area 3: Trauma & PTSD */}
            <div className="card card-hover service-category-card">
              <div className="service-card-header">
                <div className="service-icon-box icon-sand">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <span className="badge badge-sand">Specialized Modality</span>
                  <h3 className="service-category-title">Trauma-Informed & PTSD Care</h3>
                </div>
              </div>
              <p className="service-category-desc">
                Trauma lives not just in our thoughts, but in our nervous system and physiological responses. Jessica utilizes EMDR and trauma-focused modalities to help clients safely reprocess single-incident traumas, complex relational wounds, and chronic distress without having to re-live every detail.
              </p>
              <div className="service-focus-list">
                <p className="focus-label">Common Areas of Support:</p>
                <ul>
                  <li>Single-incident trauma (accidents, medical events, loss)</li>
                  <li>Developmental, childhood, or relational trauma</li>
                  <li>Hypervigilance, flashbacks & physiological triggers</li>
                  <li>Negative core beliefs ("I am not safe", "It was my fault")</li>
                </ul>
              </div>
              <div className="service-card-footer">
                <Link
                  to="/emdr-therapy"
                  className="btn btn-outline btn-sm"
                  onClick={() => trackEvent('emdr_service_viewed', { source: 'therapy_trauma_card' })}
                >
                  Explore EMDR Therapy &rarr;
                </Link>
              </div>
            </div>

            {/* Area 4: Parent & Family Support */}
            <div className="card card-hover service-category-card">
              <div className="service-card-header">
                <div className="service-icon-box icon-forest">
                  <Users size={26} />
                </div>
                <div>
                  <span className="badge badge-forest">Systemic Care</span>
                  <h3 className="service-category-title">Family & Parent Support</h3>
                </div>
              </div>
              <p className="service-category-desc">
                When an adolescent is struggling, the entire family system feels the strain. We provide collaborative parent consultation and family support sessions to enhance communication, establish healthy boundaries, and equip caregivers with neurodivergent-affirming parenting strategies.
              </p>
              <div className="service-focus-list">
                <p className="focus-label">Common Areas of Support:</p>
                <ul>
                  <li>Co-regulation strategies for dysregulated adolescents</li>
                  <li>Navigating school-related tensions at home</li>
                  <li>Improving parent-teen communication and trust</li>
                  <li>Supporting siblings and establishing balanced household dynamics</li>
                </ul>
              </div>
              <div className="service-card-footer">
                <Link
                  to="/consultation"
                  className="btn btn-forest btn-sm"
                  onClick={() => trackEvent('consultation_cta_clicked', { source: 'therapy_family_card' })}
                >
                  Book Family Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Modalities Deep Dive */}
      <section className="section section-bg-sage" aria-labelledby="modalities-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Evidence-Based Approaches</span>
            <h2 id="modalities-heading" className="section-title">Our Therapeutic Modalities</h2>
            <p className="section-subtitle">
              We integrate proven clinical methodologies with a warm, human-centered framework.
            </p>
          </div>

          <div className="modalities-stack">
            {/* EMDR */}
            <div className="card modality-card">
              <div className="modality-card-top">
                <div className="modality-tag-group">
                  <span className="badge badge-terracotta">Certified Modality</span>
                  <span className="badge badge-sand">Trauma Reprocessing</span>
                </div>
                <h3>Eye Movement Desensitization and Reprocessing (EMDR)</h3>
              </div>
              <p className="modality-p">
                EMDR is a structured, research-supported psychotherapy method that enables people to heal from the symptoms and emotional distress resulting from disturbing life experiences. Repeated studies show that by using bilateral stimulation (such as side-to-side eye movements or alternating taps), EMDR helps the brain resume its natural healing process.
              </p>
              <div className="modality-link-row">
                <Link to="/emdr-therapy" className="modality-deep-link">
                  Learn how EMDR works, session structure, and FAQs &rarr;
                </Link>
              </div>
            </div>

            {/* TF-CBT */}
            <div className="card modality-card">
              <div className="modality-card-top">
                <div className="modality-tag-group">
                  <span className="badge badge-sage">Youth & Caregiver</span>
                </div>
                <h3>Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h3>
              </div>
              <p className="modality-p">
                TF-CBT is an evidence-based treatment model specifically developed for children, adolescents, and their caregivers who have been impacted by traumatic events. It combines cognitive-behavioral principles with trauma-sensitive interventions, empowering youth with practical emotional regulation skills, cognitive processing tools, and caregiver collaboration.
              </p>
            </div>

            {/* CBT */}
            <div className="card modality-card">
              <div className="modality-card-top">
                <div className="modality-tag-group">
                  <span className="badge badge-sand">Cognitive & Behavioral</span>
                </div>
                <h3>Cognitive Behavioral Therapy (CBT)</h3>
              </div>
              <p className="modality-p">
                CBT focuses on uncovering the interconnected cycle between our thoughts, emotions, and behaviors. By identifying cognitive distortions (such as catastrophizing or black-and-white thinking), clients learn practical tools to reframe unhelpful patterns, reduce anxiety, and develop healthier coping mechanisms.
              </p>
            </div>

            {/* Person-Centered Therapy */}
            <div className="card modality-card">
              <div className="modality-card-top">
                <div className="modality-tag-group">
                  <span className="badge badge-forest">Humanistic Foundation</span>
                </div>
                <h3>Person-Centered Therapy (PCT)</h3>
              </div>
              <p className="modality-p">
                Rooted in unconditional positive regard, genuine authenticity, and deep empathy, Person-Centered Therapy creates a secure, non-judgmental environment. Rather than treating you as a passive patient, we collaborate with you as an active partner in your self-directed growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Conversion CTA */}
      <ConsultationCTA
        title="Ready to Begin Your Therapy Journey?"
        subtitle="Schedule a free consultation to discuss your goals, ask questions about our modalities, and find the right path forward."
      />

      <style>{`
        .service-areas-grid {
          margin-top: 2rem;
        }

        .service-category-card {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .service-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-sage { background-color: var(--color-sage-tint); color: var(--color-sage); }
        .icon-terracotta { background-color: var(--color-terracotta-tint); color: var(--color-terracotta); }
        .icon-sand { background-color: var(--color-sand-tint); color: #855e34; }
        .icon-forest { background-color: #2e4437; color: #e5eee8; }

        .service-category-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-top: 0.35rem;
          margin-bottom: 0;
        }

        .service-category-desc {
          font-size: 0.96rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .service-focus-list {
          background-color: var(--color-linen);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 2rem;
          margin-top: auto;
        }

        .focus-label {
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .service-focus-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .service-focus-list li {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.15rem;
        }

        .service-focus-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-weight: 700;
        }

        .service-card-footer {
          display: flex;
          justify-content: flex-start;
        }

        /* Modalities Stack */
        .modalities-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .modality-card {
          padding: 2.25rem 2.5rem;
        }

        .modality-card-top {
          margin-bottom: 1rem;
        }

        .modality-tag-group {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .modality-card-top h3 {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin: 0;
        }

        .modality-p {
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .modality-deep-link {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--color-terracotta);
          display: inline-flex;
          align-items: center;
        }

        .modality-deep-link:hover {
          color: var(--color-terracotta-hover);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .service-category-card {
            padding: 1.75rem;
          }
          .modality-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};
