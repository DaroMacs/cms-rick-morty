import React, { useState } from "react";
import logo from "../../../assets/rick.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { logoAnimation } from "../../variants/variants";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={logoAnimation}
              animate={logoAnimation.animate}
              src={logo}
              alt="logoRick"
              id="logo"
              className="w-36"
            />
          </div>
          <h1 className="text-xl text-center font-bold  text-gray-900 md:text-2xl dark:text-white">
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mail@domain.com"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex relative items-center gap-2">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3"
                >
                  {!showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <Link
              to={"/dashboard"}
              className="btn btn-sm btn-info w-full text-white"
            >
              Login
            </Link>
          </form>
          <hr />
          <div className="flex flex-col">
            <p className="text-sm font-light text-zinc-800 pb-3 text-center">
              Haven't got an account yet?
            </p>
            <Link to={"/register"}>
              <button className="btn btn-sm btn-secondary w-full text-white">
                Create a new account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
