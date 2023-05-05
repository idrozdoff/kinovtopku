import { createContext, PropsWithChildren, useState } from 'react';

export const ImageDialogContext = createContext<ImageDialogContextType | null>(
  null
);

type ImageModal = {
  isOpen: boolean;
  link: string;
};

export type ImageDialogContextType = {
  imageModal: ImageModal;
  setImageModal: React.Dispatch<React.SetStateAction<ImageModal>>;
};

export default function ContextWrapper({ children }: PropsWithChildren) {
  const [imageModal, setImageModal] = useState({
    isOpen: false,
    link: '',
  });

  return (
    <ImageDialogContext.Provider value={{ imageModal, setImageModal }}>
      {children}
    </ImageDialogContext.Provider>
  );
}
