// app/components/Header.tsx
import { Box, Typography, Avatar, Stack, IconButton, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import resumeData from '@/app/data/resume.json';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { datosPersonales, perfiles } = resumeData;

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Avatar
        src={datosPersonales.foto}
        alt={datosPersonales.nombre}
        sx={{
          width: { xs: 120, md: 160 },
          height: { xs: 120, md: 160 },
          border: '4px solid white',
        }}
      />

      <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
          {datosPersonales.nombre}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 2, opacity: 0.9 }}>
          {datosPersonales.ocupacion}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
          {datosPersonales.direccion} | {datosPersonales.email} | {datosPersonales.telefono}
        </Typography>

        <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <IconButton 
            color="inherit" 
            aria-label="LinkedIn" 
            component="a" 
            href={perfiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            color="inherit" 
            aria-label="GitHub" 
            component="a" 
            href={perfiles.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton 
            color="inherit" 
            aria-label="Email" 
            component="a" 
            href={`mailto:${datosPersonales.email}`}
          >
            <EmailIcon />
          </IconButton>
          <IconButton 
            color="inherit" 
            aria-label="Sitio Web" 
            component="a" 
            href={datosPersonales.sitioWeb}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
