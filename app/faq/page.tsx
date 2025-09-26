

"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Plus, 
  Minus,
  ShieldAlert,
  Shirt,
  Baby,
  Car,
  Users,
  XCircle,
  Cake,
  Accessibility,
  HelpCircle
} from 'lucide-react';

export default function FAQPage() {
  const { translations } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-10% 0px'
  });

  const [faqRef, faqInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-10% 0px'
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: translations.faq.categories.allergies.title,
      icon: ShieldAlert,
      color: "from-red-500 to-orange-500",
      questions: [
        {
          question: translations.faq.categories.allergies.questions.q1.question,
          answer: translations.faq.categories.allergies.questions.q1.answer
        },
        {
          question: translations.faq.categories.allergies.questions.q2.question,
          answer: translations.faq.categories.allergies.questions.q2.answer
        },
        {
          question: translations.faq.categories.allergies.questions.q3.question,
          answer: translations.faq.categories.allergies.questions.q3.answer
        }
      ]
    },
    {
      category: translations.faq.categories.dressCode.title,
      icon: Shirt,
      color: "from-blue-500 to-purple-500",
      questions: [
        {
          question: translations.faq.categories.dressCode.questions.q1.question,
          answer: translations.faq.categories.dressCode.questions.q1.answer
        },
        {
          question: translations.faq.categories.dressCode.questions.q2.question,
          answer: translations.faq.categories.dressCode.questions.q2.answer
        }
      ]
    },
    {
      category: translations.faq.categories.children.title,
      icon: Baby,
      color: "from-pink-500 to-rose-500",
      questions: [
        {
          question: translations.faq.categories.children.questions.q1.question,
          answer: translations.faq.categories.children.questions.q1.answer
        },
        {
          question: translations.faq.categories.children.questions.q2.question,
          answer: translations.faq.categories.children.questions.q2.answer
        }
      ]
    },
    {
      category: translations.faq.categories.parking.title,
      icon: Car,
      color: "from-green-500 to-teal-500",
      questions: [
        {
          question: translations.faq.categories.parking.questions.q1.question,
          answer: translations.faq.categories.parking.questions.q1.answer
        }
      ]
    },
    {
      category: translations.faq.categories.groups.title,
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      questions: [
        {
          question: translations.faq.categories.groups.questions.q1.question,
          answer: translations.faq.categories.groups.questions.q1.answer
        },
        {
          question: translations.faq.categories.groups.questions.q2.question,
          answer: translations.faq.categories.groups.questions.q2.answer
        }
      ]
    },
    {
      category: translations.faq.categories.cancellation.title,
      icon: XCircle,
      color: "from-orange-500 to-red-500",
      questions: [
        {
          question: translations.faq.categories.cancellation.questions.q1.question,
          answer: translations.faq.categories.cancellation.questions.q1.answer
        }
      ]
    },
    {
      category: translations.faq.categories.birthday.title,
      icon: Cake,
      color: "from-yellow-500 to-orange-500",
      questions: [
        {
          question: translations.faq.categories.birthday.questions.q1.question,
          answer: translations.faq.categories.birthday.questions.q1.answer
        }
      ]
    },
    {
      category: translations.faq.categories.accessibility.title,
      icon: Accessibility,
      color: "from-blue-600 to-cyan-500",
      questions: [
        {
          question: translations.faq.categories.accessibility.questions.q1.question,
          answer: translations.faq.categories.accessibility.questions.q1.answer
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background responsive */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: 'url(/terasse-plantes-optimized.webp)',
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
              <HelpCircle className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium text-sm">{translations.faq.hero.title}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed">
              {translations.faq.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding bg-gradient-dark-warm relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              {translations.faq.hero.title}
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              {translations.faq.hero.subtitle}
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-zinc-700/50">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mr-4`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gold text-glow-gold">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const itemIndex = categoryIndex * 100 + questionIndex;
                        const isOpen = openItems.includes(itemIndex);
                        
                        return (
                          <div
                            key={questionIndex}
                            className="border border-zinc-800 rounded-lg overflow-hidden bg-dark-secondary/50"
                          >
                            <motion.button
                              onClick={() => toggleItem(itemIndex)}
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-dark-secondary/70 transition-colors duration-200"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <span className="text-warm-white font-medium text-lg pr-4">
                                {item.question}
                              </span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {isOpen ? (
                                  <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                                ) : (
                                  <Plus className="w-5 h-5 text-bronze flex-shrink-0" />
                                )}
                              </motion.div>
                            </motion.button>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="border-t border-zinc-800"
                                >
                                  <div className="p-4 bg-dark-primary/50">
                                    <p className="text-warm-gray-light leading-relaxed">
                                      {item.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gold mb-4 text-glow-gold">
                {translations.faq.needHelp.title}
              </h3>
              <p className="text-warm-gray-light mb-6 leading-relaxed">
                {translations.faq.needHelp.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+14505624323"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gold to-bronze hover:from-bronze hover:to-copper text-dark-primary font-semibold rounded-lg transition-all duration-200"
                >
                  {translations.nav.contact}
                </a>
                <a 
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-dark-primary font-semibold rounded-lg transition-all duration-200"
                >
                  {translations.faq.needHelp.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
