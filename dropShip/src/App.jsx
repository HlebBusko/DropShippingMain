import NavBar from "./components/layout/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Equipment from "./pages/Equipment.jsx";

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
