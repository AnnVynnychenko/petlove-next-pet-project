'use client';

import { usePathname } from 'next/navigation';
import Logo from '@/components/Header/Logo';
import BurgerMenuIcon from '@/components/Header/BurgerMenu/BurgerMenuIcon';
import UserAvatar from '@/components/Header/UserAvatar';

export default function Header() {
  const pathname = usePathname();

  //поки немає реестрації
  const isLoggedIn = true;

  const isHome =
    pathname === '/' ||
    pathname === '/petlove-next-pet-project' ||
    pathname === '/petlove-next-pet-project/';

  const burgerClasses = isHome
    ? 'text-white hover:text-lightAccent focus-visible:text-lightAccent'
    : 'text-textMain hover:text-accent focus-visible:text-accent';

  return (
    <header className="py-4.5 px-5 bg-accent rounded-t-[30px]">
      <div className="flex items-center justify-between min-h-10">
        <Logo
          textColor={isHome ? 'text-white' : undefined}
          heartStyles={isHome ? 'text-white' : 'text-accent'}
        />
        <div className="flex flex-raw gap-3">
          {isLoggedIn && <UserAvatar />}
          <BurgerMenuIcon burgerClasses={burgerClasses} />
        </div>
      </div>
    </header>
  );
}
