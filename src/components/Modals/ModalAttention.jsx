import Icon from '@/components/Icon';
import ModalContainer from '@/components/Modals/Containers/ModalContainer';
import { ATTENTION_MODAL } from '@/constants/modalConfig';
import ButtonLink from '@/components/Buttons/ButtonLink';
import QuickModalContainer from '@/components/Modals/Containers/QuickModalContainer';
import ModalBackdrop from '@/components/Modals/Containers/ModalBackdrop';

export default function ModalAttention({ onClose }) {
  const { ariaLabel, title, text, loginBtn, registrationBtn } = ATTENTION_MODAL;
  return (
    <ModalBackdrop onClose={onClose}>
      <ModalContainer onClose={onClose} ariaLabel={ariaLabel}>
        <QuickModalContainer
          icon={<Icon name="dog" className="size-11" />}
          title={title}
          text={text}
        >
          <div className="flex gap-2 mt-6">
            <ButtonLink href="/login" variant="primary" className="flex-1">
              {loginBtn}
            </ButtonLink>
            <ButtonLink href="/register" variant="secondary" className="flex-1">
              {registrationBtn}
            </ButtonLink>
          </div>
        </QuickModalContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
}
