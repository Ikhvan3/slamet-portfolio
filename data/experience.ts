import type { MediaItem } from './media';

export type Experience = {
  id: string;
  company: string;
  organization?: string;
  role: string;
  employmentType: string;
  period: string;
  duration?: string;
  location?: string;
  workType?: string;
  descriptions: string[];
  skills: string[];
  images?: MediaItem[];
};

export const experiences: Experience[] = [
  {
    id: 'bikdk-system-analyst',
    company: 'Balai Industri Kreatif Digital dan Kemasan',
    organization: 'Dinas Perindustrian dan Perdagangan',
    role: 'System Analyst & UI/UX Designer Intern',
    employmentType: 'Magang',
    period: 'Agustus 2025',
    workType: 'Di lokasi',
    descriptions: [
      'Merancang sistem website Qualifa sebagai platform konsultasi psikologi berbasis web.',
      'Menganalisis kebutuhan sistem serta menyesuaikan aktor yang terlibat berdasarkan alur bisnis website.',
      'Membuat diagram sistem yang meliputi Use Case Diagram, Use Case Scenario, Activity Diagram, dan Class Diagram menggunakan Draw.io.',
      'Merancang tampilan antarmuka dan pengalaman pengguna website Qualifa menggunakan Figma.',
      'Berkolaborasi dengan tim selama proses perancangan untuk memastikan desain sistem sesuai dengan kebutuhan pengguna.',
    ],
    skills: [
      'Analisis Sistem',
      'UI/UX Design',
      'Figma',
      'Draw.io',
      'Kolaborasi Tim',
    ],
    images: [
      {
        src: '/intern/MagangBIKDK.jpg',
        alt: 'Dokumentasi kegiatan magang System Analyst dan UI UX Designer di Balai Industri Kreatif Digital dan Kemasan',
        caption:
          'Dokumentasi kegiatan magang di Balai Industri Kreatif Digital dan Kemasan',
      },
    ],
  },
  {
    id: 'intsys-flutter',
    company: 'IntSys Research Laboratory',
    role: 'Flutter Developer / Frontend Mobile Developer Intern',
    employmentType: 'Magang',
    period: 'Maret 2025 - Mei 2025',
    duration: '3 bulan',
    workType: 'Kolaborasi berbasis proyek',
    descriptions: [
      'Merancang dan mengembangkan antarmuka aplikasi pembelajaran bahasa Inggris berbasis mobile menggunakan Dart dan Flutter.',
      'Membangun komponen UI yang responsif dan interaktif untuk memberikan pengalaman pengguna yang optimal di berbagai perangkat.',
      'Berkolaborasi dengan tim pengembang untuk menyelesaikan tugas frontend sesuai kebutuhan proyek.',
      'Mengimplementasikan fitur aplikasi serta memperbaiki bug untuk meningkatkan performa dan stabilitas aplikasi.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'Git',
      'Mobile Application Development',
      'Kolaborasi Tim',
    ],
    images: [
      {
        src: '/intern/IntsysLab.jpeg',
        alt: 'Dokumentasi kegiatan Flutter Developer Intern di IntSys Research Laboratory',
        caption:
          'Dokumentasi kegiatan pengembangan aplikasi EngVenture di IntSys Research Laboratory',
      },
    ],
  },
  {
    id: 'udinus-asisten-lab',
    company: 'Universitas Dian Nuswantoro',
    role: 'Asisten Laboratorium',
    employmentType: 'Paruh waktu',
    period: 'Juni 2024 - Januari 2025',
    duration: '8 bulan',
    location: 'Semarang, Indonesia',
    workType: 'Di lokasi',
    descriptions: [
      'Membantu pelaksanaan mata kuliah teknologi mobile yang mencakup Dart, Flutter, Firebase, MySQL, dan Supabase.',
      'Membantu mahasiswa memahami materi perkuliahan serta menyelesaikan error dalam pengembangan aplikasi.',
      'Mendampingi mahasiswa matrikulasi Program Studi Ilmu Komunikasi dalam materi media, Microsoft Office dasar, dan desain.',
      'Berkoordinasi dengan laboran untuk menangani kendala teknis pada komputer laboratorium.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'MySQL',
      'Supabase',
      'Pemecahan Masalah',
      'Pendampingan Mahasiswa',
      'Komunikasi',
    ],
    images: [
      {
        src: '/intern/asistenlab.jpeg',
        alt: 'Dokumentasi kegiatan sebagai Asisten Laboratorium Universitas Dian Nuswantoro',
        caption: 'Dokumentasi kegiatan pendampingan mahasiswa di laboratorium',
      },
    ],
  },
  {
    id: 'mandiri-rakamin',
    company: 'PT Bank Mandiri (Persero) Tbk x Rakamin Academy',
    role: 'Project-Based Virtual Intern: Mobile Apps Developer',
    employmentType: 'Magang virtual',
    period: 'Desember 2023 - Januari 2024',
    duration: '2 bulan',
    workType: 'Remote',
    descriptions: [
      'Menyelesaikan program magang virtual berbasis proyek dalam bidang pengembangan aplikasi mobile.',
      'Mempelajari dan mengerjakan Android UI Design, SQLite Database, RecyclerView, Unit Testing, serta RESTful API.',
      'Mengembangkan aplikasi Android untuk menampilkan daftar berita menggunakan XML, arsitektur ViewModel dengan Kotlin, dan integrasi data dari API.',
    ],
    skills: [
      'Kotlin',
      'Android Development',
      'SQLite',
      'RecyclerView',
      'REST API',
      'Unit Testing',
      'ViewModel',
    ],
    images: [
      {
        src: '/intern/rakamin.png',
        alt: 'Dokumentasi program Mobile Apps Developer Virtual Intern Bank Mandiri bersama Rakamin Academy',
        caption:
          'Dokumentasi program virtual internship Bank Mandiri x Rakamin Academy',
      },
    ],
  },
];
