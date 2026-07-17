'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import { experiences } from '@/data/experience';
import type { MediaItem } from '@/data/media';

export default function Experience() {
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  return (
    <section id='experience' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
          PERJALANAN KARIER
        </p>
        <h2 className='mb-5 text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
          Pengalaman
        </h2>
        <p className='mb-12 max-w-3xl leading-7 text-[var(--text-secondary)]'>
          Pengalaman magang, riset, pendampingan laboratorium, dan proyek
          virtual yang membentuk kemampuan saya dalam pengembangan aplikasi
          mobile, analisis sistem, dan kolaborasi tim.
        </p>

        <div className='relative space-y-10 before:absolute before:left-0 before:top-2 before:hidden before:h-full before:w-px before:bg-[var(--border)] lg:before:block'>
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className='relative grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-10 lg:pl-8'
            >
              <span className='absolute -left-[5px] top-2 hidden h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] lg:block' />

              <aside className='text-sm text-[var(--text-muted)]'>
                <p className='font-semibold text-[var(--text-primary)]'>
                  {exp.period}
                </p>
                {exp.duration && <p className='mt-1'>{exp.duration}</p>}
              </aside>

              <div className='rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--border-hover)] md:p-7'>
                <div className='flex flex-col gap-3'>
                  <h3 className='text-2xl font-bold leading-tight text-[var(--text-primary)]'>
                    {exp.role}
                  </h3>
                  <div>
                    <p className='font-medium text-[var(--primary)]'>
                      {exp.company}
                    </p>
                    {exp.organization && (
                      <p className='mt-1 text-sm text-[var(--text-muted)]'>
                        {exp.organization}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--text-secondary)]'>
                    <span>{exp.employmentType}</span>
                    {exp.workType && <span>{exp.workType}</span>}
                    {exp.location && <span>{exp.location}</span>}
                  </div>
                </div>

                <ul className='mt-6 space-y-3 text-[var(--text-secondary)]'>
                  {exp.descriptions.map((item) => (
                    <li key={item} className='flex gap-3 leading-7'>
                      <span className='mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-sm text-[var(--text-secondary)]'
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.images && exp.images.length > 0 && (
                  <div className='mt-7'>
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]'>
                      Dokumentasi
                    </p>
                    <div className='grid gap-3 sm:grid-cols-2'>
                      {exp.images.map((image) => (
                        <figure key={image.src}>
                          <button
                            type='button'
                            onClick={() => setPreviewMedia(image)}
                            className='group relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
                            aria-label={`Buka pratinjau ${image.caption ?? exp.company}`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes='(max-width: 768px) 100vw, 40vw'
                              className='object-cover transition duration-300 group-hover:scale-[1.03]'
                            />
                          </button>
                          {image.caption && (
                            <figcaption className='mt-2 text-sm text-[var(--text-muted)]'>
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
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
