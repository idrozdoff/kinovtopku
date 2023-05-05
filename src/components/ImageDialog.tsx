import { useContext } from 'react';
import Modal from 'react-modal';
import {
  ImageDialogContext,
  ImageDialogContextType,
} from '@/context/ContextWrapper';
import Image from 'next/image';

export default function ImageDialog() {
  const { imageModal, setImageModal } = useContext(
    ImageDialogContext
  ) as ImageDialogContextType;

  const { isOpen, link } = imageModal;

  const toggleDialog = () =>
    setImageModal(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleDialog}
        style={{
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            display: 'flex',
            top: '25%',
            inset: '',
          },
        }}
      >
        <div
          className="modal-image-wrapper mx-auto"
          onClick={toggleDialog}
        >
          <Image
            src={link}
            alt="modalImage"
            className="flex mx-auto px-[12px] min-w-[250px] min-h-[175px] cursor-pointer"
            width={250}
            height={175}
            placeholder="blur"
            blurDataURL="/loadingImg.png"
          />
        </div>
      </Modal>
    </div>
  );
}
