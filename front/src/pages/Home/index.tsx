import { Container } from './styles'
import { useAuth } from '../../contexts/auth'
import { useToast } from '../../contexts/toast';
import { useCallback } from 'react';
import { IoIosExit } from 'react-icons/io'

export const Home = () => {

  const { signOut } = useAuth();
  const { addToast } = useToast();

  const handleClick = useCallback(() => {
    
    signOut();
    addToast({
      type: 'success',
      title: 'Deslogado com sucesso!',
      description: 'Até a próxima!',
    }); 

  }, [addToast, signOut]);

  const openModal = useCallback(() => {
    
    

  }, []);

  return (
    <Container>
      <nav>
        <button
          onClick={() => handleClick()}
        >
          <IoIosExit size={28} />
          Sair
        </button>
        <button
          onClick={() => openModal()}
        >
          Criar Tarefa
        </button>
        <h1>Bem vindo!</h1>
      </nav>
    </Container>
  )
}
