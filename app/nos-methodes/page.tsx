import styles from "./page.module.css";
import PageHero from "@/components/PageHero/PageHero";

export default function Methods() {
  return (
    <section className={styles["methods-page-section"]}>
      <PageHero imageSrc="/assets/images/methods/horses-landscape.jpg" imageAlt="Photo de l'élevage de Linlouët" title="Nos méthodes" />
      <div className={styles["methods-text"]}>
        <h2>Les 3F : Friends, Forage, Freedom</h2>
        <p>À l’Élevage de Linlouët, nous pensons que la qualité d’un cheval ne se construit pas uniquement à travers sa génétique, son modèle ou ses aptitudes. Elle se construit aussi dans les conditions dans lesquelles il grandit.</p>
        <p>
          C’est pourquoi notre manière d’élever s’appuie sur le principe des <strong>3F : Friends, Forage, Freedom — des congénères, du fourrage et de la liberté.</strong>
        </p>
        <p>Ce concept a été formulé en 2012 par la comportementaliste équine Lauren Fraser, pour résumer trois besoins fondamentaux du cheval : pouvoir entretenir de véritables relations sociales avec ses congénères, disposer largement d’une alimentation à base de fibres et pouvoir se déplacer librement et exercer des choix dans son environnement.</p>
        <img className={styles["methods-img"]} src="/assets/images/methods/horses-landscape.jpg" alt="Photo de l'élevage de Linlouët" />
      </div>
      <div className={styles["methods-text"]}>
        <h3>Friends — Vivre avec d’autres chevaux</h3>
        <p>Le cheval est une espèce profondément sociale.</p>
        <p>
          Voir d’autres chevaux ne suffit pas toujours : il a besoin, lorsque les conditions le permettent, de pouvoir <strong>interagir réellement avec eux</strong>, créer des affinités, jouer, se toiletter mutuellement, se reposer à proximité et apprendre les codes sociaux propres à son espèce.
        </p>
        <p>À Linlouët, nos poulains grandissent donc au contact d’autres chevaux. Leur mère constitue leur premier repère, mais leur univers ne s’arrête pas à la relation mère-poulain : ils découvrent progressivement la vie sociale et les interactions avec leurs congénères.</p>
        <p>
          Nous considérons cet apprentissage comme une véritable composante de l’élevage. Avant de demander à un cheval d’établir une relation sereine avec l’être humain, nous voulons lui avoir permis d’apprendre pleinement à <strong>être un cheval</strong>.
        </p>
        <img className={styles["methods-img"]} src="/assets/images/methods/horses-landscape.jpg" alt="Photo de l'élevage de Linlouët" />
      </div>
      <div className={styles["methods-text"]}>
        <h3>Forage — Respecter une physiologie faite pour manger presque continuellement</h3>
        <p>Le cheval est un herbivore adapté à l'ingestion répétée de petites quantités de végétaux au cours de la journée.</p>
        <p>
          Le <strong>fourrage</strong> ne répond donc pas uniquement à un besoin nutritionnel. Le temps passé à rechercher, choisir et consommer sa nourriture constitue également une part essentielle de son répertoire comportemental.
        </p>
        <p>Herbe et fourrages occupent ainsi une place centrale dans la vie de nos chevaux. Selon les saisons et les ressources disponibles, nous adaptons évidemment leur alimentation à leur âge, à leur état physiologique et à leurs besoins particuliers, mais avec la volonté de conserver autant que possible une alimentation riche en fibres et répartie dans le temps.</p>
        <img className={styles["methods-img"]} src="/assets/images/methods/horses-landscape.jpg" alt="Photo de l'élevage de Linlouët" />
      </div>
      <div className={styles["methods-text"]}>
        <h3>Freedom — Pouvoir bouger… et pouvoir choisir</h3>
        <p>La liberté ne signifie pas simplement « sortir quelques heures ».</p>
        <p>
          Elle désigne la possibilité pour le cheval de <strong>se déplacer spontanément</strong>, d’explorer son environnement, de rejoindre ou de quitter un congénère, de choisir un lieu de repos ou d’alimentation et, plus largement, de conserver une part d’initiative dans sa propre vie.
        </p>
        <p>C’est une dimension que nous jugeons particulièrement importante pendant la croissance.</p>
        <p>Nos poulains vivent dehors et disposent d’espace pour marcher, trotter, galoper, jouer, se reposer et expérimenter naturellement leur corps. Le mouvement n’est pas seulement quelque chose que nous leur demanderons plus tard sous la selle : il appartient d’abord au cheval.</p>
        <img className={styles["methods-img"]} src="/assets/images/methods/horses-landscape.jpg" alt="Photo de l'élevage de Linlouët" />
      </div>
      <div className={styles["methods-text"]}>
        <h3>Une philosophie confortée par la recherche</h3>
        <p>Les 3F ne sont aujourd’hui plus seulement un principe intuitif d’élevage.</p>
        <p>
          En 2024, <strong>Romane Phelipon, Noémie Hennes, Alice Ruet, Alexia Bret-Morel, Aleksandra Górecka-Bruzda et Léa Lansade</strong> ont étudié les conditions de vie de chevaux de sport de haut niveau. Leur travail montre qu’un meilleur accès au fourrage, à la liberté de mouvement et aux interactions sociales est associé à de meilleurs indicateurs de bien-être. Surtout, leur étude montre que le respect de ces besoins reste compatible avec une carrière sportive de haut niveau.
        </p>
        <p>
          En 2026,<strong> Wendy Watson, Jill R. D. MacKay et Cathy Dwyer</strong>, de l’Université d’Édimbourg et du SRUC, ont étudié les pratiques de gestion de plus de 1 500 chevaux. Les chevaux bénéficiant des conditions les plus proches des 3F présentaient significativement moins de problèmes rapportés concernant notamment la santé digestive, la locomotion, la manipulation ou certains comportements sociaux.
        </p>
        <p>Ces travaux rejoignent aujourd’hui les recommandations de World Horse Welfare, qui présente les amis, le fourrage et la liberté comme trois besoins essentiels d’une vie adaptée à l’espèce cheval.</p>
      </div>
      <div className={styles["methods-text"]}>
        <h3>Elever pour demain, respecter aujourd'hui</h3>
        <p>Les 3F ne sont aujourd’hui plus seulement un principe intuitif d’élevage.</p>
        <p>
          En 2024, <strong>Romane Phelipon, Noémie Hennes, Alice Ruet, Alexia Bret-Morel, Aleksandra Górecka-Bruzda et Léa Lansade</strong> ont étudié les conditions de vie de chevaux de sport de haut niveau. Leur travail montre qu’un meilleur accès au fourrage, à la liberté de mouvement et aux interactions sociales est associé à de meilleurs indicateurs de bien-être. Surtout, leur étude montre que le respect de ces besoins reste compatible avec une carrière sportive de haut niveau.
        </p>
        <p>
          En 2026,<strong> Wendy Watson, Jill R. D. MacKay et Cathy Dwyer</strong>, de l’Université d’Édimbourg et du SRUC, ont étudié les pratiques de gestion de plus de 1 500 chevaux. Les chevaux bénéficiant des conditions les plus proches des 3F présentaient significativement moins de problèmes rapportés concernant notamment la santé digestive, la locomotion, la manipulation ou certains comportements sociaux.
        </p>
        <p>Ces travaux rejoignent aujourd’hui les recommandations de World Horse Welfare, qui présente les amis, le fourrage et la liberté comme trois besoins essentiels d’une vie adaptée à l’espèce cheval.</p>
      </div>
      <div className={styles["methods-text"]}>
        <h4>Références</h4>
        <p>Fraser, L. (2012). The Horse’s 3 F’s: Friends, Forage, Freedom.</p>
        <p>Phelipon, R., Hennes, N., Ruet, A., Bret-Morel, A., Górecka-Bruzda, A. & Lansade, L. (2024). Forage, freedom of movement, and social interactions remain essential fundamentals for the welfare of high-level sport horses. Frontiers in Veterinary Science, 11, 1504116.</p>
        <p>Watson, W., MacKay, J. R. D. & Dwyer, C. (2026). Friends, forage, freedom: A cluster analysis investigating horse management styles and welfare in the UK and Ireland. Animal Welfare, 35, e15.</p>
        <p>World Horse Welfare. The 3Fs – Friends, forage and freedom.</p>
      </div>
    </section>
  );
}
