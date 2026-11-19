'use client';

import { twMerge } from 'tailwind-merge';

const paginationBtnClasses = `
  flex items-center justify-center shrink-0 size-10 border border-textMain/20 rounded-full outline-none
  transition-colors duration-[var(--duration-custom)] ease-custom
  hover:border-accent visible-focus:border-accent
  hover:bg-accent visible-focus:bg-accent
  hover:text-white visible-focus:text-white
`;

export default function PaginationBtn({
  pagePosition = false,
  pageActive = false,
  onClick,
  children,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pagePosition}
      aria-disabled={pagePosition}
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
