'use client';

import Button from '@/components/Button';
import MainNav from '@/components/Header/MainNav/MainNav';
import Icon from '@/components/Icon';

export default function BurgerMenu({ onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-transparent z-40 xl:hidden"
        aria-hidden="true"
      ></div>
      <div className="fixed top-0 right-0 flex flex-col justify-between gap-4 w-[58vw] h-screen px-5 pt-59 pb-10 bg-white z-50 overflow-y-auto xl:hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-9 right-7 w-4 h-4"
          aria-label="Close menu"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
        <MainNav className="mx-auto" onClose={onClose} />
        <div>
          <Button variant="primary" className="w-full mb-2 uppercase font-bold">
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
