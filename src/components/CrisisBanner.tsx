import React from 'react';
import { PhoneCall, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const CrisisBanner: React.FC = () => {
  return (
    <aside aria-label="Crisis and Emergency Resources" className="crisis-banner">
      <div className="container crisis-banner-inner">
        <div className="crisis-text-group">
          <AlertCircle className="crisis-icon" size={18} aria-hidden="true" />
          <p className="crisis-message">
            <strong>Mental Health Emergency?</strong> If you or someone you know is in immediate danger, call <strong>911</strong>. For 24/7 confidential crisis support, call or text <a href="tel:988" className="crisis-tel-link"><strong>988</strong> (Suicide & Crisis Lifeline)</a>.
          </p>
        </div>
      </div>
      <style>{`
        .crisis-banner {
          background-color: var(--color-forest-dark);
          color: #d1ded7;
          font-size: 0.82rem;
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .crisis-banner-inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .crisis-text-group {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-align: center;
        }
        .crisis-icon {
          color: #d4a373;
          flex-shrink: 0;
        }
        .crisis-message {
          margin: 0;
          color: #d1ded7;
          font-size: 0.82rem;
          line-height: 1.4;
        }
        .crisis-message strong {
          color: #ffffff;
          font-weight: 600;
        }
        .crisis-tel-link {
          color: #f7d299;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 600;
        }
        .crisis-tel-link:hover {
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .crisis-banner {
            font-size: 0.76rem;
            padding: 0.4rem 0;
          }
          .crisis-message {
            font-size: 0.76rem;
          }
          .crisis-icon {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};
