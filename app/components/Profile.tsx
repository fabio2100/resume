// app/components/Profile.tsx
'use client';

import { Box, Typography, Paper, Divider } from '@mui/material';
import { useTranslations } from '@/app/hooks/useTranslations';

interface ProfileProps {
  data: {
    datosPersonales: {
      acercaDeMi: {
        titulo: string;
        descripcion: string;
      };
    };
  };
}

export default function Profile({ data }: ProfileProps) {
  const { datosPersonales } = data;
  const { t } = useTranslations();

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {datosPersonales.acercaDeMi?.titulo || t('about')}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          bgcolor: 'transparent',
          borderRadius: 2 
        }}
      >
        <Typography variant="body1">{datosPersonales.acercaDeMi?.descripcion}</Typography>
      </Paper>
    </Box>
  );
}

