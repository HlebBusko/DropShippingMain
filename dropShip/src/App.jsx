import NavBar from "./components/layout/NavBar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:category" element={<Men />}></Route>
      </Routes>
    </div>
  );
}

export default App;
