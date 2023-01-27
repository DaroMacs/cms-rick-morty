import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoRick.png";

const stylesObject = {
  background: {
    background: "rgba(0, 0, 0, 0.7)"
  }
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className="navbar shadow-lg justify-between pr-5 pl-5"
      style={stylesObject.background}
    >
      <div>
        <div className="flex gap-5 items-center  md:block">
          <img src={logo} alt="reactlogo" className="h-8 " />

          <div className="md:hidden">
            <button
              className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-300 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-300 font-thin">
            <Link to={"/"}>
              <li className="btn btn-ghost normal-case text-sm">Home</li>
            </Link>
            <li className="btn btn-ghost normal-case text-sm">About Us</li>
            <li className="btn btn-ghost normal-case text-sm">How it works</li>
            <li className="btn btn-ghost normal-case text-sm">Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
