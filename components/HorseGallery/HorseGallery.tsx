"use client";

import { useEffect, useState } from "react";
import styles from "./HorseGallery.module.css";

type HorseGalleryProps = {
  horseName: string;
  images: string[];
};

export default function HorseGallery({ horseName, images }: HorseGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex((index) => (index - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight") {
        setCurrentIndex((index) => (index + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  if (images.length === 0) {
    return null;
  }

  const imageAlt = `${horseName} — photo ${currentIndex + 1} sur ${images.length}`;

  return (
    <>
      <div className={styles.carousel} role="region" aria-label={`Galerie photo de ${horseName}`}>
        {images.length > 1 && (
          <button
            className={styles.arrow}
            type="button"
            onClick={showPrevious}
            aria-label="Photo précédente"
          >
            ‹
          </button>
        )}

        <button
          className={styles.photoButton}
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Agrandir la photo ${currentIndex + 1} de ${horseName}`}
        >
          <img className={styles.photo} src={images[currentIndex]} alt={imageAlt} />
        </button>

        {images.length > 1 && (
          <button
            className={styles.arrow}
            type="button"
            onClick={showNext}
            aria-label="Photo suivante"
          >
            ›
          </button>
        )}
      </div>

      {lightboxOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo de ${horseName}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxOpen(false);
            }
          }}
        >
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fermer la photo agrandie"
          >
            ×
          </button>
          {images.length > 1 && (
            <button
              className={`${styles.arrow} ${styles.lightboxArrow}`}
              type="button"
              onClick={showPrevious}
              aria-label="Photo précédente"
            >
              ‹
            </button>
          )}
          <img className={styles.lightboxPhoto} src={images[currentIndex]} alt={imageAlt} />
          {images.length > 1 && (
            <button
              className={`${styles.arrow} ${styles.lightboxArrow}`}
              type="button"
              onClick={showNext}
              aria-label="Photo suivante"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
