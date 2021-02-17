import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import './skills.scss';

const Skills = () => {
  return (
    <section className='Skills' id='Skills'>
      <h2>Skils</h2>
      <div className='flex'>
        <div className='Skill--item'>
          <figure className='btn-soft'><FaReact /></figure>
          <p>ReactJS</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-soft'><FaSass /></figure>
          <p>SASS</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-soft'><FaNodeJs /></figure>
          <p>NodeJs</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-soft'><SiMongodb /></figure>
          <p>MongoDB</p>
        </div>
      </div>
      <div className='Skills__body'>
        <p>
          Me considero un desarrollador web full stack ya que tengo conocimientos para crear soluciones tanto en frontend como en backend.
          Mi principal enfoque es el desarrollo de aplicaciones web mediante el framework ReactJS y utilizando como guía de estilos al preprocesador sass pero sin dejar a un lado en manejo vanilla como HTML, CSS y Javascript.
          Puedo crear soluciones del lado del cliente como soluciones del lado del servidor
          Tambien puedo crear API&apos;s con NodeJS utilizando como backend a MongoDB
          Y siempre intento mantenerme actualizado en los temas de actualidad y estándares.
          Me sigo preparando mediante el estudio y la práctica.
        </p>
        <div className='flex'>
          <div className=''>
            <p><strong>Tecnologías frontend que más empleo</strong></p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>ReactJS</li>
              <li>Webpack</li>
              <li>Esbuild</li>
              <li>SASS</li>
              <li>NodeJS</li>
              <li>Eslint</li>
              <li>Git y Github</li>
            </ul>
          </div>
          <div className=''>
            <p><strong>Tecnologías backend que más empleo</strong></p>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Passport</li>
              <li>JWT</li>
              <li>MongoDB</li>
              <li>Git y Github</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
