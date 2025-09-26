
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, locales, getTranslations, Translations } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>(getTranslations(defaultLocale));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag
    setIsClient(true);
    
    // Load saved language from localStorage only on client
    try {
      const savedLocale = localStorage.getItem('preferred-locale') as Locale;
      if (savedLocale && locales.includes(savedLocale)) {
        setLocaleState(savedLocale);
        setTranslations(getTranslations(savedLocale));
      }
    } catch (error) {
      console.error('Error loading saved locale:', error);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    try {
      setLocaleState(newLocale);
      setTranslations(getTranslations(newLocale));
      if (isClient) {
        localStorage.setItem('preferred-locale', newLocale);
      }
    } catch (error) {
      console.error('Error saving locale:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, translations, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
