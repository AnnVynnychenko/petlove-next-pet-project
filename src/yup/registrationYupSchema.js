import { object, ref } from 'yup';
import { emailField, passwordField, trimString } from './baseAuthSchema';

export const registrationYupSchema = object().shape({
  name: trimString.required('Name is required'),
  email: emailField,
  password: passwordField,
  confirmPassword: trimString
    .required('Confirm password is required')
    .min(7, 'Confirm password must be at least 7 characters')
    .oneOf([ref('password')], 'Passwords must match'),
});
