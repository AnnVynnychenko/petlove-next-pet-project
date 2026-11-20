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
    <article className="w-full space-y-5">
      <CardImgBg src={src} alt={alt} index={index} className="h-[190px]" />
      <h2 className="font-bold leading-[1.25] tracking-tight-custom">
        {title}
      </h2>
      <p className="leading-tight-custom tracking-[-0.02em]">{text}</p>
      <div className="flex justify-between items-center text-sm tracking-[-0.02em] leading-tight-custom">
        <div className="text-textMain/50">{formattedDate}</div>
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
