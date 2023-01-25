import React from "react";
import { Link } from "react-router-dom";

const SocialNetwork = ({ icon }) => {
  return (
    <Link
      to="/"
      className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
    >
      <li className="flex items-center">{icon}</li>
    </Link>
  );
};

export default SocialNetwork;
