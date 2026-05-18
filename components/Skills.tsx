import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id='skills' className='py-28'>
      <div className='container-custom'>
        <h2 className='text-4xl font-bold mb-12'>
          Skills
        </h2>

        <div className='flex flex-wrap gap-4'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl hover:border-blue-500 transition'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}