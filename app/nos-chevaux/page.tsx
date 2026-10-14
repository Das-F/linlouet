import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

type HorseCardData = {
  name: string;
  image?: string;
  alt?: string;
};

const mares: HorseCardData[] = [
  {
    name: "Bohême",
    image: "/assets/images/horses/Pouliniere-Boheme/photo_boheme.jpg",
    alt: "Bohême, poulinière de l'élevage de Linlouët",
  },
  {
    name: "Bella Gloria",
  },
  {
    name: "Nazaré",
  },
];

const stallions: HorseCardData[] = [
  {
    name: "Ofensor",
    image: "/assets/images/horses/photo_etalon_ofensor.jpg",
    alt: "Ofensor, étalon sélectionné",
  },
  {
    name: "Étalon à compléter",
  },
];

const foals: HorseCardData[] = [
  {
    name: "Unice",
    image: "/assets/images/horses/Poulain-Unice/photo_unice_cabree.jpg",
    alt: "Unice, poulain de l'élevage de Linlouët",
  },
  {
    name: "Vermeer",
    image: "/assets/images/horses/Poulain-Vermeer/photo-vermeer.jpg",
    alt: "Vermeer, poulain de l'élevage de Linlouët",
  },
  {
    name: "Xaman",
    image: "/assets/images/horses/Poulain-Xaman/photo_xaman.jpg",
    alt: "Xaman, poulain de l'élevage de Linlouët",
  },
];

function HorseCard({ horse }: { horse: HorseCardData }) {
  return (
    <figure className={styles["horse-card"]}>
      <div className={styles["horse-photo-frame"]}>
        {horse.image ? (
          <img className={styles["horse-photo"]} src={horse.image} alt={horse.alt ?? horse.name} />
        ) : (
          <div className={styles["horse-photo-placeholder"]} role="img" aria-label={`Photo de ${horse.name} à ajouter`}>
            Photo à ajouter
          </div>
        )}
      </div>
      <figcaption>{horse.name}</figcaption>
    </figure>
  );
}

export default function Horses() {
  return (
    <main className={styles["horses-page"]}>
      <PageHero imageSrc="/assets/images/Boheme-1.jpg" imageAlt="Bohême, jument de l'élevage de Linlouët" title="Nos chevaux" />

      <section className={`${styles["horse-group"]} ${styles["mares-section"]}`}>
        <h2 className={styles["horse-group-title"]}>Nos poulinières</h2>
        <div className={styles["horse-card-grid"]}>
          {mares.map((horse) => (
            <HorseCard key={horse.name} horse={horse} />
          ))}
        </div>
      </section>

      <section className={`${styles["horse-group"]} ${styles["stallions-section"]}`}>
        <h2 className={styles["horse-group-title"]}>Les étalons sélectionnés</h2>
        <div className={styles["horse-card-grid"]}>
          {stallions.map((horse) => (
            <HorseCard key={horse.name} horse={horse} />
          ))}
        </div>
      </section>

      <section className={`${styles["horse-group"]} ${styles["foals-section"]}`}>
        <h2 className={styles["horse-group-title"]}>Nos poulains</h2>
        <div className={styles["horse-card-grid"]}>
          {foals.map((horse) => (
            <HorseCard key={horse.name} horse={horse} />
          ))}
        </div>
      </section>
    </main>
  );
}
