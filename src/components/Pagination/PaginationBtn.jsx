'use client';

import { twMerge } from 'tailwind-merge';

export default function PaginationBtn({
  ariaLabel = '',
  pagePosition = false,
  pageActive = false,
  onClick,
  children,
  className,
  ...props
}) {
  const paginationBtnClasses = twMerge(`
  flex items-center justify-center size-10 border border-textMain/20 rounded-full outline-none
  transition-colors duration-[var(--duration-custom)] ease-custom
  hover:border-accent visible-focus:border-accent
  hover:bg-accent visible-focus:bg-accent
  hover:text-white visible-focus:text-white
`);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pagePosition}
      aria-label={ariaLabel}
      className={twMerge(
        paginationBtnClasses,
        pagePosition &&
          'text-textMain/50 cursor-not-allowed pointer-events-none',
        pageActive && 'bg-accent text-white border-accent',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
