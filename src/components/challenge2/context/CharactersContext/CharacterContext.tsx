import { createContext } from "react";
import { ICharacter } from "./CharacterProvider";

interface ICreateContext {
  characters: ICharacter[];
  fetchCharacters: () => Promise<void>;
  isLoading: boolean;
  characterModal: ICharacter;
  getCharacter: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const CharacterContext = createContext({} as ICreateContext);

export default CharacterContext;
