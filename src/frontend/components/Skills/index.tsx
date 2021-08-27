import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import './skills.scss';

const Skills = () => {
  return (
    <section className='Skills' id='Skills'>
      <h2>Skils</h2>
      <div className='Skills__body'>
        <p>
          Me considero un desarrollador web full stack ya que tengo conocimientos para crear soluciones tanto en frontend como en backend.
          Mi principal enfoque es el desarrollo de aplicaciones web mediante el framework ReactJS y utilizando como guía de estilos al preprocesador sass pero sin dejar a un lado en manejo vanilla como HTML, CSS y Javascript.
          Puedo crear soluciones del lado del cliente como soluciones del lado del servidor
          Tambien puedo crear API&apos;s con NodeJS utilizando como backend a MongoDB
          Y siempre intento mantenerme actualizado en los temas de actualidad y estándares.
          Me sigo preparando mediante el estudio y la práctica.
        </p>
      </div>
      <div className='Skills__footer flex'>
        <div className='Skill--item'>
          <figure className='btn-primary'><FaReact /></figure>
          <p>ReactJS</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-primary'><FaSass /></figure>
          <p>SASS</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-primary'><FaNodeJs /></figure>
          <p>NodeJs</p>
        </div>
        <div className='Skill--item'>
          <figure className='btn-primary'><SiMongodb /></figure>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
