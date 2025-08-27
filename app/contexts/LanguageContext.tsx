'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  isEnglish: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Detectar el idioma del navegador al montar el componente
    const userLanguage = navigator.language || navigator.languages?.[0] || 'es';
    setIsEnglish(userLanguage.toLowerCase().startsWith('en'));
  }, []);

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
