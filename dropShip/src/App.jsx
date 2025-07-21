import NavBar from "./components/layout/NavBar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Footer from "./components/layout/footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  const { pathname } = useLocation();
  const noFooterRoutes = ["/login", "/cart", "/register"];
  return (
    <div className="flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        http://localhost:5174/products/details/http://localhost:5174/products/details/2b9ac880-a4dc-4817-9e11-37b2a01989982b9ac880-a4dc-4817-9e11-37b2a0198998
        <Route path="/products/:category" element={<ProductsPage />}></Route>
        <Route
          path="/products/details/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      {!noFooterRoutes.includes(pathname) && <Footer></Footer>}
    </div>
  );
}

export default App;
