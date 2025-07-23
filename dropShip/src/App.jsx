import NavBar from "./components/layout/NavBar.jsx";
import Home from "./pages/Home.jsx";
import React, { Suspense } from "react";
import Footer from "./components/layout/Footer.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
const ProductsPage = React.lazy(() => import("./pages/ProductsPage.jsx"));
const Cart = React.lazy(() => import("./pages/Cart.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Register = React.lazy(() => import("./pages/Register.jsx"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails.jsx"));

function App() {
  const { pathname } = useLocation();
  const noFooterRoutes = ["/login", "/cart", "/register"];
  return (
    <div className="flex flex-col">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductsPage />}></Route>
          <Route
            path="/products/details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Suspense>
      {!noFooterRoutes.includes(pathname) && <Footer></Footer>}
    </div>
  );
}

export default App;
