import Link from 'next/link';

export default function HelperText({ children, linkText = 'login', ...props }) {
  const href = linkText === 'login' ? '/login' : '/register';

  return (
    <div
      className="flex gap-[2px] items-center justify-center mt-3 text-xs leading-[1.17] tracking-tight-custom"
      {...props}
    >
      <span className="text-textMain/50">{children}</span>
      <Link
        href={href}
        className="capitalize font-bold text-accent underline decoration-transparent underline-offset-4 transition-all duration-[var(--duration-custom)] ease-custom hover:decoration-accent focus-visible:decoration-accent outline-none"
      >
        {linkText}
      </Link>
    </div>
  );
}
