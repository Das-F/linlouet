import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import HorseGallery from "@/components/HorseGallery/HorseGallery";
import HorseImageSection from "@/components/HorseImageSection/HorseImageSection";
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
          </div>
        </div>
      </section>
      {horse.gallery && horse.gallery.length > 0 && (
        <section className={styles["horse-gallery"]} aria-labelledby="horse-gallery-title">
          <h2 className={styles["horse-gallery-title"]} id="horse-gallery-title">
            Galerie photo
          </h2>
          <HorseGallery horseName={horse.name} images={horse.gallery} />
        </section>
      )}
      {horse.genealogy && (
        <section className={styles["genealogy-section"]} aria-label="Arbre généalogique">
          <HorseImageSection title="Arbre généalogique" imageSrc={horse.genealogy} imageAlt={`Arbre généalogique de ${horse.name}`} />
        </section>
      )}
      {horse.ponctuation && (
        <section className={styles["punctuation-gallery"]} aria-label="Ponctuation">
          <HorseImageSection title="Ponctuation" imageSrc={horse.ponctuation} imageAlt={`Ponctuation de ${horse.name}`} />
        </section>
      )}
      <Link className={styles["horse-back-link"]} href="/nos-chevaux">
        ← Retour à nos chevaux
      </Link>
    </main>
  );
}
