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
    image: "/assets/images/horses/Poulinieres/Boheme/photo-principale.jpg",
    alt: "Bohême de la Roche, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bohême de la Roche, par Samurai SS x Lena Menezes par Visquilho",
  },
  {
    slug: "bela-gloria",
    name: "Bela Gloria de Manolo",
    image: "/assets/images/horses/Poulinieres/BelaGloria/photo-principale.jpg",
    alt: "Bela Gloria de Manolo, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Bela Gloria de Manolo par Agua-Viva CSM x Teara.",
  },
  {
    slug: "nazare",
    name: "Nazaré Da Sernadinha",
    image: "/assets/images/horses/Poulinieres/Nazare/photo-principale.jpg",
    alt: "Nazaré Da Sernadinha, poulinière de l'élevage de Linlouët",
    category: "mare",
    description: "Nazaré Da Sernadinha, par Spartacus x Diolinda.",
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
  },
  {
    slug: "imperador",
    name: "Imperador LBA",
    image: "/assets/images/horses/Etalons/Imperador-LBA/photo-principale.jpg",
    alt: "Imperador LBA, étalon sélectionné",
    category: "stallion",
    description: "Fiche d'Imperador LBA à compléter.",
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
  },
  {
    slug: "vermeer",
    name: "Vermeer LR",
    image: "/assets/images/horses/Poulains/Vermeer/photo-principale.jpg",
    alt: "Vermeer LR, poulain de l'élevage de Linlouët",
    category: "foal",
    description: "Vermeer LR, par Imperador LBA x Bela Gloria de Manolo par Agua Viva CSM, né en 2025.",
  },
  {
    slug: "xaman",
    name: "Xaman de Linlouët",
    image: "/assets/images/horses/Poulains/Xaman/photo-principale.jpg",
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
