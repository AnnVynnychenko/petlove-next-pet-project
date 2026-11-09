'use client';

import MainNav from '@/components/Header/MainNav/MainNav';
import Icon from '@/components/Icon';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useFindPath } from '@/hooks/useFindPath';
import ButtonLink from '@/components/ButtonLink';
import { useAuthStore } from '@/store/useAuthStore';

export default function BurgerMenu({ onClose }) {
  useScrollLock();

  const { isHome } = useFindPath();

  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const logout = useAuthStore(state => state.logout);

  const burgerMenuBgClasses = isHome ? 'bg-white' : 'bg-accent';
  const burgerCloseBtnColor = !isHome && 'text-white';
  const bergerNavBorder = !isHome && 'border-white/50';

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-transparent z-40 xl:hidden"
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 flex flex-col gap-5 justify-between w-[58vw] h-[100dvh] px-5 pt-15 pb-10 ${burgerMenuBgClasses} z-50 xl:hidden`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`fixed top-9 right-7 size-4 ${burgerCloseBtnColor}`}
          aria-label="Close menu"
        >
          <Icon name="close" className="size-4" />
        </button>
        <MainNav className="mx-auto my-auto" onClose={onClose} />
        <div className="w-full shrink-0">
          {isLoggedIn ? (
            <ButtonLink
              variant="secondary"
              onClick={() => {
                logout();
                onClose();
              }}
              className="w-full uppercase font-bold"
            >
              Log out
            </ButtonLink>
          ) : (
            <>
              <ButtonLink
                href="/login"
                onClick={onClose}
                variant="primary"
                className={`w-full mb-2 uppercase font-bold ${bergerNavBorder}`}
              >
                Log in
              </ButtonLink>
              <ButtonLink
                href="/register"
                variant="secondary"
                onClick={onClose}
                className="w-full uppercase font-bold"
              >
                Registration
              </ButtonLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
