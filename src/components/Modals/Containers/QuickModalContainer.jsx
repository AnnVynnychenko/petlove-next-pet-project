import { twMerge } from 'tailwind-merge';

export default function QuickModalContainer({
  icon = null,
  title = '',
  titleStyles = '',
  text = '',
  textStyles = '',
  children,
  ...props
}) {
  return (
    <div {...props}>
      {icon && (
        <div className="flex items-center justify-center mx-auto size-20 bg-lightAccent rounded-full">
          {icon}
        </div>
      )}
      {title && (
        <h2
          className={twMerge(
            'mt-5 text-center text-xl font-bold leading-none tracking-tight-custom text-accent',
            titleStyles
          )}
        >
          {title}
        </h2>
      )}
      {text && (
        <p
          className={twMerge(
            'mt-5 text-center text-sm text-textSecondary leading-tight-custom tracking-tight-soft',
            textStyles
          )}
        >
          {text}
        </p>
      )}
      {children}
    </div>
  );
}
