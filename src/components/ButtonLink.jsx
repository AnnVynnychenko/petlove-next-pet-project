import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function ButtonLink({
  type = 'button',
  variant = 'accent',
  children,
  className = '',
  href,
  ...props
}) {
  const baseStyles =
    'flex items-center justify-center p-3 rounded-[30px] text-[14px] leading-[1.2] tracking-[-0.03em] transition-colors duration-custom ease-custom';

  const variants = {
    primary:
      'text-white bg-accent border border-accent hover:bg-lightAccent hover:text-accent hover:border-lightAccent focus-visible:bg-lightAccent focus-visible:text-accent',
    secondary:
      'text-accent bg-lightAccent border border-lightAccent hover:bg-hoverBtn hover:border-hoverBtn focus-visible:bg-hoverBtn focus-visible:border-hoverBtn',
  };

  const combinedStyles = twMerge(
    `${baseStyles} ${variants[variant] || ''} ${className}`
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
