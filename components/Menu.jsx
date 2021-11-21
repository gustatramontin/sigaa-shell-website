import Link from "next/link";
import styles from "../styles/menu.module.css";

import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <nav className={styles.menu}>
      <div className={styles.upper_menu}>
        <img src="/assets/ifc.svg" alt="IFC logo" className={styles.logo}/>
        <span className={styles.separator}>|</span>
        <img src="https://thispersondoesnotexist.com/image" alt="perfil photo" className={styles.profile} />
        <h3 className={styles.name}>Gustavo Tramontin Pedro</h3>
        <Link href="/sair">
          <a className={`${styles.link} ${styles.link_right} ${styles.exit_link}`}>Sair</a>
        </Link>
      </div>

      <div className={styles.pages}>
        <Link href="/inicio">
          <a
            className={`${styles.link} ${
              router.pathname == "/inicio" ? styles.current_page : ""
            }`}
          >
            Início
          </a>
        </Link>

        <Link href="/materias">
          <a
            className={`${styles.link} ${
              router.pathname == "/materias" ? styles.current_page : ""
            }`}
          >
            Matérias
          </a>
        </Link>

        <Link href="/outros">
          <a
            className={`${styles.link} ${
              router.pathname == "/outros" ? styles.current_page : ""
            }`}
          >
            Outros
          </a>
        </Link>
      </div>
    </nav>
  );
}
