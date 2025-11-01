
"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { 
  Utensils, 
  Wine, 
  Users, 
  Calendar, 
  ShoppingBag, 
  Coffee,
  Sparkles,
  UtensilsCrossed,
  Baby,
  ShieldAlert,
  MapPin,
  Crown,
  Heart,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  ChefHat
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData } from '@/data/menu-data';

export default function ServicesPage() {
  const { translations } = useLanguage();
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [menusRef, menusInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [inspirationRef, inspirationInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [allergiesRef, allergiesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [capacityRef, capacityInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: Utensils,
      title: "Salle à Manger",
      description: "Service traditionnel dans un cadre élégant et chaleureux",
      available: true,
      color: "from-gold to-bronze",
      clickable: false
    },
    {
      icon: Wine,
      title: "Bar & Carte des Vins",
      description: "Sélection premium de vins et cocktails signature",
      available: true,
      color: "from-bronze to-copper",
      clickable: false
    },
    {
      icon: Coffee,
      title: "Terrasse",
      description: "Espace extérieur avec vue panoramique",
      available: true,
      color: "from-copper to-gold",
      clickable: false
    },
    {
      icon: Calendar,
      title: "Privatisation / Événements",
      description: "Organisation d'événements privés et professionnels",
      available: true,
      color: "from-gold to-bronze",
      clickable: true,
      link: "/contact#contact-form"
    },
    {
      icon: UtensilsCrossed,
      title: "Service Traiteur",
      description: "Prestations culinaires pour vos événements",
      available: true,
      color: "from-bronze to-copper",
      clickable: true,
      link: "/contact#contact-form"
    },
    {
      icon: ShoppingBag,
      title: "À Emporter",
      description: "Commandes à emporter pour déguster chez vous",
      available: true,
      color: "from-copper to-gold",
      clickable: false
    },
    {
      icon: Sparkles,
      title: "Menu Saisonnier / Dégustation",
      description: "Expériences culinaires exclusives selon les saisons",
      available: true,
      color: "from-gold to-bronze",
      clickable: false
    }
  ];

  const menus = [
    {
      title: "Menu Varié",
      description: "Notre carte principale avec une sélection de plats pour tous les goûts",
      icon: Utensils,
      features: ["Entrées élaborées", "Plats inspiration", "Desserts maison", "Menu enfants -12 ans"]
    },
    {
      title: "Menu Inspiration",
      description: "Créations du chef en rotation (2 à 3 choix en alternance)",
      icon: Crown,
      features: ["Plats créatifs", "Ingrédients de saison", "Présentation artistique", "Recettes exclusives"]
    },
    {
      title: "Menu Cocktails & Vins",
      description: "Sélection premium avec importation privée",
      icon: Wine,
      features: ["Vins d'importation", "Cocktails signature", "Spiritueux premium", "Accords mets-vins"]
    },
    {
      title: "Menu Événementiel",
      description: "Sélection sur mesure pour vos occasions spéciales",
      icon: Calendar,
      features: ["Buffets personnalisés", "Service à l'assiette", "Cocktail dinatoire", "Levée de fond"]
    }
  ];

  const capacities = [
    { name: "Salle à Manger", capacity: 55, icon: Utensils, color: "text-gold" },
    { name: "Salle Privée", capacity: 25, icon: Users, color: "text-bronze" },
    { name: "Terrasse", capacity: 55, icon: Coffee, color: "text-copper" },
    { name: "Bar", capacity: 15, icon: Wine, color: "text-gold" },
    { name: "Lounge", capacity: 35, icon: Heart, color: "text-bronze" },
    { name: "Cocktail", capacity: 40, icon: Sparkles, color: "text-copper" }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background mobile uniquement */}
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: 'url(/services-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Background desktop uniquement */}
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/services-hero.jpg)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gold/20">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium text-sm">Offre Complète</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed">
              Une gamme complète de services pour répondre à tous vos besoins culinaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Disponibles - Section masquée visuellement mais conservée pour le référencement SEO */}
      <section ref={servicesRef} className="section-padding bg-gradient-dark-warm relative overflow-hidden hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/bg-planche.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Services Disponibles
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services culinaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const CardContent = (
                <>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-dark-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <h3 className="text-xl font-bold text-gold text-center text-glow-gold mr-3">
                      {service.title}
                    </h3>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-warm-gray-light leading-relaxed text-center mb-4">
                    {service.description}
                  </p>
                  {service.clickable && (
                    <div className="mt-4 pt-4 border-t border-zinc-600/50">
                      <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-medium group-hover:text-amber-200 transition-colors">
                        <span>Besoin d'information ?</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  )}
                </>
              );

              return service.clickable ? (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={service.link || '#'}>
                    <div className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 group cursor-pointer hover:border-amber-500/50 hover:scale-105">
                      {CardContent}
                    </div>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 group"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Service Non Disponible */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-lg font-bold text-red-400 text-center mr-3">
                  Service de Livraison
                </h3>
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-red-300 text-center text-sm">
                Non disponible pour le moment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Menus */}
      <section ref={menusRef} className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-truite.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={menusInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Nos Menus
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Une variété de formules pour satisfaire tous les palais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menus.map((menu, index) => {
              const Icon = menu.icon;
              return (
                <motion.div
                  key={menu.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={menusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-dark-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gold text-glow-gold">
                      {menu.title}
                    </h3>
                  </div>
                  <p className="text-warm-gray-light leading-relaxed mb-6">
                    {menu.description}
                  </p>
                  <ul className="space-y-3">
                    {menu.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-bronze rounded-full"></div>
                        <span className="text-warm-gray-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Inspiration du Chef */}
      <section ref={inspirationRef} className="section-padding bg-gradient-dark-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/fondue-hero-mobile.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-12 h-12 text-gold" />
              <h2 className="text-4xl md:text-5xl font-bold text-warm-white font-heading text-glow-gold">
                Les Inspirations du Chef
              </h2>
              <ChefHat className="w-12 h-12 text-gold" />
            </div>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Des créations uniques élaborées avec passion par notre chef
            </p>
          </motion.div>

          {/* Options Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-card border-2 border-gold/30 rounded-2xl p-8 mb-12 shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              Options pour les Inspirations
            </h3>
            <p className="text-warm-gray-light text-sm italic mb-6">
              Selon disponibilité ou jusqu'à épuisement de stock
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-white font-semibold mb-1">Transformer votre frite en poutine</p>
                  <p className="text-gold text-xl font-bold">6$</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-white font-semibold mb-1">Pimper votre repas avec une queue d'homard</p>
                  <p className="text-gold text-xl font-bold">15$</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-white font-semibold mb-1">Formule TH (Table d'hôte)</p>
                  <p className="text-gold text-xl font-bold mb-2">12$</p>
                  <p className="text-sm text-warm-gray-light">Incluant choix de potage OU césar (+2$) OU jardinière avec dessert spontané et café</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.find(cat => cat.id === 'inspirations')?.items.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-dark-card border ${dish.isSignature ? 'border-gold' : 'border-zinc-700'} rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 hover:border-gold/50 group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300">
                        {dish.name}
                      </h3>
                      {dish.isSignature && (
                        <Star className="w-5 h-5 text-gold fill-gold" />
                      )}
                    </div>
                    {dish.description && (
                      <p className="text-warm-gray-light text-sm leading-relaxed">
                        {dish.description}
                      </p>
                    )}
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="text-2xl font-bold text-gold">{dish.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              href="/menu"
              className="inline-flex items-center gap-2 bg-gradient-gold-warm hover:bg-gradient-bronze-warm text-dark-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl btn-hover-glow"
            >
              <Utensils className="w-5 h-5" />
              Découvrir notre menu complet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Allergies & Contraintes */}
      <section ref={allergiesRef} className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-tataki.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={allergiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Allergies & Contraintes Alimentaires
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Nous prenons vos besoins alimentaires au sérieux
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={allergiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <ShieldAlert className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-400 text-glow-gold">
                  Politique Stricte
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gold mb-4">Options Sans Lactose</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Plats adaptés disponibles</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Substitutions possibles</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Menu dédié</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-bronze mb-4">Options Sans Gluten</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Sélection certifiée</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Préparation séparée</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-warm-gray-light">Ingrédients contrôlés</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-700/30">
                <p className="text-orange-300 font-medium text-center">
                  Informez-nous de vos allergies lors de votre réservation. 
                  Notre équipe prendra toutes les précautions nécessaires pour votre sécurité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capacité d'Accueil */}
      <section ref={capacityRef} className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-bavette.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={capacityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Capacité d'Accueil
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Des espaces adaptés à tous vos événements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capacities.map((space, index) => {
              const Icon = space.icon;
              return (
                <motion.div
                  key={space.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={capacityInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 group text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-10 h-10 ${space.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-gold to-bronze rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-dark-primary font-bold text-lg">{space.capacity}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-warm-white mb-2 text-glow-gold">
                    {space.name}
                  </h3>
                  <p className="text-warm-gray-light text-sm">
                    Maximum {space.capacity} personnes
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
