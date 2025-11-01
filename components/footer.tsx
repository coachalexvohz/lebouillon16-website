
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Music4, MapPin, Phone, Mail, Clock, Home, Menu, Camera, MessageSquare, Utensils, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useState } from 'react';


export function Footer() {
  const { translations } = useLanguage();
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@Bouillon16',
      icon: Music4,
      color: 'hover:bg-copper/20 hover:text-copper',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Bouillon16',
      icon: Facebook,
      color: 'hover:bg-gold/20 hover:text-gold',
    },
  ];

  const quickLinks = [
    {
      name: translations?.nav?.menu || 'Menu',
      href: '/menu',
      icon: Menu,
    },
    {
      name: translations?.nav?.gallery || 'Galerie',
      href: '/gallery',
      icon: Camera,
    },
    {
      name: translations?.nav?.services || 'Offre & Services',
      href: '/services',
      icon: Utensils,
    },
    {
      name: translations?.nav?.faq || 'FAQ',
      href: '/faq',
      icon: HelpCircle,
    },
    {
      name: translations?.nav?.contact || 'Contact',
      href: '/contact',
      icon: MessageSquare,
    },
  ];

  return (
    <>
      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <footer className="relative text-gray-100 overflow-hidden" style={{
        backgroundImage: 'url(/logo-resize-optimized.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gold font-heading">
                {translations?.footer?.contact?.title || 'Coordonnées'}
              </h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      575 Rue Principale<br />
                      Lachute, Qc, Canada<br />
                      J8H 1Y8
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-bronze/10 rounded-lg flex items-center justify-center group-hover:bg-bronze/20 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-bronze" />
                  </div>
                  <div className="flex items-center gap-2">
                    {showPhone ? (
                      <a 
                        href="tel:+14505624323"
                        className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                      >
                        (450) 562-4323
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400">(•••) •••-••••</span>
                    )}
                    <button
                      onClick={() => setShowPhone(!showPhone)}
                      className="flex items-center gap-1 text-xs bg-bronze/10 hover:bg-bronze/20 text-bronze px-2 py-1 rounded transition-all duration-200 border border-bronze/20"
                    >
                      {showPhone ? (
                        <>
                          <EyeOff className="w-3 h-3" />
                          Masquer
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" />
                          Afficher
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-copper" />
                  </div>
                  <div className="flex items-center gap-2">
                    {showEmail ? (
                      <a 
                        href="mailto:Bouillon16@gmail.com"
                        className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                      >
                        Bouillon16@gmail.com
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400">••••••••@••••••••</span>
                    )}
                    <button
                      onClick={() => setShowEmail(!showEmail)}
                      className="flex items-center gap-1 text-xs bg-gold/10 hover:bg-gold/20 text-gold px-2 py-1 rounded transition-all duration-200 border border-gold/20"
                    >
                      {showEmail ? (
                        <>
                          <EyeOff className="w-3 h-3" />
                          Masquer
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" />
                          Afficher
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gold font-heading flex items-center gap-3">
                <div className="w-10 h-10 bg-bronze/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-bronze" />
                </div>
                {translations?.restaurant?.hours?.title || 'Nos Horaires'}
              </h3>
              
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-800/50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.monday || 'Lundi'}
                    </span>
                    <span className="text-red-400 font-medium">
                      {translations?.restaurant?.hours?.closed || 'Fermé'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.tuesday || 'Mardi'}
                    </span>
                    <span className="text-green-400 font-medium">16h - 20h30</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.wednesday || 'Mercredi'}
                    </span>
                    <span className="text-green-400 font-medium">16h - 20h30</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.thursday || 'Jeudi'}
                    </span>
                    <span className="text-green-400 font-medium">16h - 21h</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.friday || 'Vendredi'}
                    </span>
                    <span className="text-green-400 font-medium">16h - 22h</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.saturday || 'Samedi'}
                    </span>
                    <span className="text-green-400 font-medium">16h - 22h</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-300">
                      {translations?.restaurant?.hours?.sunday || 'Dimanche'}
                    </span>
                    <span className="text-red-400 font-medium">
                      {translations?.restaurant?.hours?.closed || 'Fermé'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social & Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gold font-heading mb-4">
                  {translations?.footer?.social?.title || 'Suivez-nous'}
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl transition-all duration-300 group border border-gray-700/50 ${link.color}`}
                      >
                        <Icon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-200" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              
              {/* Quick Navigation */}
              <div>
                <h3 className="text-xl font-bold text-gold font-heading mb-4">
                  {translations?.footer?.quickLinks?.title || 'Navigation Rapide'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link 
                          href={link.href}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-200 group border border-gray-800/50 hover:border-gold/30"
                        >
                          <Icon className="w-4 h-4 text-bronze group-hover:text-gold" />
                          <span className="text-sm text-gray-300 group-hover:text-white font-medium">
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Copyright et liens légaux */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-gray-800/60 mt-16 pt-8"
          >
            <div className="flex flex-col gap-4">
              {/* Liens légaux */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/politique-confidentialite"
                  className="text-gray-400 hover:text-gold transition-colors duration-200 underline"
                >
                  {translations?.footer?.legal?.privacy || 'Politique de confidentialité'}
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-gold transition-colors duration-200 underline"
                >
                  {translations?.footer?.legal?.terms || 'Mentions légales'}
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/licences-conformite"
                  className="text-gray-400 hover:text-gold transition-colors duration-200 underline"
                >
                  {translations?.footer?.quickLinks?.licenses || 'Licences & Conformité'}
                </Link>
                <span className="text-gray-600">•</span>
                <button 
                  onClick={() => {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }}
                  className="text-gray-400 hover:text-gold transition-colors duration-200 underline"
                >
                  Gestion des cookies
                </button>
              </div>
              
              {/* Copyright */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 opacity-80">
                  {translations?.footer?.legal?.rights || '© 2024 Bouillon16. Tous droits réservés.'}
                </p>
                <p className="text-xs text-gray-600 opacity-60">
                  {translations?.footer?.restaurant?.description || 'Une expérience culinaire unique authentique au cœur de Lachute'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
