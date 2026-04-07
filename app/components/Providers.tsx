'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { ThemeProvider } from '@/app/contexts/ThemeContext';

// Creando un tema personalizado
const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#fff' : '#1e1e1e',
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>
        {({ isDarkMode }) => (
          <MuiThemeProvider theme={getTheme(isDarkMode ? 'dark' : 'light')}>
            <LanguageProvider>
              <CssBaseline />
              {children}
              <div id="portal-root" />
            </LanguageProvider>
          </MuiThemeProvider>
        )}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
