import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayouts/BaseLayout";
import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default MyRoutes;
