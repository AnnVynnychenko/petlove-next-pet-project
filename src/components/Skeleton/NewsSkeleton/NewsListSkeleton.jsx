import NewsCardSkeleton from '@/components/Skeleton/NewsSkeleton/NewsCardSkeleton';

export default function NewsListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 w-full mt-6" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </div>
  );
}
