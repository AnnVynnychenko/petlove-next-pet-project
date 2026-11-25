'use client';

import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import Icon from '@/components/Icon';
import defaultNoticeImg from '@images/notices/default-notice-img.webp';
import ButtonLink from '@/components/Buttons/ButtonLink';
import CardImgBg from '@/components/CardImgBg';
import PetInfo from '@/components/PetInfo';
import { formatPrice } from '@/helpers/formatPrice';
import { useAuthStore } from '@/store/useAuthStore';
import { useToggle } from '@/hooks/useToggle';
import ModalAttention from '@/components/Modals/ModalAttention';
import ModalPetDetails from '@/components/Modals/PetDetails/ModalPetDetails';
import { formatDateDot } from '@/helpers/formatDate';
import { getNoticeDetails } from '@/actions/notices/getNoticeDetails';

export default function NoticeCard({ noticeItem, index }) {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const token = useAuthStore(state => state.token);

  const { isOpen: isModalPetDetailsOpen, toggle: toggleModalPetDetails } =
    useToggle(false);
  const { isOpen: isPetFavorite, toggle: togglePetFavorite } = useToggle(false);
  const { isOpen: isModalAttentionOpen, toggle: toggleModalAttention } =
    useToggle(false);

  const [petDetails, setPetDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    _id,
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

  const formattedBirthday = formatDateDot(birthday);

  const detailedInfo = {
    name,
    formattedBirthday,
    sex,
    species,
    category,
  };

  const src = imgURL ? imgURL : defaultNoticeImg;
  const alt = title || "Pet's photo";

  const formattedPrice = formatPrice(price);

  const petFavoriteStyles = isPetFavorite ? 'bg-hoverBtn' : 'bg-lightAccent';

  async function handleLearnMoreClick() {
    if (!isLoggedIn) {
      toggleModalAttention(true);
      return;
    }

    setIsLoading(true);
    toggleModalPetDetails(true);

    const response = await getNoticeDetails(_id, token);

    if (response.success) {
      setPetDetails(response.data);
    } else {
      toggleModalPetDetails(false);
      toast.error(response.error || 'Failed to load pet details');
    }

    setIsLoading(false);
  }

  return (
    <>
      <article className="flex flex-col w-full h-[454px] p-6 bg-white rounded-2xl text-textSecondary overflow-hidden">
        <CardImgBg
          src={src}
          alt={alt}
          index={index}
          className="h-44.5 shrink-0"
        />
        <div className="flex justify-between gap-2 mt-6 shrink-0">
          <h2 className="font-bold leading-[1.25] min-w-0 flex-1 line-clamp-1 break-words">
            {title}
          </h2>
          <div className="flex items-center gap-1 shrink-0">
            <Icon name="star" className="size-4 text-gold shrink-0" />
            <span className="text-sm leading-tight-custom">{popularity}</span>
          </div>
        </div>
        <PetInfo detailedInfo={detailedInfo} className="shrink-0" />
        {comment && (
          <p className="mt-4 text-sm leading-tight-custom tracking-tight-soft line-clamp-2 break-words">
            {comment}
          </p>
        )}
        <div className="mt-auto pt-2 shrink-0">
          {formattedPrice && (
            <data
              value={formattedPrice}
              className="mt-4 font-bold leading-[1.25]"
            >
              {formattedPrice}
            </data>
          )}
          <div className="flex w-full gap-2.5 mt-3">
            <ButtonLink
              type="button"
              variant="primary"
              disabled={isLoading}
              className="h-11.5 flex-1 py-3.5"
              onClick={handleLearnMoreClick}
            >
              {isLoading ? (
                <PulseLoader color="var(--color-white)" size={8} />
              ) : (
                'Learn more'
              )}
            </ButtonLink>
            <button
              type="button"
              aria-label={
                isPetFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
              aria-pressed={isPetFavorite ? 'true' : 'false'}
              className={twMerge(
                'flex items-center justify-center size-11.5 rounded-full hover:bg-hoverBtn focus-visible:bg-hoverBtn shrink-0',
                petFavoriteStyles
              )}
            >
              <Icon
                name="heart"
                className="size-4.5 text-transparent stroke-[1.5] stroke-accent"
              />
            </button>
          </div>
        </div>
      </article>
      {isModalAttentionOpen && (
        <ModalAttention onClose={toggleModalAttention} />
      )}
      {isModalPetDetailsOpen && (
        <ModalPetDetails
          onClose={toggleModalPetDetails}
          petDetails={petDetails}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
