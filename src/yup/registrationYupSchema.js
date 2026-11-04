import { string, object, ref } from 'yup';

const trimString = string().transform(value =>
  typeof value === 'string' ? value.trim() : value
);
const emailRegexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const securePasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;

export const registrationYupSchema = object().shape({
  name: trimString.required('Name is required'),
  email: trimString
    .required('Email is required')
    .matches(emailRegexp, 'Invalid email format (example: user@gmail.com)'),
  password: trimString
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .matches(
      securePasswordRegexp,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: trimString
    .required('Confirm password is required')
    .min(7, 'Confirm password must be at least 7 characters')
    .oneOf([ref('password')], 'Passwords must match'),
});
