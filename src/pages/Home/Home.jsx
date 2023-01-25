import React from "react";
import { Link } from "react-router-dom";
import Bubble from "../../components/general/Bubble";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-800">
      <h1 className="text-2xl text-gray-300 pb-10">Prueba Técnica</h1>
      <div className="flex flex-col  gap-5">
        <Link to="/challenge1">
          <button className="btn btn-sm btn-outline btn-info w-full">
            Challenge 1 - Formulario
          </button>
        </Link>
        <Link to="/challenge2">
          <button className="btn btn-sm btn-outline btn-success w-full">
            Challenge 2 - Landing
          </button>
        </Link>
      </div>
      <Bubble />
    </div>
  );
};

export default Home;
