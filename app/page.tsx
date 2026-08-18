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
            <img className={styles["about-img"]} src="/assets/images/linlouet-portrait.jpg" alt="Portrait des éleveurs de Linlouet" />
          </div>
          <div className={styles["about-text"]}>
            <p className={styles["about-text-intro"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium enim, et gravida turpis. Donec eleifend quam et tellus semper laoreet. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod. Vestibulum sed imperdiet dolor. Aliquam gravida, ante in sollicitudin semper, turpis ante interdum nisi, vitae euismod augue eros sed lacus. Ut pharetra efficitur dictum. Morbi auctor sem quis elit ullamcorper porta. In a aliquet orci. Integer eleifend ipsum lorem, tincidunt venenatis ante finibus sed. Maecenas accumsan tincidunt justo, non feugiat tortor ullamcorper et. Vivamus a vulputate sem. Cras a quam scelerisque, dapibus mi vel, aliquam est. Aenean semper rutrum felis. Vestibulum cursus tortor malesuada eros finibus, nec tincidunt purus
              maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id lorem id nunc consequat imperdiet eget cursus elit. Nam id arcu rhoncus, bibendum nulla quis, egestas urna. Suspendisse bibendum metus nisl, in varius odio ultricies nec. Quisque id diam urna. Nunc laoreet tellus nunc, eu consectetur nunc egestas a. Suspendisse potenti. Sed id tincidunt urna. Integer purus nisi, ultricies at posuere et, dictum vitae ex.
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
          <div className={styles["horse-card"]}>
            <img className={styles["horse-img"]} src="/assets/images/horses/Boheme.jpg" alt="Cheval 1" />
            <div className={styles["horse-text"]}>
              <h3>Nom du cheval 1</h3>
              <p>Description du cheval 1...</p>
              <div className={styles["horses-button"]}>Découvrir</div>
            </div>
          </div>
          <div className={styles["horse-card"]}>
            <img className={styles["horse-img"]} src="/assets/images/horses/xaman.jpg" alt="Cheval 1" />
            <div className={styles["horse-text"]}>
              <h3>Nom du cheval 2</h3>
              <p>Description du cheval 2...</p>
              <div className={styles["horses-button"]}>Découvrir</div>
            </div>
          </div>
          <div className={styles["horse-card"]}>
            <img className={styles["horse-img"]} src="/assets/images/horses/vermeer.jpg" alt="Cheval 1" />
            <div className={styles["horse-text"]}>
              <h3>Nom du cheval 3</h3>
              <p>Description du cheval 3...</p>
              <div className={styles["horses-button"]}>Découvrir</div>
            </div>
          </div>
        </div>
        <div className={styles["horses-title"]}>
          <h3>Notre philosophie de selection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod. Vestibulum sed imperdiet dolor. Aliquam gravida, ante in sollicitudin semper, turpis ante interdum nisi, vitae euismod augue eros sed lacus. Ut pharetra efficitur dictum. Morbi auctor sem quis elit ullamcorper porta. In a aliquet orci. Integer eleifend ipsum lorem, tincidunt venenatis ante finibus sed. Maecenas accumsan tincidunt justo, non feugiat tortor ullamcorper et. Vivamus a vulputate sem. Cras a quam scelerisque, dapibus mi vel, aliquam est. Aenean semper rutrum felis. Vestibulum cursus tortor malesuada eros finibus, nec tincidunt purus maximus.</p>
        </div>
      </section>

      <section className={styles["news-section"]}>
        <div className={styles["news-content"]}>
          <h2>La Vie à Linlouët</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles["news-cards"]}>
            <div className={styles["news-card"]}>
              <img className={styles["news-img"]} src="/assets/images/news/RS-1.png" alt="Cheval 1" />
              <div className={styles["news-button"]}>En voir plus</div>
            </div>
            <div className={styles["news-card"]}>
              <img className={styles["news-img"]} src="/assets/images/news/RS-2.png" alt="Cheval 1" />
              <div className={styles["news-button"]}>En voir plus</div>
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
