export const REGISTRATION_FIELDS = [
  {
    name: 'name',
    placeholder: 'Name',
    autoComplete: 'name',
    type: 'text',
    isPassword: false,
  },
  {
    name: 'email',
    placeholder: 'Email',
    autoComplete: 'email',
    type: 'email',
    isPassword: false,
  },
  {
    name: 'password',
    placeholder: 'Password',
    autoComplete: 'new-password',
    type: 'password',
    isPassword: true,
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm password',
    autoComplete: 'new-password',
    type: 'password',
    isPassword: true,
  },
];

export const LOGIN_FIELDS = [
  {
    name: 'email',
    placeholder: 'Email',
    autoComplete: 'email',
    type: 'email',
    isPassword: false,
  },
  {
    name: 'password',
    placeholder: 'Password',
    autoComplete: 'current-password',
    type: 'password',
    isPassword: true,
  },
];
