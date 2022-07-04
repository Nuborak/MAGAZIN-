import React from "react";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Deteils from "./components/Deteils/Deteils";
import EditProduct from "./components/EditProduct/EditProduct";
import ProductList from "./components/ProductList/ProductList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/add_product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Deteils />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
