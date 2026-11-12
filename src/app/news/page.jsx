import { getNews } from '@/actions/getNews';
import { DisplayError } from '@/components/DisplayError';
import NewsCard from '@/components/News/NewsCard';
import SearchField from '@/components/SearchField';
import Title from '@/components/Title';

export default async function NewsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams?.search || '';

  const result = await getNews(searchQuery);

  return (
    <section className="pt-8.5">
      <Title>News</Title>
      <SearchField />
      {!result.success ? (
        <DisplayError>{result.error}</DisplayError>
      ) : !result.data.results?.length ? (
        <DisplayError>Nothing found for your search.</DisplayError>
      ) : (
        <div className="flex flex-col gap-6 w-full mt-6">
          {result.data.results.map((newsItem, index) => (
            <NewsCard key={newsItem._id} newsItem={newsItem} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
