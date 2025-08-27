// app/components/Education.tsx
'use client';

import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslations } from '@/app/hooks/useTranslations';

interface EducationProps {
  data: {
    educacion: {
      titulo: string;
      lista: Array<{
        nombre: string;
        institucion: string;
        fecha: string;
        data?: string[];
      }>;
    };
  };
}

export default function Education({ data }: EducationProps) {
  const { educacion } = data;
  const { t } = useTranslations();

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {educacion.titulo || t('education')}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Stack spacing={3}>
        {educacion.lista.map((edu: { nombre: string; institucion: string; fecha: string; data?: string[] }, index: number) => (
          <Paper 
            key={index} 
            elevation={1} 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              position: 'relative',
              pl: { md: 5 }
            }}
          >
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                left: -20,
                top: 20,
                width: 40,
                height: 40,
                bgcolor: 'secondary.main',
                color: 'white',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SchoolIcon />
            </Box>

            <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 'bold', mb: 1 }}>
              {edu.nombre}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
              {edu.institucion}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {edu.fecha}
            </Typography>

            {edu.data && (
              <Box component="ul" sx={{ pl: 2 }}>
                {edu.data.map((item: string, i: number) => (
                  <Typography component="li" key={i} variant="body2">
                    {item}
                  </Typography>
                ))}
              </Box>
            )}
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

