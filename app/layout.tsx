'use client';

import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { ThemeProvider } from '@/app/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

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
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ fontFamily: inter.style.fontFamily }}>
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
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6W9EH5B21V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6W9EH5B21V');
          `}
        </Script>
      </body>
    </html>
  );
}
