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
      'Aplikasi pembelajaran bahasa Inggris berbasis mobile dengan gamification, leaderboard, latihan TOEFL/IELTS, fitur komunitas, dan integrasi REST API.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'PostgreSQL', 'Golang'],
    github: 'https://github.com/Ikhvan3/Pembelajaran-Bahasa-Inggris-Apps.git',
    badge: 'Publikasi SINTA 3',
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
      'Aplikasi e-commerce sayuran yang terintegrasi dengan payment gateway Midtrans dan fitur Gemini AI.',
    tech: ['Flutter', 'Laravel', 'Midtrans', 'Gemini AI'],
    github: 'https://github.com/Ikhvan3/shamo_app.git',
    badge: 'Integrasi AI',
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
      'Aplikasi marketplace sneakers berbasis mobile dengan wishlist, katalog produk, dan keranjang belanja.',
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
      'Aplikasi pencatatan keuangan dengan fitur statistik dan pengelolaan pengeluaran.',
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/Ikhvan3/MoneyTracker_App.git',
    badge: 'Aplikasi Keuangan',
  },
  {
    title: 'News App',
    category: 'Mobile',
    images: ['/projects/newsapp.png'],
    description:
      'Aplikasi berita menggunakan NewsAPI dengan Kotlin dan arsitektur Android.',
    tech: ['Kotlin', 'REST API'],
    github: 'https://github.com/Ikhvan3/submission_rakamin_kotlin.git',
    badge: 'Android App',
  },
  {
    title: 'VeggieFresh Admin Website',
    category: 'Web',
    images: ['/projects/web/veggie-1.png'],
    description:
      'Website admin untuk pengelolaan penjualan sayuran yang terintegrasi dengan payment gateway Midtrans dan dashboard responsif.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Midtrans', 'Bootstrap'],
    github: 'https://github.com/Ikhvan3/shamo_app.git',
    badge: 'Sistem E-Commerce',
    featured: true,
  },
  {
    title: 'Academic Information System',
    category: 'Web',
    images: ['/projects/web/akademik-1.png', '/projects/web/akademik-2.png'],
    description:
      'Sistem informasi akademik responsif dengan fitur CRUD management dan role authentication.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Ikhvan3/web-perkuliahan-crud-mysql.git',
    badge: 'Sistem Manajemen',
    featured: true,
  },
  {
    title: 'Sound System Rental Website',
    category: 'Web',
    images: ['/projects/web/sound-1.png', '/projects/web/sound-2.png'],
    description:
      'Website pengelolaan penyewaan sound system dengan fitur booking, admin dashboard, dan antarmuka responsif.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Ikhvan3',
    badge: 'Platform Rental',
    featured: true,
  },
];
