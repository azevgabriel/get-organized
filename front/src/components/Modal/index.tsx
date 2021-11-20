import { useCallback, useEffect, useState } from 'react';

import { useModal } from '../../contexts/modal';
import { Container } from './styles';

import { useCard } from '../../contexts/card';
import { useToast } from '../../contexts/toast';

interface ModalProps {
  type: "add" | "edit" | "delete";
}

export const Modal = ({type}: ModalProps) => {

  const {handleModal, isOpenModal} = useModal()
  const {
    postCard
  } = useCard();
  const {
    addToast
  } = useToast();

  const [headerTitle, setHeaderTitle] = useState("");
  const [buttonName, setButtonName] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleBody = useCallback(() => {
    switch(type) {
      case "add":
      case "edit":
        return (
          <div className="body">
            <label>Título</label>
            <input
              type="text"
              placeholder="Insira o título da sua tarefa aqui."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Conteúdo</label>
            <textarea
              placeholder="Insira o conteúdo da sua tarefa aqui."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        );
      case "delete":  
        break;
    }
  }, [content, title, type]);

  const handleSubmit = useCallback(async () => {
    let response;
    
    switch(type) {
      case "add":
        try {
          console.log(title, content);
          response = await postCard({
            titulo: title,
            conteudo: content,
            lista: "To do"
          });
          addToast({
            type: "success",
            title: `Tarefa: ${response.titulo}`,
            description: "Adicionada com sucesso!"
          });
          setTitle("");
          setContent("");
          handleModal();
        } catch(err) {
          if (title === "" || content === "") {
            addToast({
              type: "error",
              title: "Erro ao adicionar tarefa",
              description: "Preencha todos os campos!"
            });
          } else {
            addToast({
              type: "error",
              title: "Erro ao adicionar tarefa",
              description: "Tente novamente mais tarde!"
            });
          }
        }
        break;
      case "edit":
        handleModal();
        break;
      case "delete":
        handleModal();
        break;
    }
  }, [addToast, content, handleModal, postCard, title, type]);
      
  useEffect(() => {
    switch(type) {
      case "add":
        setHeaderTitle("Adicionar uma nova tarefa")
        setButtonName("Adicionar")
        break;
      case "edit":
        setHeaderTitle("Editar uma tarefa")
        setButtonName("Editar")
        break;
      case "delete":
        setHeaderTitle("Deletar uma tarefa")
        setButtonName("Deletar")
        break;
    }
  }, [type]);

  return (
    <Container
      isOpen={isOpenModal}
    >
      <h1>{headerTitle}</h1>
      {handleBody()}
      <div className="footer">
        <button
          onClick={() => handleModal()}
        >
          Sair        
        </button>
        <button
          onClick={() => handleSubmit()}
        >
          {buttonName}  
        </button>
      </div>
    </Container>
  );
}