
import Head from "next/head";
import Menu from "../components/Menu";
import styles from "../styles/login.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Login - Sigaa</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className={styles.login}>
        <h2>Login</h2>

        <form action="/inicio" method="POST">
          <div className={styles.input}>
            <label>Usuário: </label>
            <input type="text" name="username" required />
          </div>

          <div className={styles.input}>
            <label>Senha: </label>
            <input type="password" required name="password" />
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <label>Atualizar Dados</label>
          </div>

          <input type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  );
}
