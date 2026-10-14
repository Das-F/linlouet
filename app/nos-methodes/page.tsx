import styles from "./page.module.css";
import PageHero from "@/components/PageHero/PageHero";

export default function Methods() {
  return (
    <section className={styles["methods-page-section"]}>
      <PageHero imageSrc="/assets/images/methods/horses-landscape.jpg" imageAlt="Photo de l'élevage de Linlouët" title="Nos méthodes" />
      <div className={styles["methods-text"]}>
        <h3>Notre approche</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, nibh et sagittis aliquet, dolor velit egestas metus, at hendrerit risus purus nec quam.</p>
      </div>
    </section>
  );
}
