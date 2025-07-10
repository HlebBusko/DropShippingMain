import NavBar from "./components/layout/NavBar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:category" element={<ProductsPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
