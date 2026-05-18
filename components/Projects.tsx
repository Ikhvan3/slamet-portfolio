'use client';

import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-12'>Projects</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className='bg-slate-900 border border-slate-800 rounded-3xl p-6'
            >
              <h3 className='text-2xl font-semibold mb-4'>
                {project.title}
              </h3>
              <p className='text-slate-400 mb-6'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target='_blank'
                className='text-blue-400 hover:text-blue-300'
              >
                 View GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}