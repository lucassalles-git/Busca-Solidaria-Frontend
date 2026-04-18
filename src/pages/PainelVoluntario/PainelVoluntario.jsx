import { useEffect, useState } from "react";
import axios from "axios";

export default function PainelVoluntario() {
  const [lista, setLista] = useState([]);

  const carregarDados = async () => {
    const resposta = await axios.get(
      "https://sos-enchentes.onrender.com/desaparecidos",
    );
    setLista(resposta.data);
  };

  const excluir = async (id) => {
    await axios.delete(
      `https://sos-enchentes.onrender.com/desaparecidos/${id}`,
    );
    carregarDados(); // atualiza lista
  };

  const atualizarStatus = async (id) => {
    await axios.put(`https://sos-enchentes.onrender.com/desaparecidos/${id}`, {
      status: "encontrado",
    });

    carregarDados();
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <>
      <h2>Painel do Voluntário</h2>

      {lista.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>{item.status}</p>

          <button onClick={() => atualizarStatus(item.id)}>
            Marcar como encontrado
          </button>
          <button onClick={() => excluir(item.id)}>Excluir</button>
        </div>
      ))}
    </>
  );
}
