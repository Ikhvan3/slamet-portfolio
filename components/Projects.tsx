'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id='projects' className='py-28'>
      <div className='container-custom'>
        <div className='flex items-center justify-between mb-12'>
          <div>
            <p className='text-blue-400 mb-3'>Portfolio</p>

            <h2 className='text-4xl md:text-5xl font-bold'>
              Featured Projects
            </h2>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              
              className='bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group'
            >
              {/* IMAGE */}
              <div className='grid grid-cols-3 gap-3 p-4 bg-slate-950'>
  {project.images.map((img, i) => (
    <div
      key={i}
      className='rounded-2xl overflow-hidden border border-slate-800'
    >
      <Image
        src={img}
        alt={project.title}
        width={300}
        height={600}
        className='w-full h-auto object-contain hover:scale-105 transition duration-300'
      />
    </div>
  ))}
</div>

              {/* CONTENT */}
              <div className='p-8'>
                <span className='inline-block text-xs bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full'>
                  {project.badge}
                </span>

                <h3 className='text-2xl font-bold mt-5'>
                  {project.title}
                </h3>

                <p className='text-slate-400 mt-5 leading-relaxed'>
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className='flex flex-wrap gap-3 mt-6'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm text-slate-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className='flex gap-4 mt-8'>
                  <a
                    href={project.github}
                    target='_blank'
                    className='px-5 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl text-white'
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}