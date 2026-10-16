import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";
import { mares, stallions, foals, type Horse } from "./horses";

function HorseCard({ horse }: { horse: Horse }) {
  return (
    <Link href={`/nos-chevaux/${horse.slug}`} className={styles["horse-card-link"]}>
      <figure className={styles["horse-card"]}>
        <div className={styles["horse-photo-frame"]}>
          {horse.image ? (
            <img
              className={styles["horse-photo"]}
              src={horse.image}
              alt={horse.alt ?? horse.name}
            />
          ) : (
            <div
              className={styles["horse-photo-placeholder"]}
              role="img"
              aria-label={`Photo de ${horse.name} à ajouter`}
            >
              Photo à ajouter
            </div>
          )}
        </div>
        <figcaption>{horse.name}</figcaption>
      </figure>
    </Link>
  );
}

export default function Horses() {
  return (
    <main className={styles["horses-page"]}>
      <PageHero
        imageSrc="/assets/images/Boheme-1.jpg"
        imageAlt="Bohême, jument de l'élevage de Linlouët"
        title="Nos chevaux"
      />

      <section className={`${styles["horse-group"]} ${styles["mares-section"]}`}>
        <h2 className={styles["horse-group-title"]} id="poulinieres">
          Nos poulinières
        </h2>
        <div className={styles["horse-card-grid"]}>
          {mares.map((horse) => (
            <HorseCard key={horse.slug} horse={horse} />
          ))}
        </div>
      </section>

      <section className={`${styles["horse-group"]} ${styles["stallions-section"]}`}>
        <h2 className={styles["horse-group-title"]} id="etalons">
          Les étalons sélectionnés
        </h2>
        <div className={styles["horse-card-grid"]}>
          {stallions.map((horse) => (
            <HorseCard key={horse.slug} horse={horse} />
          ))}
        </div>
      </section>

      <section className={`${styles["horse-group"]} ${styles["foals-section"]}`}>
        <h2 className={styles["horse-group-title"]} id="poulains">
          Nos poulains
        </h2>
        <div className={styles["horse-card-grid"]}>
          {foals.map((horse) => (
            <HorseCard key={horse.slug} horse={horse} />
          ))}
        </div>
      </section>
    </main>
  );
}
