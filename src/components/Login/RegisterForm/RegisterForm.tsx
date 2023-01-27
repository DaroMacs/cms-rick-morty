import React, { useState } from "react";
import logo from "../../../assets/rick.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isTCAccepted, setIsTCAccepted] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const termsConditionsAccepted = () => {
    setIsTCAccepted(!isTCAccepted);
  };

  const passwordValid = (isValid: boolean) => {
    if (isValid) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-center">
            <img className="w-32 mr-2" src={logo} alt="logo" />
          </div>
          <h1 className="text-xl text-center font-bold  text-gray-900 md:text-2xl dark:text-white">
            Add your information
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
              <div className="flex items-center gap-2">
                <input
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <div className="flex  items-center gap-2">
                <input
                  type={!showPassword ? "password" : "text"}
                  name="passwordAgain"
                  id="passwordAgain"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-start ">
              <div className="flex items-center h-5">
                <input
                  id="showPassword"
                  aria-describedby="showPassword"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required={false}
                  onChange={togglePassword}
                />
              </div>
              <div className="flex items-center ml-3 text-sm">
                <div className="pr-1">
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>

                <label
                  htmlFor="showPassword"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Show Passwords
                </label>
              </div>
            </div>
            {password && (
              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match"
                ]}
                minLength={8}
                value={password}
                valueAgain={passwordAgain}
                onChange={(isValid) => {
                  passwordValid(isValid);
                }}
              />
            )}

            <div className="flex items-start ">
              <div className="flex items-center h-5">
                <input
                  id="termsConditions"
                  aria-describedby="termsConditions"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required={false}
                  onChange={termsConditionsAccepted}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsConditions" className="text-gray-700">
                  I accept{" "}
                  <a
                    href="/"
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-sm btn-secondary w-full text-white ${
                isTCAccepted && isPasswordValid ? "" : "btn-disabled"
              }`}
            >
              Create Account
            </button>
          </form>

          <hr />

          <div className="flex flex-col ">
            <p className="text-sm font-light text-zinc-800 pb-3 text-center">
              Have you got already an account?
            </p>
            <Link to={"/"}>
              <button className="btn btn-sm btn-info w-full text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
