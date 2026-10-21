import Link from "next/link";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  action?: {
    href: string;
    label: string;
  };
  variant?: "page" | "home";
};

export default function PageHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  action,
  variant = "page",
}: PageHeroProps) {
  return (
    <div className={`${styles["page-hero"]} ${variant === "home" ? styles["home-hero"] : ""}`}>
      <img
        className={`${styles["page-hero-image"]} ${variant === "home" ? styles["home-hero-image"] : ""}`}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={`${styles["page-hero-title"]} ${variant === "home" ? styles["home-hero-content"] : ""}`}>
        <h1>{title}</h1>
        {subtitle && <p className={styles["home-hero-subtitle"]}>{subtitle}</p>}
        {action && (
          <Link className={styles["home-hero-action"]} href={action.href}>
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
