import { useCallback, useEffect, useState } from 'react';
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
import { useCard } from '../../contexts/card';

import { ICard } from '../../interfaces/Card';
import { Task } from '../../components/Task';

export const Home = () => {

  const { signOut } = useAuth();
  const { addToast } = useToast();
  const {handleModal, modalConfig} = useModal()
  const { getCards } = useCard();

  const [cards, setCards] = useState<ICard[]>([]);

  const handleClick = useCallback(() => {
    
    signOut();
    addToast({
      type: 'success',
      title: 'Deslogado com sucesso!',
      description: 'Até a próxima!',
    }); 

  }, [addToast, signOut]);

  useEffect(() => {
    if (modalConfig.isOpen === false) {
      const load = async () => {
        setCards(
          await getCards()
        )
      };
      load();
    }
  }, [getCards, modalConfig.isOpen])

  return (
    <>
      <Modal />
      <Container modalOpen={modalConfig.isOpen}>
        <nav>
          <button
            onClick={() => handleClick()}
          >
            <IoIosExit size={26} />
            Sair
          </button>
          <button
            onClick={() => handleModal({
              type: 'add',
              card: { 
                id: '',
                titulo: '',
                conteudo: '',
                lista: 'To do'
              }
            })}
          >
            <BiTask size={26} />
            Criar Tarefa
          </button>
          <h1>Get Organized</h1>
        </nav>
        <main>
          <div className="tasksWrapper">
            <h2>Tarefas a fazer</h2>
            <div className="scrollLock">
              {cards.filter(card => card.lista === "To do").map(card => (
                <Task
                  key={card.id}
                  card={card}
                />
              ))}
            </div>
          </div>
          <div className="tasksWrapper">
            <h2>Tarefas em andamento</h2>
            <div className="scrollLock">
              {cards.filter(card => card.lista === "Doing").map(card => (
                <Task
                  key={card.id}
                  card={card}
                />
              ))}
            </div>
          </div>
          <div className="tasksWrapper">
            <h2>Tarefas concluídas</h2>
            <div className="scrollLock">
              {cards.filter(card => card.lista === "Done").map(card => (
                <Task
                  key={card.id}
                  card={card}
                />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </>
  )
}
