'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import { certificates } from '@/data/certificates';
import type { MediaItem } from '@/data/media';

export default function Certificates() {
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  return (
    <section id='certificates' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
          PENCAPAIAN
        </p>
        <h2 className='mb-5 text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
          Sertifikat
        </h2>
        <p className='mb-12 max-w-3xl leading-7 text-[var(--text-secondary)]'>
          Beberapa sertifikat dan kredensial yang mendukung pengalaman saya
          dalam pengembangan aplikasi, web, dan bidang teknologi terkait.
        </p>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className='flex min-h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--border-hover)]'
            >
              {certificate.image && (
                <button
                  type='button'
                  onClick={() => setPreviewMedia(certificate.image ?? null)}
                  className='group relative aspect-[16/10] border-b border-[var(--border)] bg-[var(--background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
                  aria-label={`Buka pratinjau sertifikat ${certificate.title}`}
                >
                  <Image
                    src={certificate.image.src}
                    alt={certificate.image.alt}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    className='object-contain p-3 transition duration-300 group-hover:scale-[1.02]'
                  />
                </button>
              )}

              <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-lg font-bold leading-snug text-[var(--text-primary)]'>
                  {certificate.title}
                </h3>
                <p className='mt-2 text-sm text-[var(--text-secondary)]'>
                  {certificate.issuer}
                </p>
                {certificate.issuedAt && (
                  <p className='mt-1 text-sm text-[var(--text-muted)]'>
                    {certificate.issuedAt}
                  </p>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='mt-5 inline-flex w-fit rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
                  >
                    Lihat Sertifikat
                  </a>
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
