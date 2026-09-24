import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, ArrowRight, Shield, Heart, LifeBuoy, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Footer Navigation">
      {/* Top Banner: Emergency & Crisis Notice */}
      <div className="footer-crisis-bar">
        <div className="container footer-crisis-inner">
          <LifeBuoy className="crisis-footer-icon" size={20} aria-hidden="true" />
          <p className="crisis-footer-text">
            <strong>Emergency & Crisis Support:</strong> GroWell Therapy Collective is not an emergency medical service. If you are experiencing a medical or psychiatric emergency, please call <strong>911</strong> or visit the nearest emergency room. For immediate 24/7 mental health crisis support, call or text <a href="tel:988" className="footer-crisis-link"><strong>988</strong> (Suicide & Crisis Lifeline)</a>.
          </p>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Brand & Positioning */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Sprout size={24} />
              </div>
              <div>
                <span className="footer-logo-title">GroWell</span>
                <span className="footer-logo-sub">Therapy Collective LLC</span>
              </div>
            </Link>

            <p className="footer-tagline">
              Compassionate mental health therapy, trauma-informed care, and K–12 educational advocacy—empowering adolescents, adults, and families to grow through life's challenges.
            </p>

            <div className="footer-clinician-info">
              <p className="clinician-name">{siteConfig.clinicianName}, {siteConfig.clinicianCredentials}</p>
              <p className="clinician-meta">{siteConfig.exactLicenseDesignation} ({siteConfig.ncLicenseNumber})</p>
              <p className="clinician-meta">{siteConfig.educationLicense}</p>
              <p className="clinician-meta">EMDR • TF-CBT • CBT • Gottman Level I • Reiki II</p>
            </div>
          </div>

          {/* Column 2: Clinical Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/therapy">Therapy Services</Link></li>
              <li><Link to="/emdr-therapy">EMDR Therapy</Link></li>
              <li><Link to="/therapy">Adolescent Therapy (11+)</Link></li>
              <li><Link to="/therapy">Adult & Trauma Care</Link></li>
              <li><Link to="/educational-advocacy">IEP & 504 Advocacy</Link></li>
              <li><Link to="/our-approach">Whole-Person Approach</Link></li>
              <li><Link to="/workshops">Workshops & Organizations</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation & Client Access */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/about">Meet Jessica N. Mouzon</Link></li>
              <li><Link to="/resources">Resource & Article Library</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/insurance-fees">Insurance & Fees</Link></li>
              <li><Link to="/contact">Contact & Locations</Link></li>
              <li>
                <Link
                  to="/client-portal"
                  className="portal-footer-link"
                  onClick={() => trackEvent('client_portal_clicked', { source: 'footer' })}
                >
                  Existing Client Portal &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action & Contact */}
          <div className="footer-col action-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <p className="footer-contact-note">
              Begin with a confidential consultation to determine how we can best support your journey.
            </p>

            <Link
              to="/consultation"
              className="btn btn-primary btn-sm footer-cta-btn"
              onClick={() => trackEvent('consultation_cta_clicked', { source: 'footer' })}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>

            <div className="footer-contact-details">
              <div className="contact-item">
                <MapPin size={16} className="contact-item-icon" />
                <span>Hybrid: In-Person & Virtual across NC</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-item-icon" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-item-icon" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimers Strip */}
        <div className="footer-disclaimers">
          <p className="legal-disclaimer">
            <strong>Legal & Professional Disclaimers:</strong> GroWell Therapy Collective LLC provides licensed mental health counseling and educational consultation. Educational advocacy services do not constitute legal advice or formal legal representation. Gottman Method Level I Training reflects completed professional training in Gottman Method Couples Therapy frameworks and does not imply full certification. Reiki Level II is an optional complementary wellness practice and is not presented as an equivalent substitute for evidence-based psychotherapy or medical intervention. This public website does not collect sensitive health information.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} GroWell Therapy Collective LLC. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot-sep">•</span>
            <Link to="/terms">Website Terms</Link>
            <span className="dot-sep">•</span>
            <Link to="/notice-of-privacy-practices">Notice of Privacy Practices</Link>
            <span className="dot-sep">•</span>
            <Link to="/client-portal">Client Portal</Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-forest);
          color: #d2ddd6;
          margin-top: auto;
          font-size: 0.94rem;
        }

        .footer-crisis-bar {
          background-color: #16241c;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem 0;
        }

        .footer-crisis-inner {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .crisis-footer-icon {
          color: #d4a373;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .crisis-footer-text {
          font-size: 0.86rem;
          color: #c0cfc6;
          line-height: 1.55;
          margin: 0;
        }

        .crisis-footer-text strong {
          color: #ffffff;
        }

        .footer-crisis-link {
          color: #f7d299;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 600;
        }

        .footer-crisis-link:hover {
          color: #ffffff;
        }

        .footer-main-content {
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        /* Brand col */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.25rem;
        }

        .footer-logo-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: #2e4738;
          color: #79a68e;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-title {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          line-height: 1.1;
          color: #ffffff;
        }

        .footer-logo-sub {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #92a89c;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: #b5c7bd;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .footer-clinician-info {
          border-left: 2px solid #3c5948;
          padding-left: 0.85rem;
        }

        .clinician-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.92rem;
          margin-bottom: 0.15rem;
        }

        .clinician-meta {
          font-size: 0.8rem;
          color: #97aca1;
          margin-bottom: 0.1rem;
        }

        /* Nav Columns */
        .footer-heading {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links a {
          color: #b5c7bd;
          font-size: 0.92rem;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .portal-footer-link {
          color: #f7d299 !important;
          font-weight: 600;
        }

        .portal-footer-link:hover {
          color: #ffffff !important;
        }

        /* Action Column */
        .footer-contact-note {
          font-size: 0.88rem;
          color: #b5c7bd;
          margin-bottom: 1rem;
          line-height: 1.55;
        }

        .footer-cta-btn {
          margin-bottom: 1.5rem;
          width: 100%;
          justify-content: center;
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #9eb1a6;
        }

        .contact-item-icon {
          color: #79a68e;
          flex-shrink: 0;
        }

        /* Disclaimers */
        .footer-disclaimers {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
        }

        .legal-disclaimer {
          font-size: 0.78rem;
          line-height: 1.6;
          color: #8c9e94;
        }

        .legal-disclaimer strong {
          color: #b5c7bd;
        }

        /* Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.84rem;
          color: #8c9e94;
          margin: 0;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .footer-legal-links a {
          font-size: 0.82rem;
          color: #9eb1a6;
        }

        .footer-legal-links a:hover {
          color: #ffffff;
        }

        .dot-sep {
          color: #4a6354;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
