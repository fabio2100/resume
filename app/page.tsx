'use client';

import { Container, Box, Paper } from '@mui/material';
import Header from '@/app/components/Header';
import Profile from '@/app/components/Profile';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Education from '@/app/components/Education';
import Languages from '@/app/components/Languages';
import Courses from '@/app/components/Courses';
import Portfolio from '@/app/components/Portfolio';
import Footer from '@/app/components/Footer';
import LoadingComponent from '@/app/components/LoadingComponent';
import ErrorComponent from '@/app/components/ErrorComponent';
import { useResumeData } from '@/app/hooks/useResumeData';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function Home() {
  const { data, loading, error } = useResumeData();
  const { t } = useTranslations();

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <LoadingComponent />
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ErrorComponent error={error || t('couldNotLoadData')} />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Header data={data} />
        
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Profile data={data} />
          <Skills data={data} />
          <Experience data={data} />
          <Education data={data} />
          <Languages data={data} />
          <Courses data={data} />
          <Portfolio data={data} />
        </Box>
        
        <Footer data={data} />
      </Paper>
    </Container>
  );
}
