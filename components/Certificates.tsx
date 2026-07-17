import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <section id='certificates' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
          Credentials
        </p>
        <h2 className='mb-12 text-4xl font-bold text-white md:text-5xl'>
          Certificates
        </h2>

        <div className='grid gap-5 md:grid-cols-2'>
          {certificates.map((certificate) => (
            <div
              key={certificate}
              className='rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-slate-200 shadow-lg shadow-slate-950/20 transition hover:border-sky-500/50'
            >
              <p>{certificate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
