'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import Input from '@/components/Input';
import ButtonLink from '@/components/ButtonLink';
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    trigger,
    reset,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginYupSchema),
    mode: 'onBlur',
  });

  const { isSecure } = usePasswordValidation(control, trigger);

  async function submitData(data) {
    try {
      const formData = buildFormData({
        email: data.email,
        password: data.password,
      });
      const result = await loginUserAction(formData);

      handleAuthResponse(result, router, reset, setAuth, {
        successMessage: 'Login successful!',
        redirectTo: '/profile',
      });
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
            isPassword={isPassword}
            isSecurePassword={name === 'password' ? isSecure : undefined}
            error={errors[name]}
          />
        );
      })}

      <ButtonLink
        type="submit"
        variant="primary"
        className="mt-7.5 uppercase font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <PulseLoader color="var(--color-white)" size={8} />
        ) : (
          'log in'
        )}
      </ButtonLink>
    </form>
  );
}
