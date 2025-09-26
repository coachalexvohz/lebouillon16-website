
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { Camera, Filter, Image as ImageIcon, Utensils, Wine, Heart, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  alt?: string;
}

export default function GalleryPage() {
  const { translations } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [galleryRef, galleryInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });



  // Fonctions pour la modal lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Empêche le scroll du body
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Remet le scroll normal
  };

  // Gestion de la touche Escape pour fermer la modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Cleanup au démontage
    };
  }, [selectedImage]);

  const filters = [
    { id: 'all', name: translations?.gallery?.filters?.all || 'Tous' },
    { id: 'dishes', name: translations?.gallery?.filters?.dishes || 'Nos Plats' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'cocktails', name: 'Cocktails' },
    { id: 'drinks', name: translations?.gallery?.filters?.drinks || 'Nos Boissons' },
    { id: 'bar', name: translations?.gallery?.filters?.bar || 'Bar' },
    { id: 'terrasse', name: translations?.gallery?.filters?.terrasse || 'Terrasse' },
    { id: 'atmosphere', name: translations?.gallery?.filters?.atmosphere || 'L\'Ambiance' },
    { id: 'team', name: translations?.gallery?.filters?.team || 'L\'Équipe' }
  ];



  // Main gallery items with SEO-optimized descriptions
  const galleryItems = [
    // Nos Plats Signature - Créations authentiques du restaurant
    {
      id: 'filet-saumon',
      title: 'Filet de Saumon Grillé',
      description: 'Saumon grillé à la perfection, accompagné de riz aux herbes et fruits frais',
      image: '/images/dishes/Filet_Saumon_le_Bouillon_16.webp',
      category: 'dishes',
      alt: 'Filet de saumon grillé avec riz aux herbes et fruits frais - LeBouillon16'
    },
    {
      id: 'duo-tartare',
      title: 'Duo de Tartares Maison',
      description: 'Double tartare artisanal servi avec pain grillé et cornichons',
      image: '/images/dishes/Duo_de_Tartare_le_Bouillon_16.webp',
      category: 'dishes',
      alt: 'Duo de tartares maison avec pain grillé et cornichons - LeBouillon16'
    },
    {
      id: 'burger-barby',
      title: 'Burger du Barby',
      description: 'Notre burger signature avec rondelles d\'oignon croustillantes et viande premium',
      image: '/images/dishes/Burger_du_Barby.webp',
      category: 'dishes',
      alt: 'Burger du Barby avec rondelles d\'oignon et viande premium - LeBouillon16'
    },
    {
      id: 'magret-canard',
      title: 'Magret de Canard aux Légumes',
      description: 'Magret de canard rosé accompagné de légumes de saison et sauce maison',
      image: '/images/dishes/Magret_canard_TH_juillet_15_2022.webp',
      category: 'dishes',
      alt: 'Magret de canard rosé avec légumes de saison - Spécialité LeBouillon16'
    },
    {
      id: 'poke-bowl',
      title: 'Poké Bowl Fusion',
      description: 'Bowl santé avec poisson frais, légumes croquants et graines de sésame',
      image: '/images/dishes/POKE_fuin_2022.webp',
      category: 'dishes',
      alt: 'Poké bowl fusion avec poisson frais et légumes - LeBouillon16'
    },
    {
      id: 'planche-gastro',
      title: 'Planche Gastronomique aux Crevettes',
      description: 'Planche gourmande avec crevettes grillées, légumes et accompagnements variés',
      image: '/images/dishes/Planche_Gastro_avec_crevettes_2___Copie.webp',
      category: 'dishes',
      alt: 'Planche gastronomique avec crevettes et légumes - LeBouillon16'
    },
    {
      id: 'tataki-thon',
      title: 'Tataki de Thon',
      description: 'Thon mi-cuit enrobé de graines de sésame noir, salade fraîche et sauce soja',
      image: '/images/dishes/Tataki.webp',
      category: 'dishes',
      alt: 'Tataki de thon aux graines de sésame avec salade fraîche - LeBouillon16'
    },
    {
      id: 'filet-mignon',
      title: 'Filet Mignon Sauce Diane',
      description: 'Filet de bœuf tendre avec sauce Diane et légumes de saison rôtis',
      image: '/images/dishes/Filet_mignon_Diane_Porto_B.webp',
      category: 'dishes',
      alt: 'Filet mignon sauce Diane avec légumes rôtis - LeBouillon16'
    },
    {
      id: 'rose-truite',
      title: 'Rose de Truite Fumée',
      description: 'Truite fumée en rosace avec salade de mesclun et tomates cerises',
      image: '/images/dishes/Rose_de_Truite_2.webp',
      category: 'dishes',
      alt: 'Rose de truite fumée avec salade de mesclun - LeBouillon16'
    },
    {
      id: 'pad-thai',
      title: 'Pad Thaï aux Crevettes',
      description: 'Nouilles de riz sautées aux crevettes avec légumes croquants et herbes fraîches',
      image: '/images/dishes/Paid_Thai.webp',
      category: 'dishes',
      alt: 'Pad thaï aux crevettes avec légumes et herbes fraîches - LeBouillon16'
    },
    {
      id: 'planche-mixte',
      title: 'Planche Dégustation Mixte',
      description: 'Assortiment de viandes, crevettes et légumes sur pierre volcanique',
      image: '/images/dishes/repas_un.webp',
      category: 'dishes',
      alt: 'Planche dégustation mixte avec viandes et crevettes - LeBouillon16'
    },
    {
      id: 'le-burger-signature',
      title: 'Le Burger Signature',
      description: 'Notre burger gourmet avec accompagnements maison et présentation soignée',
      image: '/le-burger.jpg',
      category: 'dishes',
      alt: 'Burger signature du Bouillon 16 avec accompagnements maison'
    },
    {
      id: 'fondue-b16',
      title: 'Fondue Bouillon 16',
      description: 'Notre spécialité fondue servie dans une ambiance chaleureuse',
      image: '/fondue-b16.jpg',
      category: 'dishes',
      alt: 'Fondue spécialité du restaurant LeBouillon16'
    },
    
    // Terrasse authentique du restaurant
    {
      id: 'terrasse1',
      title: 'Façade Restaurant Lachute',
      description: 'Notre façade accueillante avec terrasse au cœur de Lachute',
      image: '/terasse-vue-exterieure-optimized.webp',
      category: 'terrasse',
      alt: 'Façade extérieure du restaurant LeBouillon16 avec terrasse, 575 rue Principale Lachute'
    },
    {
      id: 'terrasse2',
      title: 'Enseigne LeBouillon16',
      description: 'Notre enseigne emblématique et façade du restaurant gastronomique',
      image: '/terasse-enseigne-optimized.webp',
      category: 'terrasse',
      alt: 'Enseigne du restaurant LeBouillon16 - Restaurant gastronomique Lachute'
    },
    {
      id: 'terrasse3',
      title: 'Terrasse Végétalisée',
      description: 'Tables de terrasse entourées de verdure dans un cadre naturel',
      image: '/terasse-plantes-optimized.webp',
      category: 'terrasse',
      alt: 'Terrasse végétalisée du Bouillon 16 avec tables entourées de plantes vertes'
    },
    {
      id: 'terrasse4',
      title: 'Vue Panoramique Terrasse',
      description: 'Vue d\'ensemble de notre terrasse avec parasols et mobilier moderne',
      image: '/terasse-generale-optimized.webp',
      category: 'terrasse',
      alt: 'Vue panoramique de la terrasse du Bouillon 16 avec parasols et tables'
    },
    {
      id: 'terrasse5',
      title: 'Mobilier Terrasse Design',
      description: 'Notre mobilier moderne et élégant dans un cadre naturel verdoyant',
      image: '/terasse-mobilier-optimized.webp',
      category: 'terrasse',
      alt: 'Mobilier moderne et élégant de la terrasse du restaurant LeBouillon16'
    },
    {
      id: 'terrasse-drone',
      title: 'Vue Aérienne Restaurant',
      description: 'Perspective unique de notre restaurant et sa terrasse vue du ciel',
      image: '/terrasse-drone-bouillon16.png',
      category: 'terrasse',
      alt: 'Vue aérienne drone du restaurant LeBouillon16 avec terrasse'
    },
    
    // Bar du restaurant (images corrigées en orientation)
    {
      id: 'bar1',
      title: 'Bar Central Restaurant',
      description: 'Notre bar principal avec éclairage chaleureux et verrerie cristalline',
      image: '/bar-1.jpg',
      category: 'bar',
      alt: 'Bar central du restaurant LeBouillon16 avec éclairage chaleureux et verres'
    },
    {
      id: 'bar2',
      title: 'Comptoir Bar Spiritueux',
      description: 'Vue du comptoir bar avec notre sélection de spiritueux premium et verrerie',
      image: '/bar-2.jpg',
      category: 'bar',
      alt: 'Comptoir bar du Bouillon 16 avec sélection de spiritueux et verrerie professionnelle'
    },
    {
      id: 'bar3',
      title: 'Ambiance Bar Feutrée',
      description: 'L\'atmosphère intimiste de notre espace bar avec éclairage d\'ambiance',
      image: '/bar-3.jpg',
      category: 'bar',
      alt: 'Ambiance feutrée du bar du Bouillon 16 avec éclairage d\'ambiance chaleureux'
    },
    
    // Ambiance et intérieur authentique
    {
      id: 'interieur-restaurant',
      title: 'Intérieur Restaurant Raffiné',
      description: 'L\'atmosphère chaleureuse et raffinée de notre salle à manger',
      image: '/interieur-restaurant.png',
      category: 'atmosphere',
      alt: 'Intérieur raffiné du restaurant LeBouillon16 - Salle à manger élégante'
    },
    
    // Équipe du restaurant
    {
      id: 'equipe-restaurant',
      title: 'L\'Équipe LeBouillon16',
      description: 'Notre équipe passionnée dédiée à votre expérience gastronomique',
      image: '/equipe-bouillon16.jpg',
      category: 'team',
      alt: 'Équipe du restaurant LeBouillon16 - Professionnels de la gastronomie'
    },
    
    // Section Desserts (images seront ajoutées plus tard)
    {
      id: 'desserts-placeholder-1',
      title: 'Desserts Signature',
      description: 'Nos créations sucrées artisanales (images à venir)',
      image: '/dessert-brownie-optimized.webp',
      category: 'desserts',
      alt: 'Desserts signature de LeBouillon16'
    },
    {
      id: 'desserts-placeholder-2',
      title: 'Pâtisseries Maison',
      description: 'Desserts préparés quotidiennement par notre chef (images à venir)',
      image: '/dessert-1.webp',
      category: 'desserts',
      alt: 'Pâtisseries maison LeBouillon16'
    },
    
    // Section Cocktails (images seront ajoutées plus tard)
    {
      id: 'cocktails-placeholder-1',
      title: 'Cocktails Signature',
      description: 'Nos créations originales de mixologie (images à venir)',
      image: '/bar-1.jpg',
      category: 'cocktails',
      alt: 'Cocktails signature de LeBouillon16'
    },
    {
      id: 'cocktails-placeholder-2',
      title: 'Sélection Premium',
      description: 'Cocktails classiques et modernes (images à venir)',
      image: '/bar-2.jpg',
      category: 'cocktails',
      alt: 'Sélection cocktails premium LeBouillon16'
    }
  ];

  // Détecter mobile pour ajuster l'affichage
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const filteredImages = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative gallery-bg min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overlay-gradient-light" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Camera className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              {translations?.gallery?.hero?.title || 'Galerie Photos - Nos Créations Culinaires'}
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light max-w-4xl mx-auto leading-relaxed">
              {translations?.gallery?.hero?.subtitle || 'Découvrez l\'univers visuel du Bouillon 16 à travers notre galerie de créations culinaires et l\'expérience de nos clients'}
            </p>
          </motion.div>
        </div>
      </section>



      {/* Gallery Section */}
      <section ref={galleryRef} className="section-padding bg-dark-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              {translations?.gallery?.culinary?.title || 'Nos Spécialités Gastronomiques'}
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView || isMobile ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gold mr-1 sm:mr-2 self-center" />
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView || isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-gold-warm text-dark-primary shadow-lg scale-105 btn-hover-glow'
                    : 'bg-dark-card border border-zinc-700 text-warm-white hover:bg-dark-primary hover:border-gold shadow-md hover:shadow-lg'
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-dark-card border border-zinc-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover backdrop-blur-sm cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative h-64">
                    <Image
                      src={image.image}
                      alt={image.alt || image.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        {/* Title Box */}
                        <div className="inline-block">
                          <div className="bg-dark-primary/95 backdrop-blur-md border border-gold/60 rounded-lg px-4 py-2 shadow-xl">
                            <h3 className="text-warm-white text-lg font-semibold text-glow-gold">
                              {image.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ZoomIn className="w-5 h-5 text-gold" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-10 w-12 h-12 bg-dark-card/80 hover:bg-dark-card border border-zinc-700 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110 text-warm-white hover:text-gold"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image Container */}
              <div className="relative bg-dark-card border border-zinc-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-[70vh] md:h-[80vh]">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.alt || selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
                
                {/* Image Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-primary/95 via-dark-primary/90 to-transparent p-6"
                >
                  <h3 className="text-2xl font-bold text-warm-white mb-2 text-glow-gold">
                    {selectedImage.title}
                  </h3>
                </motion.div>
              </div>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
