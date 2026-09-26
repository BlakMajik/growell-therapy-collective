import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { siteConfig } from '../config/siteConfig';

interface FaqItem {
  id: string;
  category: 'Insurance & Billing' | 'Therapy Services' | 'Educational Advocacy' | 'Getting Started';
  question: string;
  answer: React.ReactNode;
}

export const FaqPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'insurance-accept': true,
    'ages-served': true,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const faqs: FaqItem[] = [
    {
      id: 'insurance-accept',
      category: 'Insurance & Billing',
      question: 'Do you accept insurance?',
      answer: (
        <>
          <p>
            <strong>{siteConfig.insurance.statusNotice}</strong>
          </p>
          <p>
            In the interim, we provide itemized <strong>Superbills</strong> (detailed medical receipts) that you may submit to your insurance carrier for potential out-of-network reimbursement. We encourage clients to call their insurance provider and ask about their out-of-network behavioral health coverage benefits.
          </p>
        </>
      ),
    },
    {
      id: 'private-pay',
      category: 'Insurance & Billing',
      question: 'Do you offer private-pay services?',
      answer: (
        <p>
          Yes. Many clients choose private-pay (self-pay) to maintain maximum privacy, avoid mandatory diagnostic codes on permanent medical records, and have full flexibility regarding session frequency and treatment duration. Detailed self-pay fee schedules are available upon request.
        </p>
      ),
    },
    {
      id: 'ages-served',
      category: 'Therapy Services',
      question: 'What ages do you serve? Do you see younger children?',
      answer: (
        <p>
          GroWell Therapy Collective primarily serves <strong>adolescents approximately age 11 through adulthood</strong> (including middle schoolers, high schoolers, college students, young adults, and mature adults), as well as parents and families. For younger children under age 11, we offer specialized <strong>Parent Consultation & Educational Advocacy</strong> to help families implement behavioral and educational supports.
        </p>
      ),
    },
    {
      id: 'in-person-virtual',
      category: 'Therapy Services',
      question: 'Do you offer in-person therapy or virtual telehealth?',
      answer: (
        <p>
          We offer a flexible hybrid model! We provide in-person appointments in North Carolina as well as encrypted, HIPAA-compliant telehealth video sessions for clients residing anywhere across {siteConfig.contact.state}.
        </p>
      ),
    },
    {
      id: 'what-is-emdr',
      category: 'Therapy Services',
      question: 'What is EMDR therapy, and who is it for?',
      answer: (
        <p>
          Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched psychotherapy that helps the brain reprocess traumatic memories and distress. By using bilateral stimulation (such as visual tracking or alternating tactile taps), EMDR allows memories to be integrated safely without having to talk through every painful detail. Visit our <Link to="/emdr-therapy">dedicated EMDR page</Link> to learn more.
        </p>
      ),
    },
    {
      id: 'what-is-tfcbt',
      category: 'Therapy Services',
      question: 'What is TF-CBT (Trauma-Focused Cognitive Behavioral Therapy)?',
      answer: (
        <p>
          TF-CBT is a structured, evidence-based model specifically designed for children and adolescents (and their caregivers) who are overcoming the emotional impact of trauma. It combines cognitive-behavioral skills with trauma-processing and caregiver co-regulation.
        </p>
      ),
    },
    {
      id: 'gottman-training',
      category: 'Therapy Services',
      question: 'What does Gottman Level 1 Trained mean?',
      answer: (
        <p>
          Jessica is Gottman Level 1 Trained in Gottman Method Couples Therapy, providing evidence-informed frameworks for understanding relationship dynamics, communication patterns, emotional connection, and conflict. (Please note that this reflects completed Level 1 professional training and not full Gottman certification).
        </p>
      ),
    },
    {
      id: 'advocacy-iep-504',
      category: 'Educational Advocacy',
      question: 'How can you help with IEPs and 504 Plans?',
      answer: (
        <p>
          Jessica N. Mouzon holds an Exceptional Children’s General Curriculum K–12 Educator License alongside her mental health background. She reviews psychoeducational evaluations, analyzes whether IEP annual goals are measurable and appropriate, helps parents prepare for school meetings, and attends school meetings to support collaborative advocacy.
        </p>
      ),
    },
    {
      id: 'advocacy-is-not-therapy',
      category: 'Educational Advocacy',
      question: 'Are educational advocacy services considered clinical therapy?',
      answer: (
        <p>
          No. Educational advocacy and parent consultation are distinct educational advisory services, not clinical psychotherapy. While informed by clinical insight into child development and emotional regulation, educational advocacy focuses on school systems, accommodation planning, and parent guidance.
        </p>
      ),
    },
    {
      id: 'advocacy-insurance-covered',
      category: 'Educational Advocacy',
      question: 'Is educational advocacy covered by health insurance?',
      answer: (
        <p>
          No. Health insurance plans only cover medically necessary clinical psychotherapy. Educational advocacy, school meeting attendance, and document review are non-clinical consultation services offered under transparent private-pay rates or structured service packages.
        </p>
      ),
    },
    {
      id: 'what-is-consultation',
      category: 'Getting Started',
      question: 'What happens during an initial consultation?',
      answer: (
        <p>
          The initial consultation is a relaxed, supportive conversation where we discuss what brings you to GroWell, explore what kind of support you need, answer service and scheduling questions, and determine whether our practice is the best fit for your goals.
        </p>
      ),
    },
    {
      id: 'portal-access',
      category: 'Getting Started',
      question: 'How do existing clients access the Client Portal?',
      answer: (
        <p>
          Existing clients can visit our <Link to="/client-portal">Client Portal Page</Link> to log in to our secure EHR platform, manage appointments, complete intake paperwork, access telehealth links, and review billing statements.
        </p>
      ),
    },
    {
      id: 'prescribe-medication',
      category: 'Therapy Services',
      question: 'Do you prescribe medication?',
      answer: (
        <p>
          No. GroWell provides psychotherapy, counseling, and educational advocacy. We are not medical doctors or psychiatric nurse practitioners. However, if medication is appropriate, we are happy to provide referrals and coordinate care with your prescribing physician or pediatrician with your written consent.
        </p>
      ),
    },
    {
      id: 'mental-health-crisis',
      category: 'Getting Started',
      question: 'What should I do in a mental health crisis or emergency?',
      answer: (
        <p>
          GroWell Therapy Collective is not an emergency response provider and does not monitor communications 24/7. If you or your child are in immediate physical danger, call <strong>911</strong> or go to the nearest emergency department. For immediate 24/7 confidential crisis support, call or text <strong>988</strong> to connect with the national Suicide & Crisis Lifeline.
        </p>
      ),
    },
  ];

  const categories = ['All', 'Insurance & Billing', 'Therapy Services', 'Educational Advocacy', 'Getting Started'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="faq-page">
      <SEOHead
        title="Frequently Asked Questions | GroWell Therapy Collective"
        description="Find clear answers regarding insurance, private-pay rates, age ranges (11+), virtual telehealth, EMDR, TF-CBT, Gottman Level 1 Trained, and IEP educational advocacy."
        canonicalPath="/faq"
      />

      {/* Hero */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-sage">Help & Information</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="lead">
            Find transparent answers about our clinical approach, age ranges, insurance status, and educational advocacy services.
          </p>

          <div className="resources-search-wrap">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search questions (e.g. insurance, EMDR, ages, 504 plan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQs"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow">
          {/* Categories */}
          <div className="category-filter-bar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-accordion-list" style={{ marginTop: '2rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = Boolean(openIds[faq.id]);
              return (
                <div key={faq.id} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="badge badge-sand faq-item-badge">{faq.category}</span>
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane animate-fade-in">
                      {faq.answer}
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
        title="Still Have Questions?"
        subtitle="We would love to talk through your specific questions during an initial consultation."
      />

      <style>{`
        .faq-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .faq-item-badge {
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
        }

        @media (max-width: 640px) {
          .faq-item-badge {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
