import { ProjectData } from '../components/ProjectModal';

export const PROJECTS: ProjectData[] = [
  {
    id: 'ahaar-amrit',
    title: 'Ahaar Amrit | आहार अमृत',
    subtitle: 'Wellness • Nutrition • Heritage',
    tagline: 'Ancient Ayurvedic Wisdom meets Modern Precision Nutrition',
    category: 'Ayurvedic Healthtech',
    image: './assets/ahaar-amrit.png',
    themeColor: '#10b981',
    borderColor: '#059669',
    glowColor: '160 84 60',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Ayurveda Engine', 'Tridosha Analysis'],
    summary:
      'A holistic wellness web application rooted in classical Ayurvedic traditions. Ahaar Amrit calculates personal Prakriti & Vikriti (Tridosha profile: Vata, Pitta, Kapha) and curates personalized daily Satvik nutrition plans, seasonal ritucharya remedies, and an interactive recipe studio.',
    features: [
      'Personalized Tridosha Assessment: Algorithmic constitution diagnosis based on lifestyle and physiological traits.',
      'M.A.A. (Motherly Ayurvedic Assistant): Interactive conversational guide for home remedies and digestive agni restoration.',
      'Seasonal Ritucharya Diets: Context-aware food recommendations synchronized with Indian climates and lunar seasons.',
      'Satvik Recipe Studio: Step-by-step nutrient-rich traditional recipes categorized by dosha pacification.',
      'Prana & Ojas Vitality Tracker: Daily habit journaling for mindfulness, hydration, and sleep harmony.'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v3',
      'Framer Motion',
      'Lucide React',
      'Client State Cache'
    ],
    impact:
      'Bridging timeless Vedic nutritional wisdom with clean modern UI/UX for urban youth and families seeking natural, restorative living.',
    demoUrl: 'https://ahaar-amrit.lovable.app',
    githubUrl: 'https://github.com/Rana-Kushagr'
  },
  {
    id: 'raksha-setu',
    title: 'RakshaSetu | रक्षासेतु',
    subtitle: 'Emergency Care • Offline PWA • Lifesaving',
    tagline: 'India’s Panic-Proof Emergency First-Aid Guide',
    category: 'Public Health & Emergency Response',
    image: './assets/raksha-setu.png',
    themeColor: '#ef4444',
    borderColor: '#dc2626',
    glowColor: '15 90 60',
    tags: ['React', 'Offline PWA', 'Voice Coach', 'SOS 112 Triage', 'Lifesaving Protocol'],
    summary:
      'A zero-latency, offline-first Progressive Web App engineered to guide bystanders through critical golden-hour medical emergencies. Designed with panic-proof typography, high-contrast visual cueing, and bilingual voice-guided coaching.',
    features: [
      '100% Offline Resilience: Operates completely without cellular or internet connectivity via aggressive service-worker caching.',
      'Voice-Guided First-Aid Coach: Real-time rhythmic audio cadence for CPR compressions (100-120 bpm) and rescue breaths.',
      'One-Tap 112 SOS Triage: Direct emergency dispatch integration formatted for Indian national emergency services.',
      'Bystander Emergency Catalog: Fast visual decision trees for cardiac arrest, severe bleeding, choking, burns, and snakebites.',
      'High-Contrast Panic Mode: Large touch targets, vibration feedback, and simplified screens readable in extreme distress.'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Progressive Web App (PWA)',
      'Web Speech API',
      'AudioContext API',
      'Tailwind CSS'
    ],
    impact:
      'Empowers everyday citizens across India to act with precision during the critical 10 minutes of medical emergencies before ambulances arrive.',
    demoUrl: 'https://rana-kushagr.github.io/Raksha-Setu/',
    githubUrl: 'https://github.com/Rana-Kushagr/Raksha-Setu'
  },
  {
    id: 'focus-flow',
    title: 'FocusFlow',
    subtitle: 'Productivity • Deep Work • Minimalist',
    tagline: 'Pure Cognitive Flow with Intelligent Interval Pacing',
    category: 'Productivity & Study Workspace',
    image: './assets/focus-flow.png',
    themeColor: '#6366f1',
    borderColor: '#4f46e5',
    glowColor: '235 85 65',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Pomodoro Engine', 'Local Storage Telemetry'],
    summary:
      'A distraction-free, privacy-conscious productivity suite built for deep work sessions and high-intensity study blocks. Features flexible focus pacing, ambient study soundscapes, task sprint tracking, and local telemetry storage.',
    features: [
      'Triple Interval Timer: Seamless switching between Deep Focus (25m/50m), Short Break (5m), and Long Break (15m).',
      'Task Sprint Management: Inline priority tagging, completed streak counts, and backlog tracking.',
      '100% Client-Side Privacy: All telemetry, streaks, and session histories persist in encrypted browser storage without telemetry trackers.',
      'Ambient Sound Generation: Built-in focus noise generators (soft white noise, ticking clock, rain ambience) to shield distraction.',
      'Visual Flow Feedback: Dynamic title bar countdown, audio gong chimes, and smooth radial time progress.'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Lucide React',
      'LocalStorage Engine',
      'Vite 6'
    ],
    impact:
      'Created to help students and developers eliminate cognitive context switching and sustain effortless deep-work momentum.',
    demoUrl: 'https://rana-kushagr.github.io/Focus-Flow/',
    githubUrl: 'https://github.com/Rana-Kushagr/Focus-Flow'
  }
];
