import React, { useContext } from "react";
import CharacterContext from "../context/CharactersContext/CharacterContext";
import { stylingObject } from "../Hero/Hero";
import Card from "./Card";
import { InfinitySpin } from "react-loader-spinner";
import CardModal from "./CardModal";
import { ICharacter } from "../context/CharactersContext/CharacterProvider";

const CardsContainer = () => {
  const {
    characters,
    fetchCharacters,
    isLoading,
    characterModal,
    getCharacter
  } = useContext(CharacterContext);

  return (
    <>
      <CardModal characterModal={characterModal} />
      <div className=" mt-6 px-10 ">
        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-700 px-5 py-2 rounded-xl mb-5 shadow-xl">
          <h1
            className="text-xl font-bold pb-2 md:pb-0"
            style={stylingObject.title}
          >
            Personajes
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={fetchCharacters}
              className=" btn btn-xs btn-secondary font-light bg-pink-500 border-none"
            >
              {isLoading ? (
                <InfinitySpin color="#C4DC5C" width="50" />
              ) : (
                <span>Generar Personajes</span>
              )}
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center">
            <InfinitySpin color="#C4DC5C" />
          </div>
        ) : (
          <div className="flex items-center flex-col md:grid grid-cols-1 gap-6 mb-20 lg:grid-cols-4">
            {characters.map((character: ICharacter) => {
              return (
                <Card
                  key={character.id}
                  character={character}
                  getCharacter={getCharacter}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CardsContainer;
