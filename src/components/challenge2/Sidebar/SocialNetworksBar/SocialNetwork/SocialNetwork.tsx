import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ISocialNetwork {
  icon: IconType;
}

const SocialNetwork = ({ icon: Icon }: ISocialNetwork) => {
  return (
    <Link
      to="/"
      className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
    >
      <li className="flex items-center">{<Icon />}</li>
    </Link>
  );
};

export default SocialNetwork;
