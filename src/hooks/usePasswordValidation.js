'use client';

import { isPasswordSecure } from '@/helpers/checkSecurityPassword';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

export const usePasswordValidation = (control, trigger) => {
  const passwordValue =
    useWatch({
      control,
      name: 'password',
    }) || '';

  const isSecure = isPasswordSecure(passwordValue);

  useEffect(() => {
    if (isSecure) {
      trigger('password');
    }
  }, [trigger, isSecure]);

  return { isSecure };
};
