export default function Contact() {
  return (
    <section id='contact' className='py-24 md:py-28'>
      <div className='container-custom'>
        <div className='rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-xl shadow-slate-950/30 md:p-10'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
            Contact
          </p>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            Contact Me
          </h2>

          <p className='mt-4 text-slate-400'>
            Interested in working together for mobile, web, internship, or
            software development opportunities?
          </p>

          <div className='mx-auto mt-9 grid max-w-2xl gap-3 text-left sm:grid-cols-3'>
            <a
              href='mailto:ikhvankanaya123@gmail.com'
              className='rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            >
              <span className='block text-xs uppercase text-slate-500'>Email</span>
              ikhvankanaya123@gmail.com
            </a>

            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            >
              <span className='block text-xs uppercase text-slate-500'>GitHub</span>
              github.com/Ikhvan3
            </a>

            <a
              href='https://linkedin.com/in/slamet-ikhvan-nurhana-rifki'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            >
              <span className='block text-xs uppercase text-slate-500'>
                LinkedIn
              </span>
              slamet-ikhvan-nurhana-rifki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
