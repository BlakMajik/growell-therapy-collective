import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { getAssetUrl } from '../utils/assets';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/images/hero-space.jpg',
  schema,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.practiceName}`
    : `${siteConfig.practiceName} | Mental Health, Educational Advocacy & Whole-Person Support`;

  const metaDesc =
    description ||
    `GroWell Therapy Collective provides compassionate mental health counseling, trauma therapy (EMDR, TF-CBT, CBT), Gottman Level 1 Trained frameworks, and K–12 IEP educational advocacy with ${siteConfig.clinicianName}, ${siteConfig.clinicianCredentials}.`;

  const siteUrl = "https://growelltherapycollective.com";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const resolvedOgImage = getAssetUrl(ogImage);
  const fullImageUrl = resolvedOgImage.startsWith('http') ? resolvedOgImage : `${siteUrl}${resolvedOgImage}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', metaDesc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDesc);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:site_name', siteConfig.practiceName);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDesc);
    setMeta('name', 'twitter:image', fullImageUrl);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Inject JSON-LD Schema
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": siteConfig.practiceName,
      "description": metaDesc,
      "url": siteUrl,
      "founder": {
        "@type": "Person",
        "name": `${siteConfig.clinicianName}, ${siteConfig.clinicianCredentials}`,
        "jobTitle": siteConfig.clinicianTitle,
        "knowsAbout": [
          "Clinical Mental Health Counseling",
          "Cognitive Behavioral Therapy (CBT)",
          "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
          "Eye Movement Desensitization and Reprocessing (EMDR)",
          "Gottman Level 1 Trained",
          "Person-Centered Therapy",
          "Exceptional Children Special Education",
          "IEP & 504 Plan Educational Advocacy"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": siteConfig.exactLicenseDesignation,
            "credentialCategory": siteConfig.ncLicenseNumber
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": siteConfig.graduateEducation,
            "recognizedBy": {
              "@type": "Organization",
              "name": "CACREP"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": siteConfig.educationLicense
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": siteConfig.credentials.gottmanTraining
          }
        ]
      },
      "medicalSpecialty": [
        "Psychotherapy",
        "Trauma & EMDR",
        "Adolescent Counseling",
        "Educational Consultation"
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": siteConfig.contact.state
      }
    };

    const finalSchema = schema || defaultSchema;
    let schemaScript = document.getElementById('jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'jsonld-schema');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDesc, canonicalUrl, fullImageUrl, ogType, schema]);

  return null;
};
