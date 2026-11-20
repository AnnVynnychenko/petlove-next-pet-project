import { getNotices } from '@/actions/notices/getNotices';
import { DisplayError } from '@/components/DisplayError';
import Pagination from '@/components/Pagination/Pagination';
import NoticeCard from '@/components/Notices/NoticeCard';

export default async function NoticesList({
  searchQuery,
  currentPage,
  perPage,
  searchParams,
  filters,
}) {
  const result = await getNotices(searchQuery, filters, currentPage, perPage);

  if (!result.success) {
    return <DisplayError>{result.error}</DisplayError>;
  }

  if (!result.data?.results?.length) {
    return <DisplayError>Nothing found for your search.</DisplayError>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 w-full mt-8">
        {result.data.results.map((noticeItem, index) => (
          <NoticeCard
            key={noticeItem._id}
            noticeItem={noticeItem}
            index={index}
          />
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
