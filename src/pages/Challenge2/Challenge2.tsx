import React, { useState } from "react";
import CardsContainer from "../../components/challenge2/CardsContainer";
import CharacterProvider from "../../components/challenge2/context/CharactersContext/CharacterProvider";
import Hero from "../../components/challenge2/Hero";
import UserNavbar from "../../components/challenge2/UserNavbar";
import Bubble from "../../components/general/Bubble";
import Sidebar from "../../components/challenge2/Sidebar/Sidebar";

const stylesObject = {
  background: {
    backgroundImage: "linear-gradient(to top, #298f88 0%, #b490ca 100%)",
    minHeight: "100vh"
  }
};

const Challenge2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <CharacterProvider>
      <div style={stylesObject.background}>
        <div className="flex">
          <Sidebar open={open} setOpen={setOpen} />
          <div className={`w-full ${!open && "pl-60"}`}>
            <UserNavbar open={open} />
            <div className="flex items-center">
              <Hero />
            </div>
            <CardsContainer />
          </div>
          <Bubble />
        </div>
      </div>
    </CharacterProvider>
  );
};

export default Challenge2;
