import styles from "./page.module.css";
import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";

export default function Home() {
  return (
    <div>
      <PageHero imageSrc="/assets/images/Boheme-1.jpg" imageAlt="Élevage de Linlouet" title="Bienvenue à Linlouët" subtitle="Elever des Pur-Sangs Lusitaniens en Bretagne, entre terre, mer et traditions vivantes." action={{ href: "/contact", label: "Préparer une visite" }} variant="home" />

      <section className={styles["about-section"]}>
        <div className={styles["about-title"]}>
          <h2>L'esprit de Linlouët</h2>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-image"]}>
            <img className={styles["about-img"]} src="/assets/images/photo_portrait_about.jpg" alt="Portrait des éleveurs de Linlouet" />
          </div>
          <div className={styles["about-text"]}>
            <p className={styles["about-text-intro"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium enim, et gravida turpis. Donec eleifend quam et tellus semper laoreet. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod. Vestibulum sed imperdiet dolor. Aliquam gravida, ante in sollicitudin semper, turpis ante interdum nisi, vitae euismod augue eros sed lacus. Ut pharetra efficitur dictum. Morbi auctor sem quis elit ullamcorper porta. In a aliquet orci. Integer eleifend ipsum lorem, tincidunt venenatis ante finibus sed. Maecenas accumsan tincidunt justo, non feugiat tortor ullamcorper et. Vivamus a vulputate sem. Cras a quam scelerisque, dapibus mi vel, aliquam est. Aenean semper rutrum felis. Vestibulum cursus tortor malesuada eros finibus, nec tincidunt purus
              maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id lorem id nunc consequat imperdiet eget cursus elit. Nam id arcu rhoncus, bibendum nulla quis, egestas urna.
            </p>
            <div className={styles["methods-link"]}>
              <Link href="/nos-methodes" className={styles["methods-button"]}>
                Découvrir nos méthodes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["horses-section"]}>
        <div className={styles["horses-title"]}>
          <h2>Nos chevaux</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium enim, et gravida turpis.</p>
        </div>
        <div className={styles["horses-cards"]}>
          <div className={styles["horse-item"]}>
            <div className={styles["horse-text"]}>
              <h3>Nos poulinières</h3>
            </div>
            <div className={styles["horse-card"]}>
              <div className={styles["horse-image"]}>
                <img className={styles["horse-img"]} src="/assets/images/horses/Poulinieres/Boheme/photo-principale.jpg" alt="Photo de la poulinière Bohême de la Roche" />
                <a href="/nos-chevaux#poulinieres">
                  <span className={styles["horses-overlay"]}>Découvrir</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["horse-item"]}>
            <div className={styles["horse-text"]}>
              <h3>Les étalons sélectionnés</h3>
            </div>
            <div className={styles["horse-card"]}>
              <div className={styles["horse-image"]}>
                <img className={styles["horse-img"]} src="/assets/images/horses/Etalons/Ofensor-MAC/photo-principale.jpg" alt="Photo étalon Ofensor MAC" />
                <a href="/nos-chevaux#etalons">
                  <span className={styles["horses-overlay"]}>Découvrir</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["horse-item"]}>
            <div className={styles["horse-text"]}>
              <h3>Nos poulains</h3>
            </div>
            <div className={styles["horse-card"]}>
              <div className={styles["horse-image"]}>
                <img className={styles["horse-img"]} src="/assets/images/horses/Poulains/Xaman/photo-principale.jpg" alt="Photo du poulain Xaman de Linlouët" />
                <a href="/nos-chevaux#poulains">
                  <span className={styles["horses-overlay"]}>Découvrir</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["news-section"]}>
        <div className={styles["news-content"]}>
          <h2>Actualités de Linlouët</h2>
          <div className={styles["news-img-container"]}>
            <img className={styles["news-img"]} src="/assets/images/horses/Poulains/Unice/photo-gallery-1.jpg" alt="Photo Poulain Unice dans son enclos" />
            <div className={styles["social-links"]}>
              <div className={styles["social-link"]}>
                <a href="https://www.facebook.com/profile.php?id=61564284688045" target="_blank" rel="noopener noreferrer">
                  <p>Suivez-nous sur facebook</p>
                  <img className={`${styles["social-icon"]} ${styles["social-icon-facebook"]}`} src="/assets/images/social_medias/logo-facebook.png" alt="Lien vers la page Facebook de l'élevage" />
                </a>
              </div>
              <div className={styles["social-link"]}>
                <a href="https://www.instagram.com/elevagedelinlouet/" target="_blank" rel="noopener noreferrer">
                  <p>Suivez-nous sur Instagram</p>
                  <img className={`${styles["social-icon"]} ${styles["social-icon-instagram"]}`} src="/assets/images/social_medias/logo-instagram.png" alt="Lien vers la page Instagram de l'élevage" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["contact-section"]}>
        <div className={styles["contact-content"]}>
          <h2>Venir à Linlouët</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod.</p>
          <div className={styles["contact-image-container"]}>
            <img className={styles["contact-img"]} src="/assets/images/contact/st michel.jpg" alt="Portrait des éleveurs de Linlouet" />
          </div>
          <Link href="/contact" className={styles["contact-button"]}>
            Préparer une visite
          </Link>
        </div>
      </section>
    </div>
  );
}
