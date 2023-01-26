import React, { useState, useEffect } from "react";
import CharacterContext from "./CharacterContext";

interface ICharacterProvider {
  children: React.ReactNode;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const CharacterProvider = ({ children }: ICharacterProvider) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [characterModal, setCharacterModal] = useState({} as ICharacter);

  console.log(characters);

  const getCharacter = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const viewId = Number(e.currentTarget.id);
    const characterFiltered = characters.filter(
      (char: ICharacter) => char.id === viewId
    );
    setCharacterModal(characterFiltered[0]);
  };

  const getRandomNumbers = () =>
    [...Array(8)].map(() => Math.floor(Math.random() * 826) + 1);

  const fetchCharacters = async () => {
    delay();
    async function delay() {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const randomNumbers = getRandomNumbers();
      await fetch(`https://rickandmortyapi.com/api/character/${randomNumbers}`)
        .then((res) => res.json())
        .then((data) => setCharacters(data))
        .catch((err) => console.error(err));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        fetchCharacters,
        isLoading,
        characterModal,
        getCharacter
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
