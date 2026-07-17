'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Briefcase, Building2, CalendarDays, MapPin, X } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section id='experience' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
          Career Journey
        </p>
        <h2 className='mb-12 text-4xl font-bold text-white md:text-5xl'>
          Experience
        </h2>

        <div className='relative space-y-6 before:absolute before:left-5 before:top-2 before:hidden before:h-full before:w-px before:bg-slate-800 lg:before:block'>
          {experiences.map((exp) => (
            <article
              key={`${exp.role}-${exp.company}`}
              className='relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition hover:border-sky-500/50 md:p-8 lg:ml-14'
            >
              <div className='absolute -left-14 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-sky-400/50 bg-slate-950 text-sky-300 lg:flex'>
                <Briefcase size={18} />
              </div>

              <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
                <div>
                  <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-sky-300'>
                    <Building2 size={22} />
                  </div>

                  <h3 className='text-2xl font-bold text-white'>{exp.role}</h3>
                  <p className='mt-2 text-lg font-medium text-sky-300'>
                    {exp.company}
                  </p>
                  {exp.organization && (
                    <p className='mt-1 text-sm text-slate-400'>
                      {exp.organization}
                    </p>
                  )}
                </div>

                <div className='grid gap-2 text-sm text-slate-400 sm:grid-cols-2 lg:min-w-80 lg:grid-cols-1'>
                  <span className='inline-flex items-center gap-2'>
                    <CalendarDays size={16} className='text-sky-300' />
                    {exp.period}
                    {exp.duration ? ` (${exp.duration})` : ''}
                  </span>
                  <span className='inline-flex items-center gap-2'>
                    <Briefcase size={16} className='text-sky-300' />
                    {exp.employmentType}
                    {exp.workType ? ` - ${exp.workType}` : ''}
                  </span>
                  {exp.location && (
                    <span className='inline-flex items-center gap-2'>
                      <MapPin size={16} className='text-sky-300' />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              <ul className='mt-6 space-y-3 text-slate-300'>
                {exp.description.map((item) => (
                  <li key={item} className='flex gap-3 leading-7'>
                    <span className='mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 flex flex-wrap gap-3'>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.images && exp.images.length > 0 && (
                <div className='mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                  {exp.images.map((image) => (
                    <button
                      key={image}
                      type='button'
                      onClick={() => setPreviewImage(image)}
                      className='group relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
                    >
                      <Image
                        src={image}
                        alt={`${exp.company} documentation`}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        className='object-cover transition duration-300 group-hover:scale-105'
                      />
                    </button>
                  ))}
                </div>
              )}
            </article>
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
          <div className='relative h-[80vh] w-full max-w-5xl'>
            <Image
              src={previewImage}
              alt='Experience documentation preview'
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
