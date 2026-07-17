'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='flex min-h-screen items-center pt-24'>
      <div className='container-custom grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300'>
            Hello, I&apos;m
          </p>

          <h1 className='text-5xl font-bold leading-tight text-white md:text-7xl'>
            Slamet Ikhvan
          </h1>
          <h2 className='mt-5 text-2xl font-semibold text-slate-200 md:text-3xl'>
            Software Developer
          </h2>
          <p className='mt-2 text-lg text-sky-300'>Mobile & Web Development</p>

          <p className='mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg'>
            Fresh graduate in Information Systems with a strong focus on
            mobile application development and practical web development
            experience. I build user-centered applications with clean
            interfaces, reliable integrations, and maintainable frontend flows.
          </p>

          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href='/cv.pdf'
              className='inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300'
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-sky-400/70 px-6 py-3 font-semibold text-sky-100 transition hover:bg-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300'
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-lg px-2 py-3 font-semibold text-slate-300 transition hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300'
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center lg:justify-end'
        >
          <div className='relative w-full max-w-sm'>
            <div className='absolute -inset-4 rounded-3xl border border-sky-400/20 bg-sky-500/10 blur-2xl' />

            <Image
              src='/profile.png'
              alt='Portrait of Slamet Ikhvan'
              width={380}
              height={380}
              preload
              className='relative z-10 w-full rounded-3xl border border-slate-700/80 bg-slate-900 object-cover shadow-2xl shadow-sky-950/40'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
