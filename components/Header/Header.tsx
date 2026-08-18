import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <nav className={styles["header-nav"]}>
          <Link href="/chevaux" className={styles["nav-link"]}>
            Nos chevaux
          </Link>
          <Link href="/naissances" className={styles["nav-link"]}>
            Nos naissances
          </Link>
          <Link href="/" className={styles["nav-link"]}>
            <img src="/assets/Logo-linlouet.jpg" className={styles.logo} alt="Logo de l'Élevage de Linlouet" />
          </Link>
          <Link href="/contact" className={styles["nav-link"]}>
            Contact
          </Link>
          <div className={styles.languages}>
            <Link href="/fr" className={styles["lang-link"]}>
              FR
            </Link>
            <span className={styles["span"]}>|</span>
            <Link href="/en" className={styles["lang-link"]}>
              EN
            </Link>
            <span className={styles["span"]}>|</span>
            <Link href="/de" className={styles["lang-link"]}>
              DE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
