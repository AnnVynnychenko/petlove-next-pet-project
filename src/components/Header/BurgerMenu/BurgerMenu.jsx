'use client';

import MainNav from '@/components/Header/MainNav/MainNav';
import Icon from '@/components/Icon';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useFindPath } from '@/hooks/useFindPath';
import ButtonLink from '@/components/Buttons/ButtonLink';
import { useAuthStore } from '@/store/useAuthStore';
import { twMerge } from 'tailwind-merge';
import CloseButton from '@/components/Buttons/CloseButton';
import { Z_INDEX } from '@/constants/zIndex';

export default function BurgerMenu({ onClose }) {
  useScrollLock();

  const { isHome } = useFindPath();

  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const logout = useAuthStore(state => state.logout);

  const burgerMenuBgClasses = isHome ? 'bg-white' : 'bg-accent';
  const burgerCloseBtnColor = !isHome && 'text-white';
  const bergerNavBorder = !isHome && 'border-white/50';

  const { menuBackdrop, menu } = Z_INDEX;

  return (
    <>
      <div
        onClick={onClose}
        className={twMerge(
          'fixed inset-0 bg-transparent xl:hidden',
          menuBackdrop
        )}
        aria-hidden="true"
      ></div>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={twMerge(
          'fixed top-0 right-0 flex flex-col gap-5 justify-between w-[58vw] h-[100dvh] px-5 pt-15 pb-10 xl:hidden',
          menu,
          burgerMenuBgClasses
        )}
      >
        <CloseButton
          onClose={onClose}
          ariaLabel="Close menu"
          classNameBtn="fixed top-9 right-7 size-4"
          classNameIcon={twMerge('size-4', burgerCloseBtnColor)}
        />
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
                className={twMerge(
                  'w-full mb-2 uppercase font-bold',
                  bergerNavBorder
                )}
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
