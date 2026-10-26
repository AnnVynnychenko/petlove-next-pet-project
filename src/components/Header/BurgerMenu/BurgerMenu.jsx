'use client';

import Button from '@/components/Button';
import MainNav from '@/components/Header/MainNav/MainNav';
import Icon from '@/components/Icon';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useFindPath } from '@/hooks/useFindPath';

export default function BurgerMenu({ onClose }) {
  useScrollLock();

  const { isHome } = useFindPath();

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-transparent z-40 xl:hidden"
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 flex flex-col w-[58vw] h-[100dvh] px-5 pt-59 pb-10 ${isHome ? 'bg-white' : 'bg-accent'} z-50 overflow-y-auto xl:hidden`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`fixed top-9 right-7 w-4 h-4 ${!isHome && 'text-white'}`}
          aria-label="Close menu"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
        <MainNav className="mx-auto" onClose={onClose} />
        <div className="mt-70 shrink-0">
          <Button
            variant="primary"
            className={`w-full mb-2 uppercase font-bold ${!isHome && 'border-white/50'}`}
          >
            Log in
          </Button>
          <Button variant="secondary" className="w-full uppercase font-bold">
            Registration
          </Button>
        </div>
      </div>
    </>
  );
}
