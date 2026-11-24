'use client';

import { twMerge } from 'tailwind-merge';
import { useScrollLock } from '@/hooks/useScrollLock';
import CloseButton from '@/components/Buttons/CloseButton';
import { useEscapeClose } from '@/hooks/useEscapeClose';

export default function ModalContainer({
  onClose,
  className = '',
  ariaLabel = 'Modal',
  children,
  ...props
}) {
  useScrollLock();
  useEscapeClose(onClose);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className={twMerge(
        'relative my-auto shrink-0 w-[335px] min-h-[108px] py-10 px-5 bg-white rounded-30',
        className
      )}
      {...props}
    >
      <CloseButton onClose={onClose} ariaLabel="Close modal" />
      {children}
    </div>
  );
}
