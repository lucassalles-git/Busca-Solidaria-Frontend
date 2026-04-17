import styles from "../Pesquisa/Pesquisa.module.scss";

//setBusca irá atualizar o valor da lista (inicio)
export default function Pesquisa({ busca, setBusca }) {
  const buscarPessoa = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.containerPesquisa}>
      <form onSubmit={buscarPessoa}>
        <input
          type="text"
          placeholder="Digite o nome da pessoa..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
}
