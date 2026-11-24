export default function NewsCardSkeleton() {
  return (
    <div className="w-full space-y-5">
      <div className="w-full h-[190px] sm:h-[226px] rounded-2xl bg-textMain/15 animate-pulse" />
      <div className="h-6 w-3/4 rounded-md bg-textMain/15 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded-md bg-textMain/15 animate-pulse" />
        <div className="h-4 w-5/6 rounded-md bg-textMain/15 animate-pulse" />
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="h-4 w-24 rounded-md bg-textMain/15 animate-pulse" />
        <div className="h-4 w-20 rounded-md bg-textMain/15 animate-pulse" />
      </div>
    </div>
  );
}
