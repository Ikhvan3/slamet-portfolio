export type Experience = {
  company: string;
  organization?: string;
  role: string;
  employmentType: string;
  period: string;
  duration?: string;
  location?: string;
  workType?: string;
  description: string[];
  skills: string[];
  images?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'IntSys Research Laboratory',
    role: 'Flutter Developer / Frontend Mobile Developer Intern',
    employmentType: 'Internship',
    period: 'Mar 2025 - May 2025',
    duration: '3 months',
    workType: 'Project-based collaboration',
    description: [
      'Designed and developed the user interface for a mobile-based English learning application using Dart and Flutter.',
      'Built responsive and interactive UI components to provide an optimal user experience across devices.',
      'Collaborated with the development team to complete frontend tasks according to project requirements.',
      'Implemented functional features and fixed bugs to improve application performance and stability.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'Git',
      'Mobile Application Development',
    ],
  },
  {
    company: 'Balai Industri Kreatif Digital dan Kemasan',
    organization: 'Dinas Perindustrian dan Perdagangan',
    role: 'System Analyst & UI/UX Designer Intern',
    employmentType: 'Internship',
    period: 'Aug 2025',
    workType: 'On-site',
    description: [
      'Designed the Qualifa website system as a web-based psychology consultation platform.',
      "Analyzed system requirements and adjusted the actors involved in the system according to the website's business flow.",
      'Designed system diagrams including Use Case Diagrams, Use Case Scenarios, Activity Diagrams, and Class Diagrams using Draw.io.',
      'Designed the user interface (UI) and user experience (UX) for the Qualifa website using Figma.',
      'Collaborated with the team during the system design process to ensure alignment between user needs and system design.',
    ],
    skills: ['System Analysis', 'UI/UX Design', 'Figma', 'Draw.io'],
  },
  {
    company: 'Universitas Dian Nuswantoro',
    role: 'Laboratory Assistant',
    employmentType: 'Part-time',
    period: 'Jun 2024 - Jan 2025',
    duration: '8 months',
    location: 'Semarang, Indonesia',
    workType: 'On-site',
    description: [
      'Assisted mobile technology courses covering Dart, Flutter, Firebase, MySQL, and Supabase.',
      'Assisted students in understanding mobile technology materials and resolving application development errors.',
      'Assisted matriculation students from the Communication Science program with basic media, Microsoft Office, and design materials.',
      'Coordinated with laboratory staff regarding technical issues with laboratory computers.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'MySQL',
      'Supabase',
      'Problem Solving',
      'Teaching / Mentoring',
    ],
  },
  {
    company: 'PT Bank Mandiri (Persero) Tbk x Rakamin Academy',
    role: 'Project-Based Virtual Intern: Mobile Apps Developer',
    employmentType: 'Virtual Internship',
    period: 'Dec 2023 - Jan 2024',
    duration: '2 months',
    workType: 'Remote',
    description: [
      'Completed project-based Mobile Apps Developer activities.',
      'Worked with Android UI Design, SQLite Database, RecyclerView, Unit Testing, and RESTful API.',
      'Developed an Android application that displays news using XML layouts, ViewModel architecture with Kotlin, and API data integration.',
    ],
    skills: [
      'Kotlin',
      'Android Development',
      'SQLite',
      'RecyclerView',
      'REST API',
      'Unit Testing',
    ],
  },
];
