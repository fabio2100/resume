// app/components/Header.tsx
'use client';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Stack, 
  IconButton, 
  useTheme, 
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  Alert
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslations } from '@/app/hooks/useTranslations';

interface HeaderProps {
  data: {
    datosPersonales: {
      nombre: string;
      profesion: string;
      ocupacion: string;
      foto: string;
      telefono: string;
      email: string;
      direccion: string;
      sitioWeb: string;
      cvpdf: string;
    };
    perfiles: {
      linkedin: string;
      github: string;
    };
  };
}

export default function Header({ data }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { datosPersonales, perfiles } = data;
  const { t } = useTranslations();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEmail('');
    setMessage('');
  };

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_24zahca',
          template_id: 'template_wcq6rrs',
          template_params: {
            from_name: email,
            message: message,
            to_name: 'squizzato.fabio@gmail.com',
          },
          user_id: '41HCVHUcUyu9BI-vh',
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: t('emailSent'),
          severity: 'success'
        });
        handleCloseModal();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('emailError'),
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

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
          {datosPersonales.profesion} | {datosPersonales.ocupacion}
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
            onClick={handleOpenModal}
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
          <IconButton 
            color="inherit"
            aria-label="Descargar CV"
            component="a"
            href={datosPersonales.cvpdf}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Fabio_Squizzato.pdf"
            sx={{
              '&:hover': {
                animation: 'pulse 1s infinite',
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                  },
                },
              },
            }}
          >
            <PictureAsPdfIcon />
          </IconButton>
        </Stack>
      </Box>

      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle 
          component="div"
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 2
          }}
        >
          <Typography variant="h6" component="div">{t('contactMe')}</Typography>
          <IconButton onClick={handleCloseModal} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label={t('email')}
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              label={t('message')}
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button onClick={handleCloseModal} disabled={loading}>
            {t('cancel')}
          </Button>
          <LoadingButton
            onClick={handleSendEmail}
            loading={loading}
            variant="contained"
            disabled={!email || !message}
          >
            {t('send')}
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
