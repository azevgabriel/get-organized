import { useCallback, useEffect, useState } from 'react';

import { useModal } from '../../contexts/modal';
import { Container } from './styles';

import { useCard } from '../../contexts/card';
import { useToast } from '../../contexts/toast';

export const Modal = () => {

  const {handleModal, modalConfig} = useModal()
  const {
    postCard, 
    deleteCard,
    putCard
  } = useCard();

  const {
    addToast
  } = useToast();

  const [headerTitle, setHeaderTitle] = useState("");
  const [buttonName, setButtonName] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [progress, setProgress] = useState('');

  useEffect(() => {
    setTitle(modalConfig.card.titulo);
    setContent(modalConfig.card.conteudo);
    setProgress(modalConfig.card.lista);
  }, [modalConfig.card]);

  const handleBody = useCallback(() => {
    switch(modalConfig.type) {
      case "add":
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
            <label>Selecione o status da tarefa</label>
            <select 
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            >
              <option value="To do">A fazer</option>
              <option value="Doing">Fazendo</option>
              <option value="Done">Feito</option>
            </select>
          </div>
        );
      case "delete": 
        return (
          <div className="body">
            <p>Deseja realmente excluir essa tarefa?</p>
          </div>
        );
    }
  }, [modalConfig.type, title, content, progress]);

  const handleSubmit = useCallback(async () => {
    let response;
    
    switch(modalConfig.type) {
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
          handleModal({
            type: "add",
            card: {
              id: "",
              titulo: title,
              conteudo: content,
              lista: response.lista
            }
          });
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
        try {
          const response = await putCard({
            id: modalConfig.card.id,
            titulo: title,
            conteudo: content,
            lista: progress
          });
          addToast({
            type: "success",
            title: `Tarefa: ${response.titulo}`,
            description: "Editada com sucesso!"
          });
          handleModal({
            type: "edit",
            card: {
              id: "",
              titulo: title,
              conteudo: content,
              lista: progress
            }
          });
        } catch(err) {
          if (title === "" || content === "") {
            addToast({
              type: "error",
              title: "Erro ao editar tarefa",
              description: "Preencha todos os campos!"
            });
          } else {
            addToast({
              type: "error",
              title: "Erro ao editar tarefa",
              description: "Tente novamente mais tarde!"
            });
          }
        }
        break;
      case "delete":
        try {
          response = await deleteCard(modalConfig.card.id);
          addToast({
            type: "success",
            title: `Tarefa: ${modalConfig.card.titulo}`,
            description: "Deletada com sucesso!"
          });
          handleModal({
            type: "delete",
            card: {
              id: "",
              titulo: "",
              conteudo: "",
              lista: "To do"
            }
          });
        } catch(err) {
          addToast({
            type: "error",
            title: "Erro ao deletar a tarefa",
            description: "Tente novamente mais tarde!"
          });
        }
        break;
    }
  }, [
    modalConfig.type, 
    modalConfig.card.id, 
    modalConfig.card.titulo, 
    title, 
    content, 
    progress,
    postCard, 
    addToast, 
    handleModal, 
    putCard, 
    deleteCard
  ]);
      
  useEffect(() => {
    switch(modalConfig.type) {
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
  }, [modalConfig]);

  return (
    <Container
      isOpen={modalConfig.isOpen}
      type={modalConfig.type}
    >
      <h1>{headerTitle}</h1>
      {handleBody()}
      <div className="footer">
        <button
          onClick={() => handleModal({
            type:`${modalConfig.type}`,
            card: { 
              id: "",
              titulo: title,
              conteudo: content,
              lista: "To do"
            }
          })}
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