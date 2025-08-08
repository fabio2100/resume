// app/components/Portfolio.tsx
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
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
import resumeData from '@/app/data/resume.json';

export default function Portfolio() {
  const { portfolio } = resumeData;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleOpenDialog = (project: any) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        Portfolio
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 3
      }}>
        {portfolio.map((project: any, index: number) => (
          <Card 
            key={index}
            elevation={2}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              height: '100%',
              borderRadius: 2,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {project.nombre}
              </Typography>
              
              <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {project.tecnologias.map((tech: string, i: number) => (
                  <Chip 
                    key={i} 
                    label={tech} 
                    size="small" 
                    variant="outlined"
                    color="secondary"
                    sx={{ mb: 0.5 }}
                  />
                ))}
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ 
                mb: 2, 
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {project.descripcion}
              </Typography>
            </CardContent>
            
            <CardActions sx={{ mt: 'auto', justifyContent: 'space-between', p: 2, pt: 0 }}>
              <Box>
                {project.urls && project.urls[0].urlRepositorio && (
                  <IconButton 
                    aria-label="GitHub" 
                    size="small"
                    href={project.urls[0].urlRepositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}
                
                {project.urls && project.urls[0].urlProyecto && (
                  <IconButton 
                    aria-label="Website" 
                    size="small"
                    href={project.urls[0].urlProyecto}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LanguageIcon fontSize="small" />
                  </IconButton>
                )}
                
                {project.urls && project.urls[0].urlVideo && (
                  <IconButton 
                    aria-label="Video" 
                    size="small"
                    href={project.urls[0].urlVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="error"
                  >
                    <YouTubeIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
              
              <Button 
                size="small" 
                variant="outlined"
                onClick={() => handleOpenDialog(project)}
              >
                Ver más
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      
      {/* Diálogo para ver detalles del proyecto */}
      {selectedProject && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ m: 0, p: 2 }}>
            {selectedProject.nombre}
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selectedProject.tecnologias.map((tech: string, i: number) => (
                <Chip 
                  key={i} 
                  label={tech} 
                  size="small" 
                  color="secondary"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
            
            <Typography gutterBottom variant="body1">
              {selectedProject.descripcion}
            </Typography>
            
            {selectedProject.urls && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Enlaces:
                </Typography>
                <Stack spacing={1}>
                  {selectedProject.urls[0].urlProyecto && (
                    <Link 
                      href={selectedProject.urls[0].urlProyecto}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <LanguageIcon sx={{ mr: 1 }} /> Ver Proyecto
                    </Link>
                  )}
                  
                  {selectedProject.urls[0].urlRepositorio && (
                    <Link 
                      href={selectedProject.urls[0].urlRepositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <GitHubIcon sx={{ mr: 1 }} /> Repositorio en GitHub
                    </Link>
                  )}
                  
                  {selectedProject.urls[0].urlVideo && (
                    <Link 
                      href={selectedProject.urls[0].urlVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <YouTubeIcon sx={{ mr: 1 }} /> Ver Video
                    </Link>
                  )}
                  
                  {selectedProject.urls[0].urlMincyt && (
                    <Link 
                      href={selectedProject.urls[0].urlMincyt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documento MinCyT
                    </Link>
                  )}
                  
                  {selectedProject.urls[0].urlArgentinaGob && (
                    <Link 
                      href={selectedProject.urls[0].urlArgentinaGob}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Artículo Argentina.gob.ar
                    </Link>
                  )}
                  
                  {selectedProject.urls[0].urlLaNacionDiario && (
                    <Link 
                      href={selectedProject.urls[0].urlLaNacionDiario}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Artículo La Nación
                    </Link>
                  )}
                </Stack>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

