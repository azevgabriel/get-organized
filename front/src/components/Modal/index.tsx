import { useModal } from '../../contexts/modal';
import { Container } from './styles';

import {
  ICard,
  postCard
} from '../../interfaces/Card';

interface ModalProps {
  title: string;
  type: "add" | "edit" | "delete";
}

interface handleSubmitProps {
  type: "add" | "edit" | "delete";
}

export const Modal = ({title, type}: ModalProps) => {

  const {handleModal, isOpenModal} = useModal()

  const handleSubmit = ({type}: handleSubmitProps) => {
    // switch(type) {
    //   case "add":

  };

  return (
    <Container
      isOpen={isOpenModal}
    >
      <h1>{title}</h1>
      <button
        onClick={() => handleModal()}
      >
        Sair        
      </button>
    </Container>
  );
}