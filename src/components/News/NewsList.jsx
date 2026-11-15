import { getNews } from '@/actions/getNews';
import { DisplayError } from '@/components/DisplayError';
import NewsCard from '@/components/News/NewsCard';
import Pagination from '@/components/Pagination';

export default async function NewsList({
  searchQuery,
  currentPage,
  perPage,
  searchParams,
}) {
  const result = await getNews(searchQuery, currentPage, perPage);

  if (!result.success) {
    return <DisplayError>{result.error}</DisplayError>;
  }

  if (!result.data.results?.length) {
    return <DisplayError>Nothing found for your search.</DisplayError>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 w-full mt-6">
        {result.data.results.map((newsItem, index) => (
          <NewsCard key={newsItem._id} newsItem={newsItem} index={index} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={result.data?.totalPages}
        searchParams={searchParams}
      />
    </>
  );
}
