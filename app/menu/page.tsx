
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { menuData, MenuCategory } from '@/data/menu-data';
import { Star, Utensils, Leaf, Wheat } from 'lucide-react';

export default function MenuPage() {
  const { translations, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || 'starters');
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [menuRef, menuInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const getCategoryName = (category: MenuCategory) => {
    return locale === 'en' ? category.nameEn : category.name;
  };

  const activeData = menuData.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative menu-bg min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overlay-gradient-light" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Utensils className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              {translations?.menu?.title || 'Menu Gastronomique - Fondues & Spécialités'}
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              {translations?.menu?.subtitle || 'Découvrez nos délicieuses créations culinaires'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={menuRef} className="section-padding bg-gradient-dark-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-barby.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={menuInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {menuData.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={menuInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-gold-warm text-dark-primary shadow-2xl scale-105 btn-hover-glow'
                    : 'bg-dark-card border border-zinc-700 text-gold hover:bg-dark-secondary shadow-xl hover:shadow-2xl card-hover'
                }`}
              >
                {getCategoryName(category)}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-dark-card border border-zinc-700 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="bg-gradient-gold-warm p-6 text-center">
                  <h2 className="text-3xl font-bold text-dark-primary font-heading">
                    {activeData ? getCategoryName(activeData) : ''}
                  </h2>
                </div>
                
                <div className="p-8">
                  {/* Category Note */}
                  {activeData?.note && (
                    <div className="mb-8 p-4 bg-dark-secondary/50 border border-zinc-700 rounded-lg">
                      <p className="text-warm-gray-light text-sm whitespace-pre-line">
                        {activeData.note}
                      </p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {activeData?.items?.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b border-zinc-700 pb-6 last:border-b-0 menu-item rounded-lg p-4 hover:bg-dark-secondary/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h3 className="text-xl font-semibold text-gold text-glow-gold">
                                {locale === 'en' && item.nameEn ? item.nameEn : item.name}
                              </h3>
                              {item.isSignature && (
                                <Star className="w-5 h-5 text-gold fill-current" />
                              )}
                              {item.isVegetarian && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30">
                                  <Leaf className="w-3 h-3" />
                                  VG
                                </span>
                              )}
                              {item.isGlutenFree && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-600/20 text-amber-400 text-xs rounded-full border border-amber-600/30">
                                  <Wheat className="w-3 h-3" />
                                  SG
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-warm-gray-light leading-relaxed">
                                {locale === 'en' && item.descriptionEn ? item.descriptionEn : item.description}
                              </p>
                            )}
                            {item.allergens && item.allergens.length > 0 && (
                              <p className="text-xs text-bronze mt-2 italic">
                                Allergènes: {item.allergens.join(', ')}
                              </p>
                            )}
                          </div>
                          <div className="ml-6">
                            <span className="text-2xl font-bold text-bronze text-glow-bronze">
                              {item.price}
                            </span>
                            {item.isSignature && (
                              <div className="text-xs text-gold text-center mt-1">
                                Signature
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )) || (
                      <div className="text-center py-12">
                        <p className="text-warm-gray-light">Aucun plat disponible dans cette catégorie.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Menu Note */}
      <section className="py-12 bg-dark-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-warm-gray-light text-lg italic mb-4">
              "Tous nos plats sont préparés avec des ingrédients frais et de qualité. 
              N'hésitez pas à nous faire part de vos allergies ou intolérances alimentaires."
            </p>
            <p className="text-bronze font-semibold text-glow-bronze">
              - L'équipe de LeBouillon16
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
