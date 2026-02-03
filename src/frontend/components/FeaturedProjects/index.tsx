import React from 'react';
import { Box, Typography } from 'eduli-ui';
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './FeaturedProjects.scss';

type ProjectKey = 'expediaParts' | 'stugy' | 'eduli';

const FeaturedProjects = () => {
  const { t } = useStateValue();

  const projectKeys: ProjectKey[] = ['expediaParts', 'stugy', 'eduli'];

  return (
    <Box component='section' className='FeaturedProjects' id='Projects'>
      <Box className='FeaturedProjects__header'>
        <Typography component='h3' variant='h4'>
          <Typography component='span'>
            <FaRocket />
          </Typography>
          {t.projects.title}
        </Typography>
        <Typography>{t.projects.subtitle}</Typography>
      </Box>

      <Box className='FeaturedProjects__grid'>
        {projectKeys.map((key) => {
          const project = t.projects.items[key];
          return (
            <Box key={key} className='FeaturedProjects__card'>
              <Box className='FeaturedProjects__card-header'>
                <Typography variant='h5' className='color-accent'>
                  {project.name}
                </Typography>
                <Typography variant='caption' className='FeaturedProjects__role'>
                  {project.role}
                </Typography>
                <Typography variant='caption' className='FeaturedProjects__period'>
                  {project.period}
                </Typography>
              </Box>

              <Box className='FeaturedProjects__card-body'>
                <Typography variant='body2'>{project.description}</Typography>

                <Typography variant='body2' className='FeaturedProjects__impact'>
                  <strong>📈 {t.experience.impact}:</strong> {project.impact}
                </Typography>

                <Box className='FeaturedProjects__tech'>
                  <Box className='FeaturedProjects__tech-section'>
                    <Typography variant='caption' className='FeaturedProjects__tech-title'>
                      💻 {t.projects.frontend}:
                    </Typography>
                    <Box className='FeaturedProjects__tech-tags'>
                      {project.techFrontend.map((tech, idx) => (
                        <span key={idx} className='FeaturedProjects__tag FeaturedProjects__tag--frontend'>
                          {tech}
                        </span>
                      ))}
                    </Box>
                  </Box>
                  <Box className='FeaturedProjects__tech-section'>
                    <Typography variant='caption' className='FeaturedProjects__tech-title'>
                      ⚙️ {t.projects.backend}:
                    </Typography>
                    <Box className='FeaturedProjects__tech-tags'>
                      {project.techBackend.map((tech, idx) => (
                        <span key={idx} className='FeaturedProjects__tag FeaturedProjects__tag--backend'>
                          {tech}
                        </span>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {project.url && (
                <Box className='FeaturedProjects__card-footer'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='FeaturedProjects__link'
                  >
                    <FaExternalLinkAlt />
                    {t.projects.viewSite}
                  </a>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
