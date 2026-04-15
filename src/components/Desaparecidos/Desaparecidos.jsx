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
            <section className={styles.desaparecidos}>
                {listaDesaparecidos.map((item) => (
                    <article key={item.id} className={styles.card}>
                    <h3>{item.nome}</h3>
                    <p>{item.idade} anos</p>
                    <p>{item.status}</p>
                    <p>Descrição: {item.descricao}</p>
                    <p>Última vez visto: {item.ultima_vezVisto}</p>
                </article>
                ))}
            </section>
        </section>
    )
}