// routes/routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "../components/NotFound";

import Users from "../components/Users";

import User from "../components/User";
import Home from "../pages/Home";
import Brands from "../pages/brands/Brands";
import Brand from "../pages/brands/Brand";
import Customers from "../pages/customers/customers";
import suppliers from "../pages/suppliers/suppliers";
import products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" Component={products} />
      <Route path="/products/show/:id" Component={ProductDetails} />


      <Route path="/users/:id" element={<User />} />
      <Route path="/brands" Component={Brands} />
      <Route path="/brands/:1" Component={Brand} />
      <Route path="/customers" Component={Customers} />
      <Route path="/suppliers" Component={suppliers} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
