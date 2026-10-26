'use client';

import Icon from '@/components/Icon';

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
      className={`${burgerClasses} transition-colors duration-custom ease-custom xl:hidden`}
      {...props}
    >
      <Icon name="burger-menu" className="w-8 h-8 xl:hidden" />
    </button>
  );
}
