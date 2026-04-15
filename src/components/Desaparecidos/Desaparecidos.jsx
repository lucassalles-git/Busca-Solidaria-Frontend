import axios from "axios"
import { useState, useEffect } from "react"
import styles from "../Desaparecidos/Desaparecidos.module.scss"

export default function Desaparecidos() {
    const [listaDesaparecidos, setListaDesaparecidos] = useState([]);

    const carregarDados = async () => {
        const resposta = await axios.get("https://sos-enchentes.onrender.com/desaparecidos");

        console.log(resposta.data)
        setListaDesaparecidos(resposta.data)
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <section>
            <section>
                {listaDesaparecidos.map((item) => (
                    <article key={item.id} className="card">
                    <h3>{item.nome}</h3>
                    <p>Idade: {item.idade}</p>
                    <p>{item.status}</p>
                    <p>{item.descricao}</p>
                    <p>Último local visto: {item.ultimo_local}</p>
                </article>
                ))}
            </section>
        </section>
    )
}