import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admo" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
