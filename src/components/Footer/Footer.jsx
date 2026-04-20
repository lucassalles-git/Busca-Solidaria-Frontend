import { Link } from "react-router-dom";
import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
  <div className={styles.container}>
    
    <div>
      <h3>Busca Solidária</h3>
      <p>"Juntos, ajudando famílias a se reencontrarem"</p>
    </div>

    <div className={styles.voluntario}>
      <p>Área do Voluntário:</p>
      <Link to="/painelVoluntario">
      <button>Ir para painel</button>
      </Link>

      <div className={styles.links}>
        <a href="#">Início</a>
  </div>
    </div>

  </div>

  
    <p className={styles.copy}>
      © 2026 - Projeto Solidário
    </p>
</footer>
    )
}