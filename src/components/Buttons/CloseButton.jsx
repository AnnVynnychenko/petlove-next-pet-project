import Icon from '@/components/Icon';
import { twMerge } from 'tailwind-merge';

export default function CloseButton({
  onClose,
  classNameBtn = '',
  classNameIcon = '',
  ariaLabel = '',
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={twMerge(
        'absolute top-6.5 right-6.5 size-4 outline-accent',
        classNameBtn
      )}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon name="close" className={twMerge('size-3', classNameIcon)} />
    </button>
  );
}
