export const getPaginationPages = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages <= 2) {
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
  } else if (currentPage <= 2) {
    pages.push(1, 2, '...');
  } else {
    pages.push(currentPage - 1, currentPage, '...');
  }
  return pages;
};
