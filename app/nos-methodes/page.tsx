import styles from "./page.module.css";
import PageHero from "@/components/PageHero/PageHero";

export default function Methods() {
  return (
    <section className={styles["methods-page-section"]}>
      <PageHero imageSrc="/assets/images/methods/horses-landscape.jpg" imageAlt="Photo de l'élevage de Linlouët" title="Nos méthodes" />
      <div className={styles["methods-text"]}>
        <h2>Les 3F : Friends, Forage, Freedom</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate rutrum erat, eget lacinia sem commodo non. Donec ut condimentum erat. Pellentesque eleifend libero non ex lacinia, quis volutpat arcu tincidunt. Nunc purus dolor, vulputate ac ullamcorper sed, ornare a libero.</p>
        <p>Nulla sit amet dui ullamcorper, porttitor velit ac, placerat risus. Etiam felis risus, tempor posuere dolor nec, aliquet interdum lacus. Cras laoreet fringilla libero, ut viverra mi molestie rhoncus. Nulla efficitur, odio vitae varius pulvinar, sem erat iaculis dolor, eu ullamcorper erat mi ac urna.</p>
        <p>Praesent dictum ligula vehicula nisl consequat, vitae porttitor quam ornare. Nunc tortor tellus, blandit ac dui at, elementum dictum neque. Curabitur tempus turpis sed laoreet facilisis. Sed pharetra ex vel diam mollis tristique. Mauris sed sem nunc. Cras at condimentum est, ac congue nisi.</p>
      </div>
    </section>
  );
}
