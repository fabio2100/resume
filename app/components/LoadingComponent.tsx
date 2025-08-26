'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function LoadingComponent() {
  const { t } = useTranslations();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 2
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" color="text.secondary">
        {t('loadingInfo')}
      </Typography>
    </Box>
  );
}
