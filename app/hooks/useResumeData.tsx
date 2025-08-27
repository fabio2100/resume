'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ResumeData {
  datosPersonales: {
    nombre: string;
    fechaNacimiento: string;
    telefono: string;
    email: string;
    direccion: string;
    sitioWeb: string;
    profesion: string;
    ocupacion: string;
    cvpdf: string;
    foto: string;
    acercaDeMi: {
      titulo: string;
      descripcion: string;
    };
  };
  perfiles: {
    linkedin: string;
    github: string;
    w3Schools: string;
    facebook: string;
    instagram: string;
    matlab: string;
  };
  habilidades: {
    titulo: string;
    hardSkills: {
      titulo: string;
      lista: string[];
      descripcion: string[];
    };
    softSkills: {
      titulo: string;
      descripcion: string[];
    };
  };
  idiomas: {
    titulo: string;
    lista: string[];
    cursosIngles: Array<{
      nombre: string;
      institucion: string;
      fecha: string;
      url?: string;
    }>;
  };
  cursos: {
    titulo: string;
    lista: Array<{
      nombre: string;
      lugar: string;
      url?: string;
    }>;
  };
  experienciaLaboral: {
    titulo: string;
    lista: Array<{
      puesto: string;
      empresa: string;
      fecha: string;
      responsabilidades: string[];
      tecnologias?: string[];
    }>;
  };
  educacion: {
    titulo: string;
    lista: Array<{
      nombre: string;
      institucion: string;
      fecha: string;
      data?: string[];
    }>;
  };
  portfolio: {
    titulo: string;
    lista: Array<{
      nombre: string;
      tecnologias: string[];
      descripcion: string;
      urls: Array<{
        urlProyecto?: string;
        urlRepositorio?: string;
        urlVideo?: string;
        urlMincyt?: string;
        urlArgentinaGob?: string;
        urlLaNacionDiario?: string;
      }>;
    }>;
  };
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
