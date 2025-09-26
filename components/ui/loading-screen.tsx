
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, UtensilsCrossed, ChefHat } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Timer principal pour cacher l'écran de chargement
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Attendre la fin de l'animation de fadeout
    }, 4000); // 4 secondes d'affichage pour apprécier l'animation

    return () => {
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary overflow-hidden"
        >
          {/* Particules d'arrière-plan */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
              // Positions déterministes pour éviter les erreurs d'hydratation
              const positions = [
                { left: 10, top: 15 }, { left: 25, top: 80 }, { left: 45, top: 25 }, { left: 65, top: 70 },
                { left: 85, top: 35 }, { left: 15, top: 60 }, { left: 35, top: 90 }, { left: 55, top: 10 },
                { left: 75, top: 55 }, { left: 95, top: 20 }, { left: 5, top: 45 }, { left: 90, top: 85 },
                { left: 70, top: 5 }, { left: 20, top: 75 }, { left: 40, top: 40 }, { left: 60, top: 95 },
                { left: 80, top: 65 }, { left: 30, top: 30 }, { left: 50, top: 85 }, { left: 12, top: 50 }
              ];
              
              const durations = [3, 4, 5, 3.5, 4.5, 3.8, 4.2, 3.3, 4.8, 3.7, 4.3, 3.9, 4.1, 3.6, 4.7, 3.4, 4.6, 3.2, 4.9, 3.1];
              const delays = [0, 0.5, 1, 1.5, 0.3, 0.8, 1.2, 0.2, 1.8, 0.7, 1.3, 0.9, 1.7, 0.4, 1.9, 0.6, 1.1, 1.6, 0.1, 1.4];
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gold/30 rounded-full"
                  style={{
                    left: `${positions[i].left}%`,
                    top: `${positions[i].top}%`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: durations[i],
                    repeat: Infinity,
                    delay: delays[i],
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>

          {/* Contenu central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            
            {/* Animation culinaire centrale */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative mb-12"
            >
              {/* Container principal avec rotation */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="relative w-48 h-48 flex items-center justify-center"
              >
                {/* Cercle central avec toque de chef */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-24 h-24 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center shadow-2xl border-4 border-warm-white/20"
                >
                  <ChefHat className="w-12 h-12 text-dark-primary drop-shadow-lg" />
                </motion.div>

                {/* Fourchettes animées - positions en cercle */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={`fork-${i}`}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(75px) rotate(-${angle}deg)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1], 
                      opacity: [0, 1, 0.8],
                      rotate: [0, 360, 720]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-bronze to-copper rounded-lg flex items-center justify-center shadow-lg">
                      <UtensilsCrossed className="w-5 h-5 text-warm-white" />
                    </div>
                  </motion.div>
                ))}

                {/* Coupes de vin - cercle extérieur */}
                {[30, 90, 150, 210, 270, 330].map((angle, i) => (
                  <motion.div
                    key={`wine-${i}`}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.3, 1],
                      opacity: [0, 0.9, 0.7],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2.5,
                      delay: 0.5 + i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-bronze to-copper rounded-full flex items-center justify-center shadow-xl border-2 border-gold/30">
                      <Wine className="w-6 h-6 text-warm-white" />
                    </div>
                  </motion.div>
                ))}

                {/* Plats élégants - positions intermédiaires */}
                {[15, 75, 135, 195, 255, 315].map((angle, i) => (
                  <motion.div
                    key={`plate-${i}`}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(125px) rotate(-${angle}deg)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.1, 1],
                      opacity: [0, 1, 0.8],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: 1 + i * 0.12,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-amber-500 rounded-full border-2 border-bronze shadow-lg">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-warm-white/80 to-warm-white/40"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Effets de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Titre élégant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-warm-white mb-2 font-heading text-glow-gold">
                Préparation de l'expérience culinaire
              </h2>
              <motion.div
                className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.div>

            {/* Points de chargement sophistiqués */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="flex items-center gap-3"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                >
                  <motion.div
                    className="w-2 h-2 bg-gold rounded-full"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 w-2 h-2 bg-bronze rounded-full"
                    animate={{
                      scale: [1, 2.2, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Message subtil */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="text-warm-gray-light text-sm mt-6 italic"
            >
              Un moment de patience pour une expérience d'exception...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
