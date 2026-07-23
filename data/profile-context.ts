import { certificates } from '@/data/certificates';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';

const profileFacts = {
  name: 'Slamet Ikhvan Nurhana Rifki',
  role: 'Software Developer',
  focus: 'Mobile & Web Development',
  education: 'Sistem Informasi, Universitas Dian Nuswantoro',
  gpa: '3.76',
  primaryFocus: 'Mobile Development',
  additionalCompetence:
    'Web Development, backend integration, dan desain antarmuka aplikasi',
  availability:
    'Terbuka untuk kesempatan magang, pekerjaan, kolaborasi proyek, dan pengembangan aplikasi mobile maupun website.',
  contact: [
    'Email: ikhvankanaya123@gmail.com',
    'GitHub: https://github.com/Ikhvan3',
    'LinkedIn: https://linkedin.com/in/slamet-ikhvan-nurhana-rifki',
  ],
  publication:
    'Frontend Implementation on EngVenture Application - Publikasi Jurnal SINTA 3',
};

function joinList(values: string[]) {
  return values.filter(Boolean).join(', ');
}

export function buildPortfolioContext() {
  const experienceContext = experiences
    .map((experience) => {
      const organization = experience.organization
        ? ` (${experience.organization})`
        : '';
      const details = [
        `Perusahaan/instansi: ${experience.company}${organization}`,
        `Peran: ${experience.role}`,
        `Tipe: ${experience.employmentType}`,
        `Periode: ${experience.period}`,
        experience.duration ? `Durasi: ${experience.duration}` : '',
        experience.location ? `Lokasi: ${experience.location}` : '',
        experience.workType ? `Model kerja: ${experience.workType}` : '',
        `Deskripsi: ${experience.descriptions.join(' ')}`,
        `Skill terkait: ${joinList(experience.skills)}`,
      ].filter(Boolean);

      return `- ${details.join('; ')}`;
    })
    .join('\n');

  const projectContext = projects
    .map((project) => {
      const links = [
        project.github ? `GitHub: ${project.github}` : '',
        project.demo ? `Demo: ${project.demo}` : '',
      ].filter(Boolean);

      return [
        `- ${project.title}`,
        `Kategori: ${project.category}`,
        `Deskripsi: ${project.description}`,
        `Teknologi: ${joinList(project.tech)}`,
        `Badge: ${project.badge}`,
        links.length ? `Link publik: ${links.join(', ')}` : '',
      ]
        .filter(Boolean)
        .join('; ');
    })
    .join('\n');

  const skillContext = skillGroups
    .map((group) => `- ${group.title}: ${joinList(group.skills)}`)
    .join('\n');

  const certificateContext = certificates
    .map((certificate) => {
      const details = [
        `- ${certificate.title}`,
        `Penerbit: ${certificate.issuer}`,
        certificate.issuedAt ? `Tanggal: ${certificate.issuedAt}` : '',
        certificate.credentialUrl
          ? `Credential: ${certificate.credentialUrl}`
          : '',
      ].filter(Boolean);

      return details.join('; ');
    })
    .join('\n');

  return [
    'PROFIL',
    `Nama: ${profileFacts.name}`,
    `Posisi: ${profileFacts.role}`,
    `Fokus: ${profileFacts.focus}`,
    `Pendidikan: ${profileFacts.education}`,
    `IPK: ${profileFacts.gpa}`,
    `Fokus utama: ${profileFacts.primaryFocus}`,
    `Kompetensi tambahan: ${profileFacts.additionalCompetence}`,
    `Ketersediaan profesional: ${profileFacts.availability}`,
    `Kontak publik: ${profileFacts.contact.join('; ')}`,
    `Publikasi: ${profileFacts.publication}`,
    '',
    'PENGALAMAN',
    experienceContext,
    '',
    'PROYEK',
    projectContext,
    '',
    'KEAHLIAN',
    skillContext,
    '',
    'SERTIFIKAT',
    certificateContext,
  ].join('\n');
}

