
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Réservations - Horaires & Informations",
  description: "Contactez LeBouillon16 pour vos réservations. Adresse : 575 Rue Principale, Lachute. Tél : (450) 562-4323. Horaires, stationnement gratuit, terrasse selon météo.",
  keywords: "contact restaurant Lachute, réservation Bouillon 16, téléphone (450) 562-4323, 575 rue Principale Lachute, horaires restaurant, stationnement gratuit, réservation terrasse",
  openGraph: {
    title: "Contact LeBouillon16 - Réservations & Informations Pratiques",
    description: "Réservez votre table au Bouillon 16. Adresse, horaires, téléphone et toutes les infos pratiques pour votre visite à Lachute.",
    images: [
      {
        url: "/terrasse-generale-optimized.webp",
        width: 1200,
        height: 630,
        alt: "Terrasse du restaurant LeBouillon16 pour vos réservations"
      }
    ]
  },
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
