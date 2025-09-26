
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MicroInteractionProps {
  children: React.ReactNode;
  variant?: 'bubbles' | 'golden-drip' | 'sparkle';
  className?: string;
}

export function MicroInteraction({ 
  children, 
  variant = 'bubbles', 
  className = '' 
}: MicroInteractionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Génération des étincelles pour la variante sparkle
  const generateSparkles = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newSparkles = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
    }));
    setSparkles(newSparkles);
    
    setTimeout(() => setSparkles([]), 800);
  };

  useEffect(() => {
    if (isHovered && variant === 'sparkle') {
      generateSparkles();
    }
  }, [isHovered, variant]);

  const bubbleVariants = {
    initial: { opacity: 0, scale: 0, y: 20 },
    animate: { 
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0.8],
      y: [20, -10, -30],
      transition: { 
        duration: 0.8,
        times: [0, 0.5, 1],
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const goldDripVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { 
      scaleX: [0, 1, 0.8, 0],
      opacity: [0, 0.8, 0.4, 0],
      transition: { 
        duration: 0.9,
        times: [0, 0.3, 0.7, 1],
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0, rotate: 0 },
    animate: { 
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Bubbles Effect */}
      {variant === 'bubbles' && (
        <AnimatePresence>
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-br from-amber-300/40 to-amber-500/20 rounded-full blur-[0.5px]"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '20%',
                  }}
                  variants={bubbleVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      )}

      {/* Golden Drip Effect */}
      {variant === 'golden-drip' && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
              variants={goldDripVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-full h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 opacity-80 shadow-sm shadow-amber-300/50" />
              {/* Dripping effect */}
              <motion.div
                className="absolute top-full left-1/2 w-0.5 h-3 bg-gradient-to-b from-amber-400 to-transparent transform -translate-x-1/2"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  transition: { 
                    duration: 0.6,
                    delay: 0.3,
                    ease: "easeOut"
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Sparkle Effect */}
      {variant === 'sparkle' && (
        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute pointer-events-none"
              style={{
                left: sparkle.x,
                top: sparkle.y,
              }}
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                {/* Sparkle shape */}
                <div className="w-1.5 h-1.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45" />
                <div className="absolute inset-0 w-1.5 h-1.5 bg-gradient-to-br from-amber-200 to-amber-400 transform -rotate-45" />
                {/* Glow effect */}
                <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-300 blur-sm opacity-60" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}
