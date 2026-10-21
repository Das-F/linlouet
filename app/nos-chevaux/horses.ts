export type HorseCategory = "mare" | "stallion" | "foal";

export type Horse = {
  slug: string;
  name: string;
  image?: string;
  alt?: string;
  gallery?: string[];
  genealogy?: string;
  ponctuation?: string;
  category: HorseCategory;
  description?: string;
  relatedHorseSlug?: string;
};

export const mares: Horse[] = [
  {
    slug: "boheme",
    name: "Bohême de la Roche",
    image: "/assets/images/horses/Poulinieres/Boheme/photo-principale.jpg",
    alt: "Bohême de la Roche, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bohême de la Roche (Samuraï SS x Lena Menezes par Visquilho), 1,55m, grise, confirmée à 67, 26 points à l'APSL.\n\nBohême est une jument Lusitanienne au tempérament exceptionnel, dans le sang, douce, sensible et très proche de son humaine.\n\nMère d'Unice de Linlouët, elle transmet à ses produits son élégance, son courage, sa finesse et son caractère exclusif de partenariat avec l'humain.",
    gallery: ["/assets/images/horses/Poulinieres/Boheme/photo-principale.jpg", "/assets/images/horses/Poulinieres/Boheme/photo-gallery-1.jpg", "/assets/images/horses/Poulinieres/Boheme/photo-gallery-2.jpg", "/assets/images/horses/Poulinieres/Boheme/photo-gallery-3.jpg"],
    genealogy: "/assets/images/horses/Poulinieres/Boheme/photo-genealogy.png",
  },
  {
    slug: "bela-gloria",
    name: "Bela Gloria de Manolo",
    image: "/assets/images/horses/Poulinieres/BelaGloria/photo-principale.jpg",
    alt: "Bela Gloria de Manolo, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bela Gloria de Manolo (Agua-Viva CSM x Teara CSM par Imperio), jument isabelle, 1,73m, ponctuée à 71 pts APSL.\n\nBela Gloria occupe une place essentielle à l'élevage. Sa production se distingue par des qualités qu'elle transmet avec constance : le cadre et la souplesse, l'intelligence, la fonctionnalité et un galop de qualité.\n\nElle est notamment mère de H-Nefertiti de Manolo (par Quarteto Da Broa), jument de dressage IDR 105, finaliste SHF à 5 ans et ayant évolué jusqu'en Amateur 2 Grand Prix, de Rajput de Moïta, aujourd'hui propriété de Bartabas au sein de l'Académie Equestre de Versailles, ainsi que Vermeer LR, né en 2025 et exporté au sevrage en Autriche.",
    gallery: ["/assets/images/horses/Poulinieres/BelaGloria/photo-principale.jpg", "/assets/images/horses/Poulinieres/BelaGloria/photo-gallery-1.jpg", "/assets/images/horses/Poulinieres/BelaGloria/photo-gallery-2.jpg", "/assets/images/horses/Poulinieres/BelaGloria/photo-gallery-3.jpg"],
    genealogy: "/assets/images/horses/Poulinieres/BelaGloria/photo-genealogy.png",
    ponctuation: "/assets/images/horses/Poulinieres/BelaGloria/photo-ponctuation.png",
  },
  {
    slug: "nazare",
    name: "Nazaré Da Sernadinha",
    image: "/assets/images/horses/Poulinieres/Nazare/photo-principale.jpg",
    alt: "Nazaré Da Sernadinha, poulinière de l'élevage de Linlouët",
    category: "mare",
    description:
      "Nazaré da Sernadinha, Spartacus x Diolinda par Garibaldi, est une jument PSL de 1,63 m, baie, que nous avons sélectionnée pour la qualité de sa locomotion, son tempérament extrêmement serein et la régularité de sa production.\n\nConfirmée au stud-book APSL avec l’excellente note de 74,26 points, elle obtient 7,67/10 pour ses allures, avec 8 au pas, 7 au trot et 8 au galop, ainsi qu’un 8 en impression générale. Elle présente une locomotion ample et fonctionnelle, avec notamment un pas et un galop de grande qualité.\n\nSon mental constitue également un élément essentiel de notre sélection. Nazaré est une jument stable, confiante et particulièrement agréable dans la relation à l’homme. Elle transmet cette qualité à ses poulains, chez lesquels nous retrouvons gentillesse, confiance et équilibre, des dispositions que nous considérons comme fondamentales pour produire des chevaux de sport agréables à former et à vivre.\n\nSa valeur de reproductrice est déjà bien établie : deux de ses filles ont été confirmées au stud-book APSL avec respectivement 73 et 76 points, témoignant de la régularité et de la qualité de sa production.\n\nNazaré a également obtenu le label France Dressage avec 74,14 points.\n\nNous avons eu le privilège de faire naître son produit Xaman de Linlouët par Ofensor Mac, sélectionné pour la finale France Dressage.\n\nÀ Linlouët, nous avons choisi de poursuivre cette lignée pour réunir trois qualités qui sont au cœur de notre sélection : la locomotion, le mental et la régularité de la production, tout en recherchant par nos croisements davantage de chic et de modernité pour le Lusitanien de sport.",
    relatedHorseSlug: "xaman",
    gallery: ["/assets/images/horses/Poulinieres/Nazare/photo-principale.jpg", "/assets/images/horses/Poulinieres/Nazare/photo-gallery-1.jpg"],
    genealogy: "/assets/images/horses/Poulinieres/Nazare/photo-genealogy.png",
    ponctuation: "/assets/images/horses/Poulinieres/Nazare/photo-ponctuation.png",
  },
];

