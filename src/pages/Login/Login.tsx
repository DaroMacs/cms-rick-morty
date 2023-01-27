import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import Navbar from "../../components/Login/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../../components/Login/RegisterForm/RegisterForm";
import Bubble from "../../components/general/Bubble";

const stylesObject = {
  background: {
    backgroundImage:
      "linear-gradient(to left bottom,      #d16ba5,      #c777b9,      #ba83ca,#aa8fd8,#9a9ae1,      #85a0e1,      #74a4de,      #67a8d7,      #5ba6c7,      #59a2b5,      #5e9da4,#669794)",
    minHeight: "100vh"
  }
};

const Challenge1 = () => {
  return (
    <div style={stylesObject.background}>
      <Navbar />
      <div className="py-8">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
      <Bubble />
    </div>
  );
};

export default Challenge1;
