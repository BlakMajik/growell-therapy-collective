/**
 * GroWell Therapy Collective LLC - Centralized Site Configuration
 * 
 * All clinical credentials, practice contact info, service areas, 
 * insurance status, and third-party portal integrations are managed here.
 */

export interface SiteConfig {
  practiceName: string;
  tagline: string;
  clinicianName: string;
  clinicianCredentials: string;
  clinicianTitle: string;
  exactLicenseDesignation: string;
  ncLicenseNumber: string;
  graduateEducation: string;
  graduateAccreditation: string;
  educationLicense: string;
  experienceSummary: string;
  
  // Third-Party Client Portal URL
  // When configured, buttons throughout the site seamlessly redirect existing clients to the external EHR/portal.
  // When empty (""), a friendly "Coming Soon" notification and contact option is displayed.
  clientPortalUrl: string;

  // Contact Placeholders (Never invent real physical details)
  contact: {
    phone: string;
    email: string;
    officeAddress: string;
    city: string;
    state: string;
    serviceArea: string;
    hours: string;
  };

  // Professional Credentials & Licenses
  credentials: {
    clinicalCounseling: string;
    exactLicenseDesignation: string;
    ncLicenseNumber: string;
    graduateEducation: string;
    graduateAccreditation: string;
    educationLicense: string;
    emdrTraining: string;
    gottmanTraining: string;
    reikiTraining: string;
    additionalTraining: string;
  };

  // Clinical & Complementary Modalities
  modalities: {
    clinical: Array<{
      id: string;
      name: string;
      shortDesc: string;
      fullDesc: string;
      isEvidenceBased: true;
    }>;
    complementary: Array<{
      id: string;
      name: string;
      shortDesc: string;
      fullDesc: string;
      isEvidenceBased: false;
    }>;
  };

  // Insurance & Payment Status
  insurance: {
    statusNotice: string;
    superbillSupport: boolean;
    selfPayNotice: string;
  };

  // Crisis & Emergency Notice
  crisisNotice: {
    emergencyNumber: string;
    crisisLifeline: string;
    statement: string;
  };

