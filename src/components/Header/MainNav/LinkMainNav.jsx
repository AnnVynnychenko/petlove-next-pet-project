'use client';

import Link from 'next/link';
import { useFindPath } from '@/hooks/useFindPath';
import { twMerge } from 'tailwind-merge';

export default function LinkMainNav({
  className = '',
  href = '/',
  children,
  onClose = () => {},
  ...props
}) {
  const { isHome } = useFindPath();

  const linkVariantStyles = !isHome
    ? 'text-white border-white/15 hover:border-white/50 focus-visible:border-white/50'
    : 'border-textMain/15 hover:border-accent focus-visible:border-accent';

  return (
    <li className="w-full text-center" {...props}>
      <Link
        href={href}
        onClick={onClose}
        className={twMerge(
          'block w-full py-[15px] px-4 text-sm leading-[1.2] tracking-tight-custom border rounded-30 transition-colors outline-none',
          linkVariantStyles,
          className
        )}
      >
        {children}
      </Link>
    </li>
  );
}
