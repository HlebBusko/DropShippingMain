import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./context/CartProvider.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
