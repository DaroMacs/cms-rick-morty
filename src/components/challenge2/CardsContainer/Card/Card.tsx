import React from "react";
import { motion } from "framer-motion";

interface ICard {
  character: any;
  getCharacter: any;
}

const Card = ({ character, getCharacter }: ICard) => {
  const { image, name } = character;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex hover:text-fuchsia-800 md:w-full card glass flex-col items-center backdrop-blur-sm backdrop-brightness-150 bg-white/50 rounded-lg shadow-2xl"
    >
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold h-10 text-sm ">{name}</h2>
        <div className="card-actions justify-end">
          <label
            id={character.id}
            onClick={(e) => getCharacter(e)}
            htmlFor="modalCharacter"
            className="btn btn-xs btn-primary"
          >
            Más Info
          </label>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
