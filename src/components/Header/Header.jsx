'use client';

import Logo from '@/components/Header/Logo';
import BurgerMenuBtn from '@/components/Header/BurgerMenu/BurgerMenuBtn';
import UserAvatar from '@/components/Header/UserAvatar';
import { useToggle } from '@/hooks/useToggle';
import MainNav from '@/components/Header/MainNav/MainNav';
import BurgerMenu from '@/components/Header/BurgerMenu/BurgerMenu';
import { useFindPath } from '@/hooks/useFindPath';

export default function Header() {
  const { isHome } = useFindPath();

  const { isOpen: isMenuOpen, toggle: toggleMenu } = useToggle(false);

  //поки немає реестрації
  const isLoggedIn = true;

  const burgerClasses = isHome
    ? 'text-white hover:text-lightAccent focus-visible:text-lightAccent'
    : 'text-textMain hover:text-accent focus-visible:text-accent';

  return (
    <header
      className={`relative py-4.5 px-5 bg-accent rounded-t-[30px] ${
        isHome ? 'mt-2.5' : ''
      }`}
    >
      <div className="flex items-center justify-between min-h-10">
        <Logo
          textColor={isHome ? 'text-white' : undefined}
          heartStyles={isHome ? 'text-white' : 'text-accent'}
        />
        <div className="hidden xl:block">
          <MainNav />
        </div>
        <div className="flex gap-3">
          {isLoggedIn && <UserAvatar />}
          <BurgerMenuBtn
            onClick={toggleMenu}
            isMenuOpen={isMenuOpen}
            burgerClasses={burgerClasses}
          />
        </div>
      </div>
      {isMenuOpen && <BurgerMenu onClose={toggleMenu} />}
    </header>
  );
}
