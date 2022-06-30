import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CartContextProvider from "./context/CartContext";
import ProductsContextProvider from "./context/ProductsContext";
import Routing from "./Routing";

function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
