import Link from 'next/link';

export default function LinkMainNav({
  className = '',
  href = '/',
  children,
  onClose = () => {},
  ...props
}) {
  return (
    <li
      className={`w-full text-center py-[15px] text-[14px] leading-[1.2] tracking-[-0.03em] border rounded-[30px] border-textMain/15 hover:border-accent  ${className}`}
      {...props}
    >
      <Link href={href} onClick={onClose}>
        {children}
      </Link>
    </li>
  );
}
