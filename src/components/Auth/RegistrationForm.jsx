'use client';

import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Auth/Input';
import ButtonLink from '@/components/ButtonLink';
import { registerUserAction } from '@/actions/auth';
import { registrationYupSchema } from '@/yup/registrationYupSchema';
import { isPasswordSecure } from '@/helpers/checkSecurityPassword';
import { buildFormData } from '@/helpers/buildFormData';
import { REGISTRATION_FIELDS } from '@/constants/authFields';

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

  const isSecure = isPasswordSecure(passwordValue);

  async function submitData(data) {
    try {
      const formData = buildFormData({
        name: data.name,
        email: data.email,
        password: data.password,
      });
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
            isPassword={isPassword}
            isSecurePassword={name === 'password' ? isSecure : undefined}
            error={errors[name]}
          />
        );
      })}

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
