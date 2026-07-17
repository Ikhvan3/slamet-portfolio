'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl'>
      <div className='container-custom flex items-center justify-between py-4'>
        <a href='#' className='text-lg font-bold text-sky-300 transition hover:text-white'>
          Slamet.dev
        </a>

        <div className='hidden items-center gap-7 text-sm text-slate-300 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='transition hover:text-sky-300 focus:outline-none focus-visible:text-sky-300'
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type='button'
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 md:hidden'
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className='border-t border-slate-800 bg-slate-950/95 md:hidden'>
          <div className='container-custom grid gap-2 py-4'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='rounded-lg px-3 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
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
