import NoticesList from '@/components/Notices/NoticesList';
import SearchField from '@/components/SearchField';
import PaginationSkeleton from '@/components/Skeleton/PaginationSkeleton';
import SearchFieldSkeleton from '@/components/Skeleton/SearchFieldSkeleton';
import Title from '@/components/Title';
import { parseSearchParams } from '@/helpers/parseSearchParams';
import { Suspense } from 'react';

export default async function NoticesPage({ searchParams }) {
  const { searchQuery, currentPage, perPage, resolvedParams } =
    await parseSearchParams(searchParams);
  return (
    <section className="pt-8.5 pb-20">
      <Title>Find your favorite pet</Title>

      <Suspense fallback={<SearchFieldSkeleton />}>
        <SearchField />
      </Suspense>

      <Suspense fallback="">
        <NoticesList
          searchQuery={searchQuery}
          currentPage={currentPage}
          perPage={perPage}
          searchParams={resolvedParams}
        />
      </Suspense>
    </section>
  );
}
