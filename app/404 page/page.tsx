import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles["not-found-page"]}>
      <section className={styles["not-found-card"]} aria-labelledby="not-found-title">
        <div className={styles["not-found-photo-wrap"]}>
          <Image className={styles["not-found-photo"]} src="/assets/images/horses/Poulinieres/Boheme/photo-principale.jpg" alt="Bohême, jument de l'élevage de Linlouët dans la verdure" width={1200} height={800} sizes="(max-width: 720px) 100vw, 55vw" priority />
        </div>
        <div className={styles["not-found-content"]}>
          <p className={styles["not-found-code"]}>Erreur 404</p>
          <h1 id="not-found-title">Nous nous sommes perdus dans la prairie…</h1>
          <p className={styles["not-found-description"]}>Cette page semble s’être éloignée du chemin. Retrouvons ensemble l’élevage de Linlouët.</p>
          <Link className={styles["not-found-link"]} href="/">
            Retourner à l’élevage de Linlouët
          </Link>
        </div>
      </section>
    </main>
  );
}
