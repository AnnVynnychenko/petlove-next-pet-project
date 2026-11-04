'use client';

import { useToggle } from '@/hooks/useToggle';
import EyeIconBtn from '@/components/Auth/EyeIconBtn';
import Icon from '@/components/Icon';

export default function Input({
  register,
  name = '',
  error = null,
  password = false,
  type = 'text',
  isSecurePassword = false,
  className = '',
  ...props
}) {
  const { isOpen: showPassword, toggle: togglePasswordVisibility } =
    useToggle(false);

  const inputType = password
    ? showPassword && password
      ? 'text'
      : 'password'
    : type;

  const paddingRightClass =
    (error && password) || isSecurePassword
      ? 'pr-15'
      : error || password
        ? 'pr-9'
        : 'pr-3';

  const borderClasses = error
    ? 'border-rejected hover:border-rejected focus-visible:border-rejected'
    : isSecurePassword
      ? 'border-approve hover:border-approve focus-visible:border-approve'
      : 'border-textMain/15 hover:border-accent focus-visible:border-accent';

  const iconErrorPosition =
    password && error ? 'right-9.5' : error && 'right-4';

  const errorId = `${name}-error`;
  const secureId = `${name}-secure-status`;
  const describedBy = error ? errorId : isSecurePassword ? secureId : undefined;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <input
          {...register(name)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`w-full py-3 pl-3 ${paddingRightClass} text-textMain text-sm tracking-tight-custom leading-[1.28] placeholder:text-textMain/50 border rounded-30 ${borderClasses}`}
          type={inputType}
          {...props}
        />
        {password && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <EyeIconBtn
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
        )}
        {isSecurePassword && (
          <div className="absolute size-4.5 right-9.5 top-1/2 -translate-y-1/2">
            <Icon name="check" className="size-4.5 text-approve" />
          </div>
        )}
        {error && (
          <div
            className={`absolute size-[11px] ${iconErrorPosition} top-1/2 -translate-y-1/2`}
          >
            <Icon name="close" className="size-[11px] text-rejected" />
          </div>
        )}
      </div>
      {isSecurePassword && (
        <p
          id={secureId}
          aria-live="polite"
          className="ml-3 mt-[2px] text-[10px] text-approve tracking-tight-custom leading-[1.2]"
        >
          Password is secure
        </p>
      )}
      {error && (
        <p
          id={`${name}-error`}
          className="ml-3 mt-[2px] text-[10px] text-rejected tracking-tight-custom leading-[1.2]"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
