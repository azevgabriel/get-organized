import { createContext, useCallback, useContext, ReactNode, useState } from "react";
import { ICard } from "../interfaces/Card";

interface Credentials {
  type: "add" | "edit" | "delete" | "view";
  card: ICard;
}

interface ModalContextData {
  modalConfig: ModalConfigProps;
  handleModal: ({type, card}: Credentials) => void;
  exitModal: ({type, card}: Credentials) => void;
}

interface ModalConfigProps {
  type: "add" | "edit" | "delete" | "view";
  isOpen: boolean;
  card: ICard;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({ children }: ModalProviderProps) => {
  
  const [modalConfig, setModalConfig] = useState<ModalConfigProps>({
    type: "view",
    isOpen: false,
    card: {
      id: "",
      titulo: "",
      conteudo: "",
      lista: "To do"
    }
  });

  const handleModal = useCallback(({type, card}: Credentials): void => {
      setModalConfig({
        type,
        card,
        isOpen: true
      });
  }, []);

  const exitModal = useCallback(({type, card}: Credentials): void => {
    if(modalConfig.isOpen === false) {
      setModalConfig({
        type,
        card,
        isOpen: true
      });
    } else {
      setModalConfig({
        type,
        card,
        isOpen: false
      });
    }
}, [modalConfig.isOpen]);
  
  return (
    <ModalContext.Provider 
      value={{ 
        modalConfig,
        handleModal,
        exitModal
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