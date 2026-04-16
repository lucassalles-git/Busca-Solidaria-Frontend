import Header from "../components/Header/Header"
import Pesquisa from "../components/Pesquisa/Pesquisa"
import Desaparecidos from "../components/Desaparecidos/Desaparecidos"
import { useState } from "react"

export default function Inicio() {
    const [busca, setBusca] = useState("");

    return (
        <>
        <Header/>
        <Pesquisa busca={busca} setBusca={setBusca}/>
        <Desaparecidos busca={busca}/>
        </>
    )
}