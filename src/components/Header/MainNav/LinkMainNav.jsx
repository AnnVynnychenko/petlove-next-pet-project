'use client';

import Link from 'next/link';
import { useFindPath } from '@/hooks/useFindPath';

export default function LinkMainNav({
  className = '',
  href = '/',
  children,
  onClose = () => {},
  ...props
}) {
  const { isHome } = useFindPath();

  const mainNavLinkStyles = !isHome
    ? 'text-white border-white/15 hover:border-white/50 focus-visible:border-white/50'
    : 'border-textMain/15 hover:border-accent focus-visible:border-accent';

  return (
    <li
      className={`w-full text-center text-[14px] leading-[1.2] tracking-tight-custom border rounded-30 ${mainNavLinkStyles} ${className}`}
      {...props}
    >
      <Link href={href} onClick={onClose} className="block w-full py-[15px]">
        {children}
      </Link>
    </li>
  );
}
