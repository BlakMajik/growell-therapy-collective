import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Sparkles,
  FileText
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { resourceArticles, RESOURCE_CATEGORIES, ResourceArticle } from '../config/resourcesData';
import { trackEvent } from '../services/analytics';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = resourceArticles.filter((art) => {
    const matchesCategory = selectedCategory === 'All Resources' || art.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-page">
      <SEOHead
        title="Resources & Educational Library | Mental Health & Advocacy"
        description="Educational guides and practical resources on IEPs, 504 plans, EMDR therapy, teen mental health, and parent advocacy by Jessica N. Mouzon, MA, LCMHC."
        canonicalPath="/resources"
      />

      {/* Header Banner */}
      <section className="section section-bg-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container container-narrow text-center">
          <span className="badge badge-sage">Knowledge & Tools</span>
          <h1 className="resources-title">Resources & Educational Guides</h1>
          <p className="lead">
            Practical insights, actionable parent guides, and evidence-based mental health articles written to empower adolescents, adults, and families.
          </p>

          {/* Search Bar */}
          <div className="resources-search-wrap">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search by keyword, topic (e.g., IEP, EMDR, Anxiety, Teen)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search resources"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content & Filters */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filter-bar" role="tablist" aria-label="Resource Categories">
            {RESOURCE_CATEGORIES.map((cat) => (
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

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid-3 articles-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="card card-hover article-card">
                  <div className="article-meta-row">
                    <span className="badge badge-sand">{article.category}</span>
                    <span className="read-time-tag">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="article-card-title">
                    <Link
                      to={`/resources/${article.slug}`}
                      onClick={() => trackEvent('resource_article_viewed', { articleId: article.id })}
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="article-card-excerpt">{article.excerpt}</p>

                  <div className="article-tags-row">
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="article-mini-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="article-card-footer">
                    <Link
                      to={`/resources/${article.slug}`}
                      className="read-article-link"
                      onClick={() => trackEvent('resource_article_viewed', { articleId: article.id })}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results-box card text-center">
              <BookOpen size={40} className="no-results-icon" />
              <h3>No Articles Found</h3>
              <p>We couldn't find any resources matching your search. Try adjusting your keywords or category filter.</p>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => {
                  setSelectedCategory('All Resources');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Conversion Banner */}
      <ConsultationCTA
        title="Have Questions About School or Therapy?"
        subtitle="We provide individualized consultation to help you apply these strategies to your specific situation."
      />

      <style>{`
        .resources-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .resources-search-wrap {
          position: relative;
          max-width: 580px;
          margin: 2rem auto 0;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-light);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.95rem 1.25rem 0.95rem 3.25rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          background-color: #ffffff;
          box-shadow: var(--shadow-sm);
        }

        .search-input:focus {
          border-color: var(--color-sage);
          outline: none;
          box-shadow: 0 0 0 3px rgba(78, 114, 96, 0.15);
        }

        .clear-search-btn {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.85rem;
          color: var(--color-text-light);
          font-weight: 600;
        }

        /* Filter Pills */
        .category-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .filter-pill {
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-forest-light);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .filter-pill:hover {
          background-color: var(--color-sage-tint);
          color: var(--color-forest);
        }

        .filter-pill.active {
          background-color: var(--color-forest);
          border-color: var(--color-forest);
          color: #ffffff;
          font-weight: 600;
        }

        /* Articles Grid */
        .articles-grid {
          gap: 2rem;
        }

        .article-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .read-time-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--color-text-light);
          font-weight: 500;
        }

        .article-card-title {
          font-size: 1.25rem;
          margin-bottom: 0.85rem;
          line-height: 1.35;
        }

        .article-card-title a {
          color: var(--color-forest);
          text-decoration: none;
        }

        .article-card-title a:hover {
          color: var(--color-terracotta);
        }

        .article-card-excerpt {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .article-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          margin-bottom: 1.5rem;
        }

        .article-mini-tag {
          font-size: 0.76rem;
          color: var(--color-text-light);
          background-color: var(--color-linen);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .article-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .read-article-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-terracotta);
        }

        .read-article-link:hover {
          color: var(--color-terracotta-hover);
          gap: 0.65rem;
        }

        .no-results-box {
          padding: 4rem 2rem;
          max-width: 540px;
          margin: 0 auto;
        }

        .no-results-icon {
          color: var(--color-sand);
          margin: 0 auto 1rem;
        }
      `}</style>
    </div>
  );
};
