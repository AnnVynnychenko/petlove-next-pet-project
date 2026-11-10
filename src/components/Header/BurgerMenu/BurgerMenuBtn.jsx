'use client';

import Icon from '@/components/Icon';
import { twMerge } from 'tailwind-merge';

export default function BurgerMenuBtn({
  isMenuOpen = false,
  onClick,
  burgerClasses = 'text-textMain hover:text-accent focus-visible:text-accent',
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      className={twMerge(
        'transition-colors duration-custom ease-custom xl:hidden',
        burgerClasses
      )}
      {...props}
    >
      <Icon name="burger-menu" className="size-8 xl:hidden" />
    </button>
  );
}
