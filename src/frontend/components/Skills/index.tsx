import React from 'react';
import { SiMongodb, SiNestjs } from 'react-icons/si';
import { PiPlanet } from 'react-icons/pi';
import { FaAngular, FaNodeJs, FaPython, FaReact, FaSass } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { Box, Typography } from 'eduli-ui';
import './skills.scss';

const Skills = () => {
  return (
    <Box component='section' className='Skills' id='Skills'>
      <Typography component='h3' variant='h4'>
        <Typography component='span'>
          <PiPlanet />
        </Typography>
        Habilidades
      </Typography>
      <Box className='Skills__body'>
        <Typography>
          Me considero un desarrollador web full stack ya que tengo
          conocimientos para crear soluciones tanto en frontend como en backend.
          Mi principal enfoque es el desarrollo de aplicaciones web mediante el
          framework ReactJS y utilizando como guía de estilos al preprocesador
          sass pero sin dejar a un lado en manejo vanilla como HTML, CSS y
          Javascript. Puedo crear soluciones del lado del cliente como
          soluciones del lado del servidor Tambien puedo crear API&apos;s con
          NodeJS utilizando como backend a MongoDB Y siempre intento mantenerme
          actualizado en los temas de actualidad y estándares. Me sigo
          preparando mediante el estudio y la práctica.
        </Typography>
      </Box>
      <Box className='Skills__footer flex'>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <FaReact />
          </Box>
          <Typography>ReactJS</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <FaSass />
          </Box>
          <Typography>SASS</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <FaNodeJs />
          </Box>
          <Typography>NodeJs</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <SiMongodb />
          </Box>
          <Typography>MongoDB</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <SiNestjs />
          </Box>
          <Typography>NestJS</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <FaAngular />
          </Box>
          <Typography>Angular</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <RiNextjsFill />
          </Box>
          <Typography>NextJS</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <BiLogoTypescript />
          </Box>
          <Typography>Typescript</Typography>
        </Box>
        <Box className='Skill--item'>
          <Box component='figure' className='btn-primary'>
            <FaPython />
          </Box>
          <Typography>Python</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
