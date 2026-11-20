'use client';

import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/Icon';
import PaginationBtn from '@/components/Pagination/PaginationBtn';
import { clampBuilder } from '@/helpers/clampBuilder';
import { getPaginationPages } from '@/helpers/pagination';

const gapStyles = clampBuilder(4, 10);

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

  return (
    <nav
      role="navigation"
      aria-label="Pagination navigation"
      style={{ gap: gapStyles }}
      className="flex items-center justify-center w-full mt-11 text-sm font-bold leading-none tracking-tight-custom"
    >
      <PaginationBtn
        onClick={() => goToPage(1)}
        aria-label="Go to first page"
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
      {getPaginationPages(totalPages, currentPage).map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`break-${index}`}
              aria-hidden="true"
              className="flex items-center justify-center shrink-0 size-10 border border-textMain/20 rounded-full pointer-events-none cursor-not-allowed"
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
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </PaginationBtn>
        );
      })}
      <PaginationBtn
        onClick={() => goToPage(currentPage + 1)}
        pagePosition={isLastPage}
        aria-label="Go to next page"
      >
        <div className="flex items-center justify-center">
          <Icon name="arrow-small-left" className="size-5" />
        </div>
      </PaginationBtn>
      <PaginationBtn
        onClick={() => goToPage(totalPages)}
        pagePosition={isLastPage}
        aria-label="Go to last page"
      >
        <div className="flex items-center justify-center -space-x-3">
          <Icon name="arrow-small-left" className="size-5" />
          <Icon name="arrow-small-left" className="size-5" />
        </div>
      </PaginationBtn>
    </nav>
  );
}
