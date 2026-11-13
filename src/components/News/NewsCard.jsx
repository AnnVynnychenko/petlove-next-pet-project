import { formatDate } from '@/helpers/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ newsItem, index }) {
  const { imgUrl, title, text, date, url } = newsItem;
  const formattedDate = formatDate(date);

  const isFirstTwo = index === 0 || index === 1;
  return (
    <article>
      <div className="relative w-full h-[190px] rounded-[15px] overflow-hidden">
        <Image
          src={imgUrl}
          alt={title || 'News image'}
          fill
          sizes="(max-width: 640px) 100vw"
          priority={isFirstTwo}
          className="object-cover"
        />
      </div>
      <h2 className="mt-5 font-bold leading-[1.25] tracking-tight-custom">
        {title}
      </h2>
      <p className="mt-5 leading-tight-custom tracking-[-0.02em]">{text}</p>
      <div className="flex justify-between items-center mt-5 text-sm tracking-[-0.02em] leading-tight-custom">
        <div className="text-textMain/50">{formattedDate}</div>
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-transparent underline-offset-4 transition-all duration-[var(--duration-custom)] ease-custom hover:decoration-accent focus-visible:decoration-accent outline-none"
          >
            Read more
          </Link>
        )}
      </div>
    </article>
  );
}
