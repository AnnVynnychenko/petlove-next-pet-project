import Icon from '@/components/Icon';

export default function BurgerMenuIcon({
  burgerClasses = 'text-textMain hover:text-accent focus-visible:text-accent',
  ...props
}) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className={`${burgerClasses} transition-colors duration-custom ease-custom`}
      {...props}
    >
      <Icon name="burger-menu" className="w-8 h-8" />
    </button>
  );
}
