import { usePathname } from 'next/navigation';

export const useFindPath = () => {
  const rawPathname = usePathname() || '';

  const pathname = rawPathname.replace('/petlove-next-pet-project', '') || '/';

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
