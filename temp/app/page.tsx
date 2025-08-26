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

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Header />
        
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Profile />
          <Skills />
          <Experience />
          <Education />
          <Languages />
          <Courses />
          <Portfolio />
        </Box>
        
        <Footer />
      </Paper>
    </Container>
  );
}
