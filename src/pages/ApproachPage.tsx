import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Leaf, 
  ShieldCheck, 
  Heart, 
  Palette, 
  Music, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Layers, 
  Compass,
  Eye,
  HeartHandshake,
  Users
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';
import { getAssetUrl } from '../utils/assets';

export const ApproachPage: React.FC = () => {
  return (
    <div className="approach-page">
      <SEOHead
        title="Our Whole-Person Approach"
        description="Discover how GroWell Therapy Collective integrates evidence-based psychotherapy (EMDR, CBT, TF-CBT, Gottman Level 1 Trained) with educational insight and complementary wellness."
        canonicalPath="/our-approach"
      />

      {/* Hero */}
      <section className="section section-bg-muted" aria-labelledby="approach-hero-title">
        <div className="container container-narrow text-center">
          <span className="badge badge-sage">Our Philosophy</span>
          <h1 id="approach-hero-title" className="approach-hero-title">
            You Are More Than a Diagnosis.
          </h1>
          <p className="lead">
            At GroWell Therapy Collective, we see the whole human being. True healing, self-awareness, and emotional growth happen when we honor the intricate connections between your mind, body, environment, and history.
          </p>
        </div>
      </section>

      {/* The 4-Stage Whole Person Framework: Understand, Connect, Integrate, Grow */}
      <section className="section" aria-labelledby="framework-four-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Whole-Person Framework</span>
            <h2 id="framework-four-heading" className="section-title">How We Guide Your Growth</h2>
            <p className="section-subtitle">
              A structured, collaborative framework honoring clinical evidence, individual context, education, family systems, and personal strengths.
            </p>
          </div>

          <div className="grid-4 approach-pillars-grid">
            <div className="card approach-pillar-box">
              <div className="pillar-num-tag">01</div>
              <h3 className="pillar-heading">Understand</h3>
              <p className="pillar-body">
                Understand the person's needs, history, environment, relationships, strengths, and personal goals deeply and without judgment.
              </p>
            </div>

            <div className="card approach-pillar-box">
              <div className="pillar-num-tag">02</div>
              <h3 className="pillar-heading">Connect</h3>
              <p className="pillar-body">
                Create an authentic, respectful, and collaborative therapeutic relationship that fosters psychological safety and mutual trust.
              </p>
            </div>

            <div className="card approach-pillar-box">
              <div className="pillar-num-tag">03</div>
              <h3 className="pillar-heading">Integrate</h3>
              <p className="pillar-body">
                Consider relevant clinical, family, educational, and environmental factors together rather than treating symptoms in isolation.
              </p>
            </div>

            <div className="card approach-pillar-box">
              <div className="pillar-num-tag">04</div>
              <h3 className="pillar-heading">Grow</h3>
              <p className="pillar-body">
                Develop insight, nervous system regulation, practical tools, and self-advocacy strategies that support meaningful, sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem of Well-Being */}
      <section className="section section-bg-sage" aria-labelledby="ecosystem-heading">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="ecosystem-text">
              <span className="badge badge-terracotta">Holistic Framework</span>
              <h2 id="ecosystem-heading" className="section-title">
                Mental Health Exists Within an Ecosystem.
              </h2>
              <p>
                Symptoms like anxiety, chronic fatigue, emotional shutdown, or difficulty focusing rarely occur in a vacuum. Your mental well-being is constantly shaped by a dynamic web of factors:
              </p>

              <div className="intersect-tags-grid">
                <span className="intersect-tag">Family & Attachment</span>
                <span className="intersect-tag">School & Classroom Pressures</span>
                <span className="intersect-tag">Work & Career Stress</span>
                <span className="intersect-tag">Nervous System & Trauma</span>
                <span className="intersect-tag">Learning Differences & ADHD</span>
                <span className="intersect-tag">Identity & Values</span>
                <span className="intersect-tag">Physical Health & Rest</span>
                <span className="intersect-tag">Major Life Transitions</span>
              </div>

              <p style={{ marginTop: '1.5rem' }}>
                Instead of simply trying to suppress a single symptom, we work together to understand what your mind and nervous system are communicating, helping you cultivate sustainable internal resources.
              </p>
            </div>

            <div className="ecosystem-visual">
              <div className="rounded-image-wrapper">
                <img
                  src={getAssetUrl('/images/whole-person-creative.jpg')}
                  alt="Mindful journaling, botanicals, and watercolor paints reflecting whole-person healing"
                  className="rounded-feature-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Two-Category Framework: Clinical vs Complementary */}
      <section className="section" aria-labelledby="framework-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Integrative Balance</span>
            <h2 id="framework-heading" className="section-title">Two Pillars of Care</h2>
            <p className="section-subtitle">
              We maintain clear, transparent distinctions between evidence-based psychotherapy and complementary wellness practices.
            </p>
          </div>

          <div className="grid-2 pillars-framework-grid">
            {/* Column 1: Evidence-Based Clinical */}
            <div className="card framework-pillar-card">
              <div className="framework-badge-row">
                <span className="badge badge-forest">Category 1</span>
              </div>
              <h3 className="pillar-header-title">Clinical & Evidence-Informed Approaches</h3>
              <p className="pillar-header-sub">
                Grounded in empirical clinical research, psychology, and neuroscience.
              </p>

              <div className="framework-items-stack">
                <div className="framework-item">
                  <h4>Eye Movement Desensitization & Reprocessing (EMDR)</h4>
                  <p>Structured trauma psychotherapy using bilateral stimulation to facilitate neural memory reprocessing and reduce emotional distress.</p>
                </div>
                <div className="framework-item">
                  <h4>Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h4>
                  <p>Structured, research-backed model empowering youth and caregivers to process trauma, manage triggers, and build emotional regulation.</p>
                </div>
                <div className="framework-item">
                  <h4>Cognitive Behavioral Therapy (CBT)</h4>
                  <p>Identifying and reframing automatic cognitive distortions, behavioral avoidance, and unhelpful emotional loops.</p>
                </div>
                <div className="framework-item">
                  <h4>Person-Centered Therapy (PCT)</h4>
                  <p>Humanistic collaboration fostering unconditional positive regard, psychological safety, and self-directed growth.</p>
                </div>
                <div className="framework-item">
                  <h4>Gottman Level 1 Trained</h4>
                  <p>Evidence-informed relationship frameworks focusing on communication patterns, emotional attunement, and conflict resolution dynamics.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Complementary & Experiential */}
            <div className="card framework-pillar-card">
              <div className="framework-badge-row">
                <span className="badge badge-sand">Category 2</span>
              </div>
              <h3 className="pillar-header-title">Complementary & Experiential Support</h3>
              <p className="pillar-header-sub">
                Optional sensory, relaxation, and creative modalities integrated collaboratively when appropriate.
              </p>

              <div className="framework-items-stack">
                <div className="framework-item">
                  <h4>Reiki Level II Training</h4>
                  <p>Gentle complementary energy wellness practice focused on relaxation and somatic stress reduction.</p>
                </div>
                <div className="framework-item">
                  <h4>Creative & Art-Informed Expression</h4>
                  <p>Sketching, collage, and journaling to explore feelings and themes when verbal articulation feels challenging.</p>
                </div>
                <div className="framework-item">
                  <h4>Nature & Botanical Metaphors</h4>
                  <p>Drawing on grounding outdoor elements and plant growth cycles to foster nervous system calm.</p>
                </div>
                <div className="framework-item">
                  <h4>Music & Sound Reflection</h4>
                  <p>Utilizing music listening, playlists, and rhythm to access emotional expression and mood regulation.</p>
                </div>
                <div className="framework-item">
                  <h4>Mindfulness & Breathwork</h4>
                  <p>Somatic grounding and nervous system calming practices for daily stress reduction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Medical Disclaimer Banner */}
          <div className="notice-box notice-warning" style={{ marginTop: '2.5rem' }}>
            <AlertCircle size={22} className="notice-icon" />
            <div className="notice-content">
              <p>
                <strong>Clinical & Complementary Disclaimer:</strong> Complementary approaches (such as Reiki Level II, art-informed activities, and nature metaphors) are offered strictly as optional wellness practices for relaxation and self-reflection. They are not presented as equivalent in evidence base to clinical psychotherapy modalities (EMDR, CBT, TF-CBT, Gottman Level 1 Trained) nor as replacements for medically necessary psychiatric treatment. Incorporating any experiential medium is entirely voluntary and tailored to client consent within a broader clinical treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Conversion CTA */}
      <ConsultationCTA
        title="Experience a Whole-Person Approach"
        subtitle="Book a consultation to talk with Jessica N. Mouzon, MA, LCMHC about your goals and design a collaborative path toward growth."
      />

      <style>{`
        .approach-hero-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .approach-pillars-grid {
          gap: 1.5rem;
        }

        .approach-pillar-box {
          padding: 2.25rem 1.75rem;
          position: relative;
        }

        .pillar-num-tag {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 500;
          color: var(--color-sand);
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .pillar-heading {
          font-size: 1.25rem;
          color: var(--color-forest);
          margin-bottom: 0.65rem;
        }

        .pillar-body {
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
        }

        .intersect-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }

        .intersect-tag {
          background-color: var(--color-sand-tint);
          border: 1px solid #dfd2c0;
          color: var(--color-forest);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
        }

        /* Framework Pillar Cards */
        .framework-pillar-card {
          padding: 2.75rem 2.25rem;
        }

        .framework-badge-row {
          margin-bottom: 0.85rem;
        }

        .pillar-header-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .pillar-header-sub {
          font-size: 0.92rem;
          color: var(--color-text-light);
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .framework-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .framework-item h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.25rem;
        }

        .framework-item p {
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 768px) {
          .approach-pillars-grid {
            grid-template-columns: 1fr 1fr;
          }
          .framework-pillar-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 540px) {
          .approach-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
