import { createContext, useCallback, useContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { ICard } from "../interfaces/Card";

interface FormData {
  titulo : string;
  conteudo: string;
  lista: "To do" | "Doing" | "Done";
}

interface CardContextData {
  apiCalled: boolean;
  getCards: () => Promise<ICard[]>;
  postCard: (data: FormData) => Promise<ICard>;
  putCard: (data: ICard) => Promise<ICard>;
  deleteCard: (id: string) => Promise<ICard[]>;
}

interface CardProviderProps {
  children: ReactNode;
}

const CardContext = createContext<CardContextData>({} as CardContextData);

const CardProvider = ({ children }: CardProviderProps) => {
  
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@GetOrganized:TOKEN");
    
    if(token){
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, []);

  const getCards = useCallback(async():Promise<ICard[]> => {
    setApiCalled(true);
    const response = await api.get('/cards').catch(err => {
      throw err;
    })
    setApiCalled(false);
    return response.data;
  }, []);

  const postCard = useCallback(async({titulo, conteudo, lista}: FormData): Promise<ICard> => {
    setApiCalled(true);
    const response = await api.post('/cards', {
      titulo,
      conteudo,
      lista
    }).catch(err => {
      throw err;
    })
    setApiCalled(false);
    return response.data;
  }, []);

  const putCard = useCallback(async({id, titulo, conteudo, lista}: ICard): Promise<ICard> => {
    setApiCalled(true);
    const response = await api.put(`/cards/${id}`, {
      id,
      titulo,
      conteudo,
      lista
    }).catch(err => {
      throw err;
    })
    setApiCalled(false);
    return response.data;
  }, []);

  const deleteCard = useCallback(async(id: string): Promise<ICard[]> => {
    setApiCalled(true);
    const response = await api.delete(`/cards/${id}`).catch(err => {
      throw err;
    })
    setApiCalled(false);
    return response.data;
  }, []);

  return (
    <CardContext.Provider 
      value={{ 
        apiCalled,
        getCards,
        postCard,
        putCard,
        deleteCard
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

function useCard(): CardContextData {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within an CardProvider');
  }

  return context;
}

export { CardProvider, useCard };