import styles from "./PageHero.module.css";

type PageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
};

export default function PageHero({ imageSrc, imageAlt, title }: PageHeroProps) {
  return (
    <div className={styles["page-hero"]}>
      <img className={styles["page-hero-image"]} src={imageSrc} alt={imageAlt} />
      <div className={styles["page-hero-title"]}>
        <h1 className="h1">{title}</h1>
      </div>
    </div>
  );
}
