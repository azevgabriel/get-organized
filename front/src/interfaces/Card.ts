export interface ICard {
  id: string;
  titulo : string;
  conteudo: string;
  lista: "To do" | "Doing" | "Done";
}