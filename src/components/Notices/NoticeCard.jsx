import Icon from '@/components/Icon';
import defaultNoticeImg from '@images/notices/default-notice-img.webp';
import ButtonLink from '@/components/ButtonLink';
import CardImgBg from '@/components/CardImgBg';

export default function NoticeCard({ noticeItem, index }) {
  const {
    species,
    category,
    price,
    title,
    name,
    birthday,
    sex,
    imgURL,
    comment,
    popularity,
  } = noticeItem;

  const src = imgURL ? imgURL : defaultNoticeImg;
  const alt = title || "Pet's photo";
  return (
    <div className="w-full p-6 bg-white rounded-[16px]">
      <CardImgBg src={src} alt={alt} index={index} className="h-44.5" />
      <div>
        <h2>{title}</h2>
        <div>
          <Icon name="star" className="size-4" />
          <span>{popularity}</span>
        </div>
      </div>
      <ul>
        <li>
          <span>Name</span>
          <span>{name}</span>
        </li>
        <li>
          <span>Birthday</span>
          <span>{birthday}</span>
        </li>
        <li>
          <span>Sex</span>
          <span>{sex}</span>
        </li>
        <li>
          <span>Species</span>
          <span>{species}</span>
        </li>
        <li>
          <span>Category</span>
          <span>{category}</span>
        </li>
      </ul>
      <p>{comment}</p>
      <data value={price}>{price}</data>
      <div>
        <ButtonLink>Learn more</ButtonLink>
        <button type="button" aria-label="Add to favorites">
          <Icon name="heart" className="size-4.5" />
        </button>
      </div>
    </div>
  );
}
