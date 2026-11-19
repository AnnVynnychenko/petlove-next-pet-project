import NewsList from '@/components/News/NewsList';
import SearchField from '@/components/SearchField';
import NewsListSkeleton from '@/components/Skeleton/NewsSkeleton/NewsListSkeleton';
import SearchFieldSkeleton from '@/components/Skeleton/SearchFieldSkeleton';
import Title from '@/components/Title';
import { parseSearchParams } from '@/helpers/parseSearchParams';
import { Suspense } from 'react';

export default async function NewsPage({ searchParams }) {
  const { searchQuery, currentPage, perPage, resolvedParams } =
    await parseSearchParams(searchParams);

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
          searchParams={resolvedParams}
        />
      </Suspense>
    </section>
  );
}
