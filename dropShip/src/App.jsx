import NavBar from "./components/layout/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Equipment from "./pages/Equipment.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/equipment" element={<Equipment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
