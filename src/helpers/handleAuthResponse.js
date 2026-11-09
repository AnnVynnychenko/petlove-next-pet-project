import toast from 'react-hot-toast';

export const handleAuthResponse = (
  result,
  router,
  reset,
  setAuth,
  { successMessage = 'Success!', redirectTo = '/profile' }
) => {
  if (result.success && result.data?.token) {
    const { token, ...userData } = result.data;
    setAuth(userData, token);
    toast.success(successMessage);
    router.push(redirectTo);
    reset();
  } else {
    toast.error(result.error || 'Something went wrong');
  }
};
