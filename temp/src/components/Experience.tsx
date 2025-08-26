// src/components/Experience.tsx
import { Box, Typography, Paper, Divider, Stack, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import resumeData from '@/data/resume.json';

export default function Experience() {
  const { experienciaLaboral } = resumeData;

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        Experiencia Laboral
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Stack spacing={3}>
        {experienciaLaboral.map((exp: any, index: number) => (
          <Paper 
            key={index} 
            elevation={1} 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              position: 'relative',
              pl: { md: 5 }
            }}
          >
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                left: -20,
                top: 20,
                width: 40,
                height: 40,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <WorkIcon />
            </Box>

            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 1 }}>
              {exp.puesto}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
              {exp.empresa}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {exp.fecha}
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
              Responsabilidades:
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              {exp.responsabilidades.map((resp: string, i: number) => (
                <Typography component="li" key={i} variant="body2">
                  {resp}
                </Typography>
              ))}
            </Box>

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
              Tecnologías:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {exp.tecnologias && exp.tecnologias.map((tech: string, i: number) => (
                <Chip 
                  key={i} 
                  label={tech} 
                  size="small" 
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
