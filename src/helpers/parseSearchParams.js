export const parseSearchParams = async searchParams => {
  const resolvedParams = await searchParams;

  const searchQuery = resolvedParams?.search || '';
  const currentPage = Number(resolvedParams?.page) || 1;
  const perPage = 6;

  return {
    searchQuery,
    currentPage,
    perPage,
    resolvedParams,
  };
};
