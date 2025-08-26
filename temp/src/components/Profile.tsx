// src/components/Profile.tsx
import { Box, Typography, Paper, Divider } from '@mui/material';
import resumeData from '@/data/resume.json';

export default function Profile() {
  const { datosPersonales } = resumeData;

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        Acerca de mí
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="body1">{datosPersonales.acercaDeMi}</Typography>
      </Paper>
    </Box>
  );
}
