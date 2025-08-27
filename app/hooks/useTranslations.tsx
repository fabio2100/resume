'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Botones y acciones
  viewProject: { es: 'Ver proyecto', en: 'View project' },
  viewCode: { es: 'Código', en: 'Code' },
  viewMore: { es: 'Ver más', en: 'View more' },
  viewCourse: { es: 'Ver curso', en: 'View course' },
  viewCertificate: { es: 'Ver certificado', en: 'View certificate' },
  retry: { es: 'Reintentar', en: 'Retry' },
  close: { es: 'Cerrar', en: 'Close' },
  cancel: { es: 'Cancelar', en: 'Cancel' },
  send: { es: 'Enviar', en: 'Send' },
  email: { es: 'Correo electrónico', en: 'Email' },
  message: { es: 'Mensaje', en: 'Message' },
  emailSent: { es: 'Correo enviado correctamente', en: 'Email sent successfully' },
  emailError: { es: 'Error al enviar el correo', en: 'Error sending email' },
  contactMe: { es: 'Contáctame', en: 'Contact me' },
  
  // Secciones
  responsibilities: { es: 'Responsabilidades', en: 'Responsibilities' },
  technologies: { es: 'Tecnologías', en: 'Technologies' },
  languages: { es: 'Idiomas', en: 'Languages' },
  englishCertifications: { es: 'Certificaciones de inglés', en: 'English certifications' },
  
  // Estados de carga
  loadingInfo: { es: 'Cargando información...', en: 'Loading information...' },
  errorLoading: { es: 'Error al cargar los datos', en: 'Error loading data' },
  couldNotLoadData: { es: 'No se pudieron cargar los datos', en: 'Could not load data' },
  
  // Títulos por defecto (fallbacks)
  about: { es: 'Acerca de mí', en: 'About me' },
  skills: { es: 'Habilidades', en: 'Skills' },
  workExperience: { es: 'Experiencia Laboral', en: 'Work Experience' },
  education: { es: 'Educación', en: 'Education' },
  coursesAndCertifications: { es: 'Cursos y Certificaciones', en: 'Courses and Certifications' },
  portfolio: { es: 'Portfolio', en: 'Portfolio' },
};

export const useTranslations = () => {
  const { isEnglish } = useLanguage();
  const language = isEnglish ? 'en' : 'es';

  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      const translation = translations[key];
      if (translation) {
        return translation[language as keyof typeof translation] || translation.es;
      }
      return fallback || key;
    };
  }, [language]);

  return { t, language };
};
