import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ newsItem, index }) {
  const { imgUrl, title, text, date, url } = newsItem;

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
      <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <div>{date}</div>
        {url && (
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </Link>
        )}
      </div>
    </article>
  );
}
