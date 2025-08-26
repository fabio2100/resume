'use client';

import { Box, Typography, Alert, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslations } from '@/app/hooks/useTranslations';

interface ErrorComponentProps {
  error: string;
  onRetry?: () => void;
}

export default function ErrorComponent({ error, onRetry }: ErrorComponentProps) {
  const { t } = useTranslations();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 2,
        p: 3
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, color: 'error.main' }} />
      
      <Alert severity="error" sx={{ maxWidth: 600 }}>
        <Typography variant="h6" gutterBottom>
          {t('errorLoading')}
        </Typography>
        <Typography variant="body2">
          {error}
        </Typography>
      </Alert>
      
      {onRetry && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onRetry}
          sx={{ mt: 2 }}
        >
          {t('retry')}
        </Button>
      )}
    </Box>
  );
}
