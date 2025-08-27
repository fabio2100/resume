'use client';

import { Tooltip, Fab } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon
import { useThemeMode } from '@/app/contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <Tooltip 
      title={isDarkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      placement="left"
    >
      <Fab
        color="primary"
        size="medium"
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 80, // 16 (margen) + 48 (tamaño del botón de idioma) + 16 (espacio entre botones)
          zIndex: 1000,
        }}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </Fab>
    </Tooltip>
  );
}
