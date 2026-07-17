'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'Tentang Saya' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#projects', label: 'Proyek' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#certificates', label: 'Sertifikat' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(15,17,16,0.84)] backdrop-blur-md'>
      <div className='container-custom flex items-center justify-between py-4'>
        <a
          href='#'
          className='text-lg font-bold text-[var(--primary)] transition hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
        >
          Slamet.dev
        </a>

        <div className='hidden items-center gap-7 text-sm text-[var(--text-secondary)] md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='transition hover:text-[var(--primary)] focus:outline-none focus-visible:text-[var(--primary)]'
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type='button'
          aria-label='Buka atau tutup menu navigasi'
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] md:hidden'
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className='border-t border-[var(--border)] bg-[var(--background)] md:hidden'>
          <div className='container-custom grid gap-2 py-4'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='rounded-lg px-3 py-3 text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
