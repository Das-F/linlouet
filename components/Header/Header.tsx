"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <Link href="/" className={styles["brand-link"]} onClick={closeMenu}>
          <img src="/assets/images/Logos/logo_linlouet_header.png" className={styles.logo} alt="Logo de l'Élevage de Linlouet" />
        </Link>
        <button
          className={styles["menu-toggle"]}
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className={styles["menu-icon"]} viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
        <nav
          className={`${styles["header-nav"]} ${menuOpen ? styles["header-nav-open"] : ""}`}
          id="header-navigation"
          aria-label="Navigation principale"
        >
          <div className={styles["nav-links"]}>
            <Link href="/nos-chevaux" className={styles["nav-link"]} onClick={closeMenu}>
              Nos chevaux
            </Link>
            <Link href="/nos-methodes" className={styles["nav-link"]} onClick={closeMenu}>
              Nos méthodes
            </Link>
          </div>
          <div className={styles["nav-links"]}>
            <Link href="/contact" className={styles["nav-link"]} onClick={closeMenu}>
              Contact
            </Link>
            <div className={styles.languages}>
              <Link href="/fr" className={styles["lang-link"]} onClick={closeMenu}>
                FR
              </Link>
              <span className={styles["span"]}>|</span>
              <Link href="/en" className={styles["lang-link"]} onClick={closeMenu}>
                EN
              </Link>
              <span className={styles["span"]}>|</span>
              <Link href="/de" className={styles["lang-link"]} onClick={closeMenu}>
                DE
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
