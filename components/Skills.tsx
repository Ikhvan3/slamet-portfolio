import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id='skills' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
          Technical Stack
        </p>
        <h2 className='mb-12 text-4xl font-bold text-white md:text-5xl'>Skills</h2>

        <div className='grid gap-5 md:grid-cols-2'>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className='rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20'
            >
              <h3 className='text-xl font-semibold text-white'>{group.title}</h3>

              <div className='mt-5 flex flex-wrap gap-3'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
