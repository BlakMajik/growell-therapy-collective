import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CrisisBanner } from './components/CrisisBanner';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TherapyPage } from './pages/TherapyPage';
import { EmdrPage } from './pages/EmdrPage';
import { AdvocacyPage } from './pages/AdvocacyPage';
import { ApproachPage } from './pages/ApproachPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ClientPortalPage } from './pages/ClientPortalPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { FaqPage } from './pages/FaqPage';
import { InsuranceFeesPage } from './pages/InsuranceFeesPage';
import { ContactPage } from './pages/ContactPage';
import { 
  PrivacyPolicyPage, 
  WebsiteTermsPage, 
  NoticeOfPrivacyPracticesPage 
} from './pages/LegalPages';

export const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-layout">
        {/* Top Emergency Crisis Warning */}
        <CrisisBanner />

        {/* Sticky Condensed Navigation Header */}
        <Header />

        {/* Main Routed Page Content */}
        <main id="main-content" className="main-viewport">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/therapy" element={<TherapyPage />} />
            <Route path="/emdr-therapy" element={<EmdrPage />} />
            <Route path="/educational-advocacy" element={<AdvocacyPage />} />
            <Route path="/our-approach" element={<ApproachPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/client-portal" element={<ClientPortalPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/insurance-fees" element={<InsuranceFeesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal & Compliance Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<WebsiteTermsPage />} />
            <Route path="/notice-of-privacy-practices" element={<NoticeOfPrivacyPracticesPage />} />

            {/* Fallback Catch-All */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Full Featured Footer */}
        <Footer />
      </div>

      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-viewport {
          flex: 1 0 auto;
        }
      `}</style>
    </BrowserRouter>
  );
};
