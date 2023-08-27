import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayouts/BaseLayout";
import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import SavePage from "../pages/SavedPage/SavePage";
import CommentPage from "../pages/CommentPage/CommentPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/save" element={<SavePage />} />
        <Route path="/comment" element={<CommentPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default MyRoutes;
