import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Scale
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';

export const InsuranceFeesPage: React.FC = () => {
  return (
    <div className="insurance-fees-page">
      <SEOHead
        title="Insurance & Fees | Transparent Financial Policies"
        description="Learn about GroWell Therapy Collective's financial policies, pending insurance participation, superbill out-of-network reimbursement, and self-pay options."
        canonicalPath="/insurance-fees"
      />

      {/* Hero */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-sand">Financial Transparency</span>
          <h1 className="fees-title">Insurance & Fee Structure</h1>
          <p className="lead">
            We believe in complete financial clarity and transparency so you can make informed decisions about your mental health and educational investments.
          </p>
        </div>
      </section>

      {/* Status Notice Banner */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow">
          <div className="notice-box notice-warning">
            <AlertCircle size={24} className="notice-icon" />
            <div className="notice-content">
              <h4 style={{ color: 'inherit', marginBottom: '0.25rem' }}>Current Insurance Network Status</h4>
              <p>
                <strong>{siteConfig.insurance.statusNotice}</strong> Please contact us directly during your consultation to verify whether credentialing has finalized for your specific health plan.
              </p>
            </div>
          </div>

          {/* 3 Core Payment Pathways */}
          <div className="grid-3 payment-pathways-grid" style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}>
            {/* Pathway 1: Superbills */}
            <div className="card card-hover pathway-card">
              <div className="pathway-icon-box icon-sage">
                <FileText size={26} />
              </div>
              <h3>Out-of-Network & Superbills</h3>
              <p>
                If your insurance is out-of-network, we provide itemized Superbill receipts containing all required clinical coding (CPT and ICD-10) for you to submit to your insurer for potential reimbursement.
              </p>
              <div className="pathway-tag">Reimbursement Support</div>
            </div>

            {/* Pathway 2: Private Pay */}
            <div className="card card-hover pathway-card">
              <div className="pathway-icon-box icon-terracotta">
                <CreditCard size={26} />
              </div>
              <h3>Private-Pay (Self-Pay)</h3>
              <p>
                Many clients prefer private pay for enhanced confidentiality, no required psychiatric diagnoses on permanent records, and unrestricted treatment flexibility.
              </p>
              <div className="pathway-tag">Maximum Privacy</div>
            </div>

            {/* Pathway 3: Advocacy Services */}
            <div className="card card-hover pathway-card">
              <div className="pathway-icon-box icon-sand">
                <Scale size={26} />
              </div>
              <h3>Educational Advocacy</h3>
              <p>
                Educational advocacy and school meeting support are non-clinical advisory services. They are offered via hourly rates or structured flat-rate package options.
              </p>
              <div className="pathway-tag">Custom Packages</div>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="financial-policies-stack">
            {/* Out-of-Network Guide */}
            <div className="card policy-card">
              <h3>Questions to Ask Your Insurance Provider About Out-of-Network Benefits</h3>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                We recommend calling the member services number on the back of your insurance card and asking the following:
              </p>
              <ul className="policy-questions-list">
                <li>"Do I have out-of-network behavioral health outpatient coverage?"</li>
                <li>"What is my annual out-of-network deductible, and how much has been met so far?"</li>
                <li>"What percentage or allowable amount is reimbursed for routine psychotherapy (CPT codes 90834 and 90837)?"</li>
                <li>"Is prior authorization or a referral required from my primary care doctor?"</li>
                <li>"How do I submit an itemized Superbill for direct reimbursement?"</li>
              </ul>
            </div>

            {/* Good Faith Estimate / No Surprises Act */}
            <div className="card policy-card">
              <h3>Good Faith Estimate & The No Surprises Act</h3>
              <p>
                Under Section 2799B-6 of the Public Health Service Act, healthcare providers must provide uninsured and private-pay individuals with a <strong>Good Faith Estimate (GFE)</strong> of expected charges for non-emergency medical and psychotherapy services.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                You have the right to receive a Good Faith Estimate in writing at least one business day prior to your scheduled service. For questions or more information about your right to a Good Faith Estimate, visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer">www.cms.gov/nosurprises</a>.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="card policy-card">
              <h3>Attendance & Cancellation Policy</h3>
              <p>
                Therapy and educational advocacy appointments are dedicated, reserved times for you. We kindly request at least <strong>24 to 48 business hours notice</strong> for cancellations or rescheduling requests to allow other waiting clients access to that time slot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConsultationCTA
        title="Questions About Fees or Scheduling?"
        subtitle="Schedule a consultation to discuss our current rates, payment methods (HSA/FSA cards accepted), and package options."
      />

      <style>{`
        .fees-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .pathway-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .pathway-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .pathway-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .pathway-card p {
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .pathway-tag {
          margin-top: auto;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-forest);
          background-color: var(--color-linen);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        .financial-policies-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .policy-card {
          padding: 2.25rem 2rem;
        }

        .policy-card h3 {
          font-size: 1.25rem;
          color: var(--color-forest);
        }

        .policy-questions-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .policy-questions-list li {
          font-size: 0.94rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.35rem;
          line-height: 1.5;
        }

        .policy-questions-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-weight: 700;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .payment-pathways-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
