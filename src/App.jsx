import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro/Cadastro";
import PainelVoluntario from "./pages/PainelVoluntario/PainelVoluntario"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/painelVoluntario" element={<PainelVoluntario/>} />
      </Routes>
    </BrowserRouter>
  );
}
