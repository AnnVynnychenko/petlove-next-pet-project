import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function CardImgBg({ src, alt = '', index, className = '' }) {
  const isFirstTwo = index <= 1;

  return (
    <div
      className={twMerge(
        'relative w-full rounded-[16px] overflow-hidden bg-textMain/10',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 100vw"
        priority={isFirstTwo}
        className="object-cover object-[50%_25%]"
      />
    </div>
  );
}
