import { Container } from './styles'
import { AiOutlineEye } from 'react-icons/ai'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
// import { RiDeleteBinLine } from 'react-icons/ri'
// import { FiEdit } from 'react-icons/fi'
import { ICard } from '../../interfaces/Card';
import { useCard } from '../../contexts/card';
import { useCallback } from 'react';
import { useModal } from '../../contexts/modal';

interface ITask {
  card: ICard;
}

export const Task = ({card}: ITask) => {

  const {putCard} = useCard();
  const {handleModal} = useModal();

  const handleRightArrow = useCallback(async() => {

    var progress = '';

    if (card.lista === 'To do') {
      progress = 'Doing';
    } else if (card.lista === 'Doing') {
      progress = 'Done';
    }

    await putCard({
      id: card.id,
      titulo: card.titulo,
      conteudo: card.conteudo,
      lista: progress,
    })

  }, [card.conteudo, card.id, card.lista, card.titulo, putCard]);

  const handleLeftArrow = useCallback(async() => {

    var progress = '';

    if (card.lista === 'Doing') {
      progress = 'To do';
    } else if (card.lista === 'Done') {
      progress = 'Doing';
    }

    await putCard({
      id: card.id,
      titulo: card.titulo,
      conteudo: card.conteudo,
      lista: progress,
    })

  }, [card.conteudo, card.id, card.lista, card.titulo, putCard]);


  return (
    <Container>
      <div className="titleContent">
        <h3>{card.titulo}</h3>
      </div>
      <div className="buttonsContent">
        <button
          onClick={handleLeftArrow}
          disabled={card.lista === 'To do' ? true : false} 
        >
          <BiLeftArrow size={23}/>
        </button>
        <button
          onClick={handleRightArrow}
          disabled={card.lista === 'Done' ? true : false} 
        >
          <BiRightArrow size={23}/>
        </button>
        <button
          onClick={() => handleModal({
            type: 'view',
            card: card,
          })}
        >
          <AiOutlineEye size={23}/>
        </button>
      </div>
    </Container>
  )
};