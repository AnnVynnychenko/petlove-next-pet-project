'use client';

import { useForm } from 'react-hook-form';
import Input from '@/components/Auth/Input';
import ButtonLink from '@/components/ButtonLink';
import { useToggle } from '@/hooks/useToggle';
import EyeIconBtn from '@/components/Auth/EyeIconBtn';

export default function RegistrationForm() {
  const { isOpen: showPassword, toggle: togglePasswordVisibility } =
    useToggle(false);
  const { isOpen: showConfirmPassword, toggle: toggleConfirmPassword } =
    useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  function submitData() {}

  return (
    <form
      className="flex flex-col w-full gap-2.5 mt-5"
      onSubmit={handleSubmit(submitData)}
    >
      <Input
        register={register}
        name="name"
        placeholder="Name"
        autoComplete="name"
        error={errors.name}
      />
      <Input
        register={register}
        name="email"
        placeholder="Email"
        autoComplete="email"
        error={errors.email}
      />
      <div className="relative">
        <Input
          register={register}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          autoComplete="new-password"
          error={errors.password}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <EyeIconBtn
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </div>
      </div>
      <div className="relative">
        <Input
          register={register}
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm password"
          autoComplete="new-password"
          error={errors.confirmPassword}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <EyeIconBtn
            showPassword={showConfirmPassword}
            togglePasswordVisibility={toggleConfirmPassword}
          />
        </div>
      </div>
      <ButtonLink
        type="submit"
        variant="primary"
        className="mt-3.5 uppercase font-bold"
      >
        registration
      </ButtonLink>
    </form>
  );
}
