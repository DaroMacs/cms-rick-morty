import React from "react";
import rick from "../../../assets/rick.png";
import { motion } from "framer-motion";
import { logoAnimation } from "../../variants/variants";

export const stylingObject = {
  title: {
    background: "linear-gradient(45deg,#3caab2,#e28f82,  #87638a )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  btn: {
    background: "linear-gradient(45deg, #eb5d47, #87638a, #a4f9ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
};

const Hero = () => {
  return (
    <div className="hero  bg-slate-700 rounded-xl border-2 border-zinc-700 shadow-xl mt-5 mx-10">
      <div className="hero-content flex-col lg:flex-row py-2 lg:py-0 ">
        <div>
          <h1 className="text-3xl font-bold" style={stylingObject.title}>
            Rick & Morty API
          </h1>
          <p className="py-3 text-gray-100 font-thin">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            soluta, excepturi rerum quaerat nemo voluptate recusandae dolore
            perspiciatis reprehenderit ab rem officiis.
          </p>
        </div>
        <div className="flex items-center justify-center py-5">
          <motion.img
            variants={logoAnimation}
            animate={logoAnimation.animate}
            src={rick}
            alt="logoRick"
            id="logo"
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
