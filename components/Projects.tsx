'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import { Project, ProjectCategory, projects } from '@/data/projects';
import type { MediaItem } from '@/data/media';

const filters: Array<ProjectCategory | 'Semua'> = ['Semua', 'Mobile', 'Web'];

function getCategoryLabel(category: ProjectCategory) {
  return category === 'Mobile' ? 'Proyek Mobile' : 'Proyek Web';
}

function ProjectGallery({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: (media: MediaItem) => void;
}) {
  const isMobile = project.category === 'Mobile';

  return (
    <div
      className={`grid gap-3 bg-[var(--background)] p-4 ${
        isMobile ? 'grid-cols-3' : 'grid-cols-1'
      }`}
    >
      {project.images.map((img, index) => {
        const media = {
          src: img,
          alt: `Tangkapan layar ${project.title} ${index + 1}`,
          caption: project.title,
        };

        return (
          <button
            key={img}
            type='button'
            onClick={() => onPreview(media)}
            className={`group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
              isMobile ? 'aspect-[9/16]' : 'aspect-video'
            }`}
            aria-label={`Buka pratinjau ${project.title} ${index + 1}`}
          >
            <Image
              src={img}
              alt={media.alt}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className={`transition duration-300 group-hover:scale-[1.03] ${
                isMobile ? 'object-contain' : 'object-cover'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: Project;
  index: number;
  onPreview: (media: MediaItem) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
      className='flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-1 hover:border-[var(--primary-dark)]'
    >
      <ProjectGallery project={project} onPreview={onPreview} />

      <div className='flex flex-1 flex-col p-6'>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full bg-[rgba(52,211,153,0.13)] px-3 py-1 text-xs font-semibold text-[var(--primary)]'>
            {getCategoryLabel(project.category)}
          </span>
          <span className='rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-secondary)]'>
            {project.badge}
          </span>
          {project.featured && (
            <span className='rounded-full border border-[rgba(251,191,36,0.45)] px-3 py-1 text-xs text-[var(--secondary)]'>
              Unggulan
            </span>
          )}
        </div>

        <h3 className='mt-5 text-2xl font-bold text-[var(--text-primary)]'>
          {project.title}
        </h3>

        <p className='mt-4 flex-1 leading-7 text-[var(--text-secondary)]'>
          {project.description}
        </p>

        <div className='mt-6 flex flex-wrap gap-2'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-sm text-[var(--text-secondary)]'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='mt-7 flex flex-wrap gap-3'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg bg-[var(--primary-strong)] px-4 py-2.5 text-sm font-semibold text-[#07110c] transition hover:bg-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <FaGithub size={17} />
              Lihat GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory | 'Semua'>('Semua');
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Semua') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id='projects' className='py-24 md:py-28'>
      <div className='container-custom'>
        <div className='mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
              PORTFOLIO
            </p>

            <h2 className='text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
              Proyek Unggulan
            </h2>
            <p className='mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]'>
              Kumpulan proyek mobile dan web dalam satu portfolio, dengan
              filter untuk meninjau karya sesuai kebutuhan posisi.
            </p>
          </div>

          <div className='inline-flex w-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 sm:w-auto'>
            {filters.map((filter) => (
              <button
                key={filter}
                type='button'
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] sm:flex-none ${
                  activeFilter === filter
                    ? 'bg-[var(--primary-strong)] text-[#07110c]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className='grid gap-7 lg:grid-cols-2'>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.category}-${project.title}`}
              project={project}
              index={index}
              onPreview={setPreviewMedia}
            />
          ))}
        </div>
      </div>

      <ImagePreviewModal
        isOpen={Boolean(previewMedia)}
        media={previewMedia}
        onClose={() => setPreviewMedia(null)}
      />
    </section>
  );
}
