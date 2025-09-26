
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - Notre Histoire & Équipe",
  description: "Découvrez l'histoire du Bouillon 16, notre équipe passionnée de chefs expérimentés, notre concept culinaire et notre ambiance unique à Lachute. Plus de 6 années d'excellence gastronomique.",
  keywords: "histoire restaurant Lachute, équipe LeBouillon16, chefs Sylvain Leseize Maxime Nicholas Olivan, concept culinaire, restaurant gastronomique Laurentides, ambiance restaurant",
  openGraph: {
    title: "À Propos du Bouillon 16 - Notre Histoire & Équipe Passionnée",
    description: "Plus de 6 années d'excellence culinaire à Lachute. Découvrez notre équipe de chefs passionnés et notre concept gastronomique unique.",
    images: [
      {
        url: "/about-header-design-optimized.webp",
        width: 1200,
        height: 630,
        alt: "L'équipe du Bouillon 16 - Restaurant gastronomique à Lachute"
      },
      {
        url: "/equipe-bouillon16-optimized.webp", 
        width: 1200,
        height: 630,
        alt: "Notre équipe de chefs passionnés au Bouillon 16"
      }
    ]
  },
  alternates: {
    canonical: "/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
