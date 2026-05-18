'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className='container-custom grid md:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-blue-400 mb-4'>Hello, I'm</p>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Slamet Ikhvan
          </h1>
          <h2 className='text-2xl text-slate-300 mt-4'>
            Mobile Developer
          </h2>

          <p className='text-slate-400 mt-6 leading-relaxed'>
            Fresh Graduate Information Systems focused on mobile
            application development using Flutter, Kotlin,
            Firebase, and modern backend technologies.
          </p>

          <div className='flex flex-wrap gap-4 mt-8'>
            <a
              href='/cv.pdf'
              className='px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition'
            >
              Download CV
            </a>
            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              className='px-6 py-3 border border-blue-400 rounded-xl hover:bg-blue-500/10 transition'
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center'
        >
          <div className='relative'>
            <div className='absolute inset-0 bg-blue-500 opacity-30 blur-3xl rounded-full'></div>

            <Image
              src='/profile.png'
              alt='profile'
              width={380}
              height={380}
              className='rounded-3xl border border-slate-700 relative z-10'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}