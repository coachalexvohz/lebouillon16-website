
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { LanguageSwitcher } from './ui/language-switcher';
import { Button } from './ui/button';
import { MicroInteraction } from './ui/micro-interactions';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: translations?.nav?.home || 'Accueil', href: '/', animation: 'sparkle' as const },
    { name: translations?.nav?.about || 'À Propos', href: '/about', animation: 'bubbles' as const },
    { name: translations?.nav?.services || 'Offre & Services', href: '/services', animation: 'golden-drip' as const },
    { name: translations?.nav?.menu || 'Menu', href: '/menu', animation: 'sparkle' as const },
    { name: translations?.nav?.gallery || 'Galerie', href: '/gallery', animation: 'bubbles' as const },
    { name: 'Témoignages', href: '/temoignages', animation: 'golden-drip' as const },
    { name: translations?.nav?.faq || 'FAQ', href: '/faq', animation: 'sparkle' as const },
    { name: translations?.nav?.contact || 'Contact', href: '/contact', animation: 'bubbles' as const },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-black/80 backdrop-blur-md shadow-2xl border-b border-amber-300/20" 
            : "bg-gradient-to-b from-black/60 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Name */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="flex flex-col items-start"
              >
                <div className="text-3xl md:text-4xl font-bold brand-title group-hover:scale-105 transition-transform duration-300">
                  LeBouillon16
                </div>
                <div className="brand-subtitle text-sm hidden md:block">
                  Restaurant Gastronomique
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                      "hover:bg-amber-600/10 hover:text-amber-200",
                      pathname === item.href
                        ? "text-amber-300 bg-amber-600/20"
                        : "text-gray-200"
                    )}
                  >
                    <motion.span 
                      className="relative z-10"
                      whileHover={{ 
                        textShadow: "0 0 8px rgba(251, 191, 36, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Enhanced hover effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-600/20 to-amber-400/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ 
                        opacity: 1, 
                        scale: 1,
                        boxShadow: "0 0 20px rgba(251, 191, 36, 0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Active page indicator with enhanced animation */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{ boxShadow: "0 0 10px rgba(251, 191, 36, 0.5)" }}
                      />
                    )}
                    
                    {/* Subtle sparkle effect on hover (desktop) */}
                    <motion.div
                      className="absolute top-1 right-1 w-1 h-1 bg-amber-300 rounded-full opacity-0"
                      animate={pathname === item.href ? { 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      } : {}}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              {/* Language Switcher in Desktop */}
              <div className="ml-6 pl-6 border-l border-gray-600">
                <LanguageSwitcher />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <LanguageSwitcher />
              
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-200 hover:text-amber-200 hover:bg-amber-600/10 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black shadow-2xl z-50 border-l border-amber-300/20"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-amber-300/20 bg-gradient-to-r from-amber-600/10 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold brand-title">
                      LeBouillon16
                    </h3>
                    <span className="brand-subtitle text-xs">
                      Restaurant Gastronomique
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-200 hover:text-amber-200 hover:bg-amber-600/10 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="py-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MicroInteraction 
                      variant={item.animation}
                      className="block"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-6 py-4 text-lg font-medium transition-all duration-300 border-l-2 border-transparent",
                          "hover:bg-amber-600/10 hover:border-amber-300 hover:text-amber-200",
                          "group relative",
                          pathname === item.href
                            ? "text-amber-300 bg-amber-600/20 border-amber-300"
                            : "text-gray-200"
                        )}
                      >
                        <span className="flex items-center gap-3 relative z-10">
                          <motion.span 
                            className="w-2 h-2 rounded-full bg-current opacity-60"
                            whileHover={{ 
                              scale: 1.3, 
                              opacity: 0.9,
                              boxShadow: "0 0 8px currentColor"
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative">
                            {item.name}
                            {/* Subtle text glow on hover */}
                            <motion.span
                              className="absolute inset-0 text-amber-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                              style={{ filter: 'blur(1px)' }}
                            >
                              {item.name}
                            </motion.span>
                          </span>
                        </span>
                        
                        {/* Enhanced hover background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-amber-500/10 to-amber-600/5 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </MicroInteraction>
                  </motion.div>
                ))}
              </nav>
              
              {/* Mobile Footer */}
              <div className="absolute bottom-6 left-6 right-6 pt-6 border-t border-amber-300/20">
                <p className="text-sm text-gray-400 text-center">
                  Une expérience culinaire d&apos;exception
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
