export default function About() {
  return (
    <section id='about' className='py-24 md:py-28'>
      <div className='container-custom'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300'>
          Profile
        </p>
        <h2 className='mb-10 text-4xl font-bold text-white md:text-5xl'>
          About Me
        </h2>

        <div className='rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-xl shadow-slate-950/30 md:p-9'>
          <p className='max-w-4xl text-lg leading-8 text-slate-300'>
            I am a fresh graduate in Information Systems from Universitas Dian
            Nuswantoro with a strong passion for software engineering. My main
            strength is mobile development with Flutter, Dart, Kotlin, Android,
            and Firebase, supported by web development experience using PHP,
            Laravel, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS.
          </p>

          <div className='mt-10 grid gap-5 md:grid-cols-2'>
            <div className='rounded-xl border border-slate-800 bg-slate-950/70 p-6'>
              <h3 className='mb-2 font-semibold text-sky-300'>Education</h3>
              <p className='font-medium text-white'>Universitas Dian Nuswantoro</p>
              <p className='mt-1 text-slate-400'>Information Systems - GPA 3.76</p>
            </div>

            <div className='rounded-xl border border-slate-800 bg-slate-950/70 p-6'>
              <h3 className='mb-2 font-semibold text-sky-300'>Publication</h3>
              <p className='font-medium text-white'>SINTA 3 Indexed Journal</p>
              <p className='mt-1 text-slate-400'>
                Frontend Implementation on EngVenture Application at IntSys
                Research Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
