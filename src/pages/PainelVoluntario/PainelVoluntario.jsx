import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../PainelVoluntario/PainelVoluntario.module.scss";

import Header from "../../components/Header/Header";
import Desaparecidos from "../../components/Desaparecidos/Desaparecidos"
import Footer from "../../components/Footer/Footer";
import Pessoas from "../../assets/image/pessoas.png";
import Lupa2 from "../../assets/image/lupa2.png";
import Perfil from "../../assets/image/perfil.png"

export default function PainelVoluntario() {
  
  return (
    <>
      <Header />

      <section className={styles.container}>
        <section className={styles.containerTitulo}>
          <h2>Painel de desaparecidos</h2>

          <button>+ Cadastrar Pessoa</button>
        </section>

        <section className={styles.containerInput}>
          <div className={styles.pesquisa}>
            <img src={Lupa2} alt="" />
            <input
              className={styles.barraPesquisa}
              type="text"
              placeholder=" Digite o nome da pessoa..."
            />
          </div>

          <div className={styles.pessoasCadastradas}>
            <img src={Pessoas} alt="Icone de três pessos" />
            <p>Pessoas Cadastradas</p>
          </div>
        </section>

        
      </section>
    </>
  );
}
