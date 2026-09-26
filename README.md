# GroWell Therapy Collective LLC — Production Website

**Clinician & Founder:** Jessica N. Mouzon, MA, LCMHC  
**Professional Designation:** Licensed Clinical Mental Health Counselor (LCMHC) — Licensed in North Carolina  
**Graduate Education:** Master of Arts in Counseling, Clinical Mental Health Track — Wake Forest University (CACREP-accredited)  
**Educational Credential:** Exceptional Children's General Curriculum K–12 Educator License  
**Core Practice Areas:** Clinical Mental Health Therapy (EMDR, TF-CBT, CBT, Person-Centered Therapy, Gottman Level 1 Trained) • Exceptional Children's K–12 Educational & IEP Advocacy • Whole-Person Wellness (Reiki Level II)

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
This produces an optimized, static production bundle in the `/dist` directory, ready to deploy to any modern hosting platform (GitHub Pages, Netlify, Vercel, Cloudflare Pages, AWS Amplify, etc.).

---

## ⚙️ Centralized Configuration (`src/config/siteConfig.ts`)

All practice data, verified credentials, graduate education, contact details, and third-party portal integrations are managed in a single, well-documented file:

👉 `src/config/siteConfig.ts`

### 1. How to Connect the Future Client Portal URL
Open `src/config/siteConfig.ts` and set `clientPortalUrl`:
```typescript
// When you have your EHR/Portal URL, paste it here:
clientPortalUrl: "https://portal.simplepractice.com/growell",
```
*Note: If left empty (`""`), the `/client-portal` page automatically displays a helpful "Coming Soon" status with direct practice contact options.*

### 2. Verified Clinician & Credential Settings
In `siteConfig.ts`, the clinician and credential configuration is structured as:
```typescript
clinicianName: "Jessica N. Mouzon",
clinicianCredentials: "MA, LCMHC",
clinicianTitle: "Licensed Clinical Mental Health Counselor & Educational Specialist",
exactLicenseDesignation: "Licensed Clinical Mental Health Counselor (LCMHC)",
ncLicenseNumber: "Licensed in North Carolina",
graduateEducation: "Master of Arts in Counseling, Clinical Mental Health Track — Wake Forest University",
graduateAccreditation: "CACREP-accredited counseling program",
educationLicense: "Exceptional Children's General Curriculum K–12 Educator License",
experienceSummary: "More than a decade of experience across education and behavioral health settings",
```

### 3. How to Update Contact & Location Details
In `siteConfig.ts`, update the `contact` object when practice-specific contact details are finalized:
```typescript
contact: {
  phone: "(919) 555-0192",                 // Practice placeholder
  email: "hello@growelltherapycollective.com",
  officeAddress: "123 Serenity Way, Suite 200",
  city: "Raleigh",
  state: "NC",
  serviceArea: "Greater Triangle & Statewide Telehealth",
  hours: "Monday – Friday | By Appointment",
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
- `author`: e.g. `"Jessica N. Mouzon, MA, LCMHC"`
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

- `/` — Homepage (Hero, 3 Paths to Growth, Therapy & Advocacy Spotlights, Meet Jessica N. Mouzon, 4 Pillars: Understand/Connect/Integrate/Grow, Hybrid Care, CTA)
- `/about` — Meet Jessica N. Mouzon, MA, LCMHC (Credentials, Bio, Education & Licensure, Intersection of Mental Health & Education)
- `/therapy` — Clinical Services (Adolescent 11+, Adult, Trauma, Family, TF-CBT, CBT, EMDR, Person-Centered, Gottman Level 1 Trained)
- `/emdr-therapy` — Dedicated EMDR Therapy Guide & FAQs
- `/educational-advocacy` — IEP & 504 Plan Navigation, Experience Inside the Educational System, When Mental Health & Education Intersect (with Legal Disclaimers)
- `/our-approach` — 4-Stage Framework (Understand, Connect, Integrate, Grow; Clinical Evidence vs. Complementary Wellness)
- `/consultation` — Primary Lead Conversion & Consultation Scheduling (Privacy-Preserving Form)
- `/client-portal` — Secure Gateway to External Client EHR Platform
- `/resources` — Searchable & Filterable Resource & Article Library
- `/resources/:slug` — Individual Article Reader with Key Takeaways
- `/workshops` — B2B / School / Organization Professional Development & Speaking Inquiries (Request a Workshop)
- `/faq` — Categorized Accordion FAQ
- `/insurance-fees` — Financial Policies, Superbill Guide & Good Faith Estimate Notice
- `/contact` — Office Locations, Hybrid Telehealth, Direct Contact Info
- `/privacy-policy` — Website Privacy Policy
- `/terms` — Website Terms of Use
- `/notice-of-privacy-practices` — HIPAA Compliance Notice Placeholder

---

© 2026 GroWell Therapy Collective LLC. All rights reserved.
