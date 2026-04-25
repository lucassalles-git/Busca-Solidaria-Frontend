import styles from "../BarraPesquisa/BarraPesquisa.module.scss";

import Lupa2 from "../../assets/image/lupa2.png";
import Pessoas from "../../assets/image/pessoas.png";

export default function BarraPesquisa({buscar, setBuscar}) {
  const buscarNaLista = (e) => {
    e.preventDefault();
  }
  return (
    <section className={styles.containerInput}>
      <div className={styles.pesquisa} onSubmit={buscarNaLista}>
        <img src={Lupa2} alt="" />
        <input
          className={styles.barraPesquisa}
          type="text"
          placeholder=" Digite o nome da pessoa..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>

      <div className={styles.pessoasCadastradas}>
        <img src={Pessoas} alt="Icone de três pessos" />
        <p>Pessoas Cadastradas</p>
      </div>
    </section>
  );
}
