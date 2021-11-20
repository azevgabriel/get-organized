import { useCallback } from 'react';
import { Container } from './styles'

/* Components */
import { Modal } from '../../components/Modal';

/* Contexts */
import { useAuth } from '../../contexts/auth'
import { useToast } from '../../contexts/toast';

/* Assets */
import { IoIosExit } from 'react-icons/io'
import { BiTask } from 'react-icons/bi'
import { useModal } from '../../contexts/modal';

export const Home = () => {

  const { signOut } = useAuth();
  const { addToast } = useToast();
  const {handleModal} = useModal()

  const handleClick = useCallback(() => {
    
    signOut();
    addToast({
      type: 'success',
      title: 'Deslogado com sucesso!',
      description: 'Até a próxima!',
    }); 

  }, [addToast, signOut]);

  return (
    <>
      <Modal 
        title="Adicionar uma nova tarefa"
      />
      <Container>
        <nav>
          <button
            onClick={() => handleClick()}
          >
            <IoIosExit size={26} />
            Sair
          </button>
          <button
            onClick={() => handleModal()}
          >
            <BiTask size={26} />
            Criar Tarefa
          </button>
          <h1>Bem vindo!</h1>
        </nav>
      </Container>
    </>
  )
}
