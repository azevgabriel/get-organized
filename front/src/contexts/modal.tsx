import { createContext, useCallback, useContext, ReactNode, useState } from "react";

interface ModalContextData {
  isOpenModal: boolean;
  handleModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({ children }: ModalProviderProps) => {
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const handleModal = useCallback(() => {
    setIsOpenModal(oldValue => !oldValue);
  }, []);
  
  return (
    <ModalContext.Provider 
      value={{ 
        isOpenModal,
        handleModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useAuth must be used within an ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };