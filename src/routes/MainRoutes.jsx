import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "../components/MainContent/Index";
import MainLayout from "../layouts/MainLayout";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import Blog from "../pages/Blog/Blog";
import Pricing from "../pages/Pricing/Pricing";

import Products from "../pages/Products/Products";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
