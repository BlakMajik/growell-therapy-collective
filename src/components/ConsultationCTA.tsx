import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface ConsultationCTAProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
  title = "Your Next Step Can Start With a Conversation.",
  subtitle = "Whether you're exploring therapy for yourself or your adolescent, or seeking experienced advocacy to navigate school challenges, we are here to support your growth.",
  badge = "Free Initial Consultation"
}) => {
  return (
    <section className="consult-cta-section" aria-labelledby="consult-cta-heading">
      <div className="container">
        <div className="consult-cta-card">
          <div className="consult-cta-content">
            <span className="badge badge-terracotta">{badge}</span>
            <h2 id="consult-cta-heading" className="consult-cta-title">{title}</h2>
            <p className="consult-cta-desc">{subtitle}</p>

            <div className="consult-cta-highlights">
              <div className="highlight-item">
                <ShieldCheck size={18} className="highlight-icon" />
                <span>No pressure, confidential discussion</span>
              </div>
              <div className="highlight-item">
                <HeartHandshake size={18} className="highlight-icon" />
                <span>Explore fit & personalized support options</span>
              </div>
            </div>

            <div className="consult-cta-actions">
              <Link
                to="/consultation"
                className="btn btn-primary btn-lg"
                onClick={() => trackEvent('consultation_cta_clicked', { source: 'cta_banner' })}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline"
                onClick={() => trackEvent('consultation_cta_clicked', { source: 'cta_contact_secondary' })}
              >
                <MessageSquare size={17} />
                <span>Contact GroWell</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .consult-cta-section {
          padding: 4.5rem 0 5.5rem;
          background-color: var(--color-linen);
        }

        .consult-cta-card {
          background: linear-gradient(145deg, #ffffff 0%, #f4eee7 100%);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 4.5rem 3.5rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          position: relative;
          overflow: hidden;
        }

        .consult-cta-card::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(192, 119, 88, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .consult-cta-card::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(78, 114, 96, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .consult-cta-content {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .consult-cta-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          color: var(--color-forest);
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }

        .consult-cta-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .consult-cta-highlights {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-forest-light);
        }

        .highlight-icon {
          color: var(--color-sage);
        }

        .consult-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .consult-cta-card {
            padding: 3rem 1.75rem;
            border-radius: var(--radius-lg);
          }
          .consult-cta-highlights {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }
          .consult-cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .consult-cta-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
