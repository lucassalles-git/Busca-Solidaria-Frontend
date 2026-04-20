import { useState } from "react";
import Header from "../../components/Header/Header";
import Pesquisa from "../../components/Pesquisa/Pesquisa";
import Desaparecidos from "../../components/Desaparecidos/Desaparecidos";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [busca, setBusca] = useState("");
  return (
    <>
      <Header />
      <main>
        <Pesquisa setBusca={setBusca} />
        <Desaparecidos busca={busca} />
      </main>
      <Footer />
    </>
  );
}
