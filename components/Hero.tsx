'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='flex min-h-screen items-center pt-24'>
      <div className='container-custom grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]'>
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]'>
            Halo, saya
          </p>

          <h1 className='text-5xl font-bold leading-tight text-[var(--text-primary)] md:text-7xl'>
            Slamet Ikhvan
          </h1>
          <h2 className='mt-5 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl'>
            Software Developer
          </h2>
          <p className='mt-2 text-lg text-[var(--primary)]'>
            Mobile & Web Development
          </p>

          <p className='mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg'>
            Lulusan Sistem Informasi yang berfokus pada pengembangan aplikasi
            mobile dan website. Berpengalaman menggunakan Flutter, Kotlin,
            Laravel, PHP, Firebase, dan teknologi modern untuk membangun
            aplikasi yang responsif, terstruktur, dan mudah digunakan.
          </p>

          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-lg bg-[var(--primary-strong)] px-6 py-3 font-semibold text-[#07110c] transition hover:bg-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              Lihat Proyek
              <ArrowDown size={18} />
            </a>
            <a
              href='/cv.pdf'
              className='inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <Download size={18} />
              Unduh CV
            </a>
            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg px-2 py-3 font-semibold text-[var(--text-secondary)] transition hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className='flex justify-center lg:justify-end'
        >
          <div className='relative w-full max-w-sm'>
            <div className='absolute -inset-3 rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)]' />

            <Image
              src='/profile.png'
              alt='Potret Slamet Ikhvan'
              width={380}
              height={380}
              preload
              className='relative z-10 w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] object-cover shadow-2xl shadow-black/30'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
