// app/components/Skills.tsx
import { Box, Typography, Paper, Chip, Divider, Stack } from '@mui/material';
import resumeData from '@/app/data/resume.json';

export default function Skills() {
  const { habilidades } = resumeData;

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        Habilidades
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={3}
        sx={{ width: '100%' }}
      >
        {/* Hard Skills */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Paper 
            elevation={1} 
            sx={{ 
              p: 3, 
              height: '100%',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'primary.light',
              bgcolor: 'background.paper'
            }}
          >
            <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'primary.main' }}>
              {habilidades.hardSkills.titulo}
            </Typography>
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {habilidades.hardSkills.lista.map((skill: string, index: number) => (
                <Chip 
                  key={index} 
                  label={skill} 
                  color="primary" 
                  variant="outlined" 
                  size="medium"
                />
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary">
              {habilidades.hardSkills.descripcion}
            </Typography>
          </Paper>
        </Box>

        {/* Soft Skills */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Paper 
            elevation={1} 
            sx={{ 
              p: 3, 
              height: '100%',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'secondary.light',
              bgcolor: 'background.paper'
            }}
          >
            <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'secondary.main' }}>
              {habilidades.softSkills.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {habilidades.softSkills.descripcion}
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}

