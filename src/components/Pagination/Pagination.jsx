'use client';

import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/Icon';
import PaginationBtn from '@/components/Pagination/PaginationBtn';
import { clampBuilder } from '@/helpers/clampBuilder';

export default function Pagination({
  currentPage,
  totalPages,
  searchParams = {},
}) {
  const router = useRouter();
  const pathname = usePathname();

  if (totalPages <= 1) return null;

  const goToPage = pageNumber => {
    if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage)
      return;

    const params = new URLSearchParams();

    if (searchParams.search) {
      params.set('search', searchParams.search);
    }

    if (pageNumber > 1) {
      params.set('page', pageNumber);
    } else {
      params.delete('page');
    }

    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPaginationPages = () => {
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

  const gapStyles = clampBuilder(4, 10);

  return (
    <div
      style={{ gap: gapStyles }}
      className="flex items-center justify-center w-full mt-11 text-sm font-bold leading-none tracking-tight-custom"
    >
      <PaginationBtn
        onClick={() => goToPage(1)}
        ariaLabel="Go to first page"
        pagePosition={isFirstPage}
      >
        <div className="flex items-center justify-center -space-x-3">
          <Icon name="arrow-small-left" className="size-5 rotate-180" />
          <Icon name="arrow-small-left" className="size-5 rotate-180" />
        </div>
      </PaginationBtn>
      <PaginationBtn
        onClick={() => goToPage(currentPage - 1)}
        aria-label="Go to previous page"
        pagePosition={isFirstPage}
      >
        <div className="flex items-center justify-center">
          <Icon name="arrow-small-left" className="size-5 rotate-180" />
        </div>
      </PaginationBtn>
      {getPaginationPages().map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`break-${index}`}
              className="flex items-center justify-center size-10 border border-textMain/20 rounded-full pointer-events-none cursor-not-allowed"
            >
              ...
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <PaginationBtn
            key={page}
            onClick={() => goToPage(page)}
            pageActive={isActive}
          >
            {page}
          </PaginationBtn>
        );
      })}
      <PaginationBtn
        onClick={() => goToPage(currentPage + 1)}
        pagePosition={isLastPage}
        ariaLabel="Go to next page"
      >
        <div className="flex items-center justify-center">
          <Icon name="arrow-small-left" className="size-5" />
        </div>
      </PaginationBtn>
      <PaginationBtn
        onClick={() => goToPage(totalPages)}
        pagePosition={isLastPage}
        ariaLabel="Go to last page"
      >
        <div className="flex items-center justify-center -space-x-3">
          <Icon name="arrow-small-left" className="size-5" />
          <Icon name="arrow-small-left" className="size-5" />
        </div>
      </PaginationBtn>
    </div>
  );
}
