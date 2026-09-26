import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Compass, 
  Users, 
  CheckCircle2, 
  ShieldAlert, 
  Laptop, 
  Building2, 
  Leaf, 
  Palette, 
  Music, 
  Activity,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';
import { getAssetUrl } from '../utils/assets';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <SEOHead
        title="Mental Health, Trauma & Educational Advocacy"
        description="Compassionate mental health therapy, EMDR, TF-CBT, CBT, Gottman Method Level I frameworks, and K–12 IEP educational advocacy for adolescents (11+), adults, and families with Jessica N. Mouzon, MA, LCMHC."
        canonicalPath="/"
      />

      {/* SECTION 1: HERO */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge badge-sage hero-badge">
              <Leaf size={14} />
              <span>Hybrid In-Person & Telehealth Options</span>
            </div>

            <h1 id="hero-title" className="hero-title">
              Helping You Grow Through Life’s Challenges.
            </h1>

            <p className="hero-credential-line">
              <strong>Jessica N. Mouzon, MA, LCMHC</strong>
              <span className="hero-cred-sub">Licensed Clinical Mental Health Counselor | Exceptional Children's K–12 Educator | EMDR</span>
            </p>

            <p className="lead hero-lead">
              GroWell Therapy Collective provides compassionate, individualized mental health support for adolescents (11+), adults, and families—combining evidence-based therapy, educational expertise, student advocacy, and whole-person care.
            </p>

            <div className="hero-actions">
              <Link
                to="/consultation"
                className="btn btn-primary btn-lg"
                onClick={() => trackEvent('consultation_cta_clicked', { source: 'hero_primary' })}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/therapy"
                className="btn btn-outline btn-lg"
                onClick={() => trackEvent('therapy_service_viewed', { source: 'hero_secondary' })}
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            <div className="hero-trust-indicators">
              <div className="trust-pill">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>NC Licensed LCMHC</span>
              </div>
              <div className="trust-pill">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>K–12 Educator Licensed</span>
              </div>
              <div className="trust-pill">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Trauma-Informed & EMDR</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-frame">
              <img
                src={getAssetUrl('/images/hero-space.jpg')}
                alt="A warm, sunlit, tranquil therapy and consultation room with lush green plants and comfortable linen chairs"
                className="hero-img"
                loading="eager"
              />
              <div className="hero-floating-card">
                <Sparkles size={20} className="floating-card-icon" />
                <div>
                  <p className="floating-card-title">Individualized Pathways</p>
                  <p className="floating-card-sub">Growth happens through more than one way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MULTIPLE PATHS TO GROWTH */}
      <section className="section section-bg-muted" aria-labelledby="paths-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-terracotta">Our Philosophy</span>
            <h2 id="paths-title" className="section-title">There Is More Than One Way to Grow.</h2>
            <p className="section-subtitle">
              Traditional conversation-based therapy is deeply valuable, but human beings connect, process, learn, and heal in diverse ways. We honor the whole person by tailoring our approach to your unique needs, nervous system, and life context.
            </p>
          </div>

          <div className="grid-3 paths-grid">
            {/* Card 1: Therapy */}
            <div className="card card-hover path-card">
              <div className="path-icon-box icon-sage">
                <Brain size={28} />
              </div>
              <h3 className="path-card-title">Therapy & Mental Health</h3>
              <p className="path-card-desc">
                Evidence-based psychotherapy for adolescents, adults, and families navigating trauma, anxiety, life transitions, emotional regulation, and relationship patterns.
              </p>
              <ul className="path-features-list">
                <li>EMDR & Trauma-Informed Care</li>
                <li>TF-CBT & Cognitive Behavioral Therapy</li>
                <li>Gottman Method Level I Frameworks</li>
                <li>Person-Centered Collaboration</li>
              </ul>
              <Link to="/therapy" className="path-card-link">
                <span>Explore Therapy</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: Education & Advocacy */}
            <div className="card card-hover path-card">
              <div className="path-icon-box icon-terracotta">
                <GraduationCap size={28} />
              </div>
              <h3 className="path-card-title">Education & Advocacy</h3>
              <p className="path-card-desc">
                Bridging clinical understanding with K–12 Exceptional Children’s expertise to guide parents through IEPs, 504 plans, and school meetings with confidence.
              </p>
              <ul className="path-features-list">
                <li>IEP & 504 Plan Navigation</li>
                <li>School Meeting Preparation & Support</li>
                <li>Educational Document & Evaluation Review</li>
              </ul>
              <Link to="/educational-advocacy" className="path-card-link">
                <span>Explore Advocacy</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3: Whole-Person Support */}
            <div className="card card-hover path-card">
              <div className="path-icon-box icon-sand">
                <Heart size={28} />
              </div>
              <h3 className="path-card-title">Whole-Person Support</h3>
              <p className="path-card-desc">
                Integrating complementary wellness practices when appropriate—including Reiki Level II, creative expression, mindfulness, and nature-informed grounding.
              </p>
              <ul className="path-features-list">
                <li>Reiki Level II (Complementary)</li>
                <li>Creative & Art-Informed Activities</li>
                <li>Somatic & Mindfulness Grounding</li>
              </ul>
              <Link to="/our-approach" className="path-card-link">
                <span>Our Approach</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THERAPY HIGHLIGHT */}
      <section className="section" aria-labelledby="therapy-heading">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="therapy-highlight-content">
              <span className="badge badge-sage">Clinical Mental Health</span>
              <h2 id="therapy-heading" className="section-title">
                Compassionate, Grounded & Trauma-Informed Psychotherapy.
              </h2>
              <p className="lead">
                Therapy at GroWell is a collaborative partnership designed to foster nervous system regulation, self-compassion, and sustainable emotional resilience.
              </p>
              <p>
                We specialize in supporting adolescents (approximately age 11+), adults, and families working through trauma, anxiety, academic pressures, relationship dynamics, and life adjustments. Rather than simply managing surface symptoms, we focus on identifying root causes and building practical tools for lasting change.
              </p>

              <div className="modality-badges-group">
                <span className="modality-tag">EMDR Therapy</span>
                <span className="modality-tag">TF-CBT</span>
                <span className="modality-tag">CBT</span>
                <span className="modality-tag">Gottman Method Level I Training</span>
                <span className="modality-tag">Person-Centered</span>
                <span className="modality-tag">Reiki Level II (Complementary)</span>
              </div>

              <div className="section-cta-row">
                <Link
                  to="/therapy"
                  className="btn btn-forest"
                  onClick={() => trackEvent('therapy_service_viewed', { source: 'home_section' })}
                >
                  <span>Explore Therapy Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/emdr-therapy"
                  className="btn btn-outline"
                  onClick={() => trackEvent('emdr_service_viewed', { source: 'home_section' })}
                >
                  <span>Learn About EMDR</span>
                </Link>
              </div>
            </div>

            <div className="therapy-highlight-visual">
              <div className="rounded-image-wrapper">
                <img
                  src={getAssetUrl('/images/emdr-pathway.jpg')}
                  alt="A tranquil stone path winding through lush green ferns and peaceful sunlight"
                  className="rounded-feature-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATIONAL & STUDENT ADVOCACY */}
      <section className="section section-bg-sage" aria-labelledby="advocacy-heading">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="advocacy-visual-col">
              <div className="rounded-image-wrapper">
                <img
                  src={getAssetUrl('/images/educational-advocacy.jpg')}
                  alt="A warm, organized educational consultation workspace with an open notebook, tea, and plant"
                  className="rounded-feature-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="advocacy-text-col">
              <span className="badge badge-terracotta">Educational Advocacy</span>
              <h2 id="advocacy-heading" className="section-title">
                When Emotional, Behavioral, and Educational Needs Intersect.
              </h2>
              <p className="lead">
                Jessica N. Mouzon brings a rare dual perspective: a Licensed Clinical Mental Health Counselor holding an Exceptional Children’s General Curriculum K–12 Educator License.
              </p>
              <p>
                Navigating the school system can feel like learning a second language. When your child is facing academic stress, learning differences, ADHD, or emotional barriers, GroWell helps parents understand their rights, review school documentation, and advocate effectively.
              </p>

              <div className="advocacy-checklist">
                <div className="check-row">
                  <CheckCircle2 size={18} className="check-row-icon" />
                  <span>Understanding IEP evaluations, goals, and accommodations</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={18} className="check-row-icon" />
                  <span>504 Plan navigation and classroom modifications</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={18} className="check-row-icon" />
                  <span>Preparing for difficult school and eligibility meetings</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={18} className="check-row-icon" />
                  <span>Bridging emotional health with academic executive functioning</span>
                </div>
              </div>

              {/* Explicit Legal Disclaimer */}
              <div className="notice-box notice-sage" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                <ShieldAlert size={20} className="notice-icon" />
                <div className="notice-content">
                  <p>
                    <strong>Please Note:</strong> GroWell Therapy Collective provides educational consultation and parent advocacy. These services do not constitute legal advice or formal legal representation.
                  </p>
                </div>
              </div>

              <Link
                to="/educational-advocacy"
                className="btn btn-primary"
                onClick={() => trackEvent('advocacy_service_viewed', { source: 'home_section' })}
              >
                <span>Explore Educational Advocacy</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET JESSICA N. MOUZON, MA, LCMHC */}
      <section className="section" aria-labelledby="jessica-heading">
        <div className="container">
          <div className="clinician-feature-box">
            <div className="grid-2 align-center">
              <div className="clinician-portrait-wrap">
                <img
                  src={getAssetUrl('/images/jessica-mouzon.jpg')}
                  alt="Jessica N. Mouzon, MA, LCMHC — Founder, Clinical Mental Health Counselor and Educational Advocate"
                  className="clinician-portrait"
                  loading="lazy"
                />
              </div>

              <div className="clinician-bio-wrap">
                <span className="badge badge-sand">Meet Your Clinician & Advocate</span>
                <h2 id="jessica-heading" className="clinician-name-title">
                  Jessica N. Mouzon, MA, LCMHC
                </h2>
                <p className="clinician-creds-line">
                  Licensed Clinical Mental Health Counselor (LCMHC) • Exceptional Children's K–12 Educator • EMDR
                </p>

                <p>
                  Jessica brings more than a decade of experience across education and behavioral health settings. She founded GroWell Therapy Collective to provide a truly whole-person space where adolescents, adults, and families can find grounded, collaborative support.
                </p>
                <p>
                  Her professional background spans special education, school-based mental health, outpatient counseling, intensive in-home services, educational program coordination, student advocacy, and interdisciplinary collaboration.
                </p>
                <p>
                  Jessica believes that effective healing is never one-size-fits-all. By honoring the complex interplay between emotional health, learning styles, family systems, and life experiences, she helps clients build meaningful insight, confidence, and self-advocacy.
                </p>

                <div className="credentials-summary-grid">
                  <div className="cred-badge-item">
                    <span className="cred-title">MA, Clinical Mental Health Counseling</span>
                    <span className="cred-desc">Wake Forest University (CACREP-Accredited)</span>
                  </div>
                  <div className="cred-badge-item">
                    <span className="cred-title">Licensed LCMHC</span>
                    <span className="cred-desc">Licensed in North Carolina</span>
                  </div>
                  <div className="cred-badge-item">
                    <span className="cred-title">Exceptional Children's Educator</span>
                    <span className="cred-desc">General Curriculum K–12 License</span>
                  </div>
                  <div className="cred-badge-item">
                    <span className="cred-title">EMDR / TF-CBT / CBT</span>
                    <span className="cred-desc">Evidence-based trauma & cognitive therapies</span>
                  </div>
                  <div className="cred-badge-item">
                    <span className="cred-title">Gottman Method Level I Training</span>
                    <span className="cred-desc">Relationship & communication frameworks</span>
                  </div>
                  <div className="cred-badge-item">
                    <span className="cred-title">Reiki Level II</span>
                    <span className="cred-desc">Complementary wellness & relaxation</span>
                  </div>
                </div>

                <div className="section-cta-row">
                  <Link to="/about" className="btn btn-forest">
                    <span>Read Jessica’s Full Bio</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/consultation" className="btn btn-outline">
                    <span>Book a Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUR PILLARS APPROACH */}
      <section className="section section-bg-muted" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Our Core Process</span>
            <h2 id="pillars-heading" className="section-title">The GroWell Approach</h2>
            <p className="section-subtitle">
              Four intentional pillars guiding every therapy relationship, family consultation, and student advocacy plan.
            </p>
          </div>

          <div className="grid-4 pillars-grid">
            <div className="card pillar-card">
              <div className="pillar-step">01</div>
              <h3 className="pillar-title">Understand</h3>
              <p className="pillar-desc">
                We take time to deeply understand your unique circumstances, strengths, history, school or work environment, and personal goals.
              </p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-step">02</div>
              <h3 className="pillar-title">Connect</h3>
              <p className="pillar-desc">
                We establish an authentic, transparent, and collaborative therapeutic relationship centered on mutual respect and safety.
              </p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-step">03</div>
              <h3 className="pillar-title">Integrate</h3>
              <p className="pillar-desc">
                We consider relevant clinical, family, educational, and environmental factors together to shape a cohesive path forward.
              </p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-step">04</div>
              <h3 className="pillar-title">Grow</h3>
              <p className="pillar-desc">
                You develop practical tools, insight, nervous system regulation, and self-advocacy skills that support meaningful daily progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MORE THAN ONE MEDIUM */}
      <section className="section" aria-labelledby="mediums-heading">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="mediums-text">
              <span className="badge badge-terracotta">Complementary Wellness</span>
              <h2 id="mediums-heading" className="section-title">
                More Than One Medium: Creative & Experiential Engagement.
              </h2>
              <p className="lead">
                Therapeutic engagement does not need to look identical for every individual.
              </p>
              <p>
                When words alone feel insufficient, we may incorporate complementary, tactile, and experiential experiences—tailored to your interests and comfort level.
              </p>

              <div className="mediums-list">
                <div className="medium-item">
                  <Palette size={20} className="medium-icon" />
                  <div>
                    <strong>Creative & Art-Informed Expression:</strong> Sketching, collage, and journaling to explore feelings visually.
                  </div>
                </div>
                <div className="medium-item">
                  <Music size={20} className="medium-icon" />
                  <div>
                    <strong>Music-Informed Exploration:</strong> Rhythm, playlist reflection, and sound grounding for mood support.
                  </div>
                </div>
                <div className="medium-item">
                  <Leaf size={20} className="medium-icon" />
                  <div>
                    <strong>Nature & Botanical Metaphors:</strong> Connecting with natural cycles to foster emotional groundedness.
                  </div>
                </div>
                <div className="medium-item">
                  <Activity size={20} className="medium-icon" />
                  <div>
                    <strong>Mindfulness & Somatic Awareness:</strong> Gentle breathwork and nervous system regulating techniques.
                  </div>
                </div>
              </div>

              <p className="disclaimer-text" style={{ marginTop: '1.25rem' }}>
                *Note: The incorporation of any creative or complementary activity depends entirely on client goals, clinical appropriateness, and mutual consent within a broader treatment plan.
              </p>
            </div>

            <div className="mediums-visual">
              <div className="rounded-image-wrapper">
                <img
                  src={getAssetUrl('/images/whole-person-creative.jpg')}
                  alt="Mindful journal, botanical elements, teacup, and watercolor palette on linen fabric"
                  className="rounded-feature-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: HYBRID CARE MODEL */}
      <section className="section section-bg-sage" aria-labelledby="hybrid-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sage">Flexible Access</span>
            <h2 id="hybrid-heading" className="section-title">In-Person & Secure Telehealth Options</h2>
            <p className="section-subtitle">
              We offer flexible care models designed to fit your family's schedule and clinical needs.
            </p>
          </div>

          <div className="grid-3 hybrid-grid">
            <div className="card hybrid-card">
              <div className="hybrid-icon-wrap">
                <Building2 size={32} />
              </div>
              <h3>In-Person Care</h3>
              <p>
                In-person sessions in a warm, welcoming, sunlit office environment designed for connection, comfort, and focus.
              </p>
              <div className="hybrid-location-tag">
                North Carolina
              </div>
            </div>

            <div className="card hybrid-card">
              <div className="hybrid-icon-wrap">
                <Laptop size={32} />
              </div>
              <h3>Virtual Telehealth</h3>
              <p>
                Convenient, encrypted, HIPAA-compliant video therapy sessions accessible from the comfort of your home across {siteConfig.contact.state}.
              </p>
              <div className="hybrid-location-tag">
                Statewide Virtual Access
              </div>
            </div>

            <div className="card hybrid-card">
              <div className="hybrid-icon-wrap">
                <Layers size={32} />
              </div>
              <h3>Hybrid Flexibility</h3>
              <p>
                Combine in-person sessions with telehealth appointments as needed to support busy school, work, and family schedules.
              </p>
              <div className="hybrid-location-tag">
                Personalized Scheduling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CONVERSION CTA */}
      <ConsultationCTA />

      <style>{`
        /* Hero Section */
        .hero-section {
          padding: 4.5rem 0 5rem;
          background: linear-gradient(180deg, var(--color-linen) 0%, #f4eee7 100%);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 1.25rem;
        }

        .hero-title {
          margin-bottom: 0.85rem;
          letter-spacing: -0.025em;
        }

        .hero-credential-line {
          font-size: 1.02rem;
          color: var(--color-forest);
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hero-cred-sub {
          font-size: 0.88rem;
          color: var(--color-sage);
          font-weight: 600;
        }

        .hero-lead {
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .hero-trust-indicators {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }

        .trust-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest);
        }

        .trust-icon {
          color: var(--color-sage);
        }

        /* Hero Media Frame */
        .hero-image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
          box-shadow: var(--shadow-lg);
        }

        .hero-img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 11;
        }

        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: var(--shadow-md);
          max-width: 320px;
          animation: floatSlow 4s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          from { transform: translateY(0px); }
          to { transform: translateY(-8px); }
        }

        .floating-card-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        .floating-card-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-forest);
          margin: 0;
        }

        .floating-card-sub {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Section Header */
        .section-header {
          max-width: 780px;
          margin: 0 auto 3.5rem;
        }

        .section-header .badge {
          margin-bottom: 1rem;
        }

        .section-title {
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-muted);
        }

        .text-center {
          text-align: center;
        }

        .align-center {
          align-items: center;
        }

        /* Paths Grid */
        .path-card {
          padding: 2.5rem 2rem;
          justify-content: space-between;
        }

        .path-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .icon-sage { background-color: var(--color-sage-tint); color: var(--color-sage); }
        .icon-terracotta { background-color: var(--color-terracotta-tint); color: var(--color-terracotta); }
        .icon-sand { background-color: var(--color-sand-tint); color: #855e34; }

        .path-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.85rem;
          color: var(--color-forest);
        }

        .path-card-desc {
          font-size: 0.98rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .path-features-list {
          list-style: none;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .path-features-list li {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-forest-light);
          position: relative;
          padding-left: 1.25rem;
        }

        .path-features-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-size: 1.2rem;
          line-height: 1;
        }

        .path-card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-terracotta);
          margin-top: auto;
        }

        .path-card-link:hover {
          color: var(--color-terracotta-hover);
          gap: 0.65rem;
        }

        /* Highlight Sections */
        .modality-badges-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin: 1.5rem 0 2rem;
        }

        .modality-tag {
          background-color: var(--color-sage-tint);
          color: var(--color-forest);
          font-size: 0.86rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(78, 114, 96, 0.2);
        }

        .section-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .rounded-image-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .rounded-feature-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 10;
          transition: transform 0.6s ease;
        }

        .rounded-image-wrapper:hover .rounded-feature-img {
          transform: scale(1.02);
        }

        /* Advocacy Checklist */
        .advocacy-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin: 1.5rem 0;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.96rem;
          font-weight: 500;
          color: var(--color-forest);
        }

        .check-row-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        /* Clinician Feature Box */
        .clinician-feature-box {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 3.5rem;
          box-shadow: var(--shadow-md);
        }

        .clinician-portrait-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .clinician-portrait {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 3 / 4;
        }

        .clinician-name-title {
          font-family: var(--font-serif);
          font-size: 2.15rem;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .clinician-creds-line {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-sage);
          margin-bottom: 1.25rem;
        }

        .credentials-summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0 2rem;
          padding: 1.25rem;
          background-color: var(--color-linen);
          border-radius: var(--radius-md);
        }

        .cred-badge-item {
          display: flex;
          flex-direction: column;
        }

        .cred-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-forest);
        }

        .cred-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        /* Pillars Grid */
        .pillar-card {
          padding: 2.25rem 1.75rem;
          position: relative;
        }

        .pillar-step {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--color-sand);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .pillar-title {
          font-size: 1.25rem;
          margin-bottom: 0.65rem;
          color: var(--color-forest);
        }

        .pillar-desc {
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Mediums List */
        .mediums-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .medium-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .medium-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .medium-item strong {
          color: var(--color-forest);
        }

        /* Hybrid Grid */
        .hybrid-card {
          text-align: center;
          padding: 2.75rem 2rem;
          align-items: center;
        }

        .hybrid-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .hybrid-card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.3rem;
        }

        .hybrid-card p {
          font-size: 0.94rem;
          margin-bottom: 1.5rem;
        }

        .hybrid-location-tag {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-forest);
          background-color: var(--color-sand-tint);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          margin-top: auto;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-floating-card {
            display: none;
          }
          .clinician-feature-box {
            padding: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 0 3.5rem;
          }
          .credentials-summary-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
