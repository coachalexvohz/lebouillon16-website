
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Délai pour éviter l'affichage immédiat
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      preferences: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const customizeSettings = () => {
    setShowDetails(!showDetails);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 border-t border-gold/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            {/* Icône Cookie */}
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mt-1">
              <Cookie className="w-6 h-6 text-gold" />
            </div>

            {/* Contenu principal */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gold mb-2 font-heading">
                🍪 Gestion des cookies
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. 
                En continuant à naviguer, vous acceptez notre utilisation des cookies conformément à notre{' '}
                <Link 
                  href="/politique-confidentialite" 
                  className="text-gold hover:text-bronze transition-colors underline"
                >
                  politique de confidentialité
                </Link>.
              </p>

              {/* Détails des cookies */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 overflow-hidden"
                  >
                    <div className="bg-gray-800/50 rounded-lg p-4 space-y-3 border border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-bronze font-medium">Cookies nécessaires</h4>
                          <p className="text-gray-400 text-xs">Essentiels au fonctionnement du site</p>
                        </div>
                        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">Activé</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-bronze font-medium">Cookies analytiques</h4>
                          <p className="text-gray-400 text-xs">Pour comprendre l'utilisation du site</p>
                        </div>
                        <button className="bg-gold/20 text-gold text-xs px-2 py-1 rounded hover:bg-gold/30 transition-colors">
                          Configurable
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-bronze font-medium">Cookies de préférences</h4>
                          <p className="text-gray-400 text-xs">Pour mémoriser vos choix</p>
                        </div>
                        <button className="bg-gold/20 text-gold text-xs px-2 py-1 rounded hover:bg-gold/30 transition-colors">
                          Configurable
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Boutons d'action */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={acceptAll}
                  className="px-6 py-2 bg-gradient-to-r from-gold to-bronze hover:from-bronze hover:to-copper text-dark-primary font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Accepter tout
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={acceptNecessary}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-all duration-200 text-sm border border-gray-600"
                >
                  Nécessaires uniquement
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={customizeSettings}
                  className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-gray-800/50 text-gold border border-gold/30 hover:border-gold/50 rounded-lg transition-all duration-200 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  {showDetails ? 'Masquer' : 'Personnaliser'}
                </motion.button>
              </div>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={() => setShowBanner(false)}
              className="flex-shrink-0 w-8 h-8 bg-gray-800/50 hover:bg-gray-700/70 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
