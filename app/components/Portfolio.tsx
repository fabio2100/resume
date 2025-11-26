// app/components/Portfolio.tsx
'use client';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  Chip, 
  Link, 
  Card, 
  CardContent, 
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslations } from '@/app/hooks/useTranslations';

interface PortfolioProps {
  data: {
    portfolio: {
      titulo: string;
      lista: Array<{
        nombre: string;
        tecnologias: string[];
        descripcion: string;
        urls: Array<{
          urlProyecto?: string;
          urlRepositorio?: string;
          urlVideo?: string;
          urlMincyt?: string;
          urlArgentinaGob?: string;
          urlLaNacionDiario?: string;
        }>;
      }>;
    };
  };
}

export default function Portfolio({ data }: PortfolioProps) {
  const { portfolio } = data;
  const { t } = useTranslations();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProps['data']['portfolio']['lista'][0] | null>(null);

  const handleOpenDialog = (project: PortfolioProps['data']['portfolio']['lista'][0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {portfolio.titulo || t('portfolio')}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 2
      }}>
        {portfolio.lista.map((project: PortfolioProps['data']['portfolio']['lista'][0], index: number) => (
          <Card 
            key={index}
            elevation={2}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                {project.nombre}
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                  {project.tecnologias.map((tech: string, techIndex: number) => (
                    <Chip 
                      key={techIndex} 
                      label={tech} 
                      size="small" 
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </Box>
              
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {project.descripcion}
              </Typography>
            </CardContent>

            <CardActions sx={{ p: 2, pt: 0 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {project.urls && project.urls.length > 0 && (
                  <>
                    {project.urls[0].urlProyecto && (
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<LanguageIcon />}
                        href={project.urls[0].urlProyecto}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('viewProject')}
                      </Button>
                    )}
                    
                    {project.urls[0].urlRepositorio && (
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={project.urls[0].urlRepositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('viewCode')}
                      </Button>
                    )}
                    
                    {project.urls[0].urlVideo && (
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<YouTubeIcon />}
                        href={project.urls[0].urlVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="error"
                      >
                        Video
                      </Button>
                    )}
                  </>
                )}
                
                <Button
                  size="small"
                  variant="text"
                  onClick={() => handleOpenDialog(project)}
                >
                  {t('viewMore')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Dialog para mostrar más detalles */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="h2">
                {selectedProject.nombre}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ mb: 2 }}>
                <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                  {selectedProject.tecnologias.map((tech: string, techIndex: number) => (
                    <Chip 
                      key={techIndex} 
                      label={tech} 
                      size="small" 
                      color="primary"
                      variant="filled"
                    />
                  ))}
                </Stack>
              </Box>
              
              <Typography variant="body1" paragraph>
                {selectedProject.descripcion}
              </Typography>
              
              {selectedProject.urls && selectedProject.urls.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {t('links')}:
                  </Typography>
                  <Stack spacing={1}>
                    {selectedProject.urls[0].urlProyecto && (
                      <Link href={selectedProject.urls[0].urlProyecto} target="_blank" rel="noopener noreferrer">
                        🌐 {t('liveProject')}
                      </Link>
                    )}
                    {selectedProject.urls[0].urlRepositorio && (
                      <Link href={selectedProject.urls[0].urlRepositorio} target="_blank" rel="noopener noreferrer">
                        📂 {t('githubRepository')}
                      </Link>
                    )}
                    {selectedProject.urls[0].urlVideo && (
                      <Link href={selectedProject.urls[0].urlVideo} target="_blank" rel="noopener noreferrer">
                        🎥 {t('viewVideo')}
                      </Link>
                    )}
                    {selectedProject.urls[0].urlMincyt && (
                      <Link href={selectedProject.urls[0].urlMincyt} target="_blank" rel="noopener noreferrer">
                        🏆 {t('mincytRecognition')}
                      </Link>
                    )}
                    {selectedProject.urls[0].urlArgentinaGob && (
                      <Link href={selectedProject.urls[0].urlArgentinaGob} target="_blank" rel="noopener noreferrer">
                        🏛️ {t('argentinaGov')}
                      </Link>
                    )}
                    {selectedProject.urls[0].urlLaNacionDiario && (
                      <Link href={selectedProject.urls[0].urlLaNacionDiario} target="_blank" rel="noopener noreferrer">
                        📰 {t('laNacion')}
                      </Link>
                    )}
                  </Stack>
                </Box>
              )}
            </DialogContent>
            
            <DialogActions>
              <Button onClick={handleCloseDialog}>
                {t('close')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
