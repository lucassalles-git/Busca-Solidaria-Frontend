import Header from "../components/Header/Header";
import Pesquisa from "../components/Pesquisa/Pesquisa";
import Desaparecidos from "../components/Desaparecidos/Desaparecidos";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Inicio() {
  const [busca, setBusca] = useState("");

  return (
    <div className="app">
      <Header />
      <main>
        <Pesquisa busca={busca} setBusca={setBusca} />
        <Desaparecidos busca={busca} />
      </main>
      <Footer />
    </div>
  );
}
