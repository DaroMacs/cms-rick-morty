import React from "react";
import logoRick from "../../../assets/logoRick.png";
import { BiUser } from "react-icons/bi";

const UserNavbar = ({ open }) => {
  return (
    <div className="mx-3">
      <div
        className={`w-full gap-3 px-10 py-2 ${
          open && "pl-20"
        } md:py-5 bg-slate-800 items-center rounded-b-lg shadow-xl flex justify-between flex-col md:flex-row`}
      >
        <img src={logoRick} alt="logoRick" className="w-24 " />

        <div className="badge badge-secondary bg-pink-500 border-none flex items-center">
          <BiUser />
          <span className="pl-1">Darío M.</span>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
