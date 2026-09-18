import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  CheckCircle2, 
  Share2, 
  BookOpen, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { resourceArticles } from '../config/resourcesData';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = resourceArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  // Related articles in same or related category
  const relatedArticles = resourceArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.practiceName
    },
    "datePublished": "2026-09-01"
  };

  return (
    <div className="resource-detail-page">
      <SEOHead
        title={article.title}
        description={article.excerpt}
        canonicalPath={`/resources/${article.slug}`}
        ogType="article"
        schema={articleSchema}
      />

      {/* Article Header & Breadcrumbs */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow">
          <Link to="/resources" className="back-to-resources-link">
            <ArrowLeft size={16} />
            <span>Back to All Resources</span>
          </Link>

          <div className="article-header-meta">
            <span className="badge badge-terracotta">{article.category}</span>
            <span className="article-meta-pill">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>

          <h1 className="article-main-title">{article.title}</h1>

          <div className="article-author-strip">
            <div className="author-avatar">
              <User size={20} />
            </div>
            <div>
              <p className="author-name">{article.author}</p>
              <p className="author-meta">
                {siteConfig.credentials.clinicalCounseling} • {siteConfig.credentials.educationLicense}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container container-narrow">
          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="key-takeaways-box card card-sage">
              <h3 className="takeaways-heading">
                <CheckCircle2 size={20} className="takeaways-icon" />
                <span>Key Takeaways</span>
              </h3>
              <ul className="takeaways-list">
                {article.keyTakeaways.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Content Paragraphs */}
          <div className="article-rich-content">
            {article.content.map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return <h2 key={idx} className="content-h2">{paragraph.replace('### ', '')}</h2>;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                return (
                  <div key={idx} className="content-numbered-item">
                    <p>{paragraph}</p>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                return <li key={idx} className="content-list-item">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.includes('| **')) {
                return null; // Skip raw table markdown for cleaner typography
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Educational Disclaimer */}
          <div className="notice-box notice-sage" style={{ marginTop: '3.5rem' }}>
            <ShieldAlert size={20} className="notice-icon" />
            <div className="notice-content">
              <p>
                <strong>Educational Notice:</strong> The articles published in the GroWell Resource Library are for informational and educational purposes only and do not constitute formal medical advice, clinical psychotherapy, or legal counsel. For individualized support, schedule a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Grid */}
      <section className="section section-bg-muted" aria-labelledby="related-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-sand">Keep Reading</span>
            <h2 id="related-heading" className="section-title">Related Resources</h2>
          </div>

          <div className="grid-3">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="card card-hover article-card">
                <div className="article-meta-row" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge badge-sage">{rel.category}</span>
                  <span className="read-time-tag">{rel.readTime}</span>
                </div>
                <h3 className="article-card-title">
                  <Link to={`/resources/${rel.slug}`}>{rel.title}</Link>
                </h3>
                <p className="article-card-excerpt">{rel.excerpt}</p>
                <div className="article-card-footer" style={{ marginTop: 'auto' }}>
                  <Link to={`/resources/${rel.slug}`} className="read-article-link">
                    <span>Read Guide</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConsultationCTA />

      <style>{`
        .back-to-resources-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-terracotta);
          margin-bottom: 1.5rem;
        }

        .back-to-resources-link:hover {
          text-decoration: underline;
        }

        .article-header-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .article-meta-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.84rem;
          color: var(--color-text-light);
        }

        .article-main-title {
          font-size: clamp(2rem, 3.6vw, 2.85rem);
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }

        .article-author-strip {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }

        .author-avatar {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-full);
          background-color: var(--color-sand-tint);
          color: var(--color-forest);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.94rem;
          color: var(--color-forest);
          margin: 0;
        }

        .author-meta {
          font-size: 0.8rem;
          color: var(--color-text-light);
          margin: 0;
        }

        /* Key Takeaways */
        .key-takeaways-box {
          padding: 2rem;
          margin-bottom: 2.5rem;
        }

        .takeaways-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 1rem;
        }

        .takeaways-icon {
          color: var(--color-sage);
        }

        .takeaways-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .takeaways-list li {
          font-size: 0.95rem;
          color: var(--color-forest-light);
          position: relative;
          padding-left: 1.35rem;
          line-height: 1.55;
        }

        .takeaways-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: 700;
        }

        /* Rich Content */
        .article-rich-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
        }

        .content-h2 {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          color: var(--color-forest);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .content-numbered-item p {
          background-color: var(--color-linen);
          border-left: 3px solid var(--color-terracotta);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 1.02rem;
        }

        .content-list-item {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          margin-left: 1.5rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
};
