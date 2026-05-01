import styles from "../Pesquisa/Pesquisa.module.scss";
import Lupa from "../../assets/image/lupa.png"

//setBusca irá atualizar o valor da lista (inicio)
export default function Pesquisa({ busca, setBusca }) {
  const buscarPessoa = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.containerPesquisa}>
      <form onSubmit={buscarPessoa}>
        <img src={Lupa} alt="Imagem de uma Lupa" />
        <div>
          <input
            type="text"
            placeholder="Digite o nome da pessoa..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
