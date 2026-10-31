import loginDog from '@images/login/login-dog.webp';
import registerCat from '@images/register/register-cat.webp';

export const authConfig = {
  login: {
    src: loginDog,
    alt: 'Cute dog, a Pembroke Welsh Corgi',
    title: 'log in',
    welcomeText:
      'Welcome! Please enter your credentials to login to the platform:',
    promptText: 'Don`t have an account?',
    className: 'absolute -top-17 left-4 object-cover scale-68',
  },
  register: {
    src: registerCat,
    alt: 'Cute cat, a fluffy pet',
    title: 'Registration',
    welcomeText: 'Thank you for your interest in our platform.',
    promptText: 'Already have an account?',
  },
};
