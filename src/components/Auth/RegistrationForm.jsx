'use client';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import Input from '@/components/Auth/Input';
import ButtonLink from '@/components/ButtonLink';
import { useToggle } from '@/hooks/useToggle';
import EyeIconBtn from '@/components/Auth/EyeIconBtn';
import { registerUserAction } from '@/app/actions/auth';

export default function RegistrationForm() {
  const { isOpen: showPassword, toggle: togglePasswordVisibility } =
    useToggle(false);
  const { isOpen: showConfirmPassword, toggle: toggleConfirmPassword } =
    useToggle(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  async function submitData(data) {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);

      const result = await registerUserAction(formData);
      console.log('🚀 ~ result:', result);

      if (result.success && result.data.token) {
        toast.success('Registration successful!');
        router.push('/profile');
        reset();
      } else {
        toast.error(result.error || 'Something went wrong');
      }
    } catch (err) {
      toast.error(err.message || 'Network error, try again later');
      console.error(err.message);
    }
  }

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
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <PulseLoader color="var(--color-white)" size={8} />
        ) : (
          'registration'
        )}
      </ButtonLink>
    </form>
  );
}
