import { useState } from "react";
import Header from "../../components/Header/Header";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import Painel from "../../components/Painel/Painel";


export default function PainelVoluntario() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <Header />
        <BarraPesquisa setBuscar={setBuscar} />
        <Painel buscar={buscar} />
    </>
  );
}