  // Social & External Links
  social: {
    instagram: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  practiceName: "GroWell Therapy Collective LLC",
  tagline: "Helping You Grow Through Life's Challenges",
  clinicianName: "Jessica N. Mouzon",
  clinicianCredentials: "MA, LCMHC",
  clinicianTitle: "Licensed Clinical Mental Health Counselor & Educational Specialist",
  exactLicenseDesignation: "Licensed Clinical Mental Health Counselor (LCMHC)",
  ncLicenseNumber: "Licensed in North Carolina",
  graduateEducation: "Master of Arts in Counseling, Clinical Mental Health Track — Wake Forest University",
  graduateAccreditation: "CACREP-accredited counseling program",
  educationLicense: "Exceptional Children's General Curriculum K–12 Educator License",
  experienceSummary: "More than a decade of experience across education and behavioral health settings",

  // Set the external EHR / Client Portal URL here when ready (e.g. "https://portal.simplepractice.com/growell")
  clientPortalUrl: "", 

  contact: {
    phone: "[PHONE TO BE ADDED]",
    email: "[EMAIL TO BE ADDED]",
    officeAddress: "[OFFICE ADDRESS TO BE ADDED]",
    city: "[CITY / REGION TO BE ADDED]",
    state: "NC",
    serviceArea: "[SERVICE AREA TO BE ADDED]",
    hours: "Monday – Friday | By Appointment",
  },

  credentials: {
    clinicalCounseling: "Clinical Mental Health Counseling",
    exactLicenseDesignation: "Licensed Clinical Mental Health Counselor (LCMHC)",
    ncLicenseNumber: "Licensed in North Carolina",
    graduateEducation: "Master of Arts in Counseling, Clinical Mental Health Track — Wake Forest University",
    graduateAccreditation: "CACREP-accredited counseling program",
    educationLicense: "Exceptional Children's General Curriculum K–12 Educator License",
    emdrTraining: "Eye Movement Desensitization and Reprocessing (EMDR)",
    gottmanTraining: "Gottman Method Level I Training",
    reikiTraining: "Reiki Level II (Complementary Wellness)",
    additionalTraining: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Cognitive Behavioral Therapy (CBT) & Person-Centered Therapy",
  },

  modalities: {
    clinical: [
      {
        id: "emdr",
        name: "Eye Movement Desensitization and Reprocessing (EMDR)",
        shortDesc: "A structured, evidence-based psychotherapy modality that helps the brain reprocess traumatic memories and distressing life experiences.",
        fullDesc: "EMDR utilizes bilateral stimulation (such as eye movements, taps, or audio tones) while focusing on distressing memories, facilitating the brain's natural adaptive information processing system to reduce emotional distress and reframe negative core beliefs.",
        isEvidenceBased: true,
      },
      {
        id: "tf-cbt",
        name: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
        shortDesc: "A structured, research-backed model designed to support adolescents, teens, and their caregivers in resolving trauma-related difficulties.",
        fullDesc: "TF-CBT combines cognitive-behavioral principles with trauma-sensitive interventions, empowering young clients and their families with emotional regulation skills, cognitive coping, and trauma processing in a safe, structured format.",
        isEvidenceBased: true,
      },
      {
        id: "cbt",
        name: "Cognitive Behavioral Therapy (CBT)",
        shortDesc: "An evidence-based approach identifying how thoughts, feelings, and behaviors interact and reinforce one another.",
        fullDesc: "CBT provides practical, actionable tools to recognize unhelpful cognitive distortions, modify distressing patterns, and cultivate sustainable emotional coping strategies.",
        isEvidenceBased: true,
      },
      {
        id: "pct",
        name: "Person-Centered Therapy (PCT)",
        shortDesc: "A foundational humanistic approach centered on unconditional positive regard, deep empathy, and genuine collaboration.",
        fullDesc: "Person-Centered Therapy creates a secure, non-judgmental environment where clients can discover their own innate resilience, values, and capacity for self-directed growth.",
        isEvidenceBased: true,
      },
      {
        id: "gottman",
        name: "Gottman Method Level I Training",
        shortDesc: "Research-informed relationship frameworks focusing on communication patterns, emotional connection, and conflict resolution dynamics.",
        fullDesc: "Jessica has completed Level I Training in Gottman Method Couples Therapy, providing evidence-informed frameworks for understanding relationship dynamics, communication patterns, emotional connection, and conflict patterns.",
        isEvidenceBased: true,
      },
    ],
    complementary: [
      {
        id: "reiki",
        name: "Reiki Level II",
        shortDesc: "A gentle complementary energy wellness practice focused on relaxation, stress reduction, and balance.",
        fullDesc: "Reiki is offered strictly as an optional complementary wellness practice for relaxation and nervous system grounding. It is not presented as an equivalent substitute for clinical psychotherapy or medical treatment.",
        isEvidenceBased: false,
      },
      {
        id: "creative-expression",
        name: "Creative & Art-Informed Expression",
        shortDesc: "Tactile, reflective creative activities that provide alternative mediums for emotional processing when words feel limiting.",
        fullDesc: "Utilizing expressive mediums such as sketching, collage, and journaling to explore feelings and facilitate self-discovery in a non-clinical art exploration format.",
        isEvidenceBased: false,
      },
      {
        id: "nature-botanicals",
        name: "Nature & Botanical Engagement",
        shortDesc: "Incorporating natural elements, plant-tending metaphors, and outdoor mindfulness to ground the nervous system.",
        fullDesc: "Drawing on organic growth cycles and grounding nature-based metaphors to support emotional regulation and perspective-building.",
        isEvidenceBased: false,
      },
      {
        id: "music-activities",
        name: "Music-Informed & Sound Reflection",
        shortDesc: "Using music listening, rhythm, and lyrical reflection as a gateway to emotional awareness.",
        fullDesc: "Supportive musical exercises integrated collaboratively when therapeutically appropriate to assist with mood regulation and expression.",
        isEvidenceBased: false,
      },
      {
        id: "mindfulness-movement",
        name: "Mindfulness & Somatic Grounding",
        shortDesc: "Simple breathwork, body awareness, and grounding exercises to regulate stress responses.",
        fullDesc: "Practical mindfulness techniques designed to bring awareness back to the present moment and cultivate bodily calm.",
        isEvidenceBased: false,
      },
    ],
  },

  insurance: {
    statusNotice: "Insurance participation and private-pay options are being finalized. Contact GroWell for current network status and payment options.",
    superbillSupport: true,
    selfPayNotice: "Detailed private-pay fee schedules and superbill documentation for out-of-network reimbursement are available upon inquiry.",
  },

  crisisNotice: {
    emergencyNumber: "911",
    crisisLifeline: "988",
    statement: "GroWell Therapy Collective LLC is not an emergency response service. If you or someone you know is in immediate physical danger, please call 911 or go to the nearest emergency department. For 24/7 mental health crisis support, call or text 988 to connect with the Suicide & Crisis Lifeline.",
  },

  social: {
    instagram: "https://instagram.com/growelltherapycollective",
    linkedin: "https://linkedin.com/company/growell-therapy-collective",
  },
};
