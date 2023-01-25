import React from "react";
import { Routes, Route } from "react-router";
import Challenge1 from "../pages/Challenge1";
import Challenge2 from "../pages/Challenge2";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge1/*" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
    </Routes>
  );
};

export default AppRouter;
