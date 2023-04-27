import { useState } from 'react';
import Modal from 'react-modal';
import type { Props } from '@/types/utils';

export const ImageDialog = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => setIsOpen(prev => !prev);

  return (
    <div>
      <div onClick={handleShowDialog}>{children}</div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleShowDialog}
        contentLabel="Example Modal"
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
          onClick={handleShowDialog}
        >
          {children}
        </div>
      </Modal>
    </div>
  );
};
