import Link from 'next/link';
import Icon from '@/components/Icon';

export default function Logo({
  textColor = 'text-textMain',
  heartStyles = 'text-accent',
  ...props
}) {
  return (
    <Link
      href="/"
      className={`flex items-baseline py-[10px] text-xl leading-none font-bold ${textColor}`}
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
