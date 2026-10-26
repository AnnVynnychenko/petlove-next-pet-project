import { twMerge } from 'tailwind-merge';

export default function Button({
  type = 'button',
  variant = 'accent',
  children,
  className = '',
  ...props
}) {
  const baseStyles =
    'flex items-center justify-center p-3 rounded-[30px] text-[14px] leading-[1.2] tracking-[-0.03em] transition-colors duration-custom ease-custom';

  const variants = {
    primary:
      'text-white bg-accent border border-accent hover:bg-lightAccent hover:text-accent hover:border-lightAccent focus-visible:bg-lightAccent focus-visible:text-accent',
    secondary:
      'text-accent bg-lightAccent border border-lightAccent hover:bg-hoverBtn focus-visible:bg-hoverBtn',
  };

  return (
    <button
      type={type}
      className={twMerge(
        `${baseStyles} ${variants[variant] || ''} ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
}
