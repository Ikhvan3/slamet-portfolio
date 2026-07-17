export default function Contact() {
  return (
    <section id='contact' className='py-24 md:py-28'>
      <div className='container-custom'>
        <div className='rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center md:p-10'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]'>
            KONTAK
          </p>
          <h2 className='text-4xl font-bold text-[var(--text-primary)] md:text-5xl'>
            Mari bekerja sama
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]'>
            Saya terbuka untuk kesempatan magang, pekerjaan, kolaborasi proyek,
            dan pengembangan aplikasi mobile maupun website.
          </p>

          <div className='mx-auto mt-9 grid max-w-2xl gap-3 text-left sm:grid-cols-3'>
            <a
              href='mailto:ikhvankanaya123@gmail.com'
              className='rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 text-sm text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <span className='block text-xs uppercase text-[var(--text-muted)]'>
                Email
              </span>
              ikhvankanaya123@gmail.com
            </a>

            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 text-sm text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <span className='block text-xs uppercase text-[var(--text-muted)]'>
                GitHub
              </span>
              github.com/Ikhvan3
            </a>

            <a
              href='https://linkedin.com/in/slamet-ikhvan-nurhana-rifki'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 text-sm text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
            >
              <span className='block text-xs uppercase text-[var(--text-muted)]'>
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
