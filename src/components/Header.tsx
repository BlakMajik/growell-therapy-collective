import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, UserCheck, Sprout } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { trackEvent } from '../services/analytics';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Therapy', path: '/therapy' },
    { label: 'Educational Advocacy', path: '/educational-advocacy' },
    { label: 'Our Approach', path: '/our-approach' },
    { label: 'Resources', path: '/resources' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleConsultationClick = () => {
    trackEvent('consultation_cta_clicked', { source: 'header_nav' });
  };

  const handlePortalClick = () => {
    trackEvent('client_portal_clicked', { source: 'header_nav' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="GroWell Therapy Collective - Home">
          <div className="logo-icon-wrap" aria-hidden="true">
            <Sprout className="logo-sprout-icon" size={24} />
          </div>
          <div className="logo-text-group">
            <span className="logo-title">GroWell</span>
            <span className="logo-subtitle">Therapy Collective</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action CTAs */}
        <div className="header-actions">
          {/* Secondary Utility: Client Portal */}
          <Link
            to="/client-portal"
            className="portal-link-btn"
            onClick={handlePortalClick}
            title="Existing Client Portal Access"
          >
            <UserCheck size={16} aria-hidden="true" />
            <span>Client Portal</span>
          </Link>

          {/* Primary CTA: Book Consultation */}
          <Link
            to="/consultation"
            className="btn btn-primary btn-sm header-consult-btn"
            onClick={handleConsultationClick}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links-list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            <Link
              to="/consultation"
              className="btn btn-primary btn-lg full-width-btn"
              onClick={() => {
                handleConsultationClick();
                setMobileMenuOpen(false);
              }}
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/client-portal"
              className="btn btn-portal full-width-btn"
              onClick={() => {
                handlePortalClick();
                setMobileMenuOpen(false);
              }}
            >
              <UserCheck size={18} />
              Existing Client Portal
            </Link>

            <p className="mobile-drawer-disclaimer">
              {siteConfig.clinicianName} • {siteConfig.credentials.educationLicense} • EMDR Certified
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(251, 249, 245, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          transition: all var(--transition-normal);
        }

        .site-header.is-scrolled {
          background-color: rgba(251, 249, 245, 0.98);
          box-shadow: 0 4px 20px rgba(32, 51, 40, 0.06);
          border-bottom-color: rgba(230, 222, 211, 0.8);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 1rem;
          transition: padding var(--transition-normal);
        }

        .site-header.is-scrolled .header-container {
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
        }

        /* Brand Logo */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--color-forest);
        }

        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background-color: var(--color-sage-tint);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-sage);
          transition: transform var(--transition-fast);
        }

        .brand-logo:hover .logo-icon-wrap {
          transform: scale(1.05);
          background-color: var(--color-terracotta-tint);
          color: var(--color-terracotta);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-serif);
          font-size: 1.42rem;
          font-weight: 600;
          line-height: 1.1;
          color: var(--color-forest);
          letter-spacing: -0.01em;
        }

        .logo-subtitle {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-text-light);
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.94rem;
          font-weight: 500;
          color: var(--color-forest-light);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background-color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-forest);
          background-color: rgba(32, 51, 40, 0.04);
        }

        .nav-link.active {
          color: var(--color-forest);
          font-weight: 600;
          background-color: var(--color-sage-tint);
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .portal-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-full);
          background-color: var(--color-sand-tint);
          border: 1px solid rgba(209, 184, 157, 0.4);
          transition: all var(--transition-fast);
        }

        .portal-link-btn:hover {
          background-color: #eeddc9;
          color: var(--color-forest-dark);
          transform: translateY(-1px);
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--color-forest);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          display: none;
        }

        @media (max-width: 1120px) {
          .desktop-nav {
            display: none;
          }

          .portal-link-btn {
            display: none;
          }

          .header-consult-btn {
            display: none;
          }

          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav-drawer {
            display: block;
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--color-linen);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
            overflow-y: auto;
            border-top: 1px solid var(--color-border);
            z-index: 999;
          }

          .mobile-nav-drawer.is-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-drawer-inner {
            padding: 1.5rem 1.5rem 3rem;
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 80px);
            justify-content: space-between;
          }

          .mobile-links-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-nav-link {
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--color-forest);
            padding: 0.85rem 1rem;
            border-radius: var(--radius-md);
            border-bottom: 1px solid var(--color-border-subtle);
          }

          .mobile-nav-link.active {
            background-color: var(--color-sage-tint);
            font-weight: 600;
            color: var(--color-sage);
          }

          .mobile-drawer-footer {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--color-border);
          }

          .full-width-btn {
            width: 100%;
            text-align: center;
          }

          .mobile-drawer-disclaimer {
            font-size: 0.78rem;
            text-align: center;
            color: var(--color-text-light);
            margin: 0;
          }
        }
      `}</style>
    </header>
  );
};
