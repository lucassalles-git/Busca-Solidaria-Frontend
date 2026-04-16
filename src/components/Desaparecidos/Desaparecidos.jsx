import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../Desaparecidos/Desaparecidos.module.scss";

export default function Desaparecidos({ busca }) {
  //lista de desaparecidos
  const [listaDesaparecidos, setListaDesaparecidos] = useState([]);

  const carregarDados = async () => {
    const resposta = await axios.get(
      "https://sos-enchentes.onrender.com/desaparecidos",
    );

    setListaDesaparecidos(resposta.data);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const listaFiltrada = listaDesaparecidos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <section>
      <section className={styles.desaparecidos}>
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3>{item.nome}</h3>
              <p>{item.idade} anos</p>
              <p>{item.status}</p>
              <p>Descrição: {item.descricao}</p>
              <p>Última vez visto: {item.ultima_vezVisto}</p>
            </article>
          ))
        ) : (
          <p className={styles.aviso}>Não encontramos essa pessoa na lista de abrigos</p>
        )}
      </section>
    </section>
  );
}
