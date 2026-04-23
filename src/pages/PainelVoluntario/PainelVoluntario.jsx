import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../PainelVoluntario/PainelVoluntario.module.scss";

import Header from "../../components/Header/Header";

import Pessoas from "../../assets/image/pessoas.png";
import Lupa2 from "../../assets/image/lupa2.png";
import Perfil from "../../assets/image/perfil.png";
import Sim from "../../assets/image/sim.png";
import Atencao from "../../assets/image/atencao.png";
import Endereco from "../../assets/image/endereco-residencial.png";
import Pin from "../../assets/image/pin.png";
import Pessoa from "../../assets/image/pessoa.png";

export default function PainelVoluntario() {
  //Chamando a lista
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

  //state para edição
  const [editandoId, setEditandoId] = useState(null);
  const [artic, setArtic] = useState({
    status: "",
    abrigo: "",
    endereco: "",
  });

  //Função para iniciar edição
  const editar = (item) => {
    setEditandoId(item.id);

    setArtic({
      status: item.status,
      abrigo: item.abrigo,
      endereco: item.endereco,
    });
  };

  //Função salvar (PUT)
  const salvarEdicao = async () => {
    await axios.put(
      `https://sos-enchentes.onrender.com/desaparecidos/${editandoId}`,
      artic,
    );

    setEditandoId(null);
    carregarDados();
  };

  //Cancelar edição

  const cancelarEdicao = () => {
    setEditandoId(null);
  };

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

        <section className={styles.containerLista}>
          {listaDesaparecidos.map((item) => (
            <article key={item.id} className={styles.cards}>
              {editandoId === item.id ? (
                <>
                  <div className={styles.containerEdite}>
                    <select
                      value={artic.status}
                      onChange={(e) =>
                        setArtic({ ...artic, status: e.target.value })
                      }
                    >
                      <option value="desaparecido">Desaparecido</option>
                      <option value="encontrado">Encontrado</option>
                    </select>

                    <div className={styles.inp}>
                      <label>Abrigo:</label>
                      <input
                        value={artic.abrigo}
                        onChange={(e) =>
                          setArtic({ ...artic, abrigo: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.inp}>
                      <label>Endereço:</label>
                      <input
                        value={artic.endereco}
                        onChange={(e) =>
                          setArtic({ ...artic, endereco: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.buttons}>
                      <button onClick={salvarEdicao}>Salvar</button>
                      <button onClick={cancelarEdicao}>Cancelar</button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.containerPerfil}>
                    <img src={item.imagem} alt="" />

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

                        <div>
                          <img src={Pessoa} alt="Imagem de Perfil" />
                          <p>
                            <span>Descrição:</span> {item.descricao}
                          </p>
                        </div>
                      </>
                    )}

                    {item.status?.toLowerCase() !== "encontrado" && (
                      <>
                        <div>
                          <img src={Pessoa} alt="Imagem de Perfil" />
                          <p>
                            <span>Descrição:</span> {item.descricao}
                          </p>
                        </div>

                        <div>
                          <img src={Pessoa} alt="Imagem de Perfil" />
                          <p>
                            <span>Última vez visto:</span>{" "}
                            {item.ultima_vezVisto}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className={styles.btns}>
                    <button onClick={() => editar(item)}>Editar</button>

                    <button className={styles.excluir}>Excluir</button>
                  </div>
                </>
              )}
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
