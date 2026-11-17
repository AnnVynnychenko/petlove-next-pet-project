import NewsList from '@/components/News/NewsList';
import SearchField from '@/components/SearchField';
import NewsListSkeleton from '@/components/Skeleton/NewsSkeleton/NewsListSkeleton';
import SearchFieldSkeleton from '@/components/Skeleton/SearchFieldSkeleton';
import Title from '@/components/Title';
import { Suspense } from 'react';

export default async function NewsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams?.search || '';

  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const perPage = 6;

  return (
    <section className="pt-8.5 pb-20">
      <Title>News</Title>

      <Suspense fallback={<SearchFieldSkeleton />}>
        <SearchField />
      </Suspense>

      <Suspense fallback={<NewsListSkeleton />}>
        <NewsList
          searchQuery={searchQuery}
          currentPage={currentPage}
          perPage={perPage}
          searchParams={resolvedSearchParams}
        />
      </Suspense>
    </section>
  );
}
