import React from "react";
import { Link } from "react-router-dom";
import { stylingObject } from "../Hero/Hero";
import SocialNetworksBar from "./SocialNetworksBar";

interface ISidebar {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen }: ISidebar) => {
  return (
    <div className="flex z-50 ">
      <div
        className={` ${
          open
            ? "w-8 h-8 absolute items-center justify-center left-10 top-5"
            : "w-screen md:w-60 fixed"
        } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
      >
        <button onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <div className={`space-y-3 ${open && "hidden"}`}>
          <div className="flex items-center">
            <h2 className="text-xl font-bold pt-5" style={stylingObject.title}>
              Dashboard
            </h2>
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <Link
                to="/"
                className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                <li className="flex items-center  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-gray-100 pl-2">Home</span>
                </li>
              </Link>
              <Link
                to="/"
                target="_blank"
                className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                <li className="flex items-center  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-gray-100 pl-2">Inbox</span>
                </li>
              </Link>
              <Link
                to="/"
                target="_blank"
                className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                <li className="flex items-center  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="text-gray-100 pl-2">Orders</span>
                </li>
              </Link>
              <Link
                to="/"
                target="_blank"
                className="flex items-center p-2 space-x-3  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                <li className="flex items-center  text-base font-normal text-gray-300 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-100 pl-2">Settings</span>
                </li>
              </Link>
            </ul>
            <SocialNetworksBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
