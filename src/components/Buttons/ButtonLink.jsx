import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const baseStyles = `flex items-center justify-center p-3 rounded-30 text-sm leading-[1.2] tracking-tight-custom
     outline-none transition-colors duration-[var(--duration-custom)] ease-custom`;

const variantStyles = {
  primary: `text-white bg-accent border border-accent hover:bg-lightAccent hover:text-accent hover:border-lightAccent
       focus-visible:bg-lightAccent focus-visible:text-accent focus-visible:border-lightAccent`,
  secondary: `text-accent bg-lightAccent border border-lightAccent hover:bg-hoverBtn hover:border-hoverBtn
       focus-visible:bg-hoverBtn focus-visible:border-hoverBtn`,
};

export default function ButtonLink({
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}) {
  const combinedStyles = twMerge(baseStyles, variantStyles[variant], className);

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
