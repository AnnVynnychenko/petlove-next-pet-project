'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Input';
import ButtonLink from '@/components/Buttons/ButtonLink';
import { registerUserAction } from '@/actions/auth';
import { registrationYupSchema } from '@/yup/registrationYupSchema';
import { buildFormData } from '@/helpers/buildFormData';
import { REGISTRATION_FIELDS } from '@/constants/authFields';
import { usePasswordValidation } from '@/hooks/usePasswordValidation';
import { handleAuthResponse } from '@/helpers/handleAuthResponse';
import { useAuthStore } from '@/store/useAuthStore';

export default function RegistrationForm() {
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
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
    resolver: yupResolver(registrationYupSchema),
    mode: 'onBlur',
  });

  const { isSecure } = usePasswordValidation(control, trigger);

  const isBusy = isSubmitting || isRedirecting;

  async function submitData(data) {
    try {
      const formData = buildFormData({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      const result = await registerUserAction(formData);

      handleAuthResponse(result, router, setAuth, {
        successMessage: 'Registration successful!',
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
      {REGISTRATION_FIELDS.map(field => {
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
        className="h-10.5 mt-3.5 uppercase font-bold"
        disabled={isBusy}
      >
        {isBusy ? (
          <PulseLoader color="var(--color-white)" size={8} />
        ) : (
          'registration'
        )}
      </ButtonLink>
    </form>
  );
}
