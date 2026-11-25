import { RingLoader } from 'react-spinners';
import ModalBackdrop from '@/components/Modals/Containers/ModalBackdrop';
import ModalContainer from '@/components/Modals/Containers/ModalContainer';
import PetContent from '@/components/Modals/PetDetails/PetContent';

export default function ModalPetDetails({
  onClose,
  petDetails = null,
  isLoading = false,
}) {
  const { name } = petDetails || {};

  return (
    <ModalBackdrop onClose={onClose}>
      <ModalContainer
        onClose={onClose}
        ariaLabel={name ? `Pet details for ${name}` : 'Pet details modal'}
      >
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[160px] w-full">
            <RingLoader color="var(--color-accent)" size={100} />
          </div>
        ) : (
          petDetails && <PetContent petDetails={petDetails} />
        )}
      </ModalContainer>
    </ModalBackdrop>
  );
}
