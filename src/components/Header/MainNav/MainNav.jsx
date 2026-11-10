'use client';

import LinkMainNav from '@/components/Header/MainNav/LinkMainNav';
import { useFindPath } from '@/hooks/useFindPath';

export default function MainNav({ className = '', onClose = () => {} }) {
  const { isFriends, isNews, isNotices } = useFindPath();

  return (
    <nav className={`w-[119px] ${className}`}>
      <ul className="flex flex-col gap-[10px]">
        <LinkMainNav
          href="/news"
          onClose={onClose}
          className={isNews && 'border-white/50'}
        >
          News
        </LinkMainNav>
        <LinkMainNav
          href="/notices"
          onClose={onClose}
          className={isNotices && 'border-white/50'}
        >
          Find pet
        </LinkMainNav>
        <LinkMainNav
          href="/friends"
          onClose={onClose}
          className={isFriends && 'border-white/50'}
        >
          Our friends
        </LinkMainNav>
      </ul>
    </nav>
  );
}
