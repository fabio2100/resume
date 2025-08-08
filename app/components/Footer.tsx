// app/components/Footer.tsx
import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import resumeData from '@/app/data/resume.json';

export default function Footer() {
  const { perfiles, datosPersonales } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 3,
        textAlign: 'center'
      }}
    >
      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="center"
        mb={2}
      >
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
          aria-label="Facebook" 
          component="a" 
          href={perfiles.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          color="inherit" 
          aria-label="Instagram" 
          component="a" 
          href={perfiles.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {currentYear} {datosPersonales.nombre} | {datosPersonales.profesion}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, opacity: 0.6 }}>
        <Link 
          href={datosPersonales.sitioWeb} 
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
        >
          {datosPersonales.sitioWeb}
        </Link>
      </Typography>
    </Box>
  );
}

