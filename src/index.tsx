import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext/AuthContext";
import ProductContext from "./contexts/ProductContext/ProductContext";
import SavedContext from "./contexts/SavedContext/SavedContext";
import CartContext from "./contexts/CartContext/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <SavedContext>
          <CartContext>
            <App />
          </CartContext>
        </SavedContext>
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
