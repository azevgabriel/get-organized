import { api } from '../services/api';

interface FormData {
  titulo : string;
  conteudo: "To do" | "Doing" | "Done";
  lista: string;
}

export interface ICard {
  id: string;
  titulo : string;
  conteudo: "To do" | "Doing" | "Done";
  lista: string;
}

/* Chamadas de API */

export const getCards = async():Promise<ICard[]> => {
  const response = await api.get('/cards').catch(err => {
    throw err;
  })
  return response.data;
};

export const postCard = async({titulo, conteudo, lista}: FormData):Promise<ICard> => {
  const response = await api.post('/cards', {
    titulo,
    conteudo,
    lista
  }).catch(err => {
    throw err;
  })
  return response.data;
};

export const putCard = async({id, titulo, conteudo, lista}: ICard):Promise<ICard> => {
  const response = await api.put(`/cards/${id}`, {
    titulo,
    conteudo,
    lista
  }).catch(err => {
    throw err;
  })
  return response.data;
};

export const deleteCard = async(id: string):Promise<ICard[]> => {
  const response = await api.delete(`/cards/${id}`).catch(err => {
    throw err;
  })
  return response.data;
};