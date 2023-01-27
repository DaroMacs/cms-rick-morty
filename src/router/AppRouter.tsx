import React from "react";
import { Routes, Route } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
