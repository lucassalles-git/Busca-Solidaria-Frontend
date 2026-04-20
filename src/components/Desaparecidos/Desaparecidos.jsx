import axios from "axios";
import { useState, useEffect } from "react";

import styles from "../Desaparecidos/Desaparecidos.module.scss";
import Perfil from "../../assets/image/perfil.png";
import Atencao from "../../assets/image/atencao.png";
import Endereco from "../../assets/image/endereco-residencial.png";
import Pin from "../../assets/image/pin.png";
import Sim from "../../assets/image/sim.png";
import Pessoa from "../../assets/image/pessoa.png";

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
    <>
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
                  <div
                    className={
                      item.status?.toLowerCase() === "encontrado"
                        ? styles.encontrado
                        : styles.desaparecido
                    }
                  >
                    <img
                      src={
                        item.status?.toLowerCase() === "encontrado"
                          ? Sim
                          : Atencao
                      }
                      alt="Imagem check"
                    />
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
              <div className={styles.descricoes}>
                {item.status?.toLowerCase() === "encontrado" && (
                  <>
                    <div>
                      <img src={Endereco} alt="Imagem de casa" />
                      <p>
                        <span>Abrigo:</span> {item.abrigo}
                      </p>
                    </div>
                    <div>
                      <img src={Pin} alt="Imagem de Localização" />
                      <p>
                        <span>Endereço:</span> {item.endereco}
                      </p>
                    </div>
                  </>
                )}
                <div>
                  <img src={Pessoa} alt="Imagem de Perfil" />
                  <p>
                    <span>Descrição:</span> {item.descricao}
                  </p>
                </div>
                {item.status?.toLowerCase() !== "encontrado" && (
                  <div>
                    <img src={Pessoa} alt="Imagem de Perfil" />
                    <p>
                      <span>Última vez visto:</span> {item.ultima_vezVisto}
                    </p>
                  </div>
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
    </>
  );
}
