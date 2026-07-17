import type { MediaItem } from './media';

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  issuedAt?: string;
  image?: MediaItem;
  credentialUrl?: string;
};

export const certificates: CertificateItem[] = [
  {
    id: 'bikdk-internship',
    title: 'Praktek Kerja Lapangan',
    issuer: 'Balai Industri Kreatif Digital dan Kemasan',
    image: {
      src: '/sertif/sertifbikdk.jpg',
      alt: 'Sertifikat Praktek Kerja Lapangan di Balai Industri Kreatif Digital dan Kemasan',
      caption: 'Sertifikat Praktek Kerja Lapangan BIKDK',
    },
  },
  {
    id: 'bwa-fullstack',
    title: 'BuildWithAngga Fullstack Laravel Flutter',
    issuer: 'BuildWithAngga',
    image: {
      src: '/sertif/sertifbwa.jpg',
      alt: 'Sertifikat BuildWithAngga Fullstack Laravel Flutter',
      caption: 'Sertifikat BuildWithAngga Fullstack Laravel Flutter',
    },
  },
  {
    id: 'dicoding-flutter',
    title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    issuer: 'Dicoding',
    image: {
      src: '/sertif/sertifdicodingflutter.jpg',
      alt: 'Sertifikat Dicoding Belajar Membuat Aplikasi Flutter untuk Pemula',
      caption: 'Sertifikat Dicoding Flutter untuk Pemula',
    },
  },
  {
    id: 'rakamin-mandiri',
    title: 'Virtual Intern Mobile Apps Developer Bank Mandiri x Rakamin Academy',
    issuer: 'PT Bank Mandiri (Persero) Tbk x Rakamin Academy',
    image: {
      src: '/sertif/sertifrakamin.jpg',
      alt: 'Sertifikat Virtual Intern Mobile Apps Developer Bank Mandiri bersama Rakamin Academy',
      caption: 'Sertifikat virtual internship Bank Mandiri x Rakamin Academy',
    },
  },
  {
    id: 'toefl',
    title: 'TOEFL Certification',
    issuer: 'TOEFL',
    image: {
      src: '/sertif/sertitoefl.jpg',
      alt: 'Sertifikat TOEFL',
      caption: 'Sertifikat TOEFL',
    },
  },
  {
    id: 'bnsp-data-scientist',
    title: 'BNSP Data Scientist Certification',
    issuer: 'BNSP',
  },
  {
    id: 'bnsp-network-administrator',
    title: 'BNSP Network Administrator',
    issuer: 'BNSP',
  },
];
