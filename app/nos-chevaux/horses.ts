export type HorseCategory = "mare" | "stallion" | "foal";

export type Horse = {
  slug: string;
  name: string;
  image?: string;
  alt?: string;
  category: HorseCategory;
  description?: string;
};

export const mares: Horse[] = [
  {
    slug: "boheme",
    name: "Bohême",
    image: "/assets/images/horses/Pouliniere-Boheme/photo_boheme.jpg",
    alt: "Bohême, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Fiche de Bohême à compléter.",
  },
  {
    slug: "bella-gloria",
    name: "Bella Gloria",
    category: "mare",
    description: "Fiche de Bella Gloria à compléter.",
  },
  {
    slug: "nazare",
    name: "Nazaré",
    category: "mare",
    description: "Fiche de Nazaré à compléter.",
  },
];

export const stallions: Horse[] = [
  {
    slug: "ofensor",
    name: "Ofensor",
    image: "/assets/images/horses/photo_etalon_ofensor.jpg",
    alt: "Ofensor, étalon sélectionné",
    category: "stallion",
    description: "Fiche d'Ofensor à compléter.",
  },
  {
    slug: "etalon-a-completer",
    name: "Étalon à compléter",
    category: "stallion",
    description: "Fiche à compléter.",
  },
];

export const foals: Horse[] = [
  {
    slug: "unice",
    name: "Unice",
    image: "/assets/images/horses/Poulain-Unice/photo_unice_cabree.jpg",
    alt: "Unice, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Fiche d'Unice à compléter.",
  },
  {
    slug: "vermeer",
    name: "Vermeer",
    image: "/assets/images/horses/Poulain-Vermeer/photo-vermeer.jpg",
    alt: "Vermeer, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Fiche de Vermeer à compléter.",
  },
  {
    slug: "xaman",
    name: "Xaman",
    image: "/assets/images/horses/Poulain-Xaman/photo_xaman.jpg",
    alt: "Xaman, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Fiche de Xaman à compléter.",
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
