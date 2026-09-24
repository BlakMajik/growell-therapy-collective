export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Mental Health' | 'Trauma & Recovery' | 'Parents & Families' | 'Teens' | 'Educational Advocacy' | 'IEPs & 504 Plans';
  author: string;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export const RESOURCE_CATEGORIES = [
  'All Resources',
  'Mental Health',
  'Educational Advocacy',
  'IEPs & 504 Plans',
  'Parents & Families',
  'Teens',
  'Trauma & Recovery',
] as const;

export const resourceArticles: ResourceArticle[] = [
  {
    id: "iep-checklist",
    slug: "what-should-i-bring-to-an-iep-meeting",
    title: "What Should I Bring to an IEP Meeting? A Parent's Practical Guide",
    category: "IEPs & 504 Plans",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "5 min read",
    excerpt: "Navigating an Individualized Education Program (IEP) meeting can feel overwhelming. Here is a clear, organized checklist of what to prepare and bring to advocate effectively for your child.",
    keyTakeaways: [
      "Keep educational records, psychoeducational evaluations, and recent work samples organized chronologically in one binder.",
      "Write down your core concerns and prioritized goals in advance so nothing gets overlooked during discussion.",
      "Remember that you are an equal, essential member of the IEP team with unique expertise on your child."
    ],
    tags: ["IEP", "Special Education", "Parent Advocacy", "School Support"],
    content: [
      "Walking into an IEP (Individualized Education Program) meeting can feel intimidating. Between the specialized acronyms, multiple school specialists, and structured legal timelines, parents often feel placed at a disadvantage.",
      "However, parents are vital, legally mandated members of the IEP team. Your insights regarding your child's learning style, strengths, anxieties, and home environment are indispensable in creating an authentic plan that works.",
      "### Essential Documents to Organize Before the Meeting",
      "1. **Recent Evaluations & Progress Reports**: Bring copies of the most recent multi-disciplinary evaluation (M-Team report), standardized testing, and quarterly IEP progress goals.",
      "2. **Work Samples & Homework Logs**: Tangible examples demonstrating where your child is struggling (or thriving) provide objective data during accommodations discussions.",
      "3. **Private Specialist Documentation**: If your child works with an outside therapist, tutor, or medical provider, bring relevant letters of support or summary recommendations.",
      "4. **Prior IEP Document with Notes**: Mark sections of the current plan that feel effective versus accommodations that have not been implemented consistently.",
      "### Preparing Your Parent Statement",
      "Before the meeting, take 20 minutes to write down three to five bullet points summarizing your child's primary strengths, current challenges, and goals for the upcoming school term. Reading this during the opening of the meeting centers the conversation around your child as a whole human being.",
      "### Professional Advocacy Support",
      "If you feel uncertain navigating complex educational jargon, having an educational advocate review documentation beforehand or attend the meeting can provide clarity and peace of mind."
    ]
  },
  {
    id: "iep-vs-504",
    slug: "understanding-the-difference-between-an-iep-and-a-504-plan",
    title: "Understanding the Difference Between an IEP and a 504 Plan",
    category: "Educational Advocacy",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "6 min read",
    excerpt: "Both IEPs and 504 Plans support students with diverse learning and mental health needs, but their legal frameworks, qualification criteria, and service scopes differ significantly.",
    keyTakeaways: [
      "An IEP provides specialized individualized instruction under IDEA for qualifying disability categories that impact learning.",
      "A 504 Plan provides equal environmental and academic accommodations under civil rights law (Section 504 of the Rehabilitation Act).",
      "Students with anxiety, ADHD, or medical conditions may qualify for either plan depending on whether direct specialized instruction is required."
    ],
    tags: ["504 Plan", "IEP", "Educational Rights", "Accommodations"],
    content: [
      "When a child experiences academic struggles, attention differences, trauma, or mental health challenges, parents often hear recommendations for either a '504 Plan' or an 'IEP'. While both provide crucial school supports, understanding the distinction is key to securing appropriate services.",
      "### What is an IEP?",
      "An Individualized Education Program (IEP) is governed by the federal **Individuals with Disabilities Education Act (IDEA)**. It is designed for students whose disability adversely impacts their educational performance to the point where they require **specialized instruction** (modified curriculum, co-teaching, speech therapy, occupational therapy, or specialized behavioral intervention).",
      "### What is a 504 Plan?",
      "A 504 Plan is governed by **Section 504 of the Rehabilitation Act of 1973**, a civil rights law prohibiting discrimination against individuals with disabilities in programs receiving federal funds. It is designed to provide **equal access** to learning through accommodations (such as extended test time, sensory breaks, preferential seating, or reduced distractions) without modifying the curriculum.",
      "### Summary Comparison",
      "| Feature | IEP (IDEA) | 504 Plan (Section 504) |",
      "|---|---|---|",
      "| **Governing Law** | Federal Special Education Law | Federal Civil Rights Law |",
      "| **Core Purpose** | Specialized instruction & related services | Equal access & reasonable accommodations |",
      "| **Eligibility** | Must meet 1 of 13 specific disability categories + need specialized instruction | Broad physical or mental impairment substantially limiting a major life activity |",
      "| **Measurable Annual Goals** | Required and measured quarterly | Not typically required (focuses on accommodations) |",
      "### Which is Right for Your Child?",
      "Determining the best pathway depends on your child's specific educational profile, psychological evaluation results, and classroom needs. A comprehensive educational consultation can help identify which framework best protects your student's learning."
    ]
  },
  {
    id: "mental-health-school-performance",
    slug: "how-mental-health-can-affect-school-performance",
    title: "How Mental Health Intersects With School Performance",
    category: "Mental Health",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "5 min read",
    excerpt: "When a student experiences anxiety, depression, or chronic stress, their cognitive executive functions and emotional regulation directly impact their classroom engagement.",
    keyTakeaways: [
      "Chronic emotional distress impairs working memory, processing speed, and cognitive flexibility.",
      "Behavioral avoidance (school refusal, skipping assignments) is frequently an adaptive coping mechanism for underlying anxiety.",
      "Effective intervention addresses both the internal emotional state and school accommodations simultaneously."
    ],
    tags: ["Adolescent Therapy", "School Stress", "Executive Functioning", "Anxiety"],
    content: [
      "Educators and parents often observe sudden drops in grades, missing assignments, or behavioral changes in adolescents and assume motivation is the issue. In reality, emotional regulation and cognitive learning share the same neurological circuitry.",
      "### The Brain Under Stress",
      "When an adolescent experiences acute stress, social anxiety, or trauma triggers, the brain's amygdala triggers a fight, flight, or freeze response. This temporarily down-regulates the prefrontal cortex—the exact region responsible for executive functions like:",
      "- Planning and organizing assignments",
      "- Retaining new academic concepts in working memory",
      "- Regulating emotional responses to academic frustration",
      "- Sustaining attention during lectures",
      "### Recognizing the Subtle Signs",
      "Students experiencing internal mental health challenges rarely announce their distress directly. Instead, distress manifests through:",
      "- Somatic complaints (frequent stomachaches or headaches on school mornings)",
      "- Perfectionistic paralysis (inability to begin an essay due to fear of failure)",
      "- Irritability or withdrawal in the classroom",
      "- Disproportionate exhaustion after the school day concludes",
      "### Bridging Therapy and Educational Support",
      "Because mental health and academic success are interconnected, therapeutic support is most powerful when it takes into account the student's daily classroom environment, peer dynamics, and academic expectations."
    ]
  },
  {
    id: "what-is-emdr",
    slug: "what-is-emdr-therapy-and-how-does-it-work",
    title: "What Is EMDR Therapy and How Does It Work?",
    category: "Trauma & Recovery",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "7 min read",
    excerpt: "Eye Movement Desensitization and Reprocessing (EMDR) is a proven, evidence-based psychotherapy method. Discover how bilateral stimulation facilitates deep trauma resolution.",
    keyTakeaways: [
      "EMDR does not require clients to talk in exhaustive detail about traumatic events to achieve healing.",
      "Bilateral stimulation helps reprocess stuck emotional memories into adaptive, integrated narrative memories.",
      "Treatment involves structured phases including preparation, resourcing, desensitization, and positive cognitive installation."
    ],
    tags: ["EMDR", "Trauma Therapy", "Evidence-Based", "Nervous System"],
    content: [
      "When we experience overwhelming stress or traumatic events, our normal memory processing system can be disrupted. Rather than becoming resolved past memories, traumatic experiences can remain 'stuck' in their raw, emotional form, easily triggered in the present day.",
      "### What Makes EMDR Different?",
      "Unlike traditional talk therapies that rely primarily on verbal analysis, **Eye Movement Desensitization and Reprocessing (EMDR)** engages the brain's innate neurobiological processing mechanisms using **Bilateral Stimulation (BLS)**.",
      "Bilateral stimulation involves alternating left-right sensory input—such as following a therapist's fingers, holding vibrating tappers, or listening to alternating tones. While focusing briefly on a distressing memory, this stimulation lowers emotional arousal and enables the brain to form new, adaptive neural connections.",
      "### The 8 Phases of EMDR Therapy",
      "1. **History Taking & Treatment Planning**: Identifying core targets and understanding personal history.",
      "2. **Preparation & Resourcing**: Establishing internal safety tools, grounding exercises, and calm place techniques before processing.",
      "3. **Assessment**: Identifying specific images, negative core beliefs, emotions, and physical sensations connected to the target memory.",
      "4. **Desensitization**: Engaging in bilateral stimulation sets until the emotional distress of the memory drops to neutral.",
      "5. **Installation**: Strengthening a positive, empowering belief (e.g., 'I am safe now', 'I am capable').",
      "6. **Body Scan**: Ensuring that no residual physical tension remains when recalling the event.",
      "7. **Closure**: Grounding the client at the end of every session.",
      "8. **Re-evaluation**: Reviewing progress at the start of subsequent sessions.",
      "### Who Can Benefit from EMDR?",
      "EMDR is widely recognized by organizations like the American Psychological Association (APA) and the World Health Organization (WHO) for the treatment of PTSD, single-incident traumas, childhood relational wounds, phobias, performance anxiety, and chronic grief."
    ]
  },
  {
    id: "when-teen-needs-support",
    slug: "when-a-teen-may-need-additional-mental-health-support",
    title: "When a Teen May Need Additional Mental Health Support",
    category: "Teens",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "5 min read",
    excerpt: "Adolescence involves natural emotional ups and downs. Learn how to differentiate normal developmental milestones from signs that professional support is warranted.",
    keyTakeaways: [
      "Watch for persistent changes in sleep, appetite, social withdrawal, or school engagement lasting more than two weeks.",
      "Approaching your teen with curiosity, active listening, and validation builds trust before suggesting therapy.",
      "Early therapeutic intervention equips adolescents with lifelong emotional regulation and coping tools."
    ],
    tags: ["Teen Therapy", "Parenting", "Adolescence", "Emotional Regulation"],
    content: [
      "Adolescence is a profound period of brain remodeling, identity exploration, and emotional development. It is completely normal for teenagers to seek increased independence, experience fluctuating moods, or occasionally feel stressed about school and peer dynamics.",
      "However, when emotional struggles begin to interfere with daily functioning, early compassionate support can make all the difference.",
      "### Key Signs That Professional Support May Be Helpful",
      "- **Persistent Mood Shifts**: Irritability, sadness, or hopelessness that lasts consistently for more than two weeks.",
      "- **Withdrawal from Valued Activities**: Dropping sports, creative hobbies, or social friendships that previously brought joy.",
      "- **Significant Changes in Sleep or Energy**: Chronic insomnia, excessive sleeping, or persistent physical fatigue.",
      "- **Intense Self-Criticism**: Expressions of worthlessness, intense perfectionism, or catastrophic thinking.",
      "- **Dramatic Academic Changes**: Sudden decline in school engagement or extreme avoidance of school attendance.",
      "### How to Talk to Your Teen About Therapy",
      "Frame counseling not as a consequence or a sign that something is 'wrong' with them, but rather as an individualized toolbox—a confidential, neutral space where they can unpack stress and learn practical strategies on their own terms."
    ]
  },
  {
    id: "understanding-cbt",
    slug: "understanding-cognitive-behavioral-therapy",
    title: "Understanding Cognitive Behavioral Therapy (CBT)",
    category: "Mental Health",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "4 min read",
    excerpt: "Cognitive Behavioral Therapy helps uncover the cyclical relationship between thoughts, emotions, and behaviors to replace unhelpful loops with grounded clarity.",
    keyTakeaways: [
      "Our interpretations of situations—not just the situations themselves—shape how we feel and act.",
      "CBT identifies common cognitive distortions such as catastrophizing, black-and-white thinking, and mind reading.",
      "Clients learn actionable behavioral experiments and thought reframing tools they can use for life."
    ],
    tags: ["CBT", "Cognitive Behavioral", "Evidence-Based", "Mental Health"],
    content: [
      "Cognitive Behavioral Therapy (CBT) is one of the most thoroughly researched therapeutic approaches in modern psychology. At its core is a simple yet transformative principle: **It is not external events themselves that upset us, but rather the meaning and interpretations we attach to them.**",
      "### The Cognitive Triangle",
      "CBT illustrates how three interconnected components influence our daily lives:",
      "1. **Thoughts**: What we tell ourselves about a situation.",
      "2. **Emotions**: The physical and emotional sensations that arise.",
      "3. **Behaviors**: The actions we take (or avoid taking) in response.",
      "When an automatic negative thought arises (e.g., 'If I don't do this perfectly, I'm a failure'), it triggers anxiety, which may lead to avoidance, which subsequently reinforces the original belief.",
      "### Practical, Collaborative Tools",
      "In CBT, client and therapist work as active partners to identify cognitive patterns, examine evidence for and against automatic thoughts, and develop practical behavioral strategies that foster confidence and resilience."
    ]
  },
  {
    id: "preparing-for-school-meeting",
    slug: "how-parents-can-prepare-for-a-school-support-meeting",
    title: "How Parents Can Prepare for a School Support Meeting",
    category: "Parents & Families",
    author: "Jessica N. Mouzon, MA, LCMHC",
    publishedDate: "September 2026",
    readTime: "5 min read",
    excerpt: "Practical strategies for parents to foster collaborative, productive conversations with teachers, counselors, and school administrators.",
    keyTakeaways: [
      "Frame concerns around specific observable behaviors rather than general frustration.",
      "Establish a collaborative tone by acknowledging the school team's efforts while maintaining clear expectations for support.",
      "Request written summaries and agreed-upon action timelines following every meeting."
    ],
    tags: ["Parent Advocacy", "School Meetings", "Collaboration", "Family Support"],
    content: [
      "School meetings—whether a routine parent-teacher conference, a Student Support Team (SST) meeting, or a 504 evaluation—are most successful when approached as a collaborative partnership.",
      "### 1. Establish an Agenda in Advance",
      "Email the school team 48 hours before the meeting with a brief 3-point agenda of what you hope to discuss. This allows staff to gather relevant attendance, academic, or behavioral data in advance.",
      "### 2. Focus on Objective Observations",
      "Instead of saying 'My child is miserable in math class', share observable data: 'It currently takes my child 90 minutes to complete 10 math problems at home, and they experience physical panic symptoms before tests. What modifications can we explore?'",
      "### 3. Ask Clarifying, Open-Ended Questions",
      "- 'What interventions have been attempted in the classroom so far, and what were the outcomes?'",
      "- 'What strategies seem to help my child re-engage when they feel overwhelmed?'",
      "- 'How will we measure whether this new accommodation is effective over the next 30 days?'",
      "### 4. Follow Up in Writing",
      "Within 24 hours of concluding the meeting, send a brief email thanking the team and summarizing the agreed-upon next steps, who is responsible for each action item, and the date for the follow-up check-in."
    ]
  }
];
