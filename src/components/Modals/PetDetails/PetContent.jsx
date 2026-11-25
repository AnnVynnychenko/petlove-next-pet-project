import Image from 'next/image';

export default function PetContent({ petDetails }) {
  const { name, imgURL, title } = petDetails;
  return (
    <>
      <div className="relative mx-auto size-30 rounded-full overflow-hidden bg-textMain/10">
        <Image
          src={imgURL}
          alt={title ? title : "Pet's photo"}
          fill
          size="(max-width: 640px) 100vw, 100vw"
          priority={true}
          className="object-cover"
        />
      </div>
    </>
  );
}
