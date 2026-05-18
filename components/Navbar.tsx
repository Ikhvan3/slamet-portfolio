'use client';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-lg border-b border-slate-800 z-50'>
      <div className='container-custom flex justify-between items-center py-5'>
        <h1 className='font-bold text-xl text-blue-400'>
          Slamet.dev
        </h1>

        <div className='hidden md:flex gap-8 text-slate-300'>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#certificates'>Certificates</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
}