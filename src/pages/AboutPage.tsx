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
  FileCheck,
  Compass,
  Users,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';
import { getAssetUrl } from '../utils/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEOHead
        title="Jessica N. Mouzon, MA, LCMHC"
        description="Learn about Jessica N. Mouzon, MA, LCMHC, founder of GroWell Therapy Collective. Licensed Clinical Mental Health Counselor (NC #16006), Exceptional Children's K–12 Educator, and EMDR clinician."
        canonicalPath="/about"
      />

      {/* Hero / Intro */}
      <section className="section section-bg-muted" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="about-hero-text">
              <span className="badge badge-sage">Founder & Licensed Clinical Mental Health Counselor</span>
              <h1 id="about-hero-title" className="about-title">Jessica N. Mouzon, MA, LCMHC</h1>
              <p className="lead">
                Bridging clinical mental health care, trauma-informed treatment, educational expertise, and family advocacy.
              </p>
              <p>
                Jessica founded GroWell Therapy Collective with a foundational belief: growth is not a rigid, linear formula. Human beings thrive when their mental health, learning differences, family systems, and life environments are understood collaboratively.
              </p>
              <div className="about-experience-badge">
                <Clock size={20} className="exp-icon" />
                <span><strong>{siteConfig.experienceSummary}</strong></span>
              </div>
            </div>

            <div className="about-hero-portrait-frame">
              <img
                src={getAssetUrl('/images/jessica-mouzon.jpg')}
                alt="Jessica N. Mouzon, MA, LCMHC in a calm, modern, sunlit consultation office"
                className="about-portrait-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Career at the Intersection of Mental Health and Education */}
      <section className="section" aria-labelledby="intersection-heading">
        <div className="container container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-terracotta">Dual Background</span>
            <h2 id="intersection-heading" className="section-title">
              A Career at the Intersection of Mental Health and Education
            </h2>
            <p className="section-subtitle">
              Her career has repeatedly placed her at the intersection of emotional health, behavior, learning, family systems, schools, community resources, and clinical care.
            </p>
          </div>

          <div className="career-roles-grid grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card role-card">
              <div className="role-icon-wrap icon-terracotta">
                <GraduationCap size={24} />
              </div>
              <h4>Special Education Teacher & K–12 Instruction</h4>
              <p>
                Direct classroom experience designing differentiated instruction, implementing behavior support plans, and supporting students receiving special education services.
              </p>
            </div>

            <div className="card role-card">
              <div className="role-icon-wrap icon-sage">
                <BookOpen size={24} />
              </div>
              <h4>Exceptional Children’s Program Coordination</h4>
              <p>
                Process coordinating teacher leading IEP meetings, managing referral pipelines, developing special education workflows, and coaching educators.
              </p>
            </div>

            <div className="card role-card">
              <div className="role-icon-wrap icon-sand">
                <Users size={24} />
              </div>
              <h4>Intensive In-Home Clinical Leadership</h4>
              <p>
                Providing intensive, systemic clinical intervention for youth and families in crisis—navigating family dynamics, community support systems, and multi-agency coordination.
              </p>
            </div>

            <div className="card role-card">
              <div className="role-icon-wrap icon-forest">
                <Layers size={24} />
              </div>
              <h4>Outpatient & School-Based Mental Health Therapy</h4>
              <p>
                Individual psychotherapy for adolescents and adults addressing trauma reprocessing, anxiety disorders, depression, executive functioning, and life transitions.
              </p>
            </div>
          </div>

          <p className="career-summary-note">
            Rather than treating educational challenges and psychological distress as separate silos, Jessica integrates both worlds. She understands that a student’s classroom struggles often reflect nervous system overwhelm, and that clinical progress flourishes when reinforced by supportive academic and family environments.
          </p>
        </div>
      </section>

      {/* Core Credentials Badges Section */}
      <section className="section section-bg-sage" aria-labelledby="creds-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-forest">Education & Licensure</span>
            <h2 id="creds-heading" className="section-title">Credentials & Verified Licensure</h2>
            <p className="section-subtitle">
              Grounded in rigorous CACREP-accredited graduate training, state clinical licensure, specialized educator credentials, and advanced therapeutic modalities.
            </p>
          </div>

          <div className="grid-3 creds-grid">
            {/* Credential 1: Graduate Education & Clinical Licensure */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-sage">
                <FileCheck size={28} />
              </div>
              <span className="cred-category">Graduate Education & License</span>
              <h3 className="cred-card-title">{siteConfig.exactLicenseDesignation}</h3>
              <div className="cred-status-box">
                <p><strong>Licensure:</strong> {siteConfig.ncLicenseNumber}</p>
                <p><strong>Graduate Degree:</strong> Master of Arts in Counseling</p>
                <p><strong>Track:</strong> Clinical Mental Health Track</p>
                <p><strong>Institution:</strong> Wake Forest University</p>
                <p><strong>Accreditation:</strong> CACREP-Accredited Program</p>
              </div>
              <p className="cred-card-desc">
                Providing evidence-based psychotherapy, trauma resolution, and compassionate mental health counseling for adolescents (11+), adults, and families.
              </p>
            </div>

            {/* Credential 2: K-12 Educator License */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-terracotta">
                <GraduationCap size={28} />
              </div>
              <span className="cred-category">Specialized Educator License</span>
              <h3 className="cred-card-title">{siteConfig.credentials.educationLicense}</h3>
              <div className="cred-status-box">
                <p><strong>Scope:</strong> Exceptional Children K–12</p>
                <p><strong>Expertise:</strong> IEP management & referral workflows</p>
                <p><strong>Assessment:</strong> Academic & psychoeducational interpretation</p>
                <p><strong>Advocacy:</strong> 504 plans & behavioral support plans</p>
              </div>
              <p className="cred-card-desc">
                In-depth practical experience inside the school system, empowering parents and students through collaborative, informed educational advocacy.
              </p>
            </div>

            {/* Credential 3: Modalities & Training */}
            <div className="card cred-card">
              <div className="cred-icon-wrap icon-sand">
                <Award size={28} />
              </div>
              <span className="cred-category">Clinical Modalities & Training</span>
              <h3 className="cred-card-title">Evidence-Informed Approaches</h3>
              <div className="cred-status-box">
                <p><strong>Trauma & Reprocessing:</strong> EMDR & TF-CBT</p>
                <p><strong>Cognitive / Humanistic:</strong> CBT & Person-Centered</p>
                <p><strong>Couples & Relationships:</strong> Gottman Method Level I Training</p>
                <p><strong>Complementary Wellness:</strong> Reiki Level II</p>
              </div>
              <p className="cred-card-desc">
                Equipped with specialized clinical frameworks for trauma processing, cognitive reframing, and relational dynamics, alongside gentle complementary relaxation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy Flow */}
      <section className="section" aria-labelledby="journey-heading">
        <div className="container container-narrow">
          <div className="about-story-flow">
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <span className="badge badge-sand">Our Approach</span>
              <h2 id="journey-heading" className="section-title" style={{ marginTop: '0.75rem' }}>
                Jessica’s Clinical & Educational Philosophy
              </h2>
            </div>

            <div className="story-paragraphs">
              <p className="lead">
                Throughout more than a decade of working with students, parents, and adults, one theme repeatedly emerged: people are rarely struggling in isolation.
              </p>
              <p>
                A teenager struggling with school attendance might be battling an undiagnosed learning difference, sensory overload, or social anxiety. A parent trying to support their child might feel overwhelmed by confusing educational paperwork and adversarial school meetings. An adult navigating trauma might feel that traditional talk therapy alone hasn't helped their nervous system feel truly calm.
              </p>
              <p>
                Jessica created GroWell to tear down the silos between clinical psychotherapy, educational navigation, and whole-person wellness. At GroWell, treatment plans are tailored to your real life—integrating practical strategies, deep trauma reprocessing, and collaborative advocacy when needed.
              </p>

              <div className="philosophy-principles-grid" style={{ marginTop: '2rem' }}>
                <div className="card card-tint principle-card">
                  <div className="principle-header">
                    <CheckCircle2 size={20} className="principle-check" />
                    <h4>Trauma-Informed & Safe</h4>
                  </div>
                  <p>Grounded in the understanding of how traumatic stress impacts the nervous system, memory, and relationships.</p>
                </div>

                <div className="card card-tint principle-card">
                  <div className="principle-header">
                    <CheckCircle2 size={20} className="principle-check" />
                    <h4>Developmentally Attuned</h4>
                  </div>
                  <p>Tailoring communication, pacing, and therapeutic mediums to adolescents (11+), emerging young adults, and mature adults.</p>
                </div>

                <div className="card card-tint principle-card">
                  <div className="principle-header">
                    <CheckCircle2 size={20} className="principle-check" />
                    <h4>Strengths-Based & Collaborative</h4>
                  </div>
                  <p>You are the expert on your own lived experience; Jessica acts as a skilled guide, clinician, and advocate.</p>
                </div>

                <div className="card card-tint principle-card">
                  <div className="principle-header">
                    <CheckCircle2 size={20} className="principle-check" />
                    <h4>Transparent & Grounded</h4>
                  </div>
                  <p>Free of clinical pretense and medical jargon, focusing on practical tools and authentic human connection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <ConsultationCTA
        title="Connect With Jessica N. Mouzon"
        subtitle="Schedule a consultation to discuss your needs, explore therapy or advocacy options, and determine if GroWell is the right fit."
      />

      <style>{`
        .about-hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-title {
          margin: 0;
          font-size: clamp(2.15rem, 3.8vw, 3.25rem);
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

        /* Career Roles Grid */
        .career-roles-grid {
          gap: 1.5rem;
        }

        .role-card {
          padding: 2rem 1.75rem;
        }

        .role-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .role-card h4 {
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .role-card p {
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 0;
        }

        .career-summary-note {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-forest);
          background-color: var(--color-linen);
          border-left: 3px solid var(--color-sage);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
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
          margin: 0.25rem 0;
          font-size: 0.82rem;
          color: var(--color-text-main);
          line-height: 1.45;
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

        .philosophy-principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .principle-card {
          padding: 1.5rem;
        }

        .principle-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .principle-check {
          color: var(--color-sage);
          flex-shrink: 0;
        }

        .principle-header h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin: 0;
        }

        .principle-card p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
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
          .career-roles-grid,
          .philosophy-principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
