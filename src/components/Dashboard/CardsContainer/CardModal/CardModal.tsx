import React from "react";
import { ICharacter } from "../../context/CharactersContext/CharacterProvider";

interface ICardModal {
  characterModal: ICharacter;
}

const stylesObject = {
  background: {
    backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
  }
};

const CardModal = ({ characterModal }: ICardModal) => {
  return (
    <>
      <input type="checkbox" id="modalCharacter" className=" modal-toggle" />
      <label
        htmlFor="modalCharacter"
        className="modal cursor-pointer backdrop-blur-sm"
      >
        <label
          className="modal-box relative"
          style={stylesObject.background}
          htmlFor=""
        >
          <label
            htmlFor="modalCharacter"
            className="btn btn-xs btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="card card-side my-1 flex flex-col md:flex-row ">
            <figure className="rounded-xl ">
              <img
                className=" rounded-xl
                max-h-44 max-w-max-h-44
                min-h-max-h-44 min-w-max-h-44 cover"
                src={characterModal?.image}
                alt="character"
              />
            </figure>
            <div className="card-body md:pr-0 justify-center flex items-center md:items-start">
              <h2 className="card-title">{characterModal?.name}</h2>
              <div className="mt-5 space-y-1">
                <p>
                  <span className="font-bold">Status: </span>
                  {characterModal?.status}
                </p>
                <p>
                  <span className="font-bold">Species: </span>
                  {characterModal?.species}
                </p>
                <p>
                  <span className="font-bold">Origin: </span>
                  {characterModal?.origin?.name}
                </p>
              </div>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default CardModal;
