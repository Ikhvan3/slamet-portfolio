'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Project, ProjectCategory, projects } from '@/data/projects';

const filters: Array<ProjectCategory | 'All'> = ['All', 'Mobile', 'Web'];

function ProjectGallery({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: (image: string) => void;
}) {
  const isMobile = project.category === 'Mobile';

  return (
    <div
      className={`grid gap-3 bg-slate-950/80 p-4 ${
        isMobile ? 'grid-cols-3' : 'grid-cols-1'
      }`}
    >
      {project.images.map((img, index) => (
        <button
          key={img}
          type='button'
          onClick={() => onPreview(img)}
          className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
            isMobile ? 'aspect-[9/16]' : 'aspect-video'
          }`}
          aria-label={`Preview ${project.title} screenshot ${index + 1}`}
        >
          <Image
            src={img}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={`transition duration-300 group-hover:scale-105 ${
              isMobile ? 'object-contain' : 'object-cover'
            }`}
          />
        </button>
      ))}
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
  onPreview: (image: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
      className='flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-sky-500/50'
    >
      <ProjectGallery project={project} onPreview={onPreview} />

      <div className='flex flex-1 flex-col p-6'>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-300'>
            {project.category}
          </span>
          <span className='rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300'>
            {project.badge}
          </span>
          {project.featured && (
            <span className='rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-200'>
              Featured
            </span>
          )}
        </div>

        <h3 className='mt-5 text-2xl font-bold text-white'>{project.title}</h3>

        <p className='mt-4 flex-1 leading-7 text-slate-400'>
          {project.description}
        </p>

        <div className='mt-6 flex flex-wrap gap-2'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300'
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
              className='inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300'
            >
              <FaGithub size={17} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-sky-400/70 px-4 py-2.5 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300'
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
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id='projects' className='py-24 md:py-28'>
      <div className='container-custom'>
        <div className='mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
              Portfolio
            </p>

            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              Featured Projects
            </h2>
            <p className='mt-4 max-w-2xl leading-7 text-slate-400'>
              Mobile and web projects combined into one portfolio, with filters
              to quickly review the work that matters for each role.
            </p>
          </div>

          <div className='inline-flex w-full rounded-xl border border-slate-800 bg-slate-950/80 p-1 sm:w-auto'>
            {filters.map((filter) => (
              <button
                key={filter}
                type='button'
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:flex-none ${
                  activeFilter === filter
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-sky-300'
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
              onPreview={setPreviewImage}
            />
          ))}
        </div>
      </div>

      {previewImage && (
        <div
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4'
        >
          <button
            type='button'
            aria-label='Close image preview'
            onClick={() => setPreviewImage(null)}
            className='absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-white transition hover:border-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
          >
            <X size={20} />
          </button>
          <div className='relative h-[82vh] w-full max-w-6xl'>
            <Image
              src={previewImage}
              alt='Project screenshot preview'
              fill
              sizes='100vw'
              className='object-contain'
            />
          </div>
        </div>
      )}
    </section>
  );
}
