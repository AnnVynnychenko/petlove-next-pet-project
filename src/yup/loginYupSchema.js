import { object } from 'yup';
import { emailField, passwordField } from './baseAuthSchema';

export const loginYupSchema = object().shape({
  email: emailField,
  password: passwordField,
});
