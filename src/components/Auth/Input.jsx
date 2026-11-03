'use client';

import { useToggle } from '@/hooks/useToggle';
import EyeIconBtn from '@/components/Auth/EyeIconBtn';

export default function Input({
  register,
  name = '',
  error = '',
  password = false,
  ...props
}) {
  const { isOpen: showPassword, toggle: togglePasswordVisibility } =
    useToggle(false);

  return (
    <div>
      <div className="relative">
        <input
          {...register(name)}
          className="w-full py-3 pl-3 pr-9 text-textMain text-sm tracking-tight-custom leading-[1.28] placeholder:text-textMain/50 border border-textMain/15 rounded-30 hover:border-accent focus-visible:border-accent"
          type={showPassword ? 'text' : 'password'}
          {...props}
        />
        {password && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <EyeIconBtn
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
        )}
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
}
