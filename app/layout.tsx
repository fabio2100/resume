import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Providers from '@/app/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fabio Squizzato | CV',
  description: 'Currículum de Fabio Squizzato - Software Developer',
  keywords: ['Fabio Squizzato', 'CV', 'Resume', 'Software Developer', 'Full Stack Developer'],
  authors: [{ name: 'Fabio Squizzato' }],
  openGraph: {
    title: 'Fabio Squizzato | CV',
    description: 'Currículum de Fabio Squizzato - Software Developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        
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
