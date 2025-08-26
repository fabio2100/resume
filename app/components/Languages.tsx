// app/components/Languages.tsx
'use client';

import { Box, Typography, Paper, Divider, Chip, Stack, Link } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useTranslations } from '@/app/hooks/useTranslations';

interface LanguagesProps {
  data: {
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
  };
}

export default function Languages({ data }: LanguagesProps) {
  const { idiomas } = data;
  const { t } = useTranslations();

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {idiomas.titulo || t('languages')}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          mb: 3
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LanguageIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="h3">
            {t('languages')}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {idiomas.lista.map((idioma: string, index: number) => (
            <Chip
              key={index}
              label={idioma}
              color="primary"
              variant="outlined"
              size="medium"
            />
          ))}
        </Box>

        <Box sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <WorkspacePremiumIcon color="secondary" sx={{ mr: 1 }} />
            <Typography variant="h6" component="h3">
              {t('englishCertifications')}
            </Typography>
          </Box>

          <Stack spacing={2}>
            {idiomas.cursosIngles.map((curso: any, index: number) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{ p: 2, borderRadius: 1 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {curso.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {curso.institucion} | {curso.fecha}
                </Typography>
                {curso.url && (
                  <Link 
                    href={curso.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="body2"
                    color="primary"
                  >
                    {t('viewCertificate')}
                  </Link>
                )}
              </Paper>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

