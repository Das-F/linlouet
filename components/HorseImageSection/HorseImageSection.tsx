"use client";

import { useEffect, useId, useState } from "react";
import styles from "./HorseImageSection.module.css";

type HorseImageSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HorseImageSection({ title, imageSrc, imageAlt }: HorseImageSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className={styles.content}>
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
      <button
        className={styles.imageButton}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Agrandir : ${imageAlt}`}
      >
        <img className={styles.image} src={imageSrc} alt={imageAlt} />
      </button>

      {isOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer l'image agrandie"
          >
            ×
          </button>
          <img className={styles.lightboxImage} src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </div>
  );
}
