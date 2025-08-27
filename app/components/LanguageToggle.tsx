'use client';

import { IconButton, Tooltip, Fab } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function LanguageToggle() {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <Tooltip 
      title={isEnglish ? "Cambiar a Español" : "Switch to English"}
      placement="left"
    >
      <Fab
        color="primary"
        size="medium"
        onClick={toggleLanguage}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <LanguageIcon />
      </Fab>
    </Tooltip>
  );
}
