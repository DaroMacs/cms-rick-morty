import { createContext } from "react";

interface ICreateContext {
  characters: any;
  fetchCharacters: any;
  isLoading: boolean;
  characterModal: any;
  getCharacter: any;
}

const CharacterContext = createContext({} as ICreateContext);

export default CharacterContext;
