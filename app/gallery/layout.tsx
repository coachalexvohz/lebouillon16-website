
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos - Nos Plats, Terrasse & Ambiance",
  description: "Explorez notre galerie photo : nos créations culinaires, notre magnifique terrasse, l'ambiance du restaurant et l'atmosphère unique du Bouillon 16 à Lachute.",
  keywords: "photos restaurant Lachute, galerie Bouillon 16, terrasse restaurant, ambiance gastronomique, plats inspiration photos, bar restaurant, équipe restaurant photos",
  openGraph: {
    title: "Galerie LeBouillon16 - Photos de nos Plats & Terrasse",
    description: "Découvrez en images nos créations culinaires, notre magnifique terrasse et l'ambiance chaleureuse de notre restaurant gastronomique.",
    images: [
      {
        url: "/terrasse-drone-bouillon16-optimized.webp",
        width: 1200,
        height: 630,
        alt: "Terrasse du restaurant LeBouillon16 - Vue aérienne"
      },
      {
        url: "/plat-burger-optimized.webp",
        width: 1200,
        height: 630,
        alt: "Burger signature du Bouillon 16"
      }
    ]
  },
  alternates: {
    canonical: "/gallery"
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
