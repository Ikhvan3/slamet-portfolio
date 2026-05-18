export default function About() {
  return (
    <section id='about' className='py-28'>
      <div className='container-custom'>
        <h2 className='text-4xl font-bold mb-10'>About Me</h2>

        <div className='bg-slate-900 border border-slate-800 p-8 rounded-3xl'>
          <p className='text-slate-300 leading-relaxed text-lg'>
            I am a fresh graduate in Information Systems from
            Universitas Dian Nuswantoro with strong passion in
            mobile application development and software engineering.
            I specialize in Flutter, Dart, Kotlin, Firebase,
            REST API integration, and scalable application
            development.
          </p>

          <div className='grid md:grid-cols-2 gap-6 mt-10'>
            <div className='bg-slate-950 p-6 rounded-2xl'>
              <h3 className='text-blue-400 font-semibold mb-2'>
                Education
              </h3>
              <p>Universitas Dian Nuswantoro</p>
              <p className='text-slate-400'>
                Information Systems — GPA 3.76
              </p>
            </div>

            <div className='bg-slate-950 p-6 rounded-2xl'>
              <h3 className='text-blue-400 font-semibold mb-2'>
                Publication
              </h3>

              <p>SINTA 3 Indexed Journal</p>

              <p className='text-slate-400'>
                Frontend Implementation on EngVenture Application
                at IntSys Research Lab.
              </p>
               </div>
          </div>
        </div>
      </div>
    </section>
  );
}