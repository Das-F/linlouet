import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../page.module.css";
import { allHorses, categoryLabels, getHorseBySlug } from "../horses";

type HorsePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allHorses.map((horse) => ({
    slug: horse.slug,
  }));
}

export async function generateMetadata({ params }: HorsePageProps) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);

  if (!horse) {
    return {
      title: "Cheval introuvable",
    };
  }

  return {
    title: `${horse.name} | Nos chevaux`,
    description:
      horse.alt ??
      `Découvrez ${horse.name}, ${categoryLabels[horse.category].toLowerCase()} de l'élevage de Linlouët.`,
  };
}

export default async function HorsePage({ params }: HorsePageProps) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);

  if (!horse) {
    notFound();
  }

  return (
    <main className={styles["horses-page"]}>
      <PageHero
        imageSrc={horse.image ?? "/assets/images/Boheme-1.jpg"}
        imageAlt={horse.alt ?? horse.name}
        title={horse.name}
      />

      <section className={styles["horse-group"]}>
        <div className={styles["horse-detail"]}>
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

          <div className={styles["horse-detail-content"]}>
            <p className={styles["horse-detail-category"]}>{categoryLabels[horse.category]}</p>

            <h1 className={styles["horse-detail-title"]}>{horse.name}</h1>

            <p className={styles["horse-detail-description"]}>
              {horse.description ?? "Fiche en cours de rédaction."}
            </p>

            <Link className={styles["horse-back-link"]} href="/nos-chevaux">
              ← Retour à nos chevaux
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
