import { twMerge } from 'tailwind-merge';

export default function Button({
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const baseStyles = '';

  const variants = {};

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
