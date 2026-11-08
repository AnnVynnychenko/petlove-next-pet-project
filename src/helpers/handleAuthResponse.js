import toast from 'react-hot-toast';

export const handleAuthResponse = (
  result,
  router,
  reset,
  { successMessage = 'Success!', redirectTo = '/profile' }
) => {
  if (result.success && result.data.token) {
    toast.success(successMessage);
    router.push(redirectTo);
    reset();
  } else {
    toast.error(result.error || 'Something went wrong');
  }
};
