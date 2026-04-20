import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import PainelVoluntario from "./pages/PainelVoluntario/PainelVoluntario";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/painelVoluntario" element={<PainelVoluntario />} />
      </Routes>
    </BrowserRouter>
  );
}
