import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead
        title="Website Privacy Policy | GroWell Therapy Collective"
        description="Public website privacy policy outlining data collection, cookie usage, analytics, and non-collection of protected health information on the marketing site."
        canonicalPath="/privacy-policy"
      />

      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow">
          <Link to="/" className="back-link">&larr; Return to Home</Link>
          <span className="badge badge-forest" style={{ marginTop: '1rem' }}>Compliance & Privacy</span>
          <h1 className="legal-title">Website Privacy Policy</h1>
          <p className="legal-updated">Last Updated: September 2026</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow legal-body-content">
          <div className="notice-box notice-sage">
            <Lock size={22} className="notice-icon" />
            <div className="notice-content">
              <p>
                <strong>Public Website Scope:</strong> This Privacy Policy applies strictly to information collected through this public marketing website (growelltherapycollective.com). It does not govern protected health information (PHI) collected within our external, HIPAA-compliant client portal.
              </p>
            </div>
          </div>

          <h2>1. Information We Collect on This Website</h2>
          <p>
            When you interact with our public website, we may collect general, non-clinical information that you voluntarily provide when submitting an initial consultation request, contact inquiry, or workshop request. This information is limited to:
          </p>
          <ul>
            <li>Contact details: First and last name, email address, phone number</li>
            <li>Communication preferences and general availability</li>
            <li>High-level, non-sensitive service interests (e.g. "Therapy", "Educational Advocacy")</li>
          </ul>
          <p>
            <strong>We expressly request that you DO NOT submit sensitive personal health information (PHI), diagnostic histories, medications, or educational records through public website forms.</strong>
          </p>

          <h2>2. How Information Is Used</h2>
          <p>We use the information provided solely to:</p>
          <ul>
            <li>Respond to your direct inquiries and schedule initial consultation conversations</li>
            <li>Coordinate organizational training and workshop proposals</li>
            <li>Improve the functionality, accessibility, and navigation of our public website</li>
          </ul>

          <h2>3. Cookies & Marketing Analytics</h2>
          <p>
            Our public website may utilize privacy-conscious, non-identifiable analytics cookies to analyze traffic patterns and page views. These analytics tools do not track or store sensitive clinical data. You can configure your browser to decline cookies if preferred.
          </p>

          <h2>4. Third-Party Client Portal & Clinical EHR</h2>
          <p>
            When you become an active client, your clinical documentation, intake paperwork, telehealth video sessions, and billing records are managed through an external, HIPAA-compliant electronic health records (EHR) platform. That system is governed by our formal <Link to="/notice-of-privacy-practices">Notice of Privacy Practices</Link>.
          </p>

          <h2>5. Contact Regarding Privacy</h2>
          <p>
            If you have questions regarding this Website Privacy Policy, please reach out to:
            <br />
            <strong>GroWell Therapy Collective LLC</strong>
            <br />
            Attention: Privacy Officer
            <br />
            Email: {siteConfig.contact.email}
          </p>
        </div>
      </section>

      <LegalStyles />
    </div>
  );
};

export const WebsiteTermsPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead
        title="Website Terms of Use | GroWell Therapy Collective"
        description="Terms of Use for the public website of GroWell Therapy Collective LLC."
        canonicalPath="/terms"
      />

      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow">
          <Link to="/" className="back-link">&larr; Return to Home</Link>
          <span className="badge badge-sand" style={{ marginTop: '1rem' }}>Legal Agreement</span>
          <h1 className="legal-title">Website Terms of Use</h1>
          <p className="legal-updated">Last Updated: September 2026</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow legal-body-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of GroWell Therapy Collective LLC, you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>

          <h2>2. No Medical or Legal Advice</h2>
          <p>
            The content, articles, and resources provided on this website are for educational and informational purposes only. Website content does not establish a therapist-client or advocate-client relationship and should not be relied upon as professional psychological, psychiatric, or legal advice.
          </p>

          <h2>3. Emergency Situations</h2>
          <p>
            This website is not monitored 24/7 and does not provide emergency medical services. If you are experiencing a mental health crisis or physical emergency, immediately call <strong>911</strong> or text/call <strong>988</strong>.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All original text, graphics, logos, and materials created by GroWell Therapy Collective LLC are protected by copyright and intellectual property laws.
          </p>
        </div>
      </section>

      <LegalStyles />
    </div>
  );
};

export const NoticeOfPrivacyPracticesPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead
        title="Notice of Privacy Practices (HIPAA) | GroWell Therapy Collective"
        description="HIPAA Notice of Privacy Practices placeholder outlining clinical record confidentiality and rights."
        canonicalPath="/notice-of-privacy-practices"
      />

      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow">
          <Link to="/" className="back-link">&larr; Return to Home</Link>
          <span className="badge badge-forest" style={{ marginTop: '1rem' }}>HIPAA Compliance</span>
          <h1 className="legal-title">Notice of Privacy Practices</h1>
          <p className="legal-updated">Effective Date: September 2026</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow legal-body-content">
          <div className="notice-box notice-sage">
            <Shield size={22} className="notice-icon" />
            <div className="notice-content">
              <p>
                <strong>Summary of Patient Rights:</strong> THIS NOTICE DESCRIBES HOW MEDICAL AND BEHAVIORAL HEALTH INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </p>
            </div>
          </div>

          <h2>1. Our Commitment to Your Health Information</h2>
          <p>
            GroWell Therapy Collective LLC is committed to maintaining the confidentiality of your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and state privacy regulations.
          </p>

          <h2>2. Permitted Uses and Disclosures</h2>
          <p>
            Your health information may be used and disclosed for purposes of:
          </p>
          <ul>
            <li><strong>Treatment:</strong> Providing, coordinating, or managing mental health psychotherapy and clinical care.</li>
            <li><strong>Payment:</strong> Generating billing statements or superbills for third-party insurance reimbursement with your consent.</li>
            <li><strong>Healthcare Operations:</strong> Quality assessment, administrative audits, and compliance with licensing boards.</li>
          </ul>

          <h2>3. Mandated Exceptions to Confidentiality</h2>
          <p>
            Under state and federal law, licensed mental health professionals are legally mandated to disclose confidential information without your consent in limited safety circumstances:
          </p>
          <ul>
            <li>Reasonable suspicion of child abuse, elder abuse, or dependent adult abuse</li>
            <li>Evidence of imminent, serious physical danger to yourself or an identifiable other person</li>
            <li>Compliance with a valid court order or legally binding subpoena</li>
          </ul>

          <h2>4. Client Portal Access to Full Document</h2>
          <p>
            Current clients receive and sign the comprehensive, state-specific Notice of Privacy Practices and Informed Consent documentation during electronic onboarding in the secure <Link to="/client-portal">GroWell Client Portal</Link>.
          </p>
        </div>
      </section>

      <LegalStyles />
    </div>
  );
};

const LegalStyles: React.FC = () => (
  <style>{`
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-terracotta);
    }
    .back-link:hover {
      text-decoration: underline;
    }
    .legal-title {
      font-size: clamp(2.15rem, 3.8vw, 3.25rem);
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .legal-updated {
      font-size: 0.88rem;
      color: var(--color-text-light);
      margin: 0;
    }
    .legal-body-content h2 {
      font-family: var(--font-serif);
      font-size: 1.55rem;
      color: var(--color-forest);
      margin-top: 2rem;
      margin-bottom: 0.75rem;
    }
    .legal-body-content p {
      font-size: 1.02rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
      color: var(--color-text-main);
    }
    .legal-body-content ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .legal-body-content li {
      font-size: 0.98rem;
      line-height: 1.65;
      margin-bottom: 0.5rem;
      color: var(--color-text-muted);
    }
  `}</style>
);
