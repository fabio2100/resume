// app/components/Skills.tsx
'use client';

import { Box, Typography, Paper, Chip, Divider, Stack } from '@mui/material';
import { useTranslations } from '@/app/hooks/useTranslations';

interface SkillsProps {
  data: {
    habilidades: {
      titulo: string;
      hardSkills: {
        titulo: string;
        lista: string[];
        descripcion: string[];
      };
      softSkills: {
        titulo: string;
        descripcion: string[];
      };
    };
  };
}

export default function Skills({ data }: SkillsProps) {
  const { habilidades } = data;
  const { t } = useTranslations();

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {habilidades.titulo || t('skills')}
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
            elevation={2} 
            sx={{ 
              p: 3, 
              height: '100%',
              borderRadius: 3,
              border: '2px solid',
              borderColor: 'primary.light',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                elevation: 4,
                borderColor: 'primary.main',
                transform: 'translateY(-2px)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #3f51b5, #5c6bc0)',
              }
            }}
          >
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontWeight: 'bold',
                position: 'relative',
                paddingBottom: 1,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '2px',
                  backgroundColor: 'primary.main',
                  borderRadius: 1
                }
              }}
            >
              {habilidades.hardSkills.titulo}
            </Typography>
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {habilidades.hardSkills.lista.filter((skill: string) => skill.trim() !== "").map((skill: string, index: number) => (
                <Chip 
                  key={index} 
                  label={skill} 
                  color="primary" 
                  variant="outlined" 
                  size="medium"
                />
              ))}
            </Box>
            <Box component="ul" sx={{ 
              pl: 2, 
              mb: 0,
              '& li': {
                position: 'relative',
                paddingLeft: 1,
                marginBottom: 1,
                '&::marker': {
                  color: 'primary.main',
                  fontSize: '1.2em'
                },
                '&::before': {
                  content: '"▶"',
                  position: 'absolute',
                  left: '-16px',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  fontSize: '0.8em'
                }
              },
              listStyleType: 'none'
            }}>
              {habilidades.hardSkills.descripcion.map((desc: string, index: number) => (
                <Typography 
                  component="li" 
                  key={index} 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    lineHeight: 1.6,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  {desc}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>

        {/* Soft Skills */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              height: '100%',
              borderRadius: 3,
              border: '2px solid',
              borderColor: 'secondary.light',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                elevation: 4,
                borderColor: 'secondary.main',
                transform: 'translateY(-2px)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #f50057, #ff4081)',
              }
            }}
          >
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                mb: 2, 
                color: 'secondary.main',
                fontWeight: 'bold',
                position: 'relative',
                paddingBottom: 1,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '2px',
                  backgroundColor: 'secondary.main',
                  borderRadius: 1
                }
              }}
            >
              {habilidades.softSkills.titulo}
            </Typography>
            <Box component="ul" sx={{ 
              pl: 2, 
              mb: 0,
              '& li': {
                position: 'relative',
                paddingLeft: 1,
                marginBottom: 1,
                '&::marker': {
                  color: 'secondary.main',
                  fontSize: '1.2em'
                },
                '&::before': {
                  content: '"✦"',
                  position: 'absolute',
                  left: '-16px',
                  color: 'secondary.main',
                  fontWeight: 'bold',
                  fontSize: '0.9em'
                }
              },
              listStyleType: 'none'
            }}>
              {habilidades.softSkills.descripcion.map((desc: string, index: number) => (
                <Typography 
                  component="li" 
                  key={index} 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    lineHeight: 1.6,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  {desc}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}

