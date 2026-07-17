import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id='skills' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
          KEMAMPUAN
        </p>
        <h2 className='mb-5 text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
          Keahlian
        </h2>
        <p className='mb-12 max-w-3xl leading-7 text-[var(--text-secondary)]'>
          Tech Stack yang saya gunakan untuk membangun aplikasi mobile, website,
          integrasi Backend, dan kolaborasi pengembangan.
        </p>

        <div className='grid gap-5 md:grid-cols-2'>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className='rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--border-hover)]'
            >
              <h3 className='text-xl font-semibold text-[var(--text-primary)]'>
                {group.title}
              </h3>

              <div className='mt-5 flex flex-wrap gap-3'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--primary-dark)] hover:text-[var(--text-primary)]'
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
