'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import type { MediaItem } from '@/data/media';

const publication: MediaItem = {
  src: '/intern/publikasi.png',
  alt: 'Tangkapan layar publikasi jurnal SINTA 3 untuk implementasi frontend aplikasi EngVenture',
  caption: 'Publikasi Jurnal SINTA 3 - Frontend Implementation on EngVenture Application',
};

export default function About() {
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  return (
    <section id='about' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
          PROFIL
        </p>
        <h2 className='mb-6 text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
          Tentang Saya
        </h2>

        <div className='max-w-4xl'>
          <p className='text-lg leading-8 text-[var(--text-secondary)]'>
            Saya adalah lulusan Sistem Informasi dari Universitas Dian
            Nuswantoro dengan fokus utama pada Mobile Development. Saya
            terbiasa membangun aplikasi menggunakan Flutter, Dart, Kotlin,
            Android, Firebase, dan REST API, serta memiliki pengalaman
            pengembangan website menggunakan PHP, Laravel, JavaScript, HTML,
            CSS, Bootstrap, dan Tailwind CSS.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-2'>
          <div className='rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6'>
            <h3 className='mb-2 font-semibold text-[var(--primary)]'>
              Pendidikan
            </h3>
            <p className='font-medium text-[var(--text-primary)]'>
              Universitas Dian Nuswantoro
            </p>
            <p className='mt-1 text-[var(--text-secondary)]'>
              Sistem Informasi - IPK 3.76
            </p>
          </div>

          <div className='rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6'>
            <h3 className='mb-2 font-semibold text-[var(--primary)]'>
              Fokus Keahlian
            </h3>
            <p className='font-medium text-[var(--text-primary)]'>
              Mobile Development sebagai kompetensi utama
            </p>
            <p className='mt-1 text-[var(--text-secondary)]'>
              Didukung kemampuan Web Development, Backend integration, dan
              desain antarmuka aplikasi.
            </p>
          </div>
        </div>

        <article className='mt-8 grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-[0.95fr_1.05fr] md:p-6'>
          <button
            type='button'
            onClick={() => setPreviewMedia(publication)}
            className='group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            aria-label='Buka pratinjau gambar publikasi'
          >
            <Image
              src={publication.src}
              alt={publication.alt}
              fill
              sizes='(max-width: 768px) 100vw, 45vw'
              className='object-contain p-3 transition duration-300 group-hover:scale-[1.02]'
            />
          </button>

          <div className='flex flex-col justify-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]'>
              Publikasi
            </p>
            <h3 className='mt-3 text-2xl font-bold text-[var(--text-primary)]'>
              Frontend Implementation on EngVenture Application
            </h3>
            <p className='mt-2 font-medium text-[var(--primary)]'>
              Publikasi Jurnal SINTA 3
            </p>
            <p className='mt-4 leading-7 text-[var(--text-secondary)]'>
              Publikasi ini mendokumentasikan implementasi frontend pada
              aplikasi EngVenture di IntSys Research Lab. Informasi ditampilkan
              berdasarkan data existing yang tersedia pada portfolio.
            </p>
          </div>
        </article>
      </div>

      <ImagePreviewModal
        isOpen={Boolean(previewMedia)}
        media={previewMedia}
        onClose={() => setPreviewMedia(null)}
      />
    </section>
  );
}
