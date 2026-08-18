import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles["contact-page-section"]}>
      <div className={styles["hero-contact-content"]}>
        <div className={styles["contact-img-container"]}>
          <img className={styles["contact-img"]} src="/assets/images/contact/st michel.jpg" alt="Saint Michel de Pleyben" />
          <div className={styles["contact-title-overlay"]}>
            <h2>Venir à Linlouët</h2>
          </div>
        </div>
        <div className={styles["contact-text"]}>
          <h3>Bienvenue à Linlouët</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, nibh et sagittis aliquet, dolor velit egestas metus, at hendrerit risus purus nec quam.</p>
          <p>Curabitur lorem orci, pulvinar vel tortor sit amet, venenatis accumsan odio. Integer in turpis ante. Quisque vel lacus nunc. Fusce a sem sed eros congue aliquam eu vehicula lorem. Donec posuere vel orci vel dapibus. Nulla ornare, purus vel faucibus bibendum, velit ante euismod ligula, non maximus justo nibh non orci.</p>
          <p>Pellentesque ex dui, scelerisque eu egestas id, aliquam eu quam. Maecenas in ante id lacus iaculis pellentesque.</p>
        </div>
      </div>
    </section>
  );
}
