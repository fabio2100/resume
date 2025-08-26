'use client';

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        
        // Detectar el idioma del navegador
        const userLanguage = navigator.language || navigator.languages[0];
        const isEnglish = userLanguage.toLowerCase().startsWith('en');
        
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
        try {
          const localData = await import('@/app/data/resume.json');
          setData(localData.default as ResumeData);
        } catch (localErr) {
          console.error('Error loading local fallback data:', localErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  return { data, loading, error };
};
