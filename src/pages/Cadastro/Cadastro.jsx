import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Apoio from "../../assets/terapia.png";
import Styles from "../Cadastro/Cadastro.module.scss";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ultima_vezVisto, setUltimoLocal] = useState("");

  const enviarDesaparecidos = async (e) => {
    e.preventDefault();

    const novoDesaparecido = {
      nome,
      idade,
      descricao,
      ultima_vezVisto,
    };

    await axios.post(
      "https://sos-enchentes.onrender.com/desaparecidos",
      novoDesaparecido,
    );
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <>
      <Header />

      <main>
        <section className={Styles.sectionTitulo}>
          <div className={Styles.containerTitulo}>
            <div>
              <h2>Não encontrou?</h2>
              <p>Cadastre uma pessoa desaparecida</p>
            </div>
            <img src={Apoio} alt="Mão e um coração acima" />
          </div>
          <form onSubmit={enviarDesaparecidos}>
            <input
              type="text"
              className="campo-nome"
              placeholder="Nome completo"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="number"
              className="campo-idade"
              placeholder="Idade"
              required
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
            <input
              type="text"
              className="campo-descricao"
              placeholder="Descrição (opcional)"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input
              type="text"
              className="campo-localVisto"
              placeholder="Última vez visto"
              required
              value={ultima_vezVisto}
              onChange={(e) => setUltimoLocal(e.target.value)}
            />

            <button type="submit" className="botão-enviar">
              + Cadastrar Desaparecido
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
