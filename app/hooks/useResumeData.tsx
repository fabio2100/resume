'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ResumeData {
  datosPersonales: any;
  perfiles: any;
  habilidades: any;
  idiomas: any;
  cursos: any;
  experienciaLaboral: any;
  educacion: any;
  portfolio: any;
}

export const useResumeData = () => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        
        // Seleccionar la URL según el idioma
        const url = isEnglish 
          ? 'https://raw.githubusercontent.com/fabio2100/jsonpersonal/master/data-en.json'
          : 'https://raw.githubusercontent.com/fabio2100/jsonpersonal/master/data.json';
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const resumeData = await response.json();
        setData(resumeData);
        setError(null);
      } catch (err) {
        console.error('Error fetching resume data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        
        // Fallback a datos locales si falla la petición
        fetch('/resume.json')
          .then(response => response.json())
          .then(localData => {
            setData(localData as ResumeData);
          })
          .catch(localErr => {
            console.error('Error loading local fallback data:', localErr);
          });
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, [isEnglish]);

  return { data, loading, error };
};
