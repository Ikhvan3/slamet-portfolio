export type ProjectCategory = 'Mobile' | 'Web';

export type Project = {
  title: string;
  category: ProjectCategory;
  images: string[];
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  badge: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'EngVenture - English Learning App',
    category: 'Mobile',
    images: [
      '/projects/engventure-1.png',
      '/projects/engventure-2.png',
      '/projects/engventure-3.png',
    ],
    description:
      'Mobile-based English learning application with gamification, leaderboard, TOEFL/IELTS practice, community features, and REST API integration.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'PostgreSQL', 'Golang'],
    github: 'https://github.com/Ikhvan3/Pembelajaran-Bahasa-Inggris-Apps.git',
    badge: 'SINTA 3 Publication',
    featured: true,
  },
  {
    title: 'VeggieFresh App',
    category: 'Mobile',
    images: [
      '/projects/veggiefresh-1.png',
      '/projects/veggiefresh-2.png',
      '/projects/veggiefresh-3.png',
    ],
    description:
      'Vegetable e-commerce application integrated with Midtrans payment gateway and Gemini AI.',
    tech: ['Flutter', 'Laravel', 'Midtrans', 'Gemini AI'],
    github: 'https://github.com/Ikhvan3/shamo_app.git',
    badge: 'AI Integration',
    featured: true,
  },
  {
    title: 'Bunch Sneakers App',
    category: 'Mobile',
    images: [
      '/projects/bunchsneakers-1.png',
      '/projects/bunchsneakers-2.png',
      '/projects/bunchsneakers-3.png',
    ],
    description:
      'Mobile sneaker marketplace with wishlist, product catalog, and shopping cart.',
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/Ikhvan3/bunchsneakers_app.git',
    badge: 'Mobile Commerce',
  },
  {
    title: 'MoneyTracker App',
    category: 'Mobile',
    images: [
      '/projects/moneytracker-1.png',
      '/projects/moneytracker-2.png',
      '/projects/moneytracker-3.png',
    ],
    description:
      'Financial tracking application with statistics and expense management.',
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/Ikhvan3/MoneyTracker_App.git',
    badge: 'Finance App',
  },
  {
    title: 'News App',
    category: 'Mobile',
    images: ['/projects/newsapp.png'],
    description:
      'News application using NewsAPI with Kotlin and Android architecture.',
    tech: ['Kotlin', 'REST API'],
    github: 'https://github.com/Ikhvan3/submission_rakamin_kotlin.git',
    badge: 'Android App',
  },
  {
    title: 'VeggieFresh Admin Website',
    category: 'Web',
    images: ['/projects/web/veggie-1.png'],
    description:
      'Admin management website for vegetable sales integrated with Midtrans payment gateway and responsive dashboard system.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Midtrans', 'Bootstrap'],
    github: 'https://github.com/Ikhvan3/shamo_app.git',
    badge: 'E-Commerce System',
    featured: true,
  },
  {
    title: 'Academic Information System',
    category: 'Web',
    images: ['/projects/web/akademik-1.png', '/projects/web/akademik-2.png'],
    description:
      'Responsive academic information system with CRUD management and role authentication system.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Ikhvan3/web-perkuliahan-crud-mysql.git',
    badge: 'Management System',
    featured: true,
  },
  {
    title: 'Sound System Rental Website',
    category: 'Web',
    images: ['/projects/web/sound-1.png', '/projects/web/sound-2.png'],
    description:
      'Rental management website for sound system booking with admin dashboard and responsive user interface.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Ikhvan3',
    badge: 'Rental Platform',
    featured: true,
  },
];
