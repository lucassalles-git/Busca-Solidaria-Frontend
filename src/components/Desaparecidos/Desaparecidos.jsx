import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../Desaparecidos/Desaparecidos.module.scss";
import Perfil from "../../assets/perfil.png";

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
              <div className={styles.containerPerfil}>
                <img
                  src={item.imagem || Perfil}
                  alt="Imagem de perfil"
                  onError={(e) => {
                    e.target.src = Perfil;
                  }}
                />
                <div>
                  <h3>{item.nome}</h3>
                  <p className={styles.idade}>Idade: {item.idade} anos</p>
                  <p>{item.status}</p>
                </div>
              </div>
              <div className={styles.descricoes}>
                {item.status?.toLowerCase() === "encontrado" && (
                  <>
                    <p>
                      <span>Abrigo:</span> {item.abrigo}
                    </p>
                    <p>
                      <span>Endereço:</span> {item.endereco}
                    </p>
                  </>
                )}
                <p>
                  <span>Descrição:</span> {item.descricao}
                </p>
                {item.status?.toLowerCase() !== "encontrado" && (
                  <p>
                    <span>Última vez visto:</span> {item.ultima_vezVisto}
                  </p>
                )}
              </div>
            </article>
          ))
        ) : (
          <p className={styles.aviso}>
            Não encontramos essa pessoa na lista de abrigos
          </p>
        )}
      </section>
    </section>
  );
}
