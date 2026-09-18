# GroWell Therapy Collective LLC — Production Website

**Clinician & Owner:** Jessica Mouzon  
**Core Practice Areas:** Clinical Mental Health Therapy (EMDR, TF-CBT, CBT, Person-Centered) • Exceptional Children's K–12 Educational Advocacy • Whole-Person Wellness

---

## 🌿 Overview & Architecture

This repository contains the production-ready marketing, education, consultation-booking, and lead-conversion website for **GroWell Therapy Collective LLC**.

### Important Privacy & Compliance Principle
This public-facing website does **NOT** store Protected Health Information (PHI), medical records, or diagnostic histories. All public forms (Consultation, Contact, Workshops) are strictly non-clinical. 

When your third-party EHR / Client Portal (e.g. SimplePractice, TherapyNotes, or Jane) is ready, existing clients will be directed to that secure, HIPAA-compliant system via a single centralized configuration setting.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This produces an optimized, static production bundle in the `/dist` directory, ready to deploy to any modern hosting platform (Netlify, Vercel, Cloudflare Pages, AWS Amplify, etc.).

---

## ⚙️ Centralized Configuration (`src/config/siteConfig.ts`)

All practice data, credentials, pending license numbers, contact details, and third-party portal integrations are managed in a single, well-documented file:

👉 `src/config/siteConfig.ts`

### 1. How to Connect the Future Client Portal URL
Open `src/config/siteConfig.ts` and set `clientPortalUrl`:
```typescript
// When you have your EHR/Portal URL, paste it here:
clientPortalUrl: "https://portal.simplepractice.com/growell",
```
*Note: If left empty (`""`), the `/client-portal` page automatically displays a helpful "Coming Soon" status with direct practice contact options.*

### 2. How to Update Contact & Location Details
In `siteConfig.ts`, update the `contact` object:
```typescript
contact: {
  phone: "(919) 555-0192",                 // Replace placeholder
  email: "hello@growelltherapycollective.com",
  officeAddress: "123 Serenity Way, Suite 200",
  city: "Raleigh",
  state: "NC",
  serviceArea: "Greater Triangle & Statewide Telehealth",
  hours: "Monday – Friday | By Appointment",
}
```

### 3. How to Update Licensure & Credentials
In `siteConfig.ts`, update the `credentials` object:
```typescript
credentials: {
  clinicalCounseling: "Clinical Mental Health Counseling",
  exactLicenseDesignation: "Licensed Clinical Mental Health Counselor (LCMHC)", // Replace placeholder
  ncLicenseNumber: "NC LCMHC #12345",                                            // Replace placeholder
  educationLicense: "Exceptional Children's General Curriculum K–12 Educator License",
  emdrCertified: "EMDR Certified Therapist",
  reikiTraining: "Reiki Level II Practitioner (Complementary Wellness)",
  additionalTraining: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) & Person-Centered Modalities",
}
```

---

## 📚 Resource Articles & Content Management

All educational guides, IEP parent toolkits, and mental health articles reside in:

👉 `src/config/resourcesData.ts`

To add a new article, simply append an object to the `resourceArticles` array with:
- `id`: unique identifier
- `slug`: URL slug (e.g., `understanding-adhd-accommodations`)
- `title`: Article title
- `category`: Category name (`Mental Health`, `IEPs & 504 Plans`, `Parents & Families`, etc.)
- `readTime`: e.g. `"5 min read"`
- `excerpt`: Summary paragraph
- `keyTakeaways`: 3 bullet points displayed in the summary callout box
- `content`: Array of paragraphs (supports markdown `### Subheadings`, `1. Numbered items`, and `- Bullet points`)

---

## 🎨 Design System & Color Tokens

The visual design system is centralized in `src/styles/variables.css`:

| Token | Value | Meaning / Usage |
|---|---|---|
| `--color-forest` | `#203328` | Primary slate forest: grounding, trustworthy, calm |
| `--color-sage` | `#4e7260` | Herbal sage: growth, healing, nature |
| `--color-terracotta` | `#b86747` | Warm clay: human connection, warmth, primary CTA button |
| `--color-sand` | `#d1b89d` | Soft earth: balance, supportive tags |
| `--color-linen` | `#fbf9f5` | Main warm background (non-sterile, accessible) |
| `--font-serif` | *Newsreader* | Warm, human editorial headings |
| `--font-sans` | *Plus Jakarta Sans* | Clean, accessible body typography |

---

## 🔌 Future Integrations & Webhooks

The form submission handlers are cleanly abstracted:
- **Consultation Form:** `src/pages/ConsultationPage.tsx` (`handleFormSubmit`)
- **Workshop Form:** `src/pages/WorkshopsPage.tsx` (`handleFormSubmit`)
- **Contact Form:** `src/pages/ContactPage.tsx` (`handleFormSubmit`)
- **Analytics Event Bus:** `src/services/analytics.ts` (`trackEvent`)

These functions can be wired to your preferred email service, Zapier/Make webhook, CRM (e.g. HubSpot), or EHR intake API without modifying any UI components.

---

## 🗺️ Sitemap & Routes

- `/` — Homepage (Hero, 3 Paths to Growth, Therapy & Advocacy Spotlights, Meet Jessica, 4 Pillars, Hybrid Care, CTA)
- `/about` — Meet Jessica Mouzon (Credentials, Bio, Clinical & K-12 Educator Philosophy)
- `/therapy` — Clinical Services (Adolescent, Adult, Trauma, Family, TF-CBT, CBT, Person-Centered)
- `/emdr-therapy` — Dedicated EMDR Therapy Guide & FAQs
- `/educational-advocacy` — IEP & 504 Plan Navigation & 5-Step Process (with Legal Disclaimers)
- `/our-approach` — Whole-Person Ecosystem (Evidence-Based vs. Complementary Wellness)
- `/consultation` — Primary Lead Conversion & Free 15-min Consultation Booking
- `/client-portal` — Secure Gateway to External Client EHR Platform
- `/resources` — Searchable & Filterable Resource & Article Library
- `/resources/:slug` — Individual Article Reader with Key Takeaways
- `/workshops` — B2B / School Professional Development & Speaking Inquiries
- `/faq` — Categorized Accordion FAQ
- `/insurance-fees` — Financial Policies, Superbill Guide & Good Faith Estimate Notice
- `/contact` — Office Locations, Hybrid Telehealth, Direct Contact Info
- `/privacy-policy` — Website Privacy Policy
- `/terms` — Website Terms of Use
- `/notice-of-privacy-practices` — HIPAA Compliance Notice Placeholder

---

© 2026 GroWell Therapy Collective LLC. All rights reserved.
