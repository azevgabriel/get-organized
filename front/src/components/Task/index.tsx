import { Container } from './styles'
import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { useModal } from '../../contexts/modal';
import { ICard } from '../../interfaces/Card';

interface ITask {
  card: ICard;
}

export const Task = ({card}: ITask) => {

  const { handleModal } = useModal();

  return (
    <Container>
      <div className="titleContent">
        <h3>{card.titulo}</h3>
      </div>
      <div className="buttonsContent">
        <button>
          <AiOutlineEye size={23}/>
        </button>
        <button
          onClick={() => handleModal({
            type: "edit", 
            card: card
          })}
        >
          <FiEdit size={18}/>
        </button>
        <button
          onClick={() => handleModal({
            type:"delete", 
            card: card
          })}
        >
          <RiDeleteBinLine size={20}/>
        </button>
      </div>
    </Container>
  )
};