import toast from 'react-hot-toast';

export const handleAuthResponse = (
  result,
  router,
  setAuth,
  { successMessage = 'Success!', redirectTo = '/profile', onRedirectStart }
) => {
  if (result.success && result.data?.token) {
    const { token, ...userData } = result.data;
    onRedirectStart?.();
    setAuth(userData, token);
    toast.success(successMessage);
    router.push(redirectTo);
  } else {
    toast.error(result.error || 'Something went wrong');
  }
};
