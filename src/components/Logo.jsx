import Link from 'next/link';
import Icon from '@/components/Icon';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-baseline text-xl leading-none font-bold"
    >
      <span>petl</span>
      <span className="text-accent">
        <Icon name="heart" className="w-4 h-[13px]" />
      </span>
      <span>ve</span>
    </Link>
  );
}
