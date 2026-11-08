import { string, object, ref } from 'yup';

export const trimString = string().transform(value =>
  typeof value === 'string' ? value.trim() : value
);

export const emailRegexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const securePasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;

export const emailField = trimString
  .required('Email is required')
  .matches(emailRegexp, 'Invalid email format (example: user@gmail.com)');

export const passwordField = trimString
  .required('Password is required')
  .min(7, 'Password must be at least 7 characters')
  .matches(
    securePasswordRegexp,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  );
