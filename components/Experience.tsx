import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id='experience' className='py-28'>
      <div className='container-custom'>
        <h2 className='text-4xl font-bold mb-12'>Experience</h2>

        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-slate-900 border border-slate-800 p-8 rounded-3xl'
            >
              <h3 className='text-2xl font-semibold'>
                {exp.role}
              </h3>

              <p className='text-blue-400 mt-2'>
                {exp.company}
              </p>
              <p className='text-slate-500 mt-2'>
                {exp.period}
              </p>

              <p className='text-slate-300 mt-4 leading-relaxed'>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}