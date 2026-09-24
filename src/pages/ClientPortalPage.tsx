import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  ExternalLink, 
  Calendar, 
  FileText, 
  CreditCard, 
  Video, 
  ShieldCheck, 
  AlertCircle, 
  Phone, 
  Mail 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const ClientPortalPage: React.FC = () => {
  const hasPortalUrl = Boolean(siteConfig.clientPortalUrl && siteConfig.clientPortalUrl.trim().length > 0);

  const handlePortalLaunch = () => {
    trackEvent('client_portal_clicked', { destination: 'external_portal' });
  };

  return (
    <div className="client-portal-page">
      <SEOHead
        title="Client Portal Access | Existing Clients"
        description="Secure portal gateway for existing GroWell clients to access appointments, telehealth, intake forms, billing, and clinical communication."
        canonicalPath="/client-portal"
      />

      <section className="section section-bg-muted" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container container-narrow">
          <div className="portal-card card animate-fade-in">
            <div className="portal-header text-center">
              <div className="portal-lock-icon">
                <Lock size={32} />
              </div>
              <span className="badge badge-forest">Secure Client Gateway</span>
              <h1 className="portal-title">GroWell Client Portal</h1>
              <p className="portal-lead">
                Existing GroWell clients can access secure scheduling, intake paperwork, billing statements, telehealth sessions, and HIPAA-compliant messaging through our centralized client platform.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="portal-features-grid grid-2">
              <div className="portal-feature-item">
                <Calendar size={20} className="pf-icon" />
                <div>
                  <strong>Appointment Management</strong>
                  <p>View upcoming appointments, request reschedules, and check availability.</p>
                </div>
              </div>

              <div className="portal-feature-item">
                <Video size={20} className="pf-icon" />
                <div>
                  <strong>Telehealth Access</strong>
                  <p>Join secure, encrypted 1-on-1 video therapy sessions directly from your device.</p>
                </div>
              </div>

              <div className="portal-feature-item">
                <FileText size={20} className="pf-icon" />
                <div>
                  <strong>Secure Intake & Records</strong>
                  <p>Complete confidential clinical forms and access treatment summaries.</p>
                </div>
              </div>

              <div className="portal-feature-item">
                <CreditCard size={20} className="pf-icon" />
                <div>
                  <strong>Billing & Superbills</strong>
                  <p>Pay invoices, manage cards on file, and download superbills for insurance.</p>
                </div>
              </div>
            </div>

            {/* Action State: External URL vs Coming Soon */}
            <div className="portal-action-box text-center">
              {hasPortalUrl ? (
                <div>
                  <a
                    href={siteConfig.clientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg portal-launch-btn"
                    onClick={handlePortalLaunch}
                  >
                    <span>Access Secure Client Portal</span>
                    <ExternalLink size={18} />
                  </a>
                  <p className="portal-security-tag">
                    <ShieldCheck size={16} />
                    <span>256-Bit SSL Encrypted • HIPAA-Compliant External System</span>
                  </p>
                </div>
              ) : (
                <div className="portal-placeholder-box">
                  <AlertCircle size={24} className="placeholder-alert-icon" />
                  <h3>Client Portal Access Available Soon</h3>
                  <p>
                    Our integrated electronic health record (EHR) and client portal are currently being configured for launch. Current clients needing to schedule, cancel, or request records may reach out directly:
                  </p>
                  <div className="portal-direct-contact">
                    <Link to="/contact" className="btn btn-forest btn-sm">
                      Contact Jessica N. Mouzon &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Non-Client Redirect */}
            <div className="portal-footer-note text-center">
              <p>
                Not an existing client yet?{' '}
                <Link to="/consultation" className="consult-inline-link">
                  Book an initial consultation to get started &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .portal-card {
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-border);
        }

        .portal-lock-icon {
          width: 68px;
          height: 68px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .portal-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .portal-lead {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 650px;
          margin: 0 auto 2.5rem;
        }

        .portal-features-grid {
          background-color: var(--color-linen);
          border-radius: var(--radius-lg);
          padding: 2rem;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .portal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .pf-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .portal-feature-item strong {
          display: block;
          font-size: 0.96rem;
          color: var(--color-forest);
          margin-bottom: 0.2rem;
        }

        .portal-feature-item p {
          font-size: 0.86rem;
          margin: 0;
          line-height: 1.45;
        }

        .portal-launch-btn {
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }

        .portal-security-tag {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--color-text-light);
          margin-top: 1rem;
        }

        .portal-placeholder-box {
          background-color: var(--color-sand-tint);
          border: 1px solid #dfcfbc;
          border-radius: var(--radius-md);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .placeholder-alert-icon {
          color: var(--color-amber-gold);
          margin-bottom: 0.75rem;
        }

        .portal-placeholder-box h3 {
          font-size: 1.2rem;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .portal-placeholder-box p {
          font-size: 0.92rem;
          margin-bottom: 1.25rem;
        }

        .portal-footer-note {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }

        .portal-footer-note p {
          font-size: 0.94rem;
          margin: 0;
        }

        .consult-inline-link {
          font-weight: 600;
          color: var(--color-terracotta);
        }

        .consult-inline-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .portal-card {
            padding: 2.25rem 1.5rem;
          }
          .portal-features-grid {
            grid-template-columns: 1fr;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};