export const stallions: Horse[] = [
  {
    slug: "ofensor",
    name: "Ofensor MAC",
    image: "/assets/images/horses/Etalons/Ofensor-MAC/photo-principale.jpg",
    alt: "Ofensor MAC, étalon sélectionné",
    category: "stallion",
    description: "Fiche d'Ofensor MAC à compléter.",
    gallery: ["/assets/images/horses/Etalons/Ofensor-MAC/photo-principale.jpg"],
    genealogy: "/assets/images/horses/Etalons/Ofensor-MAC/photo-genealogy.png",
  },
  {
    slug: "imperador",
    name: "Imperador LBA",
    image: "/assets/images/horses/Etalons/Imperador-LBA/photo-principale.jpg",
    alt: "Imperador LBA, étalon sélectionné",
    category: "stallion",
    description: "Fiche d'Imperador LBA à compléter.",
    gallery: ["/assets/images/horses/Etalons/Imperador-LBA/photo-principale.jpg"],
    genealogy: "/assets/images/horses/Etalons/Imperador-LBA/photo-genealogy.png",
  },
];

export const foals: Horse[] = [
  {
    slug: "unice",
    name: "Unice de Linlouët",
    image: "/assets/images/horses/Poulains/Unice/photo-principale.jpg",
    alt: "Unice de Linlouët, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Unice de Linlouët, par Imperador LBA x Bohême de la Roche par Samurai SS, née en 2024.",
    gallery: ["/assets/images/horses/Poulains/Unice/photo-principale.jpg", "/assets/images/horses/Poulains/Unice/photo-gallery-1.jpg", "/assets/images/horses/Poulains/Unice/photo-gallery-2.jpg", "/assets/images/horses/Poulains/Unice/photo-gallery-3.jpg", "/assets/images/horses/Poulains/Unice/photo-gallery-4.jpg", "/assets/images/horses/Poulains/Unice/photo-gallery-5.jpg"],
    genealogy: "/assets/images/horses/Poulains/Unice/photo-genealogy.png",
  },
  {
    slug: "vermeer",
    name: "Vermeer LR",
    image: "/assets/images/horses/Poulains/Vermeer/photo-principale.jpg",
    alt: "Vermeer LR, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Vermeer LR, par Imperador LBA x Bela Gloria de Manolo par Agua Viva CSM, né en 2025.",
    gallery: ["/assets/images/horses/Poulains/Vermeer/photo-principale.jpg"],
    genealogy: "/assets/images/horses/Poulains/Vermeer/photo-genealogy.png",
    ponctuation: "/assets/images/horses/Poulains/Vermeer/photo-ponctuation.png",
  },
  {
    slug: "xaman",
    name: "Xaman de Linlouët",
    image: "/assets/images/horses/Poulains/Xaman/photo-principale.jpg",
    alt: "Xaman de Linlouët, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Xaman de Linlouët, par Ofensor MAC x Nazaré Da Sernadinha par Spartacus, né en 2026.",
    gallery: ["/assets/images/horses/Poulains/Xaman/photo-principale.jpg", "/assets/images/horses/Poulains/Xaman/photo-gallery-1.jpg"],
    genealogy: "/assets/images/horses/Poulains/Xaman/photo-genealogy.png",
  },
];

export const allHorses = [...mares, ...stallions, ...foals];

export const categoryLabels: Record<HorseCategory, string> = {
  mare: "Poulinière",
  stallion: "Étalon",
  foal: "Poulain",
};

export function getHorseBySlug(slug: string) {
  return allHorses.find((horse) => horse.slug === slug);
}
