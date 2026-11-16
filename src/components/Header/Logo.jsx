import Link from 'next/link';
import Icon from '@/components/Icon';
import { twMerge } from 'tailwind-merge';

export default function Logo({
  textColor = 'text-textMain',
  heartStyles = 'text-accent',
  ...props
}) {
  return (
    <Link
      href="/"
      className={twMerge(
        'flex items-baseline py-[10px] text-xl leading-none font-bold outline-accent',
        textColor
      )}
      aria-label="Pet love"
      {...props}
    >
      <span>petl</span>
      <span className={heartStyles}>
        <Icon name="heart" className="w-4 h-[13px]" aria-hidden="true" />
      </span>
      <span>ve</span>
    </Link>
  );
}
