import Link from 'next/link';
import defaultNewsImg from '@images/news/default-news-img.webp';
import CardImgBg from '@/components/CardImgBg';
import { formatDate } from '@/helpers/formatDate';

export default function NewsCard({ newsItem, index }) {
  const { imgUrl, title, text, date, url } = newsItem;
  const formattedDate = formatDate(date);

  const src = imgUrl ? imgUrl : defaultNewsImg;
  const alt = title || 'News image';

  return (
    <article className="flex flex-col h-[379px] w-full gap-5 overflow-hidden">
      <CardImgBg
        src={src}
        alt={alt}
        index={index}
        className="h-[190px] shrink-0"
      />
      <h2 className="font-bold leading-[1.25] tracking-tight-custom line-clamp-1 break-words shrink-0">
        {title}
      </h2>
      <p className="leading-tight-custom tracking-tight-soft line-clamp-3 break-words">
        {text}
      </p>
      <div className="mt-auto flex justify-between items-center gap-3 text-sm tracking-tight-soft leading-tight-custom shrink-0">
        <time dateTime={date} className="text-textMain/50 shrink-0">
          {formattedDate}
        </time>
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-accent underline decoration-transparent underline-offset-4
               transition-all duration-[var(--duration-custom)] ease-custom
               hover:decoration-accent focus-visible:decoration-accent outline-none`}
          >
            Read more
          </Link>
        )}
      </div>
    </article>
  );
}
