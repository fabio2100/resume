import { Container, Box, Paper } from '@mui/material';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Courses from '@/components/Courses';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

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
