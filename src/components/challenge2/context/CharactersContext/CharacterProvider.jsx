import React, { useState, useEffect } from "react";
import CharacterContext from "./CharacterContext";

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [characterModal, setCharacterModal] = useState({});

  const getCharacter = (e) => {
    const viewId = Number(e.currentTarget.id);
    const characterFiltered = characters.filter((char) => char.id === viewId);
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
