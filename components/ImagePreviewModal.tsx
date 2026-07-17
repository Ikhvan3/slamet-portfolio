'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { MediaItem } from '@/data/media';

type ImagePreviewModalProps = {
  isOpen: boolean;
  media: MediaItem | null;
  onClose: () => void;
};

export default function ImagePreviewModal({
  isOpen,
  media,
  onClose,
}: ImagePreviewModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !media) {
    return null;
  }

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Pratinjau gambar'
      className='fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(15,17,16,0.92)] p-4'
      onClick={onClose}
    >
      <button
        type='button'
        aria-label='Tutup Pratinjau'
        onClick={onClose}
        className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:border-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
      >
        <X size={20} />
      </button>

      <figure
        className='w-full max-w-6xl'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='relative h-[78vh] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]'>
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes='100vw'
            className='object-contain'
          />
        </div>
        {media.caption && (
          <figcaption className='mx-auto mt-4 max-w-3xl text-center text-sm text-[var(--text-secondary)]'>
            {media.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
