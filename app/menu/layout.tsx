
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu & Carte - Fondues, Grillades & Spécialités",
  description: "Découvrez notre menu gastronomique : fondues traditionnelles, grillades premium, tapas gourmandes et nos créations signature. Cuisine raffinée avec ingrédients frais et locaux à Lachute.",
  keywords: "menu restaurant Lachute, carte Bouillon 16, fondue traditionnelle, grillades premium, tapas gourmandes, spécialités maison, cuisine raffinée, ingrédients frais locaux, prix menu restaurant",
  openGraph: {
    title: "Menu LeBouillon16 - Fondues, Grillades & Spécialités Gastronomiques",
    description: "Découvrez notre carte gastronomique : fondues traditionnelles, grillades premium sur pierre volcanique, tapas et créations signature du chef.",
    images: [
      {
        url: "/plat-grillade-optimized.webp",
        width: 1200,
        height: 630,
        alt: "Grillade premium du Bouillon 16 - Spécialité gastronomique"
      }
    ]
  },
  alternates: {
    canonical: "/menu"
  }
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
