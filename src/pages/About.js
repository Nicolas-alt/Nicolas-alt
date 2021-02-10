import React from 'react';
import { Link } from 'react-router-dom'

import CustomHelmet from '../components/CustomHelmet';
import TitlePage from '../components/TitlePage';
import movile from '../assets/svg/9.svg';
import logo from '../assets/svg/logo.svg'
import '../assets/sass/templates/About.scss';

const About = () => {
  return (
    <>
      <CustomHelmet
        titlePage="About Me"
        contentText="Un vistazo acerca de mi vida profesional."
        contentColor="#0545"
      />
      <section className="section--about">
        <TitlePage title="Resume" />
        <h2>About Me</h2>

        <img src={movile} className="about-img-desktop" alt="Movile" />
        
        {/* Only for short devices */}
        <img src={logo} className="about-img-movile" alt="logo" />
        <div className="div--text">
          <h3>I'm a web developer</h3>
          <p>
            Desarrollador front-end con React js, estudiante en una tecnología en desarrollo
            de software, apasionado por el desarrollo web. En sus ratos libres
            disfruta unas buenas partidas en Pubg. Me interesa el desarrollo de
            aplicaciones híbridas con JavaScript y Flutter
          </p>
          <Link to="/experience">
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
