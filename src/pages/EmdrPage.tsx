import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  Clock, 
  Zap, 
  Flame 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { trackEvent } from '../services/analytics';

export const EmdrPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const emdrFaqs = [
    {
      q: "Do I have to describe every traumatic detail out loud?",
      a: "No. One of the most compassionate aspects of EMDR is that you do not need to verbally recount every distressing detail to heal. You hold the memory and associated physical sensations in mind while engaging in bilateral stimulation, allowing your brain's adaptive neurobiology to reprocess the experience safely."
    },
    {
      q: "How does EMDR differ from traditional talk therapy?",
      a: "Traditional talk therapy primarily engages the conscious, verbal prefrontal cortex through discussion and cognitive insights. EMDR directly targets the deeper emotional and somatic memory networks in the brain where trauma is stored, enabling physiological relief and cognitive reframing often in fewer sessions."
    },
    {
      q: "What is Bilateral Stimulation (BLS)?",
      a: "Bilateral stimulation refers to alternating sensory input on the left and right sides of the body. This can include tracking a moving visual light or therapist's hand, holding gentle alternating pulsating hand tappers, or listening to alternating tones through headphones."
    },
    {
      q: "Is EMDR suitable for adolescents and teens?",
      a: "Yes. EMDR is widely utilized and researched for adolescents (approx. age 11+) experiencing trauma, school-related panic, bullying, sports performance blocks, or grief. Sessions are adapted developmentally with age-appropriate resourcing and pacing."
    },
    {
      q: "How many sessions are typically required?",
      a: "The number of sessions varies depending on whether we are processing a single-incident event (e.g., a car accident) or complex developmental history. We always begin with preparation and nervous system resourcing to ensure you feel secure before processing memories."
    }
  ];

  return (
    <div className="emdr-page">
      <SEOHead
        title="EMDR Therapy | Trauma Reprocessing & Nervous System Healing"
        description="Learn about EMDR therapy with certified clinician Jessica Mouzon. Evidence-based trauma reprocessing for adolescents (11+) and adults in North Carolina."
        canonicalPath="/emdr-therapy"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "EMDR Therapy at GroWell Therapy Collective",
          "description": "Evidence-based EMDR psychotherapy for trauma, anxiety, and PTSD.",
          "medicalAudience": "Patients and Caregivers"
        }}
      />

      {/* Hero Section */}
      <section className="section section-bg-muted" aria-labelledby="emdr-title">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="emdr-hero-text">
              <span className="badge badge-terracotta">Evidence-Based Trauma Care</span>
              <h1 id="emdr-title" className="emdr-main-title">
                EMDR Therapy: Healing Beyond Words.
              </h1>
              <p className="lead">
                Eye Movement Desensitization and Reprocessing (EMDR) is a proven, evidence-based psychotherapy modality that helps the brain naturally reprocess traumatic memories, emotional distress, and negative core beliefs.
              </p>
              <div className="emdr-hero-actions">
                <Link
                  to="/consultation"
                  className="btn btn-primary btn-lg"
                  onClick={() => trackEvent('consultation_cta_clicked', { source: 'emdr_hero' })}
                >
                  <span>Schedule an EMDR Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="emdr-hero-visual">
              <div className="rounded-image-wrapper">
                <img
                  src="/images/emdr-pathway.jpg"
                  alt="Tranquil stone pathway through sunlit ferns evoking mental clarity and trauma recovery"
                  className="rounded-feature-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EMDR & How It Works */}
      <section className="section" aria-labelledby="how-it-works-title">
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge badge-sage">Neurobiology of Healing</span>
            <h2 id="how-it-works-title" className="section-title">What Is EMDR Therapy?</h2>
            <p className="section-subtitle">
              When a person experiences overwhelming stress or trauma, the nervous system can become overwhelmed, preventing the brain from properly encoding the memory into the past.
            </p>
          </div>

          <div className="emdr-explanation-body">
            <p>
              As a result, sights, sounds, or emotional triggers in the present moment can activate the same intense fear, shame, physical tension, or panic that was felt during the original event. The memory remains "stuck" in its raw, unprocessed state.
            </p>
            <p>
              <strong>EMDR activates your brain's Adaptive Information Processing (AIP) system.</strong> By utilizing alternating bilateral stimulation (BLS)—such as guided eye movements, gentle alternating tactile tappers, or auditory tones—EMDR helps the left and right hemispheres of the brain communicate. This allows distressing memories to be desensitized and integrated as resolved past events, rather than active present threats.
            </p>

            <div className="emdr-highlights-grid grid-2" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
              <div className="card card-tint">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }}>Traditional Talk Therapy</h4>
                <ul className="emdr-comparison-list">
                  <li>Focuses primarily on verbal discussion and cognitive insights</li>
                  <li>Can sometimes inadvertently re-trigger emotional overwhelm</li>
                  <li>Relies on conscious prefrontal cortex processing</li>
                </ul>
              </div>

              <div className="card card-sage">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }}>EMDR Psychotherapy</h4>
                <ul className="emdr-comparison-list">
                  <li>Does not require sharing every detail out loud</li>
                  <li>Directly engages deeper emotional and somatic memory networks</li>
                  <li>Installs empowering, positive beliefs ("I am safe now", "I can handle this")</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Phases of EMDR */}
      <section className="section section-bg-sage" aria-labelledby="phases-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Structured Protocol</span>
            <h2 id="phases-title" className="section-title">The 8 Phases of EMDR Treatment</h2>
            <p className="section-subtitle">
              EMDR is not a random technique—it is a standardized, carefully paced 8-phase clinical process prioritizing your psychological safety at every step.
            </p>
          </div>

          <div className="grid-4 phases-grid">
            <div className="card phase-card">
              <span className="phase-num">01</span>
              <h4>History & Planning</h4>
              <p>Identifying target memories, life themes, and establishing treatment goals.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">02</span>
              <h4>Preparation & Resourcing</h4>
              <p>Developing internal calm place, grounding tools, and nervous system regulation skills.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">03</span>
              <h4>Assessment</h4>
              <p>Pinpointing specific target images, negative cognitions, emotions, and bodily sensations.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">04</span>
              <h4>Desensitization</h4>
              <p>Applying bilateral stimulation sets while processing the memory until distress neutralizes.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">05</span>
              <h4>Installation</h4>
              <p>Strengthening a positive, adaptive core belief to replace the old negative thought.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">06</span>
              <h4>Body Scan</h4>
              <p>Checking the body for lingering somatic tension or distress connected to the memory.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">07</span>
              <h4>Closure</h4>
              <p>Grounding and stabilizing the client at the end of every active processing session.</p>
            </div>
            <div className="card phase-card">
              <span className="phase-num">08</span>
              <h4>Re-Evaluation</h4>
              <p>Assessing treatment progress and maintaining positive adaptive integration over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Format Options & Future Offerings */}
      <section className="section" aria-labelledby="formats-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sand">Session Structure</span>
            <h2 id="formats-title" className="section-title">EMDR Session Options</h2>
            <p className="section-subtitle">
              We offer multiple session formats to accommodate different processing styles and pacing needs.
            </p>
          </div>

          <div className="grid-3 format-grid">
            <div className="card format-card">
              <div className="format-icon-wrap">
                <Clock size={28} />
              </div>
              <h3>Standard EMDR Sessions</h3>
              <p className="format-duration">50–60 Minutes</p>
              <p className="format-desc">
                Weekly or bi-weekly ongoing psychotherapy sessions balancing resourcing, cognitive integration, and memory reprocessing sets.
              </p>
              <div className="format-pricing-badge">
                Contact for Availability & Rates
              </div>
            </div>

            <div className="card format-card">
              <div className="format-icon-wrap">
                <Zap size={28} />
              </div>
              <h3>Extended EMDR Sessions</h3>
              <p className="format-duration">90 Minutes</p>
              <p className="format-desc">
                Extended session blocks allowing deeper reprocessing time without feeling rushed during active bilateral stimulation phases.
              </p>
              <div className="format-pricing-badge">
                Contact for Current Openings
              </div>
            </div>

            <div className="card format-card">
              <div className="format-icon-wrap">
                <Flame size={28} />
              </div>
              <h3>EMDR Intensives</h3>
              <p className="format-duration">Multi-Hour / Multi-Day Blocks</p>
              <p className="format-desc">
                Focused, accelerated therapeutic immersions designed to process targeted traumas in a condensed timeframe without months of weekly appointments.
              </p>
              <div className="format-pricing-badge badge-future">
                Coming Soon • Inquire for Waitlist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMDR FAQs */}
      <section className="section section-bg-muted" aria-labelledby="emdr-faq-title">
        <div className="container container-narrow">
          <div className="section-header text-center">
            <span className="badge badge-forest">Common Questions</span>
            <h2 id="emdr-faq-title" className="section-title">Frequently Asked Questions About EMDR</h2>
          </div>

          <div className="faq-accordion-list">
            {emdrFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConsultationCTA
        title="Explore If EMDR Is Right For You"
        subtitle="Book a free consultation with EMDR certified clinician Jessica Mouzon to discuss your symptoms, goals, and customized treatment planning."
      />

      <style>{`
        .emdr-main-title {
          font-size: clamp(2.15rem, 3.8vw, 3.25rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .emdr-hero-actions {
          margin-top: 2rem;
        }

        .emdr-explanation-body p {
          font-size: 1.08rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .emdr-comparison-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.75rem;
        }

        .emdr-comparison-list li {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.25rem;
        }

        .emdr-comparison-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-forest);
          font-weight: 700;
        }

        /* Phases Grid */
        .phases-grid {
          gap: 1.25rem;
        }

        .phase-card {
          padding: 1.75rem 1.5rem;
          position: relative;
        }

        .phase-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 500;
          color: var(--color-sand);
          display: block;
          line-height: 1;
          margin-bottom: 0.65rem;
        }

        .phase-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--color-forest);
        }

        .phase-card p {
          font-size: 0.86rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Format Grid */
        .format-card {
          padding: 2.5rem 2rem;
          text-align: center;
          align-items: center;
        }

        .format-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .format-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.35rem;
        }

        .format-duration {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-terracotta);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .format-desc {
          font-size: 0.94rem;
          margin-bottom: 1.5rem;
        }

        .format-pricing-badge {
          margin-top: auto;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-forest);
          background-color: var(--color-sand-tint);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
        }

        .format-pricing-badge.badge-future {
          background-color: var(--color-terracotta-tint);
          color: var(--color-terracotta);
        }

        /* FAQ Accordion */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-accordion-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-accordion-item.is-open {
          border-color: var(--color-sage);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-forest);
          gap: 1rem;
        }

        .faq-question-btn:hover {
          color: var(--color-terracotta);
        }

        .faq-answer-pane {
          padding: 0 1.5rem 1.5rem;
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
};
