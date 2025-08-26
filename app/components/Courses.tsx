// app/components/Courses.tsx
'use client';

import { Box, Typography, Paper, Divider, Link, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslations } from '@/app/hooks/useTranslations';

interface CoursesProps {
  data: {
    cursos: {
      titulo: string;
      lista: Array<{
        nombre: string;
        lugar: string;
        url?: string;
      }>;
    };
  };
}

export default function Courses({ data }: CoursesProps) {
  const { cursos } = data;
  const { t } = useTranslations();

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {cursos.titulo || t('coursesAndCertifications')}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 2
      }}>
        {cursos.lista.map((curso: any, index: number) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <SchoolIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {curso.nombre}
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {curso.lugar}
            </Typography>
            
            <Box sx={{ mt: 'auto' }}>
              {curso.url && (
                <Link
                  href={curso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.875rem'
                  }}
                >
                  {t('viewCourse')} <OpenInNewIcon sx={{ ml: 0.5, fontSize: 16 }} />
                </Link>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

