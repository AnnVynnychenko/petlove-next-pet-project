import Image from 'next/image';
import Icon from '@/components/Icon';
import { authConfig } from '@/constants/authConfig';

const positionStyles = {
  login: '-top-17 left-4 scale-68',
  register: '-top-1 right-17 scale-90',
};

export default function PetBlock({ type = 'login', ...props }) {
  const { src, alt, className } = authConfig[type] || authConfig.login;

  const imgPositionClass = positionStyles[type] || positionStyles.login;
  console.log('🚀 ~ imgPositionClass:', imgPositionClass);
  return (
    <div
      className="relative w-full h-70 bg-accent rounded-[30px] overflow-hidden"
      {...props}
    >
      <Icon
        name="rectangle"
        className="absolute top-10 -left-3 h-full w-auto scale-126 origin-top-left"
      />

      <Image
        src={src}
        alt={alt}
        priority
        className={`absolute object-cover ${imgPositionClass}`}
      />
    </div>
  );
}
