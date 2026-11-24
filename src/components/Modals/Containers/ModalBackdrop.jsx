'use client';

import { Z_INDEX } from '@/constants/zIndex';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

export default function ModalBackdrop({ children, onClose, className = '' }) {
  if (typeof document === 'undefined') {
    return null;
  }

  function handleBackdropClick(evt) {
    const { target, currentTarget } = evt;
    if (target === currentTarget) onClose?.();
  }

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={twMerge(
        'fixed inset-0 flex flex-col items-center justify-start py-5 px-4 bg-textMain/30 overflow-y-auto',
        Z_INDEX.modalBackdrop,
        className
      )}
    >
      {children}
    </div>,
    document.body
  );
}
