
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoadingWrapper } from "@/components/ui/loading-wrapper";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: '%s | LeBouillon16',
    default: "LeBouillon16 - Restaurant Gastronomique à Lachute | Fondue & Cuisine Raffinée"
  },
  description: "Découvrez LeBouillon16, restaurant gastronomique au cœur de Lachute. Spécialistes de la fondue traditionnelle, grillades premium et cuisine raffinée. Terrasse, ambiance chaleureuse. Réservations: (450) 562-4323",
  keywords: "restaurant Lachute, fondue traditionnelle, cuisine gastronomique, terrasse Lachute, restaurant québécois, spécialités fondues, grillades premium, LeBouillon16, restaurant 575 rue Principale, Laurentides, restaurant avec terrasse, cuisine raffinée Quebec",
  authors: [{ name: "LeBouillon16", url: "https://lebouillon16.com" }],
  creator: "LeBouillon16",
  publisher: "LeBouillon16",
  applicationName: "LeBouillon16",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://lebouillon16.com'),
  // Force HTTPS canonical URLs
  other: {
    'canonical': 'https://lebouillon16.com',
  },
  // Add icons/favicon configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico', color: '#d4af37' }
    ]
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'fr-CA': '/',
      'en-CA': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    alternateLocale: ['en_CA'],
    url: 'https://lebouillon16.com',
    siteName: 'LeBouillon16',
    title: 'LeBouillon16 - Restaurant Gastronomique à Lachute',
    description: 'Spécialistes de la fondue traditionnelle et cuisine raffinée au cœur de Lachute. Terrasse, ambiance chaleureuse.',
    images: [
      {
        url: '/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'LeBouillon16 - Restaurant Gastronomique à Lachute | Grillades, Fondues, Tapas',
        type: 'image/png',
      },
      {
        url: '/terrasse-drone-bouillon16-optimized.webp',
        width: 1200,
        height: 630,
        alt: 'Terrasse du restaurant LeBouillon16 à Lachute',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LeBouillon16',
    creator: '@LeBouillon16',
    title: 'LeBouillon16 - Restaurant Gastronomique à Lachute',
    description: 'Spécialistes de la fondue traditionnelle et cuisine raffinée au cœur de Lachute',
    images: ['/logo-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'restaurant',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Force HTTPS */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="canonical" href="https://lebouillon16.com" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="https://lebouillon16.com" />
        <link rel="preconnect" href="https://lebouillon16.com" crossOrigin="" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="C8jB1_JCvfoWzbZd0yldRz80eJjas9sNw8pf-2ucW0I" />
        
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9PJ7CD6HKD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9PJ7CD6HKD', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {'custom_parameter_1': 'restaurant_type'}
              });
              
              // Track button clicks for reservations, menu, contact
              function trackButtonClick(action, category, label) {
                gtag('event', action, {
                  event_category: category,
                  event_label: label,
                  value: 1
                });
              }
              
              // Auto-track important clicks
              document.addEventListener('DOMContentLoaded', function() {
                // Track reservation buttons
                document.querySelectorAll('a[href*="tel:"], button[onclick*="tel:"]').forEach(el => {
                  el.addEventListener('click', () => trackButtonClick('click', 'contact', 'phone_reservation'));
                });
                
                // Track email links  
                document.querySelectorAll('a[href*="mailto:"]').forEach(el => {
                  el.addEventListener('click', () => trackButtonClick('click', 'contact', 'email_contact'));
                });
                
                // Track menu links
                document.querySelectorAll('a[href="/menu"]').forEach(el => {
                  el.addEventListener('click', () => trackButtonClick('click', 'navigation', 'menu_view'));
                });
                
                // Track contact form submission
                const contactForm = document.querySelector('form[action*="contact"]');
                if (contactForm) {
                  contactForm.addEventListener('submit', () => trackButtonClick('submit', 'contact', 'contact_form'));
                }
              });
            `,
          }}
        />
        
        {/* Schema.org JSON-LD for Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "@id": "https://lebouillon16.com/#restaurant",
              "name": "LeBouillon16",
              "alternateName": "Bouillon 16",
              "description": "Restaurant gastronomique spécialisé dans la fondue traditionnelle et la cuisine raffinée, situé au cœur de Lachute avec une magnifique terrasse.",
              "url": "https://lebouillon16.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lebouillon16.com/logo-512.png",
                "width": "512",
                "height": "512"
              },
              "image": [
                "https://placehold.co/1200x600/e2e8f0/1e293b?text=Header_design_image_for_the__About__page_of_Leboui",
                "https://placehold.co/1200x600/e2e8f0/1e293b?text=aerial_drone_view_of_the_terrace_at_Bouillon16",
                "https://placehold.co/1200x600/e2e8f0/1e293b?text=Photo_of_the_Bouillon16_team"
              ],
              "telephone": "+1-450-562-4323",
              "email": "lebouillon16@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "575 Rue Principale",
                "addressLocality": "Lachute",
                "addressRegion": "QC", 
                "postalCode": "J8H 1Y8",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.6479",
                "longitude": "-74.3441"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday"],
                  "opens": "16:00",
                  "closes": "20:30"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": "Thursday",
                  "opens": "16:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Friday", "Saturday"],
                  "opens": "16:00", 
                  "closes": "22:00"
                }
              ],
              "servesCuisine": [
                "Cuisine française",
                "Fondue traditionnelle", 
                "Grillades",
                "Cuisine gastronomique",
                "Tapas"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "CAD",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Interac"],
              "hasMenu": {
                "@type": "Menu",
                "@id": "https://lebouillon16.com/menu",
                "name": "Menu LeBouillon16",
                "description": "Notre carte complète avec fondues, grillades et spécialités de la maison"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Terrasse extérieure",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Stationnement gratuit",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Accès handicapés",
                  "value": true
                }
              ],
              "sameAs": [
                "https://www.facebook.com/Bouillon16"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Marie Dubois"
                  },
                  "reviewBody": "Une expérience culinaire exceptionnelle ! Le service est impeccable et les plats sont d'une qualité remarquable.",
                  "datePublished": "2024-01-15"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-dark-primary text-warm-white`}>
        <LanguageProvider>
          <LoadingWrapper>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#141414',
                  color: '#faf8f5',
                  border: '1px solid #d4af37',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 25px -12px rgba(0, 0, 0, 0.25)',
                },
              }}
            />
            <CookieConsent />
          </LoadingWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
