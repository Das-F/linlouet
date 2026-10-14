import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-section"]}>
          <div className={styles["hero-image"]}>
            <img className={styles["hero-img"]} src="/assets/images/Boheme-1.jpg" alt="Élevage de Linlouet" />
          </div>
          <div className={styles["hero-text"]}>
            <h1>Bienvenue à Linlouët</h1>
            <h2>Elever des Pur-Sangs Lusitaniens en Bretagne, entre terre, mer et traditions vivantes.</h2>
            <div className={styles["hero-button"]}>
              <Link href="/contact" className={styles["hero-button"]}>
                Préparer une visite
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id lorem id nunc consequat imperdiet eget cursus elit. Nam id arcu rhoncus, bibendum nulla quis, egestas urna. Suspendisse bibendum metus nisl, in varius odio ultricies nec. Quisque id diam urna. Nunc laoreet tellus nunc, eu consectetur nunc egestas a.
            </p>
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
                <img className={styles["horse-img"]} src="/assets/images/horses/Pouliniere-Boheme/photo_boheme.jpg" alt="Photo poulinière Bohême" />
                <span className={styles["horses-overlay"]}>Découvrir</span>
              </div>
            </div>
          </div>
          <div className={styles["horse-item"]}>
            <div className={styles["horse-text"]}>
              <h3>Les étalons sélectionnés</h3>
            </div>
            <div className={styles["horse-card"]}>
              <div className={styles["horse-image"]}>
                <img className={styles["horse-img"]} src="/assets/images/horses/photo_etalon_ofensor.jpg" alt="Cheval 1" />
                <span className={styles["horses-overlay"]}>Découvrir</span>
              </div>
            </div>
          </div>
          <div className={styles["horse-item"]}>
            <div className={styles["horse-text"]}>
              <h3>Nos poulains</h3>
            </div>
            <div className={styles["horse-card"]}>
              <div className={styles["horse-image"]}>
                <img className={styles["horse-img"]} src="/assets/images/horses/vermeer.jpg" alt="Cheval 1" />
                <span className={styles["horses-overlay"]}>Découvrir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["news-section"]}>
        <div className={styles["news-content"]}>
          <h2>Actualités de Linlouët</h2>
          <div className={styles["news-img-container"]}>
            <img className={styles["news-img"]} src="/assets/images/horses/Poulain-Unice/photo_unice_cabree.jpg" alt="Photo Poulain Unice dans son enclos" />
            <div className={styles["social-links"]}>
              <div className={styles["social-link"]}>
                <p>Elevage de Linlouët</p>
                <img className={`${styles["social-icon"]} ${styles["social-icon-facebook"]}`} src="/assets/images/social_medias/logo-facebook.png" alt="Lien vers la page Facebook de l'élevage" />
              </div>
              <div className={styles["social-link"]}>
                <p>elevagedelinlouet</p>
                <img className={`${styles["social-icon"]} ${styles["social-icon-instagram"]}`} src="/assets/images/social_medias/logo-instagram.png" alt="Lien vers la page Instagram de l'élevage" />
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
