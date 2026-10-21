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
    description: horse.alt ?? `Découvrez ${horse.name}, ${categoryLabels[horse.category].toLowerCase()} de l'élevage de Linlouët.`,
  };
}

export default async function HorsePage({ params }: HorsePageProps) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);

  if (!horse) {
    notFound();
  }

  const description = horse.description ?? "Fiche en cours de rédaction.";
  const relatedHorse = horse.relatedHorseSlug ? getHorseBySlug(horse.relatedHorseSlug) : undefined;

  return (
    <main className={styles["horses-page"]}>
      <PageHero imageSrc={horse.image ?? "/assets/images/Boheme-1.jpg"} imageAlt={horse.alt ?? horse.name} title={horse.name} />

      <section className={styles["horse-group"]}>
        <div className={styles["horse-detail"]}>
          <div className={styles["horse-detail-content"]}>
            <h2>Description</h2>
            {description.split(/\n\s*\n/).map((paragraph, index) => (
              <p className={styles["horse-detail-description"]} key={index}>
                {paragraph}
              </p>
            ))}

            {relatedHorse && (
              <Link className={styles["horse-back-link"]} href={`/nos-chevaux/${relatedHorse.slug}`}>
                Découvrir la fiche de {relatedHorse.name}
              </Link>
            )}

            <Link className={styles["horse-back-link"]} href="/nos-chevaux">
              ← Retour à nos chevaux
            </Link>
          </div>
        </div>
      </section>
      <section className={styles["horse-gallery"]}></section>
    </main>
  );
}
