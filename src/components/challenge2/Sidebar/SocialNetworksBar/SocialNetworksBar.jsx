import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import SocialNetwork from "./SocialNetwork";

const SocialNetworksBar = () => {
  return (
    <div className="fixed bottom-3 left-12 text-gray-300">
      <ul className="flex items-center gap-5">
        <SocialNetwork icon={<BsInstagram />} />
        <SocialNetwork icon={<BsFacebook />} />
        <SocialNetwork icon={<BsWhatsapp />} />
      </ul>
    </div>
  );
};

export default SocialNetworksBar;
