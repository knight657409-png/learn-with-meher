/**
 * Central Configuration File for Aurelia English Studio
 * 
 * Edit all contact info, social links, course details, and FAQ contents here.
 * Any updates here propagate automatically across the entire website.
 */

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
  curriculumHighlight?: string[];
  features: string[];
  targetAudience: string;
  image: string;
  ctaText: string;
  syllabusOverview: {
    module: string;
    focus: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  category: string;
  context: string;
  question: string;
  options: {
    id: 'A' | 'B';
    text: string;
    isNatural: boolean;
  }[];
  naturalAnswer: 'A' | 'B';
  feedbackHeading: string;
  explanation: string;
  practicalTip: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Courses' | 'Tuition' | 'Booking';
}

export interface Testimonial {
  id: string;
  quote: string;
  learnerRole: string;
  learnerContext: string;
  highlightTag: string;
  focusArea: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Learn with Meher',
    shortName: 'Learn with Meher',
    tagline: 'Learn • Practise • Grow',
    missionStatement: 'Speak English Naturally. Learn with Confidence.',
    educatorName: 'Meher',
    educatorRole: 'Lead English Educator & Language Coach',
    educatorQuote: 'Every confident speaker starts with one simple sentence.',
  },
  
  contact: {
    email: 'tutormeher@gmail.com',
    phone: '+91 76759 59312',
    displayPhone: '+91 76759 59312',
    whatsappNumber: '917675959312', // digits only with country code
    whatsappDefaultMessage: "Hello Meher! I'm interested in booking a free consultation for online English classes.",
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    responseTime: 'Prompt reply within 24 hours',
    location: 'Online Live Interactive Classes (Global & Pan-India)',
  },

  socials: {
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },

  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Approach', href: '#approach' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Practice', href: '#quiz' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    label: 'ENGLISH LEARNING • SPEAKING • CONFIDENCE',
    headline: 'Speak English Naturally. Learn with Confidence.',
    paragraph:
      'Build your English skills through practical lessons, everyday expressions, interactive speaking practice, and personalized guidance. Learn at your own pace and become more confident in real-life conversations.',
    primaryCta: 'Explore Courses',
    secondaryCta: 'Book a Free Consultation',
    trustPoints: [
      'Personalized Learning',
      'Practical Speaking Practice',
      'Interactive Online Classes',
    ],
    floatingVocabulary: {
      idiom: 'Cut corners',
      meaning: 'To do something in the easiest or cheapest way',
      example: 'We never cut corners when practicing real pronunciation.',
    },
    floatingSpeechBubble: '“Could you clarify that?” — Natural, polite phrasing',
  },

  about: {
    heading: 'A Better Way to Learn English',
    lead: 'English learning should feel practical, enjoyable, and relevant to everyday life. With personalized guidance and consistent practice, learners can gradually develop the confidence to express themselves naturally.',
    storyParagraphs: [
      'Too many students and professionals spend years memorizing complex grammar formulas, yet hesitate the moment they need to speak in a meeting, at an airport, or during a school presentation. English is not a subject to memorize—it is a bridge for connecting with people.',
      'In our sessions, we replace anxiety with structured, supportive speaking practice. Whether you are preparing for school board examinations or refining everyday conversational flow, you receive patient, individualized attention tailored to how you learn best.',
    ],
    pillars: [
      {
        title: 'Safe, Judgment-Free Space',
        description: 'Mistakes are simply stepping stones. You practice without fear of criticism.',
      },
      {
        title: 'Real-Life Contexts',
        description: 'Focus on language you will actually use at work, school, and daily conversations.',
      },
      {
        title: 'Custom Pacing',
        description: 'Lessons dynamically adjust to your background, goals, and comfortable learning speed.',
      },
    ],
  },

  courses: [
    {
      id: 'spoken-english',
      title: 'Spoken English',
      tagline: 'Practical conversation & speaking fluency',
      description:
        'Improve your everyday communication through practical English expressions, natural sentence formation, vocabulary building, and guided speaking practice.',
      badge: 'Most Popular',
      features: [
        'Everyday English & common idioms',
        'Guided 1-on-1 speaking practice',
        'Useful situational expressions',
        'Vocabulary development in context',
        'Overcoming hesitation & fear',
      ],
      targetAudience: 'Beginners, working adults, college students, and anyone who understands English but hesitates to speak.',
      image: '/images/course_spoken_english_1794029581403.jpg',
      ctaText: 'Explore Spoken English',
      syllabusOverview: [
        { module: 'Module 1', focus: 'Natural introductions, social greetings & active listening' },
        { module: 'Module 2', focus: 'Everyday vocabulary & eliminating literal translations' },
        { module: 'Module 3', focus: 'Expressing opinions, polite disagreement & requests' },
        { module: 'Module 4', focus: 'Live conversational roleplays & real-time feedback' },
      ],
    },
    {
      id: 'school-tuition',
      title: 'School English Tuition',
      tagline: 'Academic excellence for SSC, CBSE & Cambridge',
      description:
        'Personalized online English tuition designed to support school students with academic understanding, language skills, and classroom learning.',
      badge: 'Academic Focus',
      curriculumHighlight: ['SSC Board', 'CBSE Board', 'Cambridge (IGCSE/O-Level)'],
      features: [
        'Curriculum-aligned grammar mastery',
        'Reading comprehension & analytical writing',
        'Structured essay, letter & report composition',
        'Literature appreciation & thematic analysis',
        'Exam preparation & answer-writing technique',
      ],
      targetAudience: 'Middle and high school students aiming to excel in board examinations and cultivate lifelong writing skills.',
      image: '/images/course_school_tuition_1794029582692.jpg',
      ctaText: 'Enquire About Tuition',
      syllabusOverview: [
        { module: 'Curriculum Prep', focus: 'Chapter-by-chapter textual clarity & question formats' },
        { module: 'Grammar Precision', focus: 'Tenses, active/passive voice, direct/indirect speech' },
        { module: 'Creative & Formal Writing', focus: 'Structured essays, formal letters, analytical summaries' },
        { module: 'Board Revision', focus: 'Past papers, mock answer reviews & grading rubric alignment' },
      ],
    },
    {
      id: 'everyday-life',
      title: 'English for Everyday Life',
      tagline: 'Effortless communication in real-life situations',
      description:
        'Learn how to communicate naturally in real-life situations, participate in conversations, and express your thoughts with greater clarity.',
      badge: 'Practical Life Skills',
      features: [
        'Real-life conversations & social etiquette',
        'Fixing common everyday mistakes',
        'Better, more polite English phrases',
        'Practical communication in emails & calls',
        'Guided exercises and scenario simulations',
      ],
      targetAudience: 'Adults, homemakers, professionals, and travelers seeking smooth, confident communication.',
      image: '/images/course_everyday_english_1794029582151.jpg',
      ctaText: 'Start Learning',
      syllabusOverview: [
        { module: 'Everyday Interactions', focus: 'Travel, dining out, shopping, asking directions & small talk' },
        { module: 'Professional Etiquette', focus: 'Clear emails, phone calls, and polite workplace phrasing' },
        { module: 'Common Pitfalls', focus: 'Unlearning Indianisms & awkward direct translations' },
        { module: 'Storytelling & Nuance', focus: 'Sharing anecdotes, describing experiences & engaging listeners' },
      ],
    },
  ] as Course[],

  whyChooseUs: [
    {
      number: '01',
      title: 'Practical Learning',
      description: 'Learn expressions, phrases, and sentence patterns you can immediately use in daily life, rather than memorizing obsolete textbook drills.',
      highlight: 'Expressions you can actually use',
    },
    {
      number: '02',
      title: 'Personalized Attention',
      description: 'Every learner has a unique starting point. Lessons are customized around your personal strengths, goals, and learning speed.',
      highlight: 'Individual learning roadmaps',
    },
    {
      number: '03',
      title: 'Interactive Sessions',
      description: 'Classes are participatory dialogues, not passive lectures. You spend more than 60% of class time actively speaking and practicing.',
      highlight: 'High learner speaking time',
    },
    {
      number: '04',
      title: 'Speaking Confidence',
      description: 'Gradually overcome hesitation and self-doubt with guided exercises designed to build natural muscle memory for English speech.',
      highlight: 'Overcome hesitation comfortably',
    },
    {
      number: '05',
      title: 'Real-Life Examples',
      description: 'Understand how native and fluent speakers navigate real conversations at work, social gatherings, travel, and school.',
      highlight: 'Modern, authentic contexts',
    },
    {
      number: '06',
      title: 'Supportive Environment',
      description: 'Learn comfortably in a patient, judgment-free space where making mistakes is celebrated as the fastest route to improvement.',
      highlight: 'No fear of making mistakes',
    },
  ],

  approachSteps: [
    {
      step: '01',
      title: 'Understand',
      subtitle: 'Clear Concepts & Expressions',
      description: 'Understand useful English expressions, sentence structures, and everyday vocabulary with simple, relatable explanations.',
      exampleSnippet: 'Compare awkward literal translations with natural English expressions in clear context.',
    },
    {
      step: '02',
      title: 'Practise',
      subtitle: 'Guided Speaking Exercises',
      description: 'Use guided activities, interactive examples, pronunciation prompts, and structured sentence building.',
      exampleSnippet: 'Engage in prompt-based speaking drills with instant, gentle guidance.',
    },
    {
      step: '03',
      title: 'Apply',
      subtitle: 'Real-Life Situations',
      description: 'Use what you learn in realistic conversations, workplace dialogues, and everyday scenario simulations.',
      exampleSnippet: 'Roleplay scenarios such as participating in a team meeting or ordering at a cafe.',
    },
    {
      step: '04',
      title: 'Improve',
      subtitle: 'Consistency & Natural Fluency',
      description: 'Build consistency, polish communication nuances, track personal milestones, and gradually develop lasting confidence.',
      exampleSnippet: 'Review progress reports, celebrate speaking milestones, and speak naturally.',
    },
  ],

  quizQuestions: [
    {
      id: 1,
      category: 'Natural Introductions',
      context: 'You are introducing yourself to someone new in a conversation or meeting.',
      question: 'Which sentence sounds more natural when introducing yourself?',
      options: [
        { id: 'A', text: 'Myself Rahul.', isNatural: false },
        { id: 'B', text: "Hi, I'm Rahul.", isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "That's right! “Hi, I'm Rahul” is the natural way to introduce yourself.",
      explanation: 'In standard English, reflexive pronouns like “Myself” cannot serve as the subject of a sentence. Saying “Myself [Name]” is a common grammatical error. “Hi, I’m [Name]” or “My name is [Name]” is natural and polite.',
      practicalTip: 'Use “Hi, I’m [Name]” for casual and semi-formal settings, and “My name is [Name]” for formal introductions.',
    },
    {
      id: 2,
      category: 'Polite Requests',
      context: 'You are ordering a beverage at a coffee shop or counter.',
      question: 'Which phrasing sounds more polite and conversational?',
      options: [
        { id: 'A', text: 'Give me a latte.', isNatural: false },
        { id: 'B', text: 'Could I please get a latte?', isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "Spot on! “Could I please get a latte?” is warm, courteous, and natural.",
      explanation: 'Using imperative phrasing like “Give me...” can sound demanding or abrupt in English. Modal verbs like “Could I have...” or “May I please get...” make requests courteous and pleasant.',
      practicalTip: 'Pair “Could I please get...” with a warm smile for effortless everyday hospitality interactions.',
    },
    {
      id: 3,
      category: 'Time & Duration',
      context: 'You are explaining how long you have lived in your current city.',
      question: 'Which sentence correctly describes an action that started in the past and continues today?',
      options: [
        { id: 'A', text: 'I am living here since 5 years.', isNatural: false },
        { id: 'B', text: 'I have been living here for 5 years.', isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "Excellent! “I have been living here for 5 years” is grammatically accurate.",
      explanation: 'When talking about duration up to the present, use the present perfect continuous (“have been living”) with “for” (for a period of time like 5 years) or “since” (for a specific starting point like 2019).',
      practicalTip: 'Remember: “For” counts the years (for 5 years), while “Since” marks the start (since 2019).',
    },
    {
      id: 4,
      category: 'Professional Correspondence',
      context: 'You are closing a professional email and inviting the recipient to reply.',
      question: 'Which sign-off phrasing is preferred in modern international communication?',
      options: [
        { id: 'A', text: 'Please revert back at the earliest.', isNatural: false },
        { id: 'B', text: 'I look forward to hearing from you.', isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "Spot on! “I look forward to hearing from you” is professional and elegant.",
      explanation: '“Revert” actually means to return to a previous state, and adding “back” creates a redundancy. In modern professional English, “I look forward to hearing from you” or “Please let me know when convenient” sounds warm and polished.',
      practicalTip: 'Avoid “revert back” in work emails; use “reply”, “get back to you”, or “look forward to hearing from you”.',
    },
    {
      id: 5,
      category: 'Diplomatic Disagreement',
      context: 'You are discussing ideas in a team or group discussion and see things differently.',
      question: 'Which expression allows you to disagree politely and constructively?',
      options: [
        { id: 'A', text: 'You are completely wrong about this.', isNatural: false },
        { id: 'B', text: 'I see your point, but let me offer another perspective.', isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "Well done! Acknowledging their thought first keeps conversation collaborative.",
      explanation: 'Directly telling someone they are wrong often triggers defensiveness. Acknowledging their view before introducing your angle keeps the conversation productive and respectful.',
      practicalTip: 'Phrases like “That is an interesting view; another angle to consider is...” show high communicative tact.',
    },
    {
      id: 6,
      category: 'Clarifying Understanding',
      context: 'Someone said something quickly and you missed the exact detail.',
      question: 'Which phrasing asks for clarification smoothly in conversation?',
      options: [
        { id: 'A', text: 'What? Repeat it again.', isNatural: false },
        { id: 'B', text: 'Could you please repeat that? I missed the last part.', isNatural: true },
      ],
      naturalAnswer: 'B',
      feedbackHeading: "Exactly! “Could you please repeat that?” is clear, gentle, and considerate.",
      explanation: 'A blunt “What?” can sound surprised or rude. Asking politely with “Could you please repeat that?” or “Sorry, I didn’t quite catch that” is universally well-received in English.',
      practicalTip: 'In noisy environments or on phone calls, “Sorry, I didn’t catch that last bit” works wonders.',
    },
  ] as QuizQuestion[],

  testimonials: [
    {
      id: '1',
      quote:
        'I always understood what people were saying in English, but whenever it was my turn to speak in team calls, my mind would go blank. Meher gave me practical phrases and a calm space to practice. After two months, I speak up naturally in every weekly meeting.',
      learnerRole: 'Software Engineer',
      learnerContext: 'Adult Spoken English Learner',
      highlightTag: 'Speaking in Meetings',
      focusArea: 'Spoken English & Professional Confidence',
    },
    {
      id: '2',
      quote:
        'Finding an educator who truly understands the Cambridge IGCSE English syllabus with its specific marking rubrics made a tremendous difference for my daughter. Her analytical essay writing improved from Grade C to an A* in her mock exams.',
      learnerRole: 'Parent of 10th Grade Cambridge Student',
      learnerContext: 'School English Tuition',
      highlightTag: 'IGCSE English A*',
      focusArea: 'Cambridge Curriculum & Essay Composition',
    },
    {
      id: '3',
      quote:
        'The best part about these sessions is that there is zero pressure. I used to be so afraid of making grammatical mistakes when ordering food or talking to clients abroad. Now I feel comfortable expressing myself with natural, polite sentences.',
      learnerRole: 'Marketing Consultant',
      learnerContext: 'Everyday Communication Learner',
      highlightTag: 'Overcame Speaking Fear',
      focusArea: 'English for Everyday Life',
    },
  ] as Testimonial[],

  faqs: [
    {
      question: 'Are the classes conducted online?',
      answer:
        'Yes, all sessions are conducted live online via high-definition video conferencing (Google Meet or Zoom). Classes are interactive, 1-on-1 or in very small focus groups, allowing direct screen sharing, collaborative exercises, and live speaking practice from the comfort of your home.',
      category: 'General',
    },
    {
      question: 'Who can join the Spoken English course?',
      answer:
        'The Spoken English course is designed for adults, working professionals, college students, and anyone who can read or understand basic English but feels hesitant, nervous, or slow when speaking in real conversations.',
      category: 'Courses',
    },
    {
      question: 'Do you provide one-on-one classes?',
      answer:
        'Yes, personalized one-on-one tuition is our primary offering. 1-on-1 sessions ensure 100% personalized attention, a custom learning pace, and maximum learner speaking time without any peer hesitation.',
      category: 'Courses',
    },
    {
      question: 'Do you teach SSC, CBSE, and Cambridge students?',
      answer:
        'Yes. We provide curriculum-aligned English tuition for students across State Board (SSC), CBSE, and international Cambridge (IGCSE & O-Level) curricula, covering literature, grammar, essay writing, and examination techniques.',
      category: 'Tuition',
    },
    {
      question: 'Are the classes suitable for beginners?',
      answer:
        'Absolutely. We welcome complete beginners with a supportive, patient step-by-step methodology. We start with simple everyday sentence structures and conversational basics in a safe, judgment-free environment.',
      category: 'Courses',
    },
    {
      question: 'How can I enquire about course fees?',
      answer:
        'Course fee packages vary depending on whether you choose individual 1-on-1 coaching or small group sessions, as well as the frequency of classes per week. You can enquire directly via our contact form or WhatsApp to receive a detailed breakdown.',
      category: 'Booking',
    },
    {
      question: 'How can I book a consultation?',
      answer:
        'You can click the “Book a Free Consultation” button in the header or fill out the enquiry form on this page. We will schedule a complimentary 15-minute introductory video or phone call to discuss your learning goals.',
      category: 'Booking',
    },
    {
      question: 'Do I need prior English-speaking experience?',
      answer:
        'No prior speaking fluency is required. If you understand basic English words, we will guide you from simple expressions to full conversational confidence step by step.',
      category: 'General',
    },
  ] as FaqItem[],
};
