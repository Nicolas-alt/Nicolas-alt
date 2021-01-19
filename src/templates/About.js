import React from 'react';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/About.scss';
import CustomHelmet from '../components/CustomHelmet';
const About = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="About Me"
        contentText="Un vistazo acerca de mi vida profesional."
        contentColor="#0545"
      />
      <section className="section--about">
        <div>
          <span></span>
          <p>RESUME</p>
        </div>
        <div>
          <h2>I'm a web developer</h2>
          <p>
            Desarrollador front-end, estudiante en una tecnología en desarrollo
            de software, apasionado por el desarrollo web. En sus ratos libres
            disfruta unas buenas partidas en Pubg.
          </p>
        </div>
      </section>
    </Fade>
  );
};

export default About;
