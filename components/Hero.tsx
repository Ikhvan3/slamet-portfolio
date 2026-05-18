'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center px-6'>
      <div className='max-w-6xl grid md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-blue-400 mb-4'>Hello, I'm</p>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Slamet Ikhvan
          </h1>
          <h2 className='text-2xl mt-4 text-slate-300'>
            Mobile Developer
          </h2>

          <p className='mt-6 text-slate-400 leading-relaxed'>
            Passionate in building responsive mobile applications using
            Flutter, Kotlin, Firebase, and modern technologies.
          </p>

          <div className='flex gap-4 mt-8'>
            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              className='px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition'
            >
              GitHub
            </a>
            <a
              href='/cv.pdf'
              className='px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-500/20 transition'
            >
              Download CV
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
            <div className='absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full'></div>
<Image
              src='/profile.png'
              alt='profile'
              width={350}
              height={350}
              className='rounded-3xl border border-slate-700 relative z-10'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}