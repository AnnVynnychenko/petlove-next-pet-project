'use client';

import { usePathname } from 'next/navigation';

export const useFindPath = () => {
  const pathname = usePathname() || '/';

  return {
    isHome: pathname === '/',
    isAddPet: pathname.startsWith('/add-pet'),
    isFriends: pathname.startsWith('/friends'),
    isNews: pathname.startsWith('/news'),
    isNotices: pathname.startsWith('/notices'),
    isProfile: pathname.startsWith('/profile'),
    isLogin: pathname.startsWith('/login'),
    isRegister: pathname.startsWith('/register'),
  };
};
