export const handleApiRequest = async fetchPromise => {
  try {
    const response = await fetchPromise;

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error:
          errorData.message ||
          `Operation failed with status ${response.status}`,
      };
    }

    const data = await response.json();

    return { success: true, data };
  } catch (err) {
    console.error('API request error:', err.message);
    return {
      success: false,
      error: 'Unable to connect to the server. Please try again in a moment.',
    };
  }
};
