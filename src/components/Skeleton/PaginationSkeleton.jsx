import { clampBuilder } from '@/helpers/clampBuilder';

const gapStyles = clampBuilder(4, 10);
const SKELETON_ITEMS_COUNT = 7;

export default function PaginationSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{ gap: gapStyles }}
      className="flex items-center justify-center w-full mt-11 animate-pulse"
    >
      {Array.from({ length: SKELETON_ITEMS_COUNT }).map((_, index) => (
        <div
          key={index}
          className="size-10 border bg-textMain/15 border-textMain/20 rounded-full shrink-0"
        ></div>
      ))}
    </div>
  );
}
