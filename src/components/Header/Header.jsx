import { Link } from "react-router-dom";

import styles from "../Header/Header.module.scss";
import coracao from "../../assets/coracao.png";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.logoTitulo}>
        <img className={styles.coracao} src={coracao} alt="Coração com Lupa" />

        <div className={styles.titulos}>
          <h1>Busca Solidária</h1>
          <h2>Encontre pessoas desaparecidas em abrigos</h2>
        </div>
      </div>

      <nav>
        <ul>
          <Link to="/">
            <li className={styles.inicio}>Início</li>
          </Link>
          <li>Lista</li>
          <li>Como funciona</li>
        </ul>
        <Link to="/cadastro">
          <button>Cadastrar</button>
        </Link>
      </nav>
    </header>
  );
}
