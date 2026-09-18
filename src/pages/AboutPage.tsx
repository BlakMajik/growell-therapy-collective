import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Clock, 
  FileCheck 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';
import { getAssetUrl } from '../utils/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEOHead
        title="Meet Jessica Mouzon | Clinician & Educational Specialist"
        description="Learn about Jessica Mouzon, founder of GroWell Therapy Collective. Clinical mental health counselor, licensed K-12 educator, and EMDR certified therapist with ~11 years of experience."
        canonicalPath="/about"
      />

      {/* Hero / Intro */}
      <section className="section section-bg-muted" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="about-hero-text">
              <span className="badge badge-sage">Founder & Clinician</span>
              <h1 id="about-hero-title" className="about-title">Meet Jessica Mouzon</h1>
              <p className="lead">
                Bridging clinical psychotherapy, trauma-informed healing, and K–12 educational advocacy to support the whole person.
              </p>
              <p>
                Jessica Mouzon founded GroWell Therapy Collective with a foundational belief: growth is not a rigid, linear formula. Human beings thrive when their mental health, learning differences, family systems, and life environments are understood collaboratively.
              </p>
              <div className="about-experience-badge">
                <Clock size={20} className="exp-icon" />
                <span><strong>{siteConfig.experienceYears}</strong> across clinical and educational settings.</span>
              </div>
            </div>

            <div className="about-hero-portrait-frame">
              <img
                src={getAssetUrl('/images/jessica-mouzon.jpg')}
                alt="Jessica Mouzon in a calm, modern, sunlit consultation office"
                className="about-portrait-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Credentials Badges Section */}
      <section className="section" aria-labelledby="creds-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-terracotta">Professional Standards</span>
            <h2 id="creds-heading" className="section-title">Credentials & Professional Licensure</h2>
            <p className="section-subtitle">
              Grounded in rigorous clinical training, trauma-informed methodologies, and specialized educator licensure.
            </p>
          </div>

          <div className="grid-3 creds-grid">
            {/* Credential 1: Mental Health Licensure */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-sage">
                <FileCheck size={28} />
              </div>
              <span className="cred-category">Clinical Psychotherapy</span>
              <h3 className="cred-card-title">{siteConfig.credentials.clinicalCounseling}</h3>
              <div className="cred-status-box">
                <p><strong>License Designation:</strong> {siteConfig.credentials.exactLicenseDesignation}</p>
                <p><strong>NC License Number:</strong> {siteConfig.credentials.ncLicenseNumber}</p>
              </div>
              <p className="cred-card-desc">
                Dedicated to evidence-based psychotherapy, emotional regulation, and compassionate mental health support for individuals from adolescence through adulthood.
              </p>
            </div>

            {/* Credential 2: K-12 Educator License */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-terracotta">
                <GraduationCap size={28} />
              </div>
              <span className="cred-category">Specialized Education</span>
              <h3 className="cred-card-title">{siteConfig.credentials.educationLicense}</h3>
              <div className="cred-status-box">
                <p><strong>Curriculum Scope:</strong> K–12 Exceptional Children</p>
                <p><strong>Focus:</strong> Learning differences, accommodations & IEPs</p>
              </div>
              <p className="cred-card-desc">
                Deep working knowledge of school systems, specialized instruction, 504 plans, behavioral supports, and collaborative parent advocacy.
              </p>
            </div>

            {/* Credential 3: EMDR Certification & Modalities */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-sand">
                <Award size={28} />
              </div>
              <span className="cred-category">Advanced Modalities</span>
              <h3 className="cred-card-title">{siteConfig.credentials.emdrCertified}</h3>
              <div className="cred-status-box">
                <p><strong>Trauma Modalities:</strong> EMDR & TF-CBT</p>
                <p><strong>Complementary:</strong> {siteConfig.credentials.reikiTraining}</p>
              </div>
              <p className="cred-card-desc">
                Certified in Eye Movement Desensitization and Reprocessing to help clients safely process trauma, alongside Level II Reiki training for complementary relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background & Philosophy */}
      <section className="section section-bg-sage" aria-labelledby="journey-heading">
        <div className="container container-narrow">
          <div className="about-story-flow">
            <span className="badge badge-forest">The Story Behind GroWell</span>
            <h2 id="journey-heading" className="section-title" style={{ marginTop: '0.75rem' }}>
              Why GroWell Therapy Collective?
            </h2>

            <div className="story-paragraphs">
              <p className="lead">
                Throughout over a decade of working with students, parents, and adults, one theme repeatedly emerged: people are rarely struggling in isolation.
              </p>
              <p>
                A teenager struggling with school attendance might be battling an undiagnosed learning difference, sensory overload, or social anxiety. A parent trying to support their child might feel overwhelmed by confusing educational paperwork and adversarial school meetings. An adult navigating trauma might feel that traditional talk therapy alone hasn't helped their body feel truly calm.
              </p>
              <p>
                Jessica created GroWell to tear down the silos between clinical psychotherapy, educational navigation, and whole-person wellness. At GroWell, treatment plans are tailored to your real life—integrating practical strategies, deep trauma reprocessing, and collaborative advocacy when needed.
              </p>

              <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Jessica’s Clinical & Educational Approach</h3>
              <ul className="approach-bullet-list">
                <li>
                  <strong>Trauma-Informed & Safe:</strong> Grounded in the understanding of how traumatic stress impacts the nervous system, memory, and relationships.
                </li>
                <li>
                  <strong>Developmentally Attuned:</strong> Tailoring communication, pacing, and therapeutic mediums to adolescents (11+), emerging young adults, and mature adults.
                </li>
                <li>
                  <strong>Strengths-Based & Collaborative:</strong> You are the expert on your own lived experience; Jessica acts as a skilled guide, clinician, and advocate.
                </li>
                <li>
                  <strong>Transparent & Grounded:</strong> Free of clinical pretense and medical jargon, focusing on practical tools and authentic connection.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <ConsultationCTA
        title="Connect With Jessica Mouzon"
        subtitle="Schedule a free consultation to discuss your needs, explore therapy or advocacy options, and determine if GroWell is the right fit."
      />

      <style>{`
        .about-hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-title {
          margin: 0;
        }

        .about-experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background-color: var(--color-sand-tint);
          border: 1px solid #dfcfbc;
          border-radius: var(--radius-md);
          font-size: 0.94rem;
          color: var(--color-forest);
        }

        .exp-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        .about-hero-portrait-frame {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .about-portrait-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 5;
        }

        /* Creds Grid */
        .cred-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .cred-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .cred-category {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-light);
          margin-bottom: 0.35rem;
        }

        .cred-card-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-forest);
          line-height: 1.3;
        }

        .cred-status-box {
          background-color: var(--color-linen);
          border-radius: var(--radius-sm);
          padding: 0.85rem;
          margin-bottom: 1.25rem;
          font-size: 0.84rem;
          border-left: 3px solid var(--color-sage);
        }

        .cred-status-box p {
          margin: 0;
          font-size: 0.82rem;
          color: var(--color-text-main);
          line-height: 1.5;
        }

        .cred-status-box p strong {
          color: var(--color-forest);
        }

        .cred-card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-top: auto;
        }

        /* Story Flow */
        .about-story-flow {
          padding: 1rem 0;
        }

        .story-paragraphs p {
          margin-bottom: 1.5rem;
        }

        .approach-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .approach-bullet-list li {
          font-size: 1.02rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.75rem;
          line-height: 1.6;
        }

        .approach-bullet-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .approach-bullet-list strong {
          color: var(--color-forest);
        }

        @media (max-width: 900px) {
          .about-hero-text {
            order: 2;
          }
          .about-hero-portrait-frame {
            order: 1;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};
