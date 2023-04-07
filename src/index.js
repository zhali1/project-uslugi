import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductsContext from "./contexts/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsContext>
      <App />
    </ProductsContext>
  </BrowserRouter>
);
