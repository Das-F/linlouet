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
    name: "Bohême de la Roche",
    image: "/assets/images/horses/Pouliniere-Boheme/photo_boheme.jpg",
    alt: "Bohême de la Roche, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bohême de la Roche, par Samurai SS x Lena Menezes par Visquilho",
  },
  {
    slug: "bela-gloria",
    name: "Bela Gloria de Manolo",
    alt: "Bela Gloria de Manolo, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bela Gloria de Manolo par Agua-Viva CSM x Teara.",
  },
  {
    slug: "nazare",
    name: "Nazaré Da Sernadinha",
    alt: "Nazaré Da Sernadinha, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Nazaré Da Sernadinha, par Spartacus x Diolinda.",
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
    name: "Unice de Linlouët",
    image: "/assets/images/horses/Poulain-Unice/photo_unice_cabree.jpg",
    alt: "Unice de Linlouët, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Unice de Linlouët, par Imperador LBA x Bohême de la Roche par Samurai SS, née en 2024.",
  },
  {
    slug: "vermeer",
    name: "Vermeer LR",
    image: "/assets/images/horses/Poulain-Vermeer/photo-vermeer.jpg",
    alt: "Vermeer LR, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Vermeer LR, par Imperador LBA x Bela Gloria de Manolo par Agua Viva CSM, né en 2025.",
  },
  {
    slug: "xaman",
    name: "Xaman de Linlouët",
    image: "/assets/images/horses/Poulain-Xaman/photo_xaman.jpg",
    alt: "Xaman de Linlouët, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Xaman de Linlouët, par Ofensor MAC x Nazaré Da Sernadinha par Spartacus, né en 2026.",
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
