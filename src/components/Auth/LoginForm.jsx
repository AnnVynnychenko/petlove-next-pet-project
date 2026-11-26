'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import Input from '@/components/Input';
import ButtonLink from '@/components/Buttons/ButtonLink';
import { LOGIN_FIELDS } from '@/constants/authFields';
import { buildFormData } from '@/helpers/buildFormData';
import { loginUserAction } from '@/actions/auth';
import { loginYupSchema } from '@/yup/loginYupSchema';
import { usePasswordValidation } from '@/hooks/usePasswordValidation';
import { handleAuthResponse } from '@/helpers/handleAuthResponse';
import { useAuthStore } from '@/store/useAuthStore';

export default function LoginForm() {
  const router = useRouter();
  const setAuth = useAuthStore(state => state.setAuth);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    trigger,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginYupSchema),
    mode: 'onBlur',
  });

  const isBusy = isSubmitting || isRedirecting;

  const { isSecure } = usePasswordValidation(control, trigger);

  async function submitData(data) {
    try {
      const formData = buildFormData({
        email: data.email,
        password: data.password,
      });
      const result = await loginUserAction(formData);

      handleAuthResponse(result, router, setAuth, {
        successMessage: 'Login successful!',
        redirectTo: '/profile',
        onRedirectStart: () => setIsRedirecting(true),
      });
    } catch (err) {
      setIsRedirecting(false);
      toast.error(err.message || 'Network error, try again later');
      console.error(err.message);
    }
  }

  return (
    <form
      className="flex flex-col w-full gap-2.5 mt-5"
      onSubmit={handleSubmit(submitData)}
    >
      {LOGIN_FIELDS.map(field => {
        const {
          name = '',
          placeholder = '',
          autoComplete = '',
          type = 'text',
          isPassword = false,
        } = field;
        return (
          <Input
            key={name}
            register={register}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            type={type}
            disabled={isBusy}
            isPassword={isPassword}
            isSecurePassword={name === 'password' ? isSecure : undefined}
            error={errors[name]}
          />
        );
      })}

      <ButtonLink
        type="submit"
        variant="primary"
        className="h-10.5 mt-7.5 uppercase font-bold"
        disabled={isBusy}
      >
        {isBusy ? (
          <PulseLoader color="var(--color-white)" size={8} />
        ) : (
          'log in'
        )}
      </ButtonLink>
    </form>
  );
}
