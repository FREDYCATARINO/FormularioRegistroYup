import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Bienvenida from "./components/Bienvenida";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
      </Routes>
    </Router>
  );
}

export default App;