'use client';

import Icon from '../Icon';

export default function EyeIconBtn({
  showPassword = false,
  togglePasswordVisibility,
}) {
  return (
    <button
      type="button"
      className="size-4.5 text-accent"
      onClick={togglePasswordVisibility}
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? (
        <Icon name="eye-off" className="size-4.5" />
      ) : (
        <Icon name="eye" className="size-4.5" />
      )}
    </button>
  );
}
