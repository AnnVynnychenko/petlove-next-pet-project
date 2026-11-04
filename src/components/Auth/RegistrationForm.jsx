'use client';

import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Auth/Input';
import ButtonLink from '@/components/ButtonLink';
import { registerUserAction } from '@/app/actions/auth';
import { registrationYupSchema } from '@/yup/registrationYupSchema';

export default function RegistrationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
    resolver: yupResolver(registrationYupSchema),
    mode: 'onChange',
  });

  const passwordValue =
    useWatch({
      control,
      name: 'password',
    }) || '';

  const hasMinLength = passwordValue.length >= 7;
  const hasUpperCase = /[A-Z]/.test(passwordValue);
  const hasLowerCase = /[a-z]/.test(passwordValue);
  const hasNumber = /\d/.test(passwordValue);

  const isSecure = hasMinLength && hasUpperCase && hasLowerCase && hasNumber;

  async function submitData(data) {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);

      const result = await registerUserAction(formData);

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
        type="email"
        placeholder="Email"
        autoComplete="email"
        error={errors.email}
      />
      <Input
        register={register}
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        error={errors.password}
        password
        isSecurePassword={isSecure}
      />
      <Input
        register={register}
        name="confirmPassword"
        placeholder="Confirm password"
        autoComplete="new-password"
        error={errors.confirmPassword}
        password
      />
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
