
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ArrowRight, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TestimonialsPage() {
  const { translations } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const [testimonialRef, testimonialInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Tous les témoignages authentiques fournis
  const testimonials = [
    {
      name: "Melissa M",
      rating: 5,
      text: "Super belle découverte à Lachute! En soirée de semaine, un mardi, sans réservation. Un des meilleurs soupers terrasse en région depuis un moment. Je vous recommande avec goût le Burger du terroir, savoureux et tendre. Un véritable délice, à ma grande surprise."
    },
    {
      name: "Geneviève Grondin",
      rating: 5,
      text: "Superbe découverte! La nourriture est délicieuse, l'équipe du service est incroyable et aux petits soins avec les clients et la terrasse est géniale. Je recommande à 200%"
    },
    {
      name: "Lise Séguin",
      rating: 5,
      text: "OMG! Excellent souper de fondue! Le bouillon, les sauces!! Miam! Merci beaucoup de nous faire vivre comme si on mangeait au resto!"
    },
    {
      name: "Louise Gendron",
      rating: 5,
      text: "Le meilleur restaurant à Lachute! Guylaine, la gérante, est tellement sympathique que vous avez envie de l'inviter à votre table! Très bon choix de menus, belle musique, ambiance détendue. Parfait pour un souper entre amis ou un souper romantique!"
    },
    {
      name: "Patrice Cadieux",
      rating: 5,
      text: "Toujours un excellent restaurant, nous y allons de temps à autre et en ce samedi 30 avril nous avons goûté à un potage de betterave bacon succulent et un saumon crème à l'ail délicieux ! Le service était super malgré que le restaurant était bondé! Pour voir nos assiettes voir les deux premières photos ! Les photos d'après ont été prises en 2021 ! Choix de table d'hôte et menu à la carte et même un menu fondue pour être plus cosy ! La carte des vins est variée et belle sélection de cocktails ! Je recommande fortement cet endroit !"
    },
    {
      name: "Nathalie Deslauriers",
      rating: 5,
      text: "J'ai adoré ce restaurant et je le recommande. Nous avons choisi une fondue au fromage et une au bœuf et c'était vraiment délicieux. Le personnel souriant et sympathique."
    },
    {
      name: "Mireille Casavant",
      rating: 5,
      text: "Un restaurant superbe, belle variété au menu et carte des vins, absolument délicieux, j'adore ce resto, quelle belle équipe, une expérience à refaire et refaire et le soin des promotions en dit long sur leur appréciation de la clientèle. Merci"
    },
    {
      name: "Lucie Leclerc",
      rating: 5,
      text: "Le 4 novembre j'ai été invitée au Bouillon 16. J'habite la région depuis mai 2022 mais je n'ai pas osé les restos du coin... sans raison. Quelle perte de bonheur! LeBouillon16. Dès l'arrivée on est transporté comme dans un pub britannique avec le bar, les tables. La chaleur des caquelons fumants. J'ai mangé la meilleure bavette ever. Belle carte de vins...bières microbrasserie du coin. Service impeccable. Je suis même repartie avec une coupe à vin avec la gravure du resto. Endroit à découvrir et refaire régulièrement. J'ai adoré l'endroit à tous les niveaux."
    },
    {
      name: "Marie-Lyne Demers",
      rating: 5,
      text: "Alicia, son service était impeccable. Sylvain, ta bouffe était excellente. Nous étions plus ou moins 25 et tous les invités ont trouvé cela excellent."
    },
    {
      name: "Alexander Cyr Bauer",
      rating: 5,
      text: "Service exceptionnel, bouffe malade et staff de feu. C'était juste parfait, même la propriétaire s'est assise avec nous et nous a jasé. Merci pour tout."
    },
    {
      name: "Pierre Marineau",
      rating: 5,
      text: "Très bon restaurant, très bon menu, la bouffe est délicieuse et très bon service (Guylaine)."
    },
    {
      name: "Claudie Tremblay",
      rating: 5,
      text: "Nous sommes tombés sur ce restaurant par hasard et avons vraiment aimé ! Excellent rapport qualité/prix et un service agréable. Je le recommande !"
    },
    {
      name: "Huguette J",
      rating: 5,
      text: "Excellent service. Serveuse très professionnelle. Toujours souriante, très amicale. C'était pour mon anniversaire le 10, alors j'ai décidé d'amener une copine pour son anniversaire le 28. J'espère avoir encore la même serveuse."
    },
    {
      name: "Nicole Boyer",
      rating: 5,
      text: "Quel merveilleux repas : filet mignon, patate au four, légumes frais, sauce au poivre crème sûre. Nous avons mangé 2 personnes pour 50,00$ plus pourboire à votre discrétion. C'était tellement bon qu'ils se sont trouvé 2 nouvelles clientes. Tendre était le filet, légumes, faut que vous essayiez ça au moins une fois. N'oubliez pas : essayez c'est l'adopter. Merci pour ce merveilleux repas."
    },
    {
      name: "Benoit Rainville",
      rating: 5,
      text: "Très belle ambiance et excellent service. Plusieurs options malgré les plats spécialisés fondues de tous types. Les autres options sont tout aussi délicieuses."
    },
    {
      name: "Camille Dussault",
      rating: 5,
      text: "Super endroit! Le service est vraiment excellent et la nourriture aussi, je recommande."
    },
    {
      name: "Cynthia Emond",
      rating: 5,
      text: "C'était délicieux ! Belle ambiance, bon prix et bon service. J'y retournerai assurément."
    },
    {
      name: "Sylvain Guérin",
      rating: 5,
      text: "Probablement le plus bon resto de Lachute, super service 5 étoiles, la nourriture est très bonne, le restaurant est très propre, belle ambiance. Il y a beaucoup de stationnement dans le coin donc pas de soucis. Je recommande fortement."
    },
    {
      name: "Jonathan Faubert",
      rating: 5,
      text: "Super belle découverte, merci à ma femme Emma de m'avoir fait découvrir ce restaurant. Tout y était parfait, de la nourriture, à l'ambiance qu'au dernier souper de l'année 2024. Ces doux moments resteront gravés dans nos souvenirs de couple. Une expérience que nous devrons répéter dans le futur."
    },
    {
      name: "Josée Houle",
      rating: 5,
      text: "Nous sommes allés hier un groupe de dix et j'ai été séduite par l'ambiance, la nourriture et le service. Merci au guitariste Alain qui joue de son instrument comme un Dieu et Guylaine qui nous a donné un service impeccable du début à la fin."
    },
    {
      name: "Alain Morin",
      rating: 5,
      text: "Nous arrivons de la ville et aimons bien manger et bien boire. Nous venons d'aménager à Lachute et nous avions besoin de sortir des boîtes alors nous sommes allés à tout hasard à ce resto tout près de la maison. Réservez de préférence car cet établissement semble très populaire. Bar central où l'on peut manger, déco urbaine, menu intéressant (idéal pour une fondue), bon service, carte de cocktails et des vins (importations privées) intéressantes. Je suis très agréablement surpris, enchanté et conquis. Accessible aux personnes à mobilité réduite. Je recommande sans hésitation."
    },
    {
      name: "Kelly K",
      rating: 5,
      text: "Nous avons adoré notre soirée. Merci Alicia pour ton superbe service et Guylaine. Merci de nous avoir laissé profiter de notre soirée même si nous étions de dernière minute. Toujours super bon!"
    },
    {
      name: "Sara Granger",
      rating: 5,
      text: "Belle découverte et superbe soirée! La nourriture et le service excellent en plus du chansonnier qui a enjolivé la soirée! Fondue généreuse et pierre volcanique (chaude pour ceux qui ont l'habitude) avec des ingrédients délicieux. Je recommande et y retournerai sans hésitation. Vin à prix raisonnable et belle sélection!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark-warm">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/about-header-design-optimized.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 overlay-gradient-light" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Expérience Clients
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light max-w-4xl mx-auto leading-relaxed">
              Découvrez ce que nos clients disent de leur expérience au Bouillon 16
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialRef} className="section-padding bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-fondue-b16.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-card/95 backdrop-blur-md rounded-lg p-6 border border-bronze/40 shadow-2xl hover:shadow-gold/20 transition-all duration-300 card-hover ring-1 ring-gold/20 min-h-[280px] flex flex-col hover:scale-105"
              >
                {/* Header avec étoiles et quote */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-gold flex-shrink-0" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                </div>

                {/* Texte du témoignage */}
                <blockquote className="text-gray-200 mb-4 italic leading-relaxed font-medium drop-shadow-md text-sm flex-grow">
                  "{testimonial.text}"
                </blockquote>

                {/* Nom du client */}
                <footer className="mt-auto pt-4 border-t border-gold/20">
                  <p className="text-gold font-bold text-glow-gold drop-shadow-lg text-base">
                    — {testimonial.name}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-bronze text-sm font-medium">Note: </span>
                    <span className="text-gold font-bold ml-1">{testimonial.rating}/5</span>
                  </div>
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="section-padding bg-gradient-to-b from-dark-secondary to-dark-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-12 mx-auto max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Venez vivre vous aussi l'expérience LeBouillon16 à Lachute!
            </h2>
            <p className="text-xl text-warm-gray-light mb-8 max-w-3xl mx-auto">
              Rejoignez nos nombreux clients satisfaits et découvrez pourquoi LeBouillon16 
              est devenu le restaurant incontournable de Lachute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-gold-warm hover:bg-gradient-bronze-warm text-dark-primary px-8 py-4 text-lg font-semibold btn-hover-glow focus-gold"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Réserver une table
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-dark-primary px-8 py-4 text-lg font-semibold btn-hover-glow focus-gold"
                >
                  <Link href="/menu">
                    Découvrir notre menu
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Infos de contact rapides */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 pt-8 border-t border-gold/20">
              <div className="flex items-center text-warm-gray-light">
                <MapPin className="w-5 h-5 text-gold mr-2" />
                <span>16 Rue Principale, Lachute</span>
              </div>
              <div className="flex items-center text-warm-gray-light">
                <Phone className="w-5 h-5 text-gold mr-2" />
                <span>(450) 562-0016</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
