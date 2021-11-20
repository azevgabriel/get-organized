import { Container } from './styles'
import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

export const Task = () => {
  return (
    <Container>
      <div className="titleContent">
        <h3>Tarefa 01 - Limpar o escrítorio</h3>
      </div>
      <div className="buttonsContent">
        <button>
          <AiOutlineEye size={23}/>
        </button>
        <button>
          <FiEdit size={18}/>
        </button>
        <button>
          <RiDeleteBinLine size={20}/>
        </button>
      </div>
    </Container>
  )
};