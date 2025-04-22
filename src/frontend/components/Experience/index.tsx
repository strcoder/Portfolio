import React, { useState } from 'react';
import { Box, Button, Typography } from 'eduli-ui';
import { LiaSpaceShuttleSolid } from 'react-icons/lia';
import './Experience.scss';

const Experience = () => {
  const [showMoreInfo, setShowMoreInfo] = useState('');

  const handleShowMoreInfo = (info: string) => {
    setShowMoreInfo((prev) => (prev === info ? '' : info));
  };

  return (
    <Box>
      <Box component='section' className='Experience' id='Experience'>
        <Box className='Experience__header'>
          <Typography component='h3' variant='h4'>
            <Typography component='span'>
              <LiaSpaceShuttleSolid />
            </Typography>
            Experiencia
          </Typography>
          <Typography>
            He trabajado en proyectos como desarrollador frontend y backend,
            utilizando tecnologías como React, Node.js, NestJS y MongoDB.
          </Typography>
        </Box>
        <Box className='Experience__timeline'>
          <Box className={`lines ${showMoreInfo ? 'lines--active' : ''}`}>
            <Box className='dot' />
            <Box className='line' />
            {!showMoreInfo && (
              <>
                <Box className='dot' />
                <Box className='line' />
                <Box className='dot' />
                <Box className='line' />
                <Box className='dot' />
                <Box className='line' />
              </>
            )}
          </Box>
          {showMoreInfo === 'Aeromexico' && (
            <Box className='Experience__timeline--item'>
              <Typography variant='h5' className='color-accent'>
                Multiplica Talent (Aeroméxico)
              </Typography>
              <Typography variant='h6'>
                Technical Lead | Frontend Developer
              </Typography>
              <Typography variant='caption'>jul. 2022 - Actual</Typography>
              <Box className='Experience__timeline--item--description'>
                <Typography variant='body2'>
                  <Typography component='strong'>
                    💡 Rol y Responsabilidades:
                    {' '}
                  </Typography>
                  Desarrollo y optimización de la plataforma digital de
                  Aeroméxico utilizando React, Next.js, Redux, Zustand, Vite y
                  Webpack. Implementación de nuevas funcionalidades, solución
                  de bugs y mejora de la experiencia del usuario. Migración de
                  la plataforma hacia una arquitectura de microfrontends con
                  SSR, mejorando escalabilidad y mantenimiento. Liderazgo
                  técnico en el equipo frontend, definiendo tareas, revisando
                  código y asegurando buenas prácticas de desarrollo.
                  Colaboración en la implementación de un nuevo sistema de
                  diseño, estandarizando la UI/UX de toda la plataforma.
                  Trabajo con CI/CD y metodologías ágiles para optimizar
                  despliegues y ciclos de desarrollo.
                </Typography>
                <Typography variant='body2'>
                  <Typography component='strong'>🌎 Impacto: </Typography>
                  Contribuí a la modernización y optimización del sitio web de
                  Aeroméxico, mejorando rendimiento, accesibilidad y
                  usabilidad. Participé en la definición de estrategias
                  técnicas para la evolución de la plataforma, asegurando un
                  desarrollo más eficiente y escalable.
                </Typography>
              </Box>
              <Button
                variant='text'
                color='white'
                onClick={() => handleShowMoreInfo('Aeromexico')}
              >
                Ver menos
              </Button>
            </Box>
          )}
          {showMoreInfo === 'Cumplo' && (
            <Box className='Experience__timeline--item'>
              <Typography variant='h5' className='color-accent'>
                Cumplo
              </Typography>
              <Typography variant='h6'>Frontend developer</Typography>
              <Typography variant='caption'>
                oct. 2021 - jul. 2024 · 2 años 10 meses
              </Typography>
              <Box className='Experience__timeline--item--description'>
                <Typography variant='body2'>
                  <Typography component='strong'>
                    💡 Rol y Responsabilidades:
                    {' '}
                  </Typography>
                  Desarrollo de una plataforma de financiamiento para pequeñas
                  y medianas empresas, llevándola desde cero hasta una
                  solución completamente funcional. Implementación de React,
                  Redux, GraphQL, Node.js, Sass, AWS y Python en un monorepo
                  con CI/CD. Colaboración en la experiencia UI/UX, asegurando
                  una integración pixel-perfect con Figma. Desarrollo y
                  optimización de unit tests e integración para garantizar la
                  estabilidad y calidad del producto. Uso de la metodología
                  Shape Up combinada con Scrum, priorizando entregas
                  eficientes y bien estructuradas. desarrollo.
                </Typography>
                <Typography variant='body2'>
                  <Typography component='strong'>🌎 Impacto: </Typography>
                  Contribuí al crecimiento de la plataforma, optimizando su
                  rendimiento y escalabilidad. Implementé pruebas y procesos
                  de CI/CD, reduciendo los errores en producción y mejorando
                  la calidad del código. Trabajé en una arquitectura flexible
                  que permitió una integración más sencilla con otros
                  servicios y tecnologías.
                </Typography>
              </Box>
              <Button
                variant='text'
                color='white'
                onClick={() => handleShowMoreInfo('Cumplo')}
              >
                Ver menos
              </Button>
            </Box>
          )}
          {showMoreInfo === 'MonteDePiedad' && (
            <Box className='Experience__timeline--item'>
              <Typography variant='h5' className='color-accent'>
                Interware (Monte de piedad)
              </Typography>
              <Typography variant='h6'>React developer</Typography>
              <Typography variant='caption'>
                sep. 2021 - dic. 2021 · 4 meses
              </Typography>
              <Box className='Experience__timeline--item--description'>
                <Typography variant='body2'>
                  <Typography component='strong'>
                    💡 Rol y Responsabilidades:
                    {' '}
                  </Typography>
                  Desarrollo de plataformas para la la solicitud de prestamos
                  mediante un sistema de gestión de transacciones, asegurando
                  cumplimiento con los estándares tecnológicos de Monte de
                  Piedad. Trabajo con microfrontends y metodologías ágiles,
                  colaborando en un entorno ágil para la entrega de productos
                  escalables y eficientes.
                </Typography>
                <Typography variant='body2'>
                  <Typography component='strong'>🌎 Impacto: </Typography>
                  Se creo un sistema de gestión de transacciones que permite a
                  los usuarios solicitar prestamos de manera eficiente y
                  segura. Contribuí a la optimización de procesos dentro de
                  las plataformas, mejorando la eficiencia en la gestión de
                  transacciones. Implementé buenas prácticas en desarrollo
                  frontend, facilitando la mantenibilidad del código y
                  escalabilidad del producto.
                </Typography>
              </Box>
              <Button
                variant='text'
                color='white'
                onClick={() => handleShowMoreInfo('MonteDePiedad')}
              >
                Ver menos
              </Button>
            </Box>
          )}
          {showMoreInfo === 'BBVA' && (
            <Box className='Experience__timeline--item'>
              <Typography variant='h5' className='color-accent'>
                Sitdigital (BBVA)
              </Typography>
              <Typography variant='h6'>Frontend developer</Typography>
              <Typography variant='caption'>
                ene. 2020 - mar. 2020 · 7 meses
              </Typography>
              <Box className='Experience__timeline--item--description'>
                <Typography variant='body2'>
                  <Typography component='strong'>
                    💡 Rol y Responsabilidades:
                    {' '}
                  </Typography>
                  Desarrollo de plataformas para la gestión de transacciones
                  en empresas medianas y grandes, asegurando cumplimiento con
                  los estándares tecnológicos de BBVA. Implementación de
                  interfaces interactivas utilizando LitElement, Polymer,
                  Sass, HTML y JavaScript. Integración de sistemas bancarios
                  bajo la arquitectura definida por el banco, garantizando
                  compatibilidad y seguridad. Trabajo con la metodología
                  Scrum, colaborando en un entorno ágil para la entrega de
                  productos escalables y eficientes.
                </Typography>
                <Typography variant='body2'>
                  <Typography component='strong'>🌎 Impacto: </Typography>
                  Aseguré la correcta implementación del sistema de diseño de
                  BBVA, estandarizando componentes y experiencias. Contribuí a
                  la optimización de procesos dentro de las plataformas,
                  mejorando la eficiencia en la gestión de transacciones.
                  Implementé buenas prácticas en desarrollo frontend,
                  facilitando la mantenibilidad del código y escalabilidad del
                  producto.
                </Typography>
              </Box>
              <Button
                variant='text'
                color='white'
                onClick={() => handleShowMoreInfo('BBVA')}
              >
                Ver menos
              </Button>
            </Box>
          )}
          {!showMoreInfo && (
            <Box className='Experience__timeline--container'>
              <Button className='Experience__timeline--item' custom onClick={() => handleShowMoreInfo('Aeromexico')}>
                <Typography variant='h5' className='color-accent'>
                  Multiplica Talent (Aeroméxico)
                </Typography>
                <Typography variant='h6'>
                  Technical Lead | Frontend Developer
                </Typography>
                <Typography variant='caption'>jul. 2022 - Actual</Typography>
              </Button>
              <Button className='Experience__timeline--item' custom onClick={() => handleShowMoreInfo('Cumplo')}>
                <Typography variant='h5' className='color-accent'>
                  Cumplo
                </Typography>
                <Typography variant='h6'>Frontend developer</Typography>
                <Typography variant='caption'>
                  oct. 2021 - jul. 2024 · 2 años 10 meses
                </Typography>
              </Button>
              <Button className='Experience__timeline--item' custom onClick={() => handleShowMoreInfo('MonteDePiedad')}>
                <Typography variant='h5' className='color-accent'>
                  Interware (Monte de piedad)
                </Typography>
                <Typography variant='h6'>React developer</Typography>
                <Typography variant='caption'>
                  sep. 2021 - dic. 2021 · 4 meses
                </Typography>
              </Button>
              <Button className='Experience__timeline--item' custom onClick={() => handleShowMoreInfo('BBVA')}>
                <Typography variant='h5' className='color-accent'>
                  Sitdigital (BBVA)
                </Typography>
                <Typography variant='h6'>Frontend developer</Typography>
                <Typography variant='caption'>
                  ene. 2020 - mar. 2020 · 7 meses
                </Typography>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
