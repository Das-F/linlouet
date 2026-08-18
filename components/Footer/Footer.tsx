import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-logo-section"]}>
          <Link href="/" className={styles["footer-link"]}>
            <img className={styles["footer-logo"]} src="/assets/Logo-linlouet.jpg" alt="Logo de l'Élevage de Linlouet" />
          </Link>
        </div>
        <div className={styles["footer-links"]}>
          <Link href="/" className={styles["footer-link"]}>
            Accueil
          </Link>
          <Link href="/chevaux" className={styles["footer-link"]}>
            Nos chevaux
          </Link>
          <Link href="/galerie" className={styles["footer-link"]}>
            Galerie
          </Link>
          <Link href="/contact" className={styles["footer-link"]}>
            Venir à Linlouët
          </Link>
          <p className={styles["footer-contact"]}>
            Contactez-nous : <a href="contact@elevagelinlouet.fr">contact@elevagelinlouet.fr</a>
          </p>
        </div>
        <div className={styles["legal-links"]}>
          <Link href="/mentionslegales" className={styles["footer-link"]}>
            Mentions légales
          </Link>
          <Link href="/politiqueconfidentialite" className={styles["footer-link"]}>
            Politique de confidentialité
          </Link>
          <Link href="/cookies" className={styles["footer-link"]}>
            Cookies
          </Link>
        </div>
      </div>
      <div className={styles["footer-mentions"]}>
        <p>&copy; 2026 Elevage Linlouët. Tous droits réservés. Site réalisé par Artemis Lab</p>
      </div>
    </footer>
  );
}
