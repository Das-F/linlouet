import styles from "./page.module.css";
import PageHero from "@/components/PageHero/PageHero";

export default function Contact() {
  return (
    <section className={styles["contact-page-section"]}>
      <PageHero imageSrc="/assets/images/contact/st michel.jpg" imageAlt="Saint Michel de Pleyben" title="Venir à Linlouët" />
      <div className={styles["contact-text"]}>
        <h3>Bienvenue à l'élevage</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, nibh et sagittis aliquet, dolor velit egestas metus, at hendrerit risus purus nec quam.</p>
        <p>Curabitur lorem orci, pulvinar vel tortor sit amet, venenatis accumsan odio. Integer in turpis ante. Quisque vel lacus nunc. Fusce a sem sed eros congue aliquam eu vehicula lorem. Donec posuere vel orci vel dapibus. Nulla ornare, purus vel faucibus bibendum, velit ante euismod ligula, non maximus justo nibh non orci.</p>
        <p>Pellentesque ex dui, scelerisque eu egestas id, aliquam eu quam. Maecenas in ante id lacus iaculis pellentesque.</p>
      </div>
    </section>
  );
}
