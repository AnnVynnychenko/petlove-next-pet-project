export const updateSearchParams = (router, searchParams, updates) => {
  const params = new URLSearchParams(searchParams);
  Object.entries(updates).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });
  router.push(`?${params.toString()}`);
};
