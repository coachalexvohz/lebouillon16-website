
"use client";

import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from './button';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { locale, translations, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-amber-100 hover:text-white hover:bg-amber-800/20 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {translations.nav.languageSwitch}
        </span>
      </Button>
    </motion.div>
  );
}
