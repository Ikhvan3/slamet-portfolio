export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Android'],
  },
  {
    title: 'Web Development',
    skills: [
      'PHP',
      'Laravel',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend & Database',
    skills: ['Firebase', 'Supabase', 'MySQL', 'REST API'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Figma', 'Draw.io'],
  },
];
